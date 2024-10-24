'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [hue, setHue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHue((prevHue) => (prevHue + 1) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full flex justify-center bg-transparent p-4">
      <div className="w-full max-w-[500px] relative">
        <div className="relative bg-black rounded-lg p-4 flex justify-center items-center -z-10 border-white border-2 overflow-hidden shadow-lg shadow-white">
          <div
            className="absolute left-0 right-0 -bottom-16  h-8 blur-lg"
            style={{
              background: `linear-gradient(to top, 
                hsl(${hue}, 100%, 50%) 0%,
                hsl(${(hue + 60) % 360}, 100%, 50%) 25%,
                hsl(${(hue + 120) % 360}, 100%, 50%) 50%,
                hsl(${(hue + 180) % 360}, 100%, 50%) 75%,
                transparent 100%
              )`,
            }}
          />
          <h1 className="text-2xl text-white relative z-10">Yossawat&apos;s Bento</h1>
        </div>
        <div
          className="absolute -bottom-4 left-0 right-0 h-8 blur-xl opacity-75"
          style={{
            background: `linear-gradient(to top, 
              hsl(${hue}, 100%, 50%) 0%,
              hsl(${(hue + 60) % 360}, 100%, 50%) 25%,
              hsl(${(hue + 120) % 360}, 100%, 50%) 50%,
              hsl(${(hue + 180) % 360}, 100%, 50%) 75%,
              transparent 100%
            )`,
          }}
        />
      </div>
    </div>
  )
}