'use client';

import { CSSProperties } from 'react';

interface DaySymbolProps {
  symbol: string;
}

const shimmerStyle: CSSProperties = {
  animation: 'shimmer 2s infinite',
  filter: 'drop-shadow(0 0 10px rgba(236, 72, 153, 0.6))',
};

export default function DaySymbol({ symbol }: DaySymbolProps) {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%, 100% { opacity: 1; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.8; transform: scale(1.1) rotate(5deg); }
        }
        
        @keyframes bounce-glow {
          0%, 100% { transform: translateY(0) scale(1); filter: drop-shadow(0 0 8px rgba(236, 72, 153, 0.8)); }
          50% { transform: translateY(-10px) scale(1.05); filter: drop-shadow(0 0 15px rgba(236, 72, 153, 1)); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        .symbol-container {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <div className="symbol-container w-24 h-24 flex items-center justify-center">
        {symbol === 'rose' && (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={shimmerStyle}
          >
            <defs>
              <linearGradient id="roseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1493" />
                <stop offset="100%" stopColor="#c41e3a" />
              </linearGradient>
            </defs>
            {/* Rose petals */}
            <circle cx="50" cy="35" r="12" fill="url(#roseGradient)" />
            <circle cx="40" cy="40" r="10" fill="#ff1493" />
            <circle cx="60" cy="40" r="10" fill="#ff1493" />
            <circle cx="35" cy="50" r="10" fill="#ff69b4" />
            <circle cx="65" cy="50" r="10" fill="#ff69b4" />
            <circle cx="50" cy="55" r="11" fill="url(#roseGradient)" />
            {/* Stem */}
            <path d="M 50 55 Q 48 70 50 85" stroke="#228b22" strokeWidth="3" fill="none" />
            {/* Leaves */}
            <ellipse cx="42" cy="65" rx="6" ry="10" fill="#228b22" transform="rotate(-45 42 65)" />
            <ellipse cx="58" cy="70" rx="6" ry="10" fill="#32a84a" transform="rotate(45 58 70)" />
          </svg>
        )}

        {symbol === 'ring' && (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={shimmerStyle}
          >
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffd700" />
                <stop offset="100%" stopColor="#ffed4e" />
              </linearGradient>
            </defs>
            {/* Ring */}
            <circle cx="50" cy="60" r="25" fill="none" stroke="url(#goldGradient)" strokeWidth="4" />
            {/* Diamond */}
            <circle cx="50" cy="30" r="8" fill="#e0e7ff" />
            <circle cx="50" cy="30" r="6" fill="#f0f7ff" />
            {/* Diamond shine */}
            <line x1="48" y1="28" x2="52" y2="32" stroke="#ffffff" strokeWidth="1" />
          </svg>
        )}

        {symbol === 'chocolate' && (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={shimmerStyle}
          >
            <defs>
              <linearGradient id="chocoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B4513" />
                <stop offset="100%" stopColor="#654321" />
              </linearGradient>
            </defs>
            {/* Chocolate bar */}
            <rect x="25" y="20" width="50" height="60" rx="3" fill="url(#chocoGradient)" />
            {/* Chocolate squares */}
            <line x1="35" y1="20" x2="35" y2="80" stroke="#5c3317" strokeWidth="1" />
            <line x1="45" y1="20" x2="45" y2="80" stroke="#5c3317" strokeWidth="1" />
            <line x1="55" y1="20" x2="55" y2="80" stroke="#5c3317" strokeWidth="1" />
            <line x1="65" y1="20" x2="65" y2="80" stroke="#5c3317" strokeWidth="1" />
            <line x1="25" y1="35" x2="75" y2="35" stroke="#5c3317" strokeWidth="1" />
            <line x1="25" y1="50" x2="75" y2="50" stroke="#5c3317" strokeWidth="1" />
            <line x1="25" y1="65" x2="75" y2="65" stroke="#5c3317" strokeWidth="1" />
            {/* Shine */}
            <ellipse cx="38" cy="40" rx="4" ry="6" fill="#a0522d" opacity="0.6" />
          </svg>
        )}

        {symbol === 'teddy' && (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={shimmerStyle}
          >
            {/* Body */}
            <circle cx="50" cy="55" r="18" fill="#D4A574" />
            {/* Head */}
            <circle cx="50" cy="30" r="15" fill="#D4A574" />
            {/* Ears */}
            <circle cx="38" cy="18" r="7" fill="#D4A574" />
            <circle cx="62" cy="18" r="7" fill="#D4A574" />
            {/* Ear inner */}
            <circle cx="38" cy="18" r="4" fill="#C19A6B" />
            <circle cx="62" cy="18" r="4" fill="#C19A6B" />
            {/* Eyes */}
            <circle cx="45" cy="28" r="2" fill="#000" />
            <circle cx="55" cy="28" r="2" fill="#000" />
            {/* Nose */}
            <ellipse cx="50" cy="34" rx="2.5" ry="2" fill="#8B4513" />
            {/* Arms */}
            <circle cx="35" cy="50" r="6" fill="#D4A574" />
            <circle cx="65" cy="50" r="6" fill="#D4A574" />
            {/* Belly */}
            <ellipse cx="50" cy="58" rx="10" ry="12" fill="#E6C9A8" />
            {/* Feet */}
            <circle cx="42" cy="70" r="6" fill="#D4A574" />
            <circle cx="58" cy="70" r="6" fill="#D4A574" />
          </svg>
        )}

        {symbol === 'heart' && (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={shimmerStyle}
          >
            <defs>
              <linearGradient id="handshakeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff69b4" />
                <stop offset="100%" stopColor="#ff1493" />
              </linearGradient>
            </defs>
            {/* Left arm */}
            <path d="M10,40 Q30,35 45,45" stroke="url(#handshakeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* Right arm */}
            <path d="M90,40 Q70,35 55,45" stroke="url(#handshakeGradient)" strokeWidth="6" fill="none" strokeLinecap="round" />
            {/* Left hand */}
            <circle cx="40" cy="50" r="8" fill="url(#handshakeGradient)" />
            {/* Right hand */}
            <circle cx="60" cy="50" r="8" fill="url(#handshakeGradient)" />
            {/* Clasped hands connection */}
            <path d="M45,50 L55,50" stroke="url(#handshakeGradient)" strokeWidth="5" strokeLinecap="round" />
            {/* Shine effect */}
            <ellipse cx="50" cy="40" rx="10" ry="6" fill="#ffffff" opacity="0.4" />
          </svg>
        )}

        {symbol === 'hug' && (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={shimmerStyle}
          >
            {/* Left figure */}
            <circle cx="30" cy="25" r="8" fill="#FFB6C1" />
            <rect x="24" y="35" width="12" height="20" rx="2" fill="#FFB6C1" />
            <circle cx="22" cy="50" r="4" fill="#FFB6C1" />
            <circle cx="38" cy="50" r="4" fill="#FFB6C1" />
            {/* Right figure */}
            <circle cx="70" cy="25" r="8" fill="#FFB6C1" />
            <rect x="64" y="35" width="12" height="20" rx="2" fill="#FFB6C1" />
            <circle cx="62" cy="50" r="4" fill="#FFB6C1" />
            <circle cx="78" cy="50" r="4" fill="#FFB6C1" />
            {/* Hug arms */}
            <path d="M 36 40 Q 50 45 64 40" stroke="#FF69B4" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M 36 48 Q 50 50 64 48" stroke="#FF69B4" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Heart between them */}
            <path d="M50,65 C45,62 40,65 40,70 C40,75 45,80 50,85 C55,80 60,75 60,70 C60,65 55,62 50,65 Z" fill="#FF1493" />
          </svg>
        )}

        {symbol === 'kiss' && (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={shimmerStyle}
          >
            <defs>
              <linearGradient id="lipsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff69b4" />
                <stop offset="100%" stopColor="#ff1493" />
              </linearGradient>
            </defs>
            {/* Upper lip - left side */}
            <path
              d="M20,45 Q35,35 50,38 Q65,35 80,45 Q65,48 50,48 Q35,48 20,45 Z"
              fill="url(#lipsGradient)"
            />
            {/* Lower lip - left side */}
            <path
              d="M20,55 Q35,65 50,62 Q65,65 80,55 Q65,52 50,52 Q35,52 20,55 Z"
              fill="#ff1493"
            />
            {/* Mouth separation line */}
            <path
              d="M30,50 Q50,55 70,50"
              stroke="#d41e63"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
            {/* Upper lip shine */}
            <ellipse cx="50" cy="42" rx="15" ry="4" fill="#ff99cc" opacity="0.6" />
            {/* Lower lip shine */}
            <ellipse cx="50" cy="60" rx="12" ry="3" fill="#ffb3d9" opacity="0.5" />
            {/* Corner highlights */}
            <ellipse cx="35" cy="48" rx="3" ry="2" fill="#ffffff" opacity="0.6" />
            <ellipse cx="65" cy="48" rx="3" ry="2" fill="#ffffff" opacity="0.6" />
          </svg>
        )}

        {symbol === 'valentine' && (
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            style={shimmerStyle}
          >
            <defs>
              <linearGradient id="valGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff1493" />
                <stop offset="50%" stopColor="#ff69b4" />
                <stop offset="100%" stopColor="#c41e3a" />
              </linearGradient>
            </defs>
            {/* Main heart */}
            <path
              d="M50,85 C20,65 10,50 10,38 C10,25 20,15 30,15 C38,15 45,22 50,28 C55,22 62,15 70,15 C80,15 90,25 90,38 C90,50 80,65 50,85 Z"
              fill="url(#valGradient)"
            />
            {/* Smaller hearts around */}
            <path
              d="M30,50 C25,47 22,50 22,54 C22,58 25,62 30,65 C35,62 38,58 38,54 C38,50 35,47 30,50 Z"
              fill="#ffffff"
              opacity="0.8"
            />
            <path
              d="M70,50 C65,47 62,50 62,54 C62,58 65,62 70,65 C75,62 78,58 78,54 C78,50 75,47 70,50 Z"
              fill="#ffffff"
              opacity="0.8"
            />
          </svg>
        )}
      </div>
    </>
  );
}
