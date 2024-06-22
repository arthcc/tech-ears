import { useEffect, useRef, useState } from "react"
import { GiTurtle } from 'react-icons/gi';
import { FaPlay } from 'react-icons/fa';

export const AudioButton = ({ src }: { src: string }) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [audioSrc, setAudioSrc] = useState(src);

    useEffect(() => {
        setAudioSrc(src);
    }, [src]);

    const audioRef = useRef<HTMLAudioElement>();

    function play(playRate: number) {
        audioRef.current.playbackRate = playRate;

        if (isPlaying) {
            audioRef.current.currentTime = 0;
            return;
        }

        audioRef.current.play();
        setIsPlaying(true);
    }

    return (
        <section className="flex flex-row gap-4 w-full justify-center">
            <button
                onClick={() => play(1)}
                className="bg-blue-500 w-20 h-20 rounded-md hover:bg-blue-600 flex justify-center items-center"
            >
                <FaPlay size={20} />
            </button>

            <button
                onClick={() => play(0.5)}
                className="bg-blue-500 w-20 h-20 rounded-md hover:bg-blue-600 flex justify-center items-center"
            >
                <GiTurtle size={30} />
            </button>

            <audio
                src={audioSrc}
                ref={audioRef}
                onEnded={() => setIsPlaying(false)}
                style={{ display: "none" }}
            />
        </section>
    )
}