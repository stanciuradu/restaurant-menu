import React from "react";
import "../components/FoodItem.css";

function FoodItem(props) {
  const { image, name, price, currency, description } = props;
  return (
    <div className="col-6">
      <div className="image-foods">
        <img src={image} alt="" className="w-50" />
        <div className="description-food">
          <div className="price-food">
            <h3>{name}</h3>
            <p>
              {price}
              {currency}
            </p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default FoodItem;
