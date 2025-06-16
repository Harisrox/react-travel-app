import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Travel from "./Travel";
import Billing from "./Billing";

const Pages = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/travel"
        element={
          <Travel
            prices={props.prices}
            setPrices={props.setPrices}
            places={props.places}
            setPlaces={props.setPlaces}
          />
        }
      />
      <Route
        path="/billing"
        element={
          <Billing
            prices={props.prices}
            setPrices={props.setPrices}
            places={props.places}
            setPlaces={props.setPlaces}
          />
        }
      />
    </Routes>
  );
};

export default Pages;
