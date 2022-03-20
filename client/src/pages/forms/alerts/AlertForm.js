import React from "react";
import "../form.css";

const FormMessage = ({ error, user }) => {
  return (
    <div className="alert">
      <h3>{error}</h3>
    </div>
  );
};

export default FormMessage;
