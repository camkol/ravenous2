import React from "react";

export default function Business() {
  const business = {
    imageSrc:
      "https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
    name: "MarginOtto Pizzeria",
    address: "1010 Paddington Way",
    city: "Flavortown",
    state: "NY",
    zipCode: "10101",
    category: "Italian",
    rating: 4.5,
    reviewCount: 90,
  };

  return (
    <div className="business">
      <div className="imageContainer">
        {" "}
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <h2>{business.name}</h2>
      <div className="businessInformation">
        <div className="address">
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.zipCode}
          </p>
        </div>
        <div className="reviews">
          <h3 style={{ color: "#c2bcc8" }}>
            {business.category.toUpperCase()}
          </h3>
          <p style={{ color: "#c2bcc8" }}>{business.rating} stars</p>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}
