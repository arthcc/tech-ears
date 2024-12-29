"use server";

export async function textToSpeechAction(phrase: string) {
  try {
    const data = {
      input: { text: phrase },
      voice: { languageCode: "en-US", ssmlGender: "MALE" },
      audioConfig: { audioEncoding: "MP3" }
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    const apiKey = process.env.GOOGLE_API_KEY;

    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`,
      options
    );

    if (!response.ok) {
      throw new Error(
        `Error with the Text-to-Speech API: ${response.statusText}`
      );
    }

    const responseData = await response.json();
    const audioContent = responseData.audioContent;
    return `data:audio/mp3;base64,${audioContent}`;
  } catch (error) {
    throw new Error("Failed to load audio. Please try again later.");
  }
}
