import PropTypes from "prop-types";

export default PropTypes.arrayOf(
  PropTypes.oneOfType([
    PropTypes.shape({ title: PropTypes.string, document: PropTypes.array }),
    PropTypes.shape({ title: PropTypes.string, children: PropTypes.array }),
    PropTypes.shape({ title: PropTypes.string, externalLink: PropTypes.string })
  ])
);
