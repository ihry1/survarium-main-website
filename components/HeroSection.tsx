'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GameButton from './GameButton';

const HeroSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCopyToken = () => {
    navigator.clipboard.writeText('0xAfF713b62e642b25898e24d5Be6561f863582144');
  };

  const handleBuySurv = () => {
    console.log('Buy SURV clicked');
  };

  const handlePlay = () => {
    console.log('Play clicked');
  };

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative pt-32 flex items-center justify-center">
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-amber-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-emerald-500/10 rounded-full blur-lg"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-6 tracking-tight"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          SURVARIUM
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
        >
          Not just another memecoin —{' '}
          <span className="text-amber-400 font-semibold">$SURV</span> is
          designed to thrive through{' '}
          <span className="text-emerald-400 font-semibold">
            skill-based battles
          </span>
          , offering{' '}
          <span className="text-purple-400 font-semibold">real rewards</span>{' '}
          for{' '}
          <span className="text-orange-400 font-semibold">real players</span>!
        </motion.p>

        <motion.div
          className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-lg p-6 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4,
          }}
        >
          <h2 className="text-lg font-semibold text-slate-200 mb-4">
            Token Contract
          </h2>
          <div className="flex items-center justify-center gap-3">
            <code className="text-sm md:text-base text-amber-300 font-mono bg-slate-900/50 px-4 py-2 rounded border border-slate-600">
              0xAfF713b62e642b25898e24d5Be6561f863582144
            </code>
            <motion.button
              onClick={handleCopyToken}
              className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded border border-slate-500 transition-colors"
              title="Copy token address"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              📋
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.6,
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.8,
            }}
          >
            <GameButton
              onClick={handleBuySurv}
              variant="buy"
              size="large"
              className="min-w-[200px]"
            >
              💰 BUY $SURV
            </GameButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1.0,
            }}
          >
            <GameButton
              onClick={handlePlay}
              variant="play"
              size="large"
              className="min-w-[200px]"
            >
              ▶️ PLAY
            </GameButton>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <motion.div
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1.4,
            }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl mb-3">⚔️</div>
            <h3 className="text-lg font-semibold text-amber-200 mb-2">
              Skill-Based Combat
            </h3>
            <p className="text-slate-300 text-sm">
              Fight with swords, axes, and strategy to earn rewards
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1.6,
            }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="text-lg font-semibold text-emerald-200 mb-2">
              Real Rewards
            </h3>
            <p className="text-slate-300 text-sm">
              Earn $SURV tokens through gameplay and achievements
            </p>
          </motion.div>

          <motion.div
            className="bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 1.8,
            }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <div className="text-3xl mb-3">🎮</div>
            <h3 className="text-lg font-semibold text-purple-200 mb-2">
              Play to Earn
            </h3>
            <p className="text-slate-300 text-sm">
              Turn your gaming skills into real cryptocurrency
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
