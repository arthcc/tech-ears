export const useAudioBrowser = () => {
  const getAudio = async (phrase: string) => {
    try {
      const synthesis = new SpeechSynthesisUtterance(phrase);
      synthesis.lang = "en-US";
      return synthesis;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getAudio
  };
};
