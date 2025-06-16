import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";
import Pages from "./components/Pages";

function App() {
  const [prices, setPrices] = useState(0);
  const [places, setPlaces] = useState([]);

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Pages
          prices={prices}
          setPrices={setPrices}
          places={places}
          setPlaces={setPlaces}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
