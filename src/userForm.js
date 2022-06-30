import React, { useState } from "react";
function userForm(prop) {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    alert("A name was submitted: " + { inputValue });
    event.preventDefault();
    // ???
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
        <button onClick={() => console.log({ inputValue })}>test</button>
      </form>
    </div>
  );
}
export default userForm;
