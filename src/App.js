import React, { useEffect, useState } from "react";
import DateTimePicker from "react-datetime-picker";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";

import "./styles.css";

export default function App() {
  const [value, onChange] = useState(new Date());
  const [value2, onChange2] = useState([new Date(), new Date()]);

  useEffect(() => {
    console.log(value);
    console.log(value2);
  });

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <DateTimePicker onChange={onChange} value={value} />
      <br />
      <DateTimePicker onChange={onChange} value={value} format="dd-MM-y" />
      <br />
      <DateRangePicker onChange={onChange2} value={value2} />
    </div>
  );
}
