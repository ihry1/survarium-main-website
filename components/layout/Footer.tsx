'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'Discord',
      icon: '🎮',
      url: 'https://discord.gg/survarium',
      color: 'hover:text-purple-400',
      bgColor: 'hover:bg-purple-500/20',
      description: 'Join the battle',
    },
    {
      name: 'Twitter',
      icon: '⚔️',
      url: 'https://twitter.com/survarium',
      color: 'hover:text-blue-400',
      bgColor: 'hover:bg-blue-500/20',
      description: 'Follow the war',
    },
    {
      name: 'Telegram',
      icon: '🛡️',
      url: 'https://t.me/survarium',
      color: 'hover:text-cyan-400',
      bgColor: 'hover:bg-cyan-500/20',
      description: 'Stay protected',
    },
    {
      name: 'Medium',
      icon: '📜',
      url: 'https://medium.com/survarium',
      color: 'hover:text-green-400',
      bgColor: 'hover:bg-green-500/20',
      description: 'Read the scrolls',
    },
    {
      name: 'GitHub',
      icon: '🔧',
      url: 'https://github.com/survarium',
      color: 'hover:text-slate-400',
      bgColor: 'hover:bg-slate-500/20',
      description: 'Forge the code',
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 border-t border-slate-700">
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 mb-4">
              SURVARIUM
            </h3>
            <p className="text-slate-300 mb-4">
              The ultimate Web3 survival game where skill meets rewards. Battle
              endless waves, earn $SURV tokens, and forge your legend.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-amber-200 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Play Now
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Buy $SURV
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  How to Play
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Tokenomics
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-amber-200 mb-4">
              Support
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Bug Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Feature Request
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <h4 className="text-lg font-semibold text-amber-200 mb-6 text-center">
            Join the Battle
          </h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 rounded-lg border border-slate-600 transition-all duration-300 ${social.bgColor} ${social.color}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl mb-2">{social.icon}</div>
                <div className="text-sm font-semibold text-amber-200">
                  {social.name}
                </div>
                <div className="text-xs text-slate-400 group-hover:text-slate-200 transition-colors">
                  {social.description}
                </div>
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-amber-400/50 transition-all duration-300"></div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} SURVARIUM. All rights reserved. |
            <a href="#" className="hover:text-amber-400 transition-colors ml-2">
              Privacy Policy
            </a>{' '}
            |
            <a href="#" className="hover:text-amber-400 transition-colors ml-2">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
