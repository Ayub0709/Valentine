'use client';

import DaySymbol from './DaySymbol';

interface DayCardProps {
  day: {
    id: number;
    name: string;
    symbol: string;
    date: string;
  };
  onCardClick: () => void;
  colorTheme?: {
    bg: string;
    border: string;
    text: string;
    subtext: string;
  };
}

export default function DayCard({ day, onCardClick, colorTheme }: DayCardProps) {
  const defaultTheme = {
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    text: 'text-amber-900',
    subtext: 'text-amber-700',
  };

  const theme = colorTheme || defaultTheme;

  return (
    <div
      onClick={onCardClick}
      className={`${theme.bg} bg-opacity-95 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:scale-105 border ${theme.border}`}
    >
      {/* Animated Symbol */}
      <div className="mb-4 flex justify-center">
        <DaySymbol symbol={day.symbol} />
      </div>

      {/* Day Name and Date */}
      <h3 className={`text-2xl font-bold ${theme.text} text-center mb-1`}>
        {day.name}
      </h3>
      <p className={`text-sm ${theme.subtext} text-center`}>
        {day.date}
      </p>
    </div>
  );
}
