"use client";

import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl/mapbox";

export default function FakeMap() {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;

  if (!token) {
    return (
      <div className="flex h-[55vh] items-center justify-center bg-[#0c0c0c] text-[#D6D6D6] md:h-[70vh]">
        Map unavailable.
      </div>
    );
  }

  return (
    <div className="h-[55vh] w-full md:h-[70vh]">
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
      />
    </div>
  );
}