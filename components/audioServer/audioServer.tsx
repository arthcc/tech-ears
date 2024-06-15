'use client'

import { useQuery } from "@tanstack/react-query";

const fetchAudio =  async () => {
    const options = {
        method: 'POST',
        headers: {
            'xi-api-key': process.env.ELEVENLABS_API_KEY,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: "Hello how can I help you today",
            voice_settings: {
                stability: 1,
                similarity_boost: 1
            }
        })
    };
    const response = await fetch('https://api.elevenlabs.io/v1/text-to-speech/iP95p4xoKVk53GoZ742B', options);

    if (!response.ok) {
        console.error('Failed to fetch the audio');
        return;
    }

    const audioBlob = await response.blob()
    const audioUrl = URL.createObjectURL(audioBlob);
    return { audioUrl };
}

export const AudioServer = () => {
    const { data } = useQuery({ queryKey: ['audio'], queryFn: fetchAudio })

    if(!data?.audioUrl?.length) return null;

    return  (
        <audio controls className="w-full mb-6">
        <source src={data?.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
    );
}