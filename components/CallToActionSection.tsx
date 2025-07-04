'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import GameButton from './GameButton';

const CallToActionSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const handleBuySurv = () => {
    // Add your buy logic here
    console.log('Buy SURV clicked');
  };

  const handlePlay = () => {
    // Add your play logic here
    console.log('Play clicked');
  };

  return (
    <section className="relative py-20">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Title */}
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          SURVIVE, WIN & EARN!
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
        >
          Every run fuels the Survarium ecosystem. Whether you&apos;re fighting
          for <span className="text-emerald-400 font-semibold">fun</span> or
          fighting for{' '}
          <span className="text-purple-400 font-semibold">rewards</span>, your
          performance helps grow the game. Earn tokens, upgrade gear, and leave
          your mark.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.4,
          }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <GameButton
              onClick={handleBuySurv}
              variant="buy"
              size="large"
              className="min-w-[200px]"
            >
              💰 BUY $SURV
            </GameButton>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
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

        {/* Additional decorative elements */}
        <motion.div
          className="mt-16 flex justify-center space-x-8 text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-amber-400"
          >
            ⚔️
          </motion.div>
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
            className="text-emerald-400"
          >
            🛡️
          </motion.div>
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="text-purple-400"
          >
            ��
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
