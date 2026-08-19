"use client";

import { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl/mapbox";

export default function FakeMap() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const [loaded, setLoaded] = useState(false);

  if (!token) {
    return (
      <div className="flex h-[55vh] items-center justify-center bg-[#0c0c0c] text-[#D6D6D6] md:h-[70vh]">
        Map unavailable.
      </div>
    );
  }

  return (
    <div className="relative h-[55vh] w-full bg-[#0c0c0c] md:h-[70vh]">

      {/* Loading State */}
      {!loaded && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#0c0c0c]">
          <div className="flex flex-col items-center">

            <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-white/50">
              Loading network
            </p>

            <div className="mt-4 h-px w-24 overflow-hidden bg-white/10">
              <div className="energy h-full w-1/2" />
            </div>

          </div>
        </div>
      )}

      <Map
        mapboxAccessToken={token}
        initialViewState={{
          longitude: 78.5,
          latitude: 12.5,
          zoom: 5.6,
        }}
        mapStyle="mapbox://styles/mapbox/standard"
        style={{
          width: "100%",
          height: "100%",
        }}
        attributionControl={false}
        logoPosition="bottom-right"
        dragRotate={false}
        pitchWithRotate={false}
        touchZoomRotate={false}
        cooperativeGestures
        onLoad={() => setLoaded(true)}
      />

    </div>
  );
}