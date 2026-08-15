const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.post('/api/chat', async (req, res) => {
  try {
    const { prompt, livro, capitulo } = req.body || {};
    if (!prompt || typeof prompt !== 'string' || !prompt.trim()) {
      return res.status(400).json({ error: 'Por favor, informe uma pergunta ou tema de pesquisa bíblica.' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        error: 'Chave de API do Gemini (GEMINI_API_KEY) não configurada no ambiente.',
        needConfig: true
      });
    }

    const { GoogleGenAI } = require('@google/genai');
    const ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    let contextInfo = '';
    if (livro) {
      contextInfo = `Contexto bíblico do usuário: Livro de ${livro}${capitulo ? ', Capítulo ' + capitulo : ''}.\n`;
    }

    const systemInstruction = `Você é o Assistente Virtual e Teológico do Ministério 50+ da Igreja Batista Redenção.
Sua missão é responder perguntas, conduzir estudos bíblicos, explicar o contexto histórico, literário e teológico das Escrituras Sagradas, além de fornecer aplicações práticas e edificantes para a vida cristã de irmãos e irmãs na fé, com carinho pastoral, clareza, fidelidade bíblica e respeito à doutrina batista histórica.

Diretrizes de resposta:
- Responda em português claro, acolhedor, objetivo e bem estruturado.
- Use parágrafos bem espaçados, tópicos quando apropriado (bullet points) e destaque referências bíblicas.
- O público inclui pessoas com 50 anos ou mais: priorize excelente legibilidade, linguagem respeitosa, rica em ensinamento e livre de jargões técnicos herméticos sem explicação prévia.
- Traga versículos de apoio com referências bíblicas claras.
- Finalize com uma breve palavra de incentivo pastoral, fé ou conselho prático.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.7-flash',
      contents: `${contextInfo}Pergunta do leitor: ${prompt.trim()}`,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const answer = response.text || 'Não foi possível gerar a resposta neste momento.';
    return res.json({ answer });
  } catch (error) {
    console.error('Erro na API de Chat:', error);
    return res.status(500).json({
      error: 'Ocorreu uma falha temporária ao consultar a IA.',
      details: error.message
    });
  }
});

app.get(['/chat', '/chat.html', '/estudo', '/estudo.html', '/pesquisa'], (req, res) => {
  res.sendFile(path.join(__dirname, 'chat.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
