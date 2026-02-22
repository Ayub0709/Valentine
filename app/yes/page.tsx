'use client';

import FloatingPhotos from '@/components/FloatingPhotos';
import { useEffect, useRef, useState } from 'react';

const photos = [
  { id: 1, image: '/images/animated_photo.jpg', label: 'Rose Day' },
  { id: 2, image: '/images/IMG_1702.jpg', label: 'Propose Day' },
  { id: 3, image: '/images/IMG_9012.jpg', label: 'Chocolate Day' },
  { id: 4, image: '/images/IMG_1909.jpg', label: 'Teddy Day' },
  { id: 5, image: '/images/IMG_2775.jpg', label: 'Promise Day' },
  { id: 6, image: '/images/IMG_2544.jpg', label: 'Hug Day' },
  { id: 7, image: '/images/IMG_8875.jpg', label: 'Kiss Day' },
];

export default function YesPage() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [giftOpened, setGiftOpened] = useState(false);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background */}
      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animated-bg {
          background: linear-gradient(
            -45deg,
            #ff9a9e,
            #fad0c4,
            #fbc2eb,
            #a18cd1,
            #ff758c
          );
          background-size: 400% 400%;
          animation: gradientMove 15s ease infinite;
        }

        .slide-in-up {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes rotate {
          0% {
            transform: rotateZ(0deg);
          }
          100% {
            transform: rotateZ(360deg);
          }
        }

        @keyframes giftOpen {
          0% {
            opacity: 1;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.5);
          }
        }

        .bounce {
          animation: bounce 1.5s ease-in-out infinite;
        }

        .gift-open {
          animation: giftOpen 0.8s ease-out forwards;
        }

        .content-fade-in {
          animation: slideInUp 0.8s ease-out forwards;
        }

        .gradient-text-1 {
          background: linear-gradient(135deg, #ff006e, #ff4d94, #ffb3d9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-2 {
          background: linear-gradient(135deg, #ff006e, #fb5607, #ffb500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-3 {
          background: linear-gradient(135deg, #fb5607, #ffb500, #8338ec);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-4 {
          background: linear-gradient(135deg, #3a86ff, #8338ec, #ff006e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-5 {
          background: linear-gradient(135deg, #06ffa5, #ffb500, #ff006e);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Background */}
      <div className="animated-bg absolute inset-0 -z-10"></div>

      {/* Floating Photos Background */}
      <FloatingPhotos photos={photos} />

      {/* Main Content */}
      <div className="relative z-20 w-full min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Confetti-like Decorations */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl opacity-20 shimmer"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `shimmer 2s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              {['❤️', '💕', '✨', '🎉', '💗'][i % 5]}
            </div>
          ))}
        </div>

        {/* Gift Box Section */}
        {!giftOpened && (
          <div className="flex flex-col items-center justify-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-black gradient-text-1 drop-shadow-lg slide-in-up">
              I have a gift for you!
            </h1>
            
            {/* Gift Box */}
            <button
              onClick={() => setGiftOpened(true)}
              className="gift-box relative w-48 h-48 md:w-64 md:h-64 cursor-pointer focus:outline-none group"
            >
              {/* Gift Box - Red base */}
              <div className="absolute inset-0 bounce">
                {/* Main box */}
                <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-2xl flex items-center justify-center">
                  {/* Ribbon - Vertical */}
                  <div className="absolute w-16 h-full bg-gradient-to-b from-yellow-300 to-yellow-400 opacity-90"></div>
                  
                  {/* Ribbon - Horizontal */}
                  <div className="absolute h-16 w-full bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-90"></div>
                  
                  {/* Bow */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative w-24 h-20">
                      {/* Left bow */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-full shadow-lg"></div>
                      {/* Right bow */}
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-10 bg-gradient-to-bl from-yellow-300 to-yellow-500 rounded-full shadow-lg"></div>
                      {/* Center knot */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-600 rounded-full shadow-md"></div>
                    </div>
                  </div>

                  {/* Heart decorations on box */}
                  <div className="absolute top-8 left-8 text-3xl animate-bounce">❤️</div>
                  <div className="absolute top-8 right-8 text-3xl animate-bounce" style={{ animationDelay: '0.2s' }}>❤️</div>
                  <div className="absolute bottom-8 left-8 text-3xl animate-bounce" style={{ animationDelay: '0.4s' }}>❤️</div>
                  <div className="absolute bottom-8 right-8 text-3xl animate-bounce" style={{ animationDelay: '0.6s' }}>❤️</div>

                  {/* Click text */}
                  <span className="absolute font-bold text-lg drop-shadow-lg group-hover:scale-110 transition-transform gradient-text-2">
                    Click me!
                  </span>
                </div>
              </div>
            </button>

            <p className="text-xl gradient-text-3 drop-shadow-md animate-pulse">
              Click the gift box to open
            </p>
          </div>
        )}

        {/* Container for content */}
        {giftOpened && (
          <div className="max-w-4xl w-full space-y-12 content-fade-in">
          {/* Header Section */}
          <div className="slide-in-up text-center backdrop-blur-xl bg-white/20 border border-white/30 rounded-3xl p-12 shadow-2xl">
            <h1 className="text-6xl md:text-7xl font-black gradient-text-2 drop-shadow-lg mb-4 scale-in">
              YES! 💕
            </h1>
            <p className="text-2xl md:text-3xl gradient-text-3 font-light drop-shadow-md">
              You make me the happiest person alive
            </p>
            <p className="text-lg gradient-text-4 mt-4 drop-shadow-md">
              Here are the moments that matter to me...
            </p>
          </div>

          {/* Video Section */}
          <div
            className="scale-in"
            style={{ animationDelay: '0.2s' }}
          >
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-2xl font-bold gradient-text-5 mb-6 drop-shadow-md">
                Our Special Video 🎬
              </h2>
              <div className="bg-black rounded-xl overflow-hidden shadow-lg">
                <video
                  ref={videoRef}
                  controls
                  onLoadedData={() => setIsVideoLoaded(true)}
                  className="w-full aspect-video bg-gray-900 rounded-lg"
                  playsInline
                  autoPlay
                  muted
                >
                  <source src="/video/Valentine.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>



          {/* Message Section */}
          <div
            className="scale-in"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="backdrop-blur-xl bg-white/20 border border-white/30 rounded-2xl p-12 shadow-2xl text-center">
              <p className="text-xl md:text-2xl gradient-text-1 font-light leading-relaxed drop-shadow-md">
                Every moment with you is a treasure. Every memory we create is
                priceless. Thank you for being my Valentine and for filling my
                life with love, laughter, and endless joy.
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div
            className="scale-in flex justify-center"
            style={{ animationDelay: '0.8s' }}
          >
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-white/30 text-white font-bold rounded-xl hover:bg-white/50 transition-all duration-300 shadow-lg border border-white/40 backdrop-blur-sm hover:scale-110 text-lg"
            >
              ← Back
            </button>
          </div>
          </div>
        )}
      </div>
    </div>
  );
}
