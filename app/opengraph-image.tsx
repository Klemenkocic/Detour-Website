import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Detour — Your Next Trip, Planned in Minutes'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #FF5C29 0%, #931FFF 100%)',
          fontSize: 60,
          fontWeight: 700,
          color: 'white',
        }}
      >
        <div style={{ marginBottom: 20, fontSize: 80 }}>
          Detour
        </div>
        <div style={{ fontSize: 32, textAlign: 'center', maxWidth: 800 }}>
          Your Next Trip, Planned in Minutes
        </div>
        <div style={{ fontSize: 20, marginTop: 20, opacity: 0.9 }}>
          Plan epic road trips with smart stops and visual inspiration
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
