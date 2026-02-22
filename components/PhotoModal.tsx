'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface PhotoModalProps {
  day: {
    id: number;
    name: string;
    symbol: string;
  };
  onClose: () => void;
}

const dayContent: Record<
  string,
  { quote: string; image: string }
> = {
  'Rose Day': {
    quote: 'Every rose reminds me of your beautiful smile.',
    image: '/images/animated_photo.jpg',
  },
  'Propose Day': {
    quote: 'I choose you today, tomorrow and forever.',
    image: '/images/IMG_1702.jpg',
  },
  'Chocolate Day': {
    quote: 'Life is sweeter because you are in it.',
    image: '/images/IMG_9012.jpg',
  },
  'Teddy Day': {
    quote: 'A hug in the form of a teddy, just for you.',
    image: '/images/IMG_1909.jpg',
  },
  'Promise Day': {
    quote: 'I promise to love you endlessly.',
    image: '/images/IMG_2775.jpg',
  },
  'Hug Day': {
    quote: 'Your hug is my safest place.',
    image: '/images/IMG_2544.jpg',
  },
  'Kiss Day': {
    quote: 'A kiss that speaks a thousand emotions.',
    image: '/images/IMG_8875.jpg',
  },
};

/* 🎵 SONG MAPPING */
const daySongs: Record<string, string> = {
  'Rose Day': '/musics/rose.mp3',
  'Propose Day': '/musics/propose.mp3',
  'Chocolate Day': '/musics/chocolate.mp3',
  'Teddy Day': '/musics/teddy.mp3',
  'Promise Day': '/musics/promise.mp3',
  'Hug Day': '/musics/hug.mp3',
  'Kiss Day': '/musics/kiss.mp3',
};

export default function PhotoModal({ day, onClose }: PhotoModalProps) {
  const content = dayContent[day.name];
  const audioRef = useRef<HTMLAudioElement | null>(null);

  /* 🎵 PLAY SONG WHEN MODAL OPENS */
  useEffect(() => {
    const song = daySongs[day.name];

    if (song) {
      const audio = new Audio(song);
      audio.loop = true;
      audio.volume = 0.6; // adjustable
      audioRef.current = audio;

      audio.play().catch(() => {
        console.log('Autoplay blocked until interaction');
      });
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [day.name]);

  if (!content) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-amber-50 rounded-xl max-w-lg w-full shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-amber-50 p-5 flex justify-between items-center">
          <h2 className="text-xl font-bold">{day.name}</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:opacity-80"
          >
            ✕
          </button>
        </div>

        {/* Image */}
        <div className="w-full max-h-[70vh] flex justify-center bg-black">
          <Image
            src={content.image}
            alt={day.name}
            width={800}
            height={1000}
            className="object-contain max-h-[70vh] w-auto"
          />
        </div>

        {/* Quote */}
        <div className="p-6 text-center">
          <p className="text-lg text-amber-900 italic">
            "{content.quote}"
          </p>
        </div>

        {/* Footer */}
        <div className="p-4 bg-amber-100">
          <button
            onClick={onClose}
            className="w-full py-2 bg-amber-900 text-amber-50 rounded-lg font-semibold hover:bg-amber-800 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
