/**
 * 该组件表示 Ravenous 中的餐厅的格式和样式设置。
 */
import React from "react";
// fake business info
const businessInfo = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90

};

// Each Business component should display an image, name, address, city, state, zipcode, category, rating, and review count.
function Business() {
  return (
    <div>
      <img src={businessInfo.imageSrc} />
      <div className="name">{businessInfo.name}</div>
      <div className="address">{businessInfo.address}</div>
      <div className="city">{businessInfo.city}</div>
      <div className="state">{businessInfo.state}</div>
      <div className="zipcode">{businessInfo.zipCode}</div>
      <div className="category">{businessInfo.category}</div>
      <div className="rating">{businessInfo.rating}</div>
      <div className="review-count">{businessInfo.reviewCount}</div>
    </div>
  );
}

export default Business;