import "./Tags.css";
import propTypes from "prop-types";

const Tags = ({ tagName }) => {
  return (
    <>
      <button className="tag">{tagName}</button>
    </>
  );
};

Tags.propTypes = {
  tagName: propTypes.string.isRequired,
};
export default Tags;
