import React from "react";
import Footer from "./Footer";


export default function Minimal(props) {
  const { children } = props;

  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}


