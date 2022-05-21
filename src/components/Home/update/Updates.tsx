import React, { useState } from "react";
import "./update.css";

type Props = {};

const Updates = (props: Props) => {
  const [val, setVal] = useState("");
  const handleChange = (e: React.FormEvent<EventTarget>) => {
    let inp = e.target as HTMLInputElement;
    setVal(inp.value);
  };

  // const handleSubmit = () => {

  // }
  return (
    <div className="update">
      <h2>Get Updates About Our Softwares And Discount Sales</h2>
      <form>
        <input
          type="email"
          onChange={handleChange}
          value={val}
          placeholder="Enter your email"
        />
        <button>Subscribe</button>
      </form>
    </div>
  );
};

export default Updates;
