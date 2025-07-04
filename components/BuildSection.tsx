'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const BuildSection: React.FC = () => {
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
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-6">
            Choose your survival style
          </h2>
          <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
            <span className="text-emerald-400 font-semibold">6 weapons</span>.{' '}
            <span className="text-purple-400 font-semibold">6 gear slots</span>.{' '}
            <span className="text-amber-400 font-semibold">
              Endless artifacts
            </span>
            .
            <span className="block mt-2">
              Craft your build, adapt your strategy, and survive the swarm.
            </span>
            <span className="block mt-2">No two runs are ever the same.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-block bg-emerald-700/30 text-emerald-200 px-4 py-2 rounded-lg font-semibold text-sm">
              6 Weapons
            </span>
            <span className="inline-block bg-purple-700/30 text-purple-200 px-4 py-2 rounded-lg font-semibold text-sm">
              6 Gear Slots
            </span>
            <span className="inline-block bg-amber-700/30 text-amber-200 px-4 py-2 rounded-lg font-semibold text-sm">
              Endless Artifacts
            </span>
            <span className="inline-block bg-red-700/30 text-red-200 px-4 py-2 rounded-lg font-semibold text-sm">
              Unique Builds
            </span>
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
          className="flex justify-center order-1 lg:order-none"
        >
          <div className="relative w-full max-w-md aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-amber-400">
            <Image
              src="https://survariumbsc.com/build.jpg"
              alt="Survarium build customization preview"
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
      </div>
    </section>
  );
};

export default BuildSection;
