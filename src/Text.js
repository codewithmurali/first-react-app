import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
  //____________ use effect _____________
  //
  //
  //
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, [text]);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => {
          setText(event.target.value);
        }}
      />

      <h1>{text}</h1>
    </div>
  );
};
