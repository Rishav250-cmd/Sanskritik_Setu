import React from 'react';

// Warm palette pulled from the Sanskriti Setu brand collage (terracotta, teal, gold...)
const PALETTE = ['#c1572e', '#2f6e73', '#d3a24c', '#7a4b8a', '#3d6b4f'];

function colorForName(name = '') {
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

export default function Avatar({ name, size = 38 }) {
  const initial = name?.trim()?.[0]?.toUpperCase() || '?';
  const bg = colorForName(name);

  return (
    <div
      title={name}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: bg,
        color: '#f3ead9',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontWeight: 600,
        fontSize: size * 0.48,
        border: '1px solid rgba(243,234,217,0.35)',
        flexShrink: 0,
        userSelect: 'none',
      }}
    >
      {initial}
    </div>
  );
}