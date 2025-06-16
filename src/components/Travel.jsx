import React from "react";
import data from "./destinations";

const Travel = (props) => {
  function addPrices(cost, name) {
    props.setPrices(props.prices + cost);
    props.setPlaces([...props.places, name]);
  }

  return (
    <div className="travel">
      <h4>Our Destinations</h4>

      <div className="container">
        <div className="row">
          {data.countries.map((location) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={location.id}>
              <div className="card">
                <img
                  width="300px"
                  height="250px"
                  src={location.image}
                  className="card-img"
                  alt={location.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{location.name}</h5>
                  <button className="price">
                    {location.days} Days: ${location.pricing}
                  </button>
                  <button
                    className="btn-2"
                    onClick={() => addPrices(location.pricing, location.name)}
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Travel;
