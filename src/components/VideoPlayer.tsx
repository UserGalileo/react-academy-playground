import { useEffect, useRef, useState } from 'react';

export interface VideoPlayerProps {
  src: string;
  isPlaying: boolean;
}

// useEffect dependencies
// 1- [isPlaying] -> L'effetto si esegue se isPlaying cambia
// 2- no array -> L'effetto si esegue dopo ogni rendering
// 3- array vuoto -> L'effetto si esegue solo la prima volta

// Comparison with classes
// componentDidMount -> useEffect(..., []);
// componentDidUpdate -> useEffect(..., [prop1, prop2]);
// componentWillUnmount -> useEffect(..., []) cleanup function
export function VideoPlayer({ src, isPlaying }: VideoPlayerProps) {

  const ref = useRef<HTMLVideoElement | null>(null);
  const isFirstTimeRef = useRef(true);

  useEffect(() => {
    if (isPlaying) {
      ref.current?.play();
      console.log('played')
    } else {
      ref.current?.pause();
      console.log('stopped');
    }
  }, [isPlaying]);

  useEffect(() => {
    if (isFirstTimeRef.current) {
      isFirstTimeRef.current = false;
    } else {
      console.log('Il video è cambiato!')
    }
  }, [src])

  return <>
    <video ref={ref} src={src} loop playsInline style={{ width: 300 }} />
  </>
}
