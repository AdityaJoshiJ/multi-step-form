import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Step3() {
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const step1 = JSON.parse(localStorage.getItem("step1"));
    const step2 = JSON.parse(localStorage.getItem("step2"));

    const finalData = { ...step1, ...step2 };

    try {
        console.log('Sending data:', finalData);
        const response = await axios.post('http://localhost:5000/api/users', finalData);
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error:', error);
      }
      
  };

  return (
    <div>
      <h2>Step 3: Confirm and Submit</h2>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Step3;
