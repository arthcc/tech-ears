

import axios from 'axios';
import fs from 'fs';
import path from 'path';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { text } = req.body;

      // Fazendo a requisição para a API do OpenAI
      const response = await axios.post(
        'https://api.openai.com/v1/audio/speech',
        {
          model: 'tts-1',
          input: text,
          voice: 'alloy',
        },
        {
          headers: {
            Authorization: `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
          responseType: 'arraybuffer',
        }
      );

      const buffer = Buffer.from(response.data);
      const fileName = `speech-${Date.now()}.mp3`;
      const audioPath = path.join(process.cwd(), 'public', fileName);

      await fs.promises.writeFile(audioPath, buffer);
      res.status(200).json({ url: `/${fileName}` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to generate audio' });
    }
  } else {
    res.status(405).end(); 
  }
}
