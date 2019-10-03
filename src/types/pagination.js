import PropTypes from "prop-types";

export default PropTypes.shape({
  prev: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string
  }),
  next: PropTypes.shape({
    title: PropTypes.string,
    path: PropTypes.string
  })
});
