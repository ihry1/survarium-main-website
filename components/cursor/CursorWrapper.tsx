'use client';
import dynamic from 'next/dynamic';

const AnimatedCursor = dynamic(() => import('./AnimatedCursor'), {
  ssr: false,
});

export default function CursorWrapper() {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={1.4}
      outerAlpha={0}
      outerStyle={{
        border: '2px solid #ffa500',
      }}
      innerStyle={{
        backgroundColor: '#ffa500',
      }}
    />
  );
}
