import "./styles.css";
import { useRef } from "react";
import { useLocalStorageForm } from "./useLocalStorageForm";

export default function App() {
  // Use the custom local storage hook here

  const {formData,setFormData}=useLocalStorageForm();

  const nameInput = useRef();
  const ageInput = useRef();

  const handleClear = () => {
    nameInput.current.value = "";
    ageInput.current.value = "";
  };

  const handleChange = (e) => {
    e.preventDefault();
    const name = nameInput.current.value;
    const age = ageInput.current.value;

    // Set the name and age here
    setFormData({name,age});

    handleClear();
  };

  return (
    <div className="App">
      <div id="name">Name -{formData.name}</div>
      <div id="age">Age -{formData.age}</div>
      <form onSubmit={handleChange}>
        <input placeholder="Name" ref={nameInput} />
        <input placeholder="Age" type="number" min="1" ref={ageInput} />
        <button className="btn">Change</button>
      </form>
    </div>
  );
}
