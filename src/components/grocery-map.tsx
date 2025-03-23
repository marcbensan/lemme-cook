"use client";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef } from "react";

import "mapbox-gl/dist/mapbox-gl.css";

import "../styles/Map.css";

export default function GroceryMap() {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapboxToken && mapContainerRef.current) {
      mapboxgl.accessToken = mapboxToken;
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/dark-v11",
        center: [-79.4158, 43.7984],
        zoom: 15,
      });

      mapRef.current.on("load", () => {
        const locations: [number, number][] = [
          [-79.4158, 43.7984],
          [-79.4111, 43.7995],
          [-79.4172, 43.7968],
          [-79.4133, 43.8001],
          [-79.4194, 43.7972],
          [-79.4165, 43.799],
        ];

        locations.forEach((location) => {
          new mapboxgl.Marker({ color: "#FF0000" })
            .setLngLat(location)
            .addTo(mapRef.current!);
        });
      });

      return () => {
        if (mapRef.current) {
          mapRef.current.remove();
        }
      };
    }
  }, [mapboxToken]);

  return (
    <>
      <div
        id="map-container"
        ref={mapContainerRef}
        style={{ width: "100%", height: "400px" }}
      />
    </>
  );
}
