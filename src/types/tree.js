import PropTypes from "prop-types";
import documentTypes from "./document";
import externalTypes from "./externalLink";
import folderTypes from "./folder";

export default PropTypes.arrayOf(PropTypes.oneOfType([documentTypes, externalTypes, folderTypes]));
