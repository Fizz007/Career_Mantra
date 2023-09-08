import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";

export default function Phone() {
  const [value, setValue] = useState();

  // Define styles for the input element
  const inputStyles = {
    width: "280px",
    height:"50px",   
    margin: "2px 0",  
  };

  return (
    <PhoneInput
      country={"in"}
      value={value}
      autoFormat={true}
      onChange={setValue}
      onlyCountries={["in", "us", "gb", "ae"]}
      inputStyle={inputStyles} // Apply the inline styles to the input
    />
  );
}
