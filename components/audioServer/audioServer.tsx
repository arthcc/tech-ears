'use client'

import { useQuery } from "@tanstack/react-query";

const phrases = {
    backEnd: [
      "Optimizing database queries for performance.",
      "Implementing RESTful APIs for seamless integration.",
      "Ensuring secure authentication and authorization.",
      "Refactoring legacy code for better maintainability.",
      "Scaling the server infrastructure for high traffic.",
      "Automating deployment with CI/CD pipelines.",
      "Monitoring server health with logging and alerts.",
      "Managing microservices with container orchestration.",
      "Integrating third-party services via APIs.",
      "Handling data migrations with minimal downtime."
    ],
    frontEnd: [
      "Building responsive UIs with modern frameworks.",
      "Enhancing user experience with intuitive designs.",
      "Debugging front-end issues with browser dev tools.",
      "Implementing state management for complex apps.",
      "Optimizing load times with code splitting.",
      "Ensuring cross-browser compatibility.",
      "Using CSS preprocessors for better styling.",
      "Integrating front-end with back-end APIs.",
      "Creating interactive components with JavaScript.",
      "Testing UI components for consistency."
    ],
    softSkills: [
      "Communicating effectively with team members.",
      "Collaborating on code reviews for quality assurance.",
      "Managing time efficiently to meet deadlines.",
      "Adapting to new technologies and tools.",
      "Providing constructive feedback during meetings.",
      "Prioritizing tasks based on project goals.",
      "Mentoring junior developers to foster growth.",
      "Resolving conflicts with a positive attitude.",
      "Documenting code and processes for clarity.",
      "Balancing work and life for overall well-being."
    ]
  };

  const getRandomPhrase = () => {
    const categories = Object.keys(phrases);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const phrasesInCategory = phrases[randomCategory];
    const randomPhrase = phrasesInCategory[Math.floor(Math.random() * phrasesInCategory.length)];
    return randomPhrase;
  };


const fetchAudio =  async () => {
    const text = getRandomPhrase();
    const options = {
        method: 'POST',
        headers: {
            'xi-api-key': process.env.ELEVENLABS_API_KEY,
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
