"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ChevronLeft, Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import ErrorMessage from '@/components/messageError/error-message';

export default function PlayerPage() {
  const { theme, setTheme } = useTheme();
  const [audioUrl, setAudioUrl] = useState<string>();
  const [error, setError] = useState<string>();

  const textToConvert = 'Today is a wonderful day to build something people love!';

  /**
   * Fetch audio URL on component mount
   */
  useEffect(() => {
    const fetchAudio = async () => {
      try {
        const response = await fetch('/api/generate-audio', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ text: textToConvert }),
        });

        if (response.ok) {
          const data = await response.json();
          setAudioUrl(data.url);
          setError('');
        } else {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to generate audio');
        }
      } catch (err) {
        setError('Failed to generate audio');
      }
    };

    fetchAudio();
  }, []);

  const handleCloseError = () => {
    setError('');
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-gray-100 dark:bg-gray-900 w-full fixed top-0 z-10">
        <div className="container mx-auto flex items-center justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme('light')}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('dark')}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme('system')}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="absolute top-0 left-0 m-4">
          <Button variant="outline" size="icon" onClick={handleClick}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>
      </header>
      <div className="flex flex-col items-center w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <h4 className="mb-6 text-xl tracking-tight">
          Listen to the automatically generated audio below.
        </h4>
        {audioUrl ? (
          <audio controls className="w-full mb-6">
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        ) : (
          <p>Loading audio...</p>
        )}
        {error && <ErrorMessage message={error} onClose={handleCloseError} />}
      </div>
    </main>
  );
}

const handleClick = () => {
  window.location.href = 'http://localhost:3000';
};