'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SurvivalSection: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <section className="relative py-20">
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center order-1 lg:order-none"
        >
          <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400">
            <Image
              src="https://survariumbsc.com/reward.jpg"
              alt="Survarium gameplay preview"
              className="object-cover w-full h-full"
              width={1000}
              height={1000}
            />
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon
                points="0,8 8,0 92,0 100,8 100,92 92,100 8,100 0,92 0,8"
                fill="none"
                stroke="#fbbf24"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeDasharray="10,7"
              />
            </svg>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.2,
          }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-6">
            Survive and Earn Every Day
          </h2>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
            Survarium hosts daily survival events where players battle endless
            waves of enemies.
            <span className="block mt-2">
              <span className="text-emerald-400 font-semibold">
                Free-to-Play
              </span>{' '}
              players enjoy the raw challenge, while{' '}
              <span className="text-purple-400 font-semibold">
                Play-to-Earn
              </span>{' '}
              players unlock VIP access to compete for{' '}
              <span className="text-amber-400 font-semibold">$SURV</span>{' '}
              rewards.
            </span>
            <span className="block mt-2">
              Earnings are based on performance—how long you survive, how many
              enemies you crush, your upgrade progression, and how skillfully
              you play. The stronger you grow, the more you earn!
            </span>
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-block bg-emerald-700/30 text-emerald-200 px-4 py-2 rounded-lg font-semibold text-sm">
              Endless Waves
            </span>
            <span className="inline-block bg-purple-700/30 text-purple-200 px-4 py-2 rounded-lg font-semibold text-sm">
              VIP Play-to-Earn
            </span>
            <span className="inline-block bg-amber-700/30 text-amber-200 px-4 py-2 rounded-lg font-semibold text-sm">
              Performance Rewards
            </span>
            <span className="inline-block bg-red-700/30 text-red-200 px-4 py-2 rounded-lg font-semibold text-sm">
              Upgrade Progression
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SurvivalSection;
