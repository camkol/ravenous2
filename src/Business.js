import React from "react";

export default function Business({ business }) {
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
