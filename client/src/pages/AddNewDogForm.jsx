import React, { useState } from "react";
import {
  DOG_BREEDS,
  GENDER,
  SIZE,
  SOCIALIZED,
} from "../../../server/utils/constants.js";

import FormRow from "../components/FormRow.jsx";
import FormSelect from "../components/FormSelect.jsx";
import FormTextarea from "../components/FormTextarea.jsx";

import "./AddNewDogForm.css";
import { Link } from "react-router-dom";

const AddNewDogForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    dateOfBirth: "",
    gender: "",
    size: "",
    weight: "",
    socialized: "",
    imgSource: "",
    attitude: [],
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "attitude") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value.split(",").map((word) => word.trim()),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(formData);
    try {
      const response = await fetch("/api/v1/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to add dog");
      }

      setFormData({
        name: "",
        breed: "",
        dateOfBirth: "",
        gender: "",
        size: "",
        weight: "",
        socialized: "",
        imgSource: "",
        attitude: [],
      });

      setMessage(responseData.message || "dog added successfully!");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error adding dog:", error);
      setMessage(error.message || "Failed to add dog. Please try again.");
    }
  };

  return (
    <div className='add-new-dog-form'>
      <h2>Add New dog</h2>
      <form onSubmit={handleSubmit} className='dog-form'>
        <FormRow
          type='text'
          name='name'
          labelText='Name:'
          value={formData.name}
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormSelect
          value={formData.breed}
          name='breed'
          labelText='Breed:'
          onChange={handleChange}
          options={DOG_BREEDS}
          defaultLabel='Please select'
          required
          className='form-row'
        />
        <FormSelect
          value={formData.gender}
          name='gender'
          labelText='Gender:'
          onChange={handleChange}
          options={GENDER}
          defaultLabel='Please select'
          required
          className='form-row'
        />
        <FormSelect
          value={formData.size}
          name='size'
          labelText='Size:'
          onChange={handleChange}
          options={SIZE}
          defaultLabel='Please select'
          required
          className='form-row'
        />
        <FormSelect
          value={formData.socialized}
          name='socialized'
          labelText='Socialized:'
          onChange={handleChange}
          options={SOCIALIZED}
          defaultLabel='Please select'
          required
          className='form-row'
        />
        <FormRow
          type='date'
          name='dateOfBirth'
          labelText='Date of Birth:'
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormRow
          type='number'
          name='weight'
          labelText='Weight:'
          value={formData.weight}
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormRow
          type='text'
          name='imgSource'
          labelText='Image Source:'
          value={formData.imgSource}
          onChange={handleChange}
          required={false}
          className='form-row'
        />
        <FormTextarea
          name='attitude'
          labelText='Attitude (comma-separated):'
          value={formData.attitude.join(", ")}
          onChange={handleChange}
          required
          className='form-row'
        />
        <button type='submit' className='add-btn'>
          Add dog
        </button>
      </form>
      <Link to='/dashboard' className='add-btn'>
        Back
      </Link>
      {message && <p className='message'>{message}</p>}
    </div>
  );
};

export default AddNewDogForm;
