'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import GameButton from '../GameButton';

export default function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ['rgba(0, 0, 0, 0)', 'rgba(10, 10, 10, 0.8)']
  );
  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(10px)']
  );
  const padding = useTransform(scrollY, [0, 100], ['30px', '10px'], {
    clamp: true,
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (action: string) => {
    console.log(action);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        background: headerBackground,
        backdropFilter: headerBlur,
        padding: padding,
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={250} height={150} />
        </Link>
        <div className="flex gap-4">
          <GameButton
            onClick={() => handleClick('Play Game')}
            variant="play"
            size="medium"
          >
            💰 Buy Game
          </GameButton>
          <GameButton
            onClick={() => handleClick('Buy Game')}
            variant="buy"
            size="medium"
          >
            ▶️ Play Now
          </GameButton>
        </div>
      </div>
    </motion.header>
  );
}
