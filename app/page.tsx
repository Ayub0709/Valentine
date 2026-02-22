'use client';

import { useRef, useState, useEffect } from 'react';
import DayCard from '@/components/DayCard';
import PhotoModal from '@/components/PhotoModal';

const days = [
  { id: 1, name: 'Rose Day', symbol: 'rose', date: 'Feb 7' },
  { id: 2, name: 'Propose Day', symbol: 'ring', date: 'Feb 8' },
  { id: 3, name: 'Chocolate Day', symbol: 'chocolate', date: 'Feb 9' },
  { id: 4, name: 'Teddy Day', symbol: 'teddy', date: 'Feb 10' },
  { id: 5, name: 'Promise Day', symbol: 'heart', date: 'Feb 11' },
  { id: 6, name: 'Hug Day', symbol: 'hug', date: 'Feb 12' },
  { id: 7, name: 'Kiss Day', symbol: 'kiss', date: 'Feb 13' },
];

const dayColors = [
  // Rose Day - Deep Rose
  {
    bg: 'bg-rose-100',
    border: 'border-rose-200',
    text: 'text-rose-900',
    subtext: 'text-rose-700',
  },
  // Propose Day - Royal Purple
  {
    bg: 'bg-purple-100',
    border: 'border-purple-200',
    text: 'text-purple-900',
    subtext: 'text-purple-700',
  },
  // Chocolate Day - Brown
  {
    bg: 'bg-amber-100',
    border: 'border-amber-200',
    text: 'text-amber-900',
    subtext: 'text-amber-700',
  },
  // Teddy Day - Orange/Warmth
  {
    bg: 'bg-orange-100',
    border: 'border-orange-200',
    text: 'text-orange-900',
    subtext: 'text-orange-700',
  },
  // Promise Day - Red/Love
  {
    bg: 'bg-red-100',
    border: 'border-red-200',
    text: 'text-red-900',
    subtext: 'text-red-700',
  },
  // Hug Day - Pink/Warmth
  {
    bg: 'bg-pink-100',
    border: 'border-pink-200',
    text: 'text-pink-900',
    subtext: 'text-pink-700',
  },
  // Kiss Day - Coral/Romance
  {
    bg: 'bg-fuchsia-100',
    border: 'border-fuchsia-200',
    text: 'text-fuchsia-900',
    subtext: 'text-fuchsia-700',
  },
];

export default function Home() {
  const noButtonRef = useRef<HTMLButtonElement | null>(null);
  const yesButtonRef = useRef<HTMLButtonElement | null>(null);

  const [selectedDay, setSelectedDay] =
    useState<typeof days[0] | null>(null);

  const [noButtonPos, setNoButtonPos] =
    useState<{ x: number; y: number } | null>(null);
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

  const [floatingItems, setFloatingItems] = useState<any[]>([]);

  // Floating items
  useEffect(() => {
    const items = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${6 + Math.random() * 6}s`,
      size: `${20 + Math.random() * 40}px`,
      symbol:
        i % 3 === 0 ? '✨' : i % 2 === 0 ? '❤️' : '🎈',
    }));
    setFloatingItems(items);
  }, []);

  // Move button on click
  const handleNoButtonClick = () => {
    const randomX = Math.random() * (window.innerWidth - 120);
    const randomY = Math.random() * (window.innerHeight - 60);

    setHasBeenClicked(true);
    setNoButtonPos({ x: randomX, y: randomY });
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8">

      {/* Animated Background */}
      <style jsx global>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
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

        @keyframes floatUp {
          0% { transform: translateY(100vh) translateX(0px); }
          50% { transform: translateY(50vh) translateX(15px); }
          75% { transform: translateY(25vh) translateX(-15px); }
          100% { transform: translateY(-20vh) translateX(0px); }
        }
      `}</style>

      <div className="animated-bg absolute inset-0 -z-20"></div>

      {/* Floating elements */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {floatingItems.map((item) => (
          <div
            key={item.id}
            className="absolute drop-shadow-[0_0_15px_rgba(255,0,128,0.8)]"
            style={{
              left: item.left,
              fontSize: item.size,
              animation: `floatUp ${item.duration} linear infinite`,
            }}
          >
            {item.symbol}
          </div>
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-amber-950 drop-shadow-lg mb-2">
            Our Valentine's Journey
          </h1>
          <p className="text-lg text-amber-900/80">
            7 Days of Love - Click on each day to explore our memories
          </p>
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {days.map((day, index) => {
            const isLast = index === days.length - 1;
            return (
              <div key={day.id} className={isLast ? 'lg:col-start-2' : ''}>
                <DayCard
                  day={day}
                  onCardClick={() => setSelectedDay(day)}
                  colorTheme={dayColors[index]}
                />
              </div>
            );
          })}
        </div>

        {/* Question Section */}
        <div className="relative text-center mb-8 backdrop-blur-xl bg-amber-50/40 border border-amber-200/50 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
          <p className="text-3xl font-bold text-amber-950 mb-8 drop-shadow-md">
            Will you be my Valentine?
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <button
              ref={yesButtonRef}
              onClick={() => {
                setSelectedDay(null);
                setNoButtonPos(null);
                window.location.href = '/yes';
              }}
              className="px-8 py-3 text-xl font-bold bg-amber-900 text-amber-50 rounded-xl hover:bg-amber-800 transition-all duration-300 shadow-lg hover:scale-110"
            >
              Yes ❤️
            </button>
            
            {/* No Button - Initially visible, then moves around on click */}
            <button
              ref={noButtonRef}
              onClick={handleNoButtonClick}
              style={
                hasBeenClicked && noButtonPos
                  ? {
                      position: 'fixed',
                      left: `${noButtonPos.x}px`,
                      top: `${noButtonPos.y}px`,
                      transition: 'left 0.2s ease, top 0.2s ease',
                      zIndex: 50,
                    }
                  : {}
              }
              className={`px-8 py-3 text-xl font-bold rounded-xl transition-all duration-300 cursor-pointer ${
                hasBeenClicked && noButtonPos
                  ? 'bg-amber-200 text-amber-900 hover:bg-amber-300'
                  : 'bg-amber-200 text-amber-900 rounded-xl hover:bg-amber-300 shadow-lg hover:scale-110'
              }`}
            >
              No
            </button>
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {selectedDay && (
        <PhotoModal
          day={selectedDay}
          onClose={() => setSelectedDay(null)}
        />
      )}
    </main>
  );
}
