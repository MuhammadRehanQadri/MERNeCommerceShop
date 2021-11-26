import React from "react";
import PropTypes from "prop-types";

const Rating = ({ value, text, color }) => {
  return (
    <div className="rating">
      <span>
        <i
          style={{ color }}
          className={
            value === 0.5
              ? "fas fa-star-half-alt"
              : value > 0.5
              ? "fas fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value === 1.5
              ? "fas fa-star-half-alt"
              : value > 1.5
              ? "fas fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value === 2.5
              ? "fas fa-star-half-alt"
              : value > 2.5
              ? "fas fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value === 3.5
              ? "fas fa-star-half-alt"
              : value > 3.5
              ? "fas fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>
        <i
          style={{ color }}
          className={
            value === 4.5
              ? "fas fa-star-half-alt"
              : value > 4.5
              ? "fas fa-star"
              : "far fa-star"
          }
        ></i>
      </span>
      <span>{text && text}</span>
    </div>
  );
};

Rating.defaultProps = {
  color: "#f8e825",
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
