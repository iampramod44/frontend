import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import mapboxgl from "mapbox-gl";

console.log(import.meta.env.VITE_MAPBOX_ACCESS_TOKEN);

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

const Map = () => {
  const [searchParams] = useSearchParams();
  const [map, setMap] = useState(null);

  const lat = parseFloat(searchParams.get("lat")) || 0;
  const long = parseFloat(searchParams.get("long")) || 0;
  const name = searchParams.get("name") || "";

  useEffect(() => {
    
    if (!map) {
      const mapInstance = new mapboxgl.Map({
        container: "map",
        style: "mapbox://styles/mapbox/streets-v12",
        center: [long, lat],
        zoom: 12,
      });

     
      mapInstance.addControl(new mapboxgl.NavigationControl(), "top-right");

      setMap(mapInstance);
    }

   
    if (map) {
      
      const markers = document.getElementsByClassName("mapboxgl-marker");
      while (markers[0]) {
        markers[0].remove();
      }

    
      const marker = new mapboxgl.Marker()
        .setLngLat([long, lat])
        .setPopup(
          new mapboxgl.Popup({ offset: 25 }).setHTML(
            `<h3 class="font-bold text-lg">${name}'s Location</h3>`
          )
        )
        .addTo(map);

     
      map.flyTo({
        center: [long, lat],
        essential: true,
      });
    }
  }, [map, lat, long, name]);

  return (
    <div className="p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{name}'s Location</h2>

          {/* Map Container */}
          <div id="map" className="w-full h-96 rounded-lg my-4" />

          {/* Coordinates Display */}
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Latitude</div>
              <div className="stat-value text-lg">{lat}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Longitude</div>
              <div className="stat-value text-lg">{long}</div>
            </div>
          </div>

          {/* Back Button */}
          <div className="card-actions justify-end mt-4">
            <button
              className="btn btn-primary"
              onClick={() => window.history.back()}
            >
              Back to Profiles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
