type Action = ({
    setAudioSrc,
    setErrorMessage,
    setRandomPhrase,
    getRandomPhrase
}) => Promise<any>;
const GOOGLE: Action = async ({ 
    setAudioSrc,
    setErrorMessage,
    setRandomPhrase,
    getRandomPhrase
 }) => {
    const phrase = getRandomPhrase();
    setRandomPhrase(phrase);

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
        throw new Error(`Error with the Text-to-Speech API: ${response.statusText}`);
      }

      const responseData = await response.json();
      const audioContent = responseData.audioContent;
      const audioBase64 = `data:audio/mp3;base64,${audioContent}`;
      setAudioSrc(audioBase64);
    } catch (error) {
      setErrorMessage("Failed to load audio. Please try again later.");
    }
  };

const ELEVENLABS: Action = async ({
    setAudioSrc,
    setErrorMessage,
    setRandomPhrase,
    getRandomPhrase
}) => {
    const phrase = getRandomPhrase();
    setRandomPhrase(phrase);
    try {
      const options = {
        method: "POST",
        headers: {
          "xi-api-key": process.env.ELEVENLABS_API_KEY!,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: phrase,
          voice_settings: {
            stability: 1,
            similarity_boost: 1,
          },
        }),
      };

      const response = await fetch(
        "https://api.elevenlabs.io/v1/text-to-speech/iP95p4xoKVk53GoZ742B",
        options
      );

      if (!response.ok) {
        setErrorMessage("Failed to fetch the audio.");
        console.error("Failed to fetch the audio");
        return null;
      }

      const audioBlob = await response.blob();
      const audioUrl = URL.createObjectURL(audioBlob);

      setAudioSrc(audioUrl);
      return audioUrl;
    } catch (error) {
      setErrorMessage("Error fetching the audio");
      console.error("Error fetching audio:", error);
      return null;
    }
};

const NATIVE: Action = async ({
    setAudioSrc,
    setErrorMessage,
    setRandomPhrase,
    getRandomPhrase
  }) => {
    const phrase = getRandomPhrase();
    setRandomPhrase(phrase);
  };
export const ACTIONS = {
    GOOGLE,
    ELEVENLABS,
    NATIVE
}