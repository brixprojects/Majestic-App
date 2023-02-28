import React, { useState, useEffect }from  "react";
import {useHistory, useLocation } from  "react-router-dom";
import axios from  'axios';
import "./AddEdit.css";


const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);

  const { name, email, contact } = initialState;

  console.log("waiting na ak");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log("dakop ka")
  const handleInputChange = (prop) => e => {
    let { name, value } = e.target;  
    setState({ ...state, [prop]: e.target.value });
  };
  console.log(state);
  return (
    <div style={{marginTop: "100px"}}>
    <form 
      style={{
        margin: "auto", 
        padding: "15px",
        maxWidth: "400px", 
        alignContent: "center",
    }}
    onSubmit={handleSubmit}
     >
      <label htmlFor="name">Name</label>
      <input 
      type="text" 
      id="email" name="name" 
      placeholder="Enter Name ..." 
      onChange={handleInputChange('name')} 
      value={state.name}
      /> 
      <label htmlFor="email">Email</label>
      <input 
      type="email" 
      id="email" 
      name="email" 
      placeholder="Enter Email ..." 
      onChange={handleInputChange('email')} 
      value={state.email}
      />
      <label htmlFor="contact">Contact</label>
      <input 
      type="number" 
      id="contact" 
      name="contact" 
      placeholder="Enter Contact No. ..." 
      onChange={handleInputChange('contact')} 
      value={state.contact}
      />
  
    </form>
    </div>
  );
};

export default AddEdit;