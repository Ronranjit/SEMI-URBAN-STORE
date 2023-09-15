import React from "react";

const Rating = () => {
  return (
    <section>
      <div className="rating">
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked
        />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
        <input type="radio" name="rating-1" className="mask mask-star" />
      </div>
    </section>
  );
};

export default Rating;
