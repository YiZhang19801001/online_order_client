import React from "react";
import { Link } from "react-scroll";
export default ({ category }) => {
  return (
    <Link
      key={`categoryList${category}`}
      activeClass="active"
      to={`nav${category}`}
      isDynamic={true}
      offset={-80}
      spy={true}
      smooth={true}
      duration={300}
      containerId="product-list"
    >
      <span>{category}</span>
    </Link>
  );
};
