'use client';

import { useState, useEffect } from "react";

export const AudioServer = () => {

    const [audioSrc, setAudioSrc] = useState('');
    const [errorIndices, setErrorIndices] = useState([]);
    const fetchAudio = async (text) => {
      const options = {
        method: 'POST',
        headers: {
          'xi-api-key': 'sk_27456abd3761652a63725f63ce3c3e950f89137d85cd72c6', // Replace with your actual API key
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text,
          voice_settings: {
            stability: 1,
            similarity_boost: 1
          }
        })
      };
  
      try {
        const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/iP95p4xoKVk53GoZ742B', options);
        
        if (!response.ok) {
          console.error('Failed to fetch the audio');
          return;
        }
  
        const audioBlob = await response.blob()
        const audioUrl = URL.createObjectURL(audioBlob);
       ;
        setAudioSrc(audioUrl);
      } catch (error) {
        console.error('An error occurred while fetching the audio', error);
      }
    };
  
    useEffect(() => {
      fetchAudio("hello how can i help you today hi hi hi? ");
    }, []);

    return  (
        <>  {
            audioSrc && (
                <audio controls className="w-full mb-6">
                <source src={audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
                </audio>
            )
            }
            </>
    );
}