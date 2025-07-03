import React from 'react';
import { motion } from 'framer-motion';

interface GameButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger' | 'play' | 'buy';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

const GameButton: React.FC<GameButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  className = '',
}) => {
  const baseClasses = `
    relative
    font-bold
    tracking-wider
    uppercase
    border-2
    transition-all
    duration-200
    transform
    hover:scale-105
    active:scale-95
    disabled:opacity-50
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    disabled:active:scale-100
    before:absolute
    before:inset-0
    before:bg-gradient-to-b
    before:opacity-0
    before:transition-opacity
    before:duration-200
    hover:before:opacity-100
    after:absolute
    after:inset-0
    after:bg-gradient-to-t
    after:opacity-0
    after:transition-opacity
    after:duration-200
    hover:after:opacity-100
  `;

  const variantClasses = {
    primary: `
      bg-gradient-to-b from-amber-600 to-amber-800
      border-amber-400
      text-amber-100
      shadow-lg shadow-amber-900/50
      before:from-amber-500 before:to-amber-700
      after:from-amber-700 after:to-amber-900
      hover:shadow-xl hover:shadow-amber-900/60
      hover:border-amber-300
    `,
    secondary: `
      bg-gradient-to-b from-slate-600 to-slate-800
      border-slate-400
      text-slate-100
      shadow-lg shadow-slate-900/50
      before:from-slate-500 before:to-slate-700
      after:from-slate-700 after:to-slate-900
      hover:shadow-xl hover:shadow-slate-900/60
      hover:border-slate-300
    `,
    danger: `
      bg-gradient-to-b from-red-600 to-red-800
      border-red-400
      text-red-100
      shadow-lg shadow-red-900/50
      before:from-red-500 before:to-red-700
      after:from-red-700 after:to-red-900
      hover:shadow-xl hover:shadow-red-900/60
      hover:border-red-300
    `,
    play: `
      bg-gradient-to-b from-emerald-500 to-emerald-700
      border-emerald-300
      text-emerald-50
      shadow-lg shadow-emerald-900/50
      before:from-emerald-400 before:to-emerald-600
      after:from-emerald-600 after:to-emerald-800
      hover:shadow-xl hover:shadow-emerald-900/60
      hover:border-emerald-200
      hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]
    `,
    buy: `
      bg-gradient-to-b from-purple-500 to-purple-700
      border-purple-300
      text-purple-50
      shadow-lg shadow-purple-900/50
      before:from-purple-400 before:to-purple-600
      after:from-purple-600 after:to-purple-800
      hover:shadow-xl hover:shadow-purple-900/60
      hover:border-purple-200
      hover:shadow-[0_0_20px_rgba(147,51,234,0.3)]
    `,
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      style={{
        textShadow: '0 1px 2px rgba(0, 0, 0, 0.8)',
        boxShadow: `
          inset 0 1px 0 rgba(255, 255, 255, 0.1),
          inset 0 -1px 0 rgba(0, 0, 0, 0.3),
          0 4px 8px rgba(0, 0, 0, 0.3)
        `,
      }}
      whileHover={!disabled ? { scale: 1.08 } : {}}
      whileTap={!disabled ? { scale: 0.96 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default GameButton;
