'use client';

import React from 'react';
import { motion } from 'framer-motion';

const EconomySection: React.FC = () => {
  return (
    <section className="relative py-20">
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-6">
            SURVARIUM Economy
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.2,
            }}
          >
            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
              SURVARIUM is a Web3 survival game where players battle through
              endless waves of enemies. It&apos;s{' '}
              <span className="text-emerald-400 font-semibold">
                free to play
              </span>
              , but those who participate in daily{' '}
              <span className="text-purple-400 font-semibold">
                Play-to-Earn
              </span>{' '}
              events can earn{' '}
              <span className="text-amber-400 font-semibold">$SURV</span> based
              on their performance.
            </p>

            <p className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
              The economy is driven by{' '}
              <span className="text-orange-400 font-semibold">
                player skill and activity
              </span>
              —featuring real rewards, token buybacks, and smart burn mechanisms
              to support long-term value, sustainability, and growth.
            </p>

            <div className="bg-gradient-to-r from-emerald-500/20 to-purple-500/20 border border-emerald-400/30 rounded-lg p-6">
              <h3 className="text-xl font-bold text-emerald-300 mb-3">
                Key Features
              </h3>
              <ul className="space-y-2 text-slate-200">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Free-to-play with optional P2E rewards
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Skill-based earning system
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Smart tokenomics with burn mechanisms
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400">✓</span>
                  Sustainable long-term growth model
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Economy Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4,
            }}
          >
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-center text-amber-200 mb-8">
                💰 Every Game Donation Fuels the Ecosystem
              </h3>

              <div className="space-y-6">
                {/* Burn */}
                <motion.div
                  className="flex items-center justify-between p-4 bg-red-500/20 border border-red-400/30 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🔥</div>
                    <div>
                      <h4 className="font-semibold text-red-300">Burn</h4>
                      <p className="text-sm text-slate-300">
                        Reduces supply, increases value
                      </p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-red-400">30%</div>
                </motion.div>

                {/* Rewards Pool */}
                <motion.div
                  className="flex items-center justify-between p-4 bg-emerald-500/20 border border-emerald-400/30 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">🏆</div>
                    <div>
                      <h4 className="font-semibold text-emerald-300">
                        Rewards Pool
                      </h4>
                      <p className="text-sm text-slate-300">
                        Distributed to skilled players
                      </p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-emerald-400">50%</div>
                </motion.div>

                {/* Dev Team */}
                <motion.div
                  className="flex items-center justify-between p-4 bg-purple-500/20 border border-purple-400/30 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">⚙️</div>
                    <div>
                      <h4 className="font-semibold text-purple-300">
                        Dev Team
                      </h4>
                      <p className="text-sm text-slate-300">
                        Game development & maintenance
                      </p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-purple-400">20%</div>
                </motion.div>
              </div>

              {/* Total */}
              <div className="mt-6 p-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-lg text-center">
                <div className="text-2xl font-bold text-amber-300">100%</div>
                <p className="text-sm text-slate-300">Total allocation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EconomySection;
