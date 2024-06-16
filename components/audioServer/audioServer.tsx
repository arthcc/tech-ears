'use client'

import { useQuery } from "@tanstack/react-query";

export const AudioServer = ({ audioBlob }) => {
    const { data }: any = useQuery({ queryKey: ['audio'], queryFn: audioBlob })

    if(!data?.audioUrl?.length) return null;

    return  (
        <audio controls className="w-full mb-6">
        <source src={data?.audioUrl} type="audio/mpeg" />
        Your browser does not support the audio element.
        </audio>
    );
}
