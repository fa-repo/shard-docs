import PropTypes from "prop-types";

export default PropTypes.shape({
  text: PropTypes.string,
  link: PropTypes.string,
  isActive: PropTypes.bool.isRequired
});
