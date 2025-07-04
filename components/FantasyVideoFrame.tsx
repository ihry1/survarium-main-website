'use client';

import React from 'react';

interface FantasyVideoFrameProps {
  src: string;
  poster?: string;
  alt?: string;
}

const FantasyVideoFrame: React.FC<FantasyVideoFrameProps> = ({
  src,
  poster,
  alt,
}) => (
  <div className="relative max-w-7xl mx-auto p-4 bg-gradient-to-br from-amber-900/60 to-purple-900/60 rounded-xl shadow-2xl my-12">
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      style={{ zIndex: 2 }}
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
    <video
      className="relative z-10 rounded-lg border-4 border-slate-800"
      src={src}
      poster={poster}
      autoPlay
      loop
      muted
      playsInline
      aria-label={alt}
    />
  </div>
);

export default FantasyVideoFrame;
