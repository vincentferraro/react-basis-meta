import "../../App.css"
import { useState} from "react";
import * as React from "react";

 const RadioGroup = ({ onChange, selected, children }) => {
  // Use React.Children.map and React.cloneElement to clone the children
  // and pass the correct props to each RadioOption
  const RadioOptions = React.Children.map(children, (child) => {
    return React.cloneElement(child, {
      onChange,
      checked: child.props.value === selected,
    })
  });

  return <div className="RadioGroup">{RadioOptions}</div>;
};

const RadioOption = ({ value, checked, onChange, children }) => {
  // Hook up the onChange handler to call the onChange prop passed to RadioGroup
  // Also, make sure to pass the correct checked and value props to the input element
  return (
    <div className="RadioOption">
      <input
        id={value}
        type="radio"
        name={value}
        checked={checked}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }} />
      <label htmlFor={value}>{children}</label>
    </div>
  );
};

function Children() {
  const [selected, setSelected] = useState("");
  return (
    <div className="App">
      <h2>How did you hear about Little Lemon?</h2>
      <RadioGroup onChange={setSelected} selected={selected}>
        <RadioOption value="social_media">Social Media</RadioOption>
        <RadioOption value="friends">Friends</RadioOption>
        <RadioOption value="advertising">Advertising</RadioOption>
        <RadioOption value="other">Other</RadioOption>
      </RadioGroup>
      <button disabled={!selected}>Submit</button>
    </div>
  );
}

export default Children;
