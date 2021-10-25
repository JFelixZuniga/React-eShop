import React from "react";
import "@styles/NotFound.scss";

import pageNotFound from "@icons/page_not_found.svg";

const NotFound = () => {
  return (
    <div className="container-image">
      <img
        src={pageNotFound}
        alt="Página no encontrada"
        className="not-found"
      />
    </div>
  );
};

export default NotFound;
