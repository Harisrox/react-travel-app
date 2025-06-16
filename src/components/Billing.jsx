import React from "react";

const Billing = (props) => {
  function clearList() {
    props.setPrices(0);
    props.setPlaces([]);
  }

  return props.places.length > 0 ? (
    <div className="billing">
      <h1>Trips</h1>
      <h2 className="card-title">Cost: ${props.prices.toLocaleString()}</h2>
      <ol className="travel-items">
        {props.places.map((place, index) => (
          <li className="travel-item" key={index}>
            {place}
          </li>
        ))}
      </ol>
      <button className="hero-btn btn-3" onClick={clearList}>
        Clear list
      </button>
    </div>
  ) : (
    <div className="billing">
      <h1>Trips</h1>
      <p className="billing-text">
        You haven't added a trip to the list, try adding something to the list!
      </p>
    </div>
  );
};

export default Billing;
