
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

interface MapProps {
  address?: string;
  defaultCenter?: [number, number];
}

const Map: React.FC<MapProps> = ({ 
  address = "Moti Nagar Eid Gah Road, Khalilabad 272175", 
  defaultCenter = [82.7437, 26.7720] // Approximate coordinates for Khalilabad
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapToken, setMapToken] = useState<string>('');

  useEffect(() => {
    // This is where you'd normally use an environment variable
    // For this demo, we're using a temporary public token input
    const token = prompt("Please enter your Mapbox public access token. You can get one at https://mapbox.com/");
    if (token) {
      setMapToken(token);
    }
  }, []);

  useEffect(() => {
    if (!mapContainer.current || !mapToken) return;

    // Initialize map
    mapboxgl.accessToken = mapToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: defaultCenter,
      zoom: 15
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl(),
      'top-right'
    );

    // Create a marker at the default location
    marker.current = new mapboxgl.Marker({ color: "#7C3AED" })
      .setLngLat(defaultCenter)
      .setPopup(new mapboxgl.Popup().setHTML(`<h3 class="font-bold">DawaiXpress</h3><p>${address}</p>`))
      .addTo(map.current);

    // Clean up on unmount
    return () => {
      map.current?.remove();
    };
  }, [defaultCenter, address, mapToken]);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg border border-purple-200">
      {!mapToken && (
        <div className="w-full h-full flex items-center justify-center bg-gray-100">
          <p className="text-gray-500 text-center px-4">
            Please enter your Mapbox token to display the map.
          </p>
        </div>
      )}
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
