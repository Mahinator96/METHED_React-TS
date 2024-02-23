import React from "react";
import style from "./Heading.module.css";

import propTypes from "prop-types";

export const Heading = ({ text }) => (
  <div className={style.heading}>{text}</div>
);

Heading.propTypes = {
  text: propTypes.string,
};
