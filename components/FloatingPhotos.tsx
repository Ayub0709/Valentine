'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface FloatingPhoto {
  id: number;
  image: string;
  label: string;
}

interface FloatingPhotosProps {
  photos: FloatingPhoto[];
}

export default function FloatingPhotos({ photos }: FloatingPhotosProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate random animation properties for each photo
  const generateAnimationStyle = (index: number) => {
    const randomDuration = 25 + Math.random() * 25; // 25-50s
    const randomDelay = Math.random() * 5; // 0-5s delay
    const randomStartX = Math.random() * 100; // 0-100% horizontal
    const randomStartY = Math.random() * 100; // 0-100% vertical
    const randomRotation = (Math.random() - 0.5) * 30; // -15 to 15 degrees
    const randomSize = 70 + Math.random() * 60; // 70-130px

    return {
      '--duration': `${randomDuration}s`,
      '--delay': `${randomDelay}s`,
      '--start-x': `${randomStartX}%`,
      '--start-y': `${randomStartY}%`,
      '--rotation': `${randomRotation}deg`,
      '--size': `${randomSize}px`,
    } as React.CSSProperties;
  };

  if (!mounted) return null;

  return (
    <>
      <style jsx>{`
        @keyframes floatAround {
          0% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.6;
          }
          25% {
            transform: translate(20px, -30px) rotate(var(--rotation));
            opacity: 0.75;
          }
          50% {
            transform: translate(-15px, 20px) rotate(calc(var(--rotation) * -1));
            opacity: 0.85;
          }
          75% {
            transform: translate(25px, -10px) rotate(var(--rotation));
            opacity: 0.75;
          }
          100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.6;
          }
        }

        .floating-photo {
          position: fixed;
          width: var(--size);
          height: var(--size);
          left: var(--start-x);
          top: var(--start-y);
          animation: floatAround var(--duration) ease-in-out infinite;
          animation-delay: var(--delay);
          pointer-events: none;
          z-index: 0;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          border: 2px solid rgba(255, 255, 255, 0.3);
          backdrop-filter: blur(4px);
        }

        .floating-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>

      {photos.map((photo, index) => (
        <div
          key={photo.id}
          className="floating-photo"
          style={generateAnimationStyle(index)}
        >
          <Image
            src={photo.image}
            alt={photo.label}
            width={200}
            height={200}
            quality={75}
            priority={false}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </>
  );
}
