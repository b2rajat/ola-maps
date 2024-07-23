
import './App.css';
import { useState } from "react";
import DeckGL from "@deck.gl/react";
import StaticMap from "react-map-gl";
import maplibregl from "maplibre-gl";

function App() {
  const [viewState, setViewState] = useState({
    longitude: 0,
    latitude: 0,
    zoom: 1,
  });
  return (
    <div>
      <DeckGL
        style={{ width: "100vw", height: "100vh", overflow: "hidden" }}
        viewState={viewState}
        onViewStateChange={({ viewState }) => setViewState(viewState)}
        controller={true}
        layers={[]}
      >
        <StaticMap
          mapLib={maplibregl}
          mapStyle="https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json"
          transformRequest={(url, resourceType) => {
            url = url + '?api_key={your_api_key}';
            return { url, resourceType };
          }}
        />
      </DeckGL>
    </div>
  );
}

export default App;