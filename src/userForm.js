import React, { useState } from "react";
function UForm(prop) {
  const handleSubmit = (event) => {
    alert("A name was submitted: " + { inputValue });
    event.preventDefault();
    // ???
  };
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h1>USER FORM</h1>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={handleChange}
        />
        <label>
          Email
          <input value={inputValue} onChange={handleChange}></input>
          <h3>you have entered: {inputValue}</h3>
        </label>

        <button>save</button>
      </form>
    </div>
  );
}
export default UForm;
