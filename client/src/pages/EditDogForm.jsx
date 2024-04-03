import React, { useState, useEffect } from "react";
import {
  DOG_BREEDS,
  GENDER,
  SIZE,
  SOCIALIZED,
} from "../../../server/utils/constants.js";

import FormRow from "../components/FormRow.jsx";
import FormSelect from "../components/FormSelect.jsx";
import FormTextarea from "../components/FormTextarea.jsx";
import { Link, useParams } from "react-router-dom";

import "./EditDogForm.css";

function formattedDate(dogToEdit) {
  return new Date(dogToEdit.dateOfBirth).toISOString().split("T")[0];
}

const EditDogForm = () => {
  const [dogToEdit, setDogToEdit] = useState(null);
  const [message, setMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/v1/dogs/${id}`);
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message || "Failed to fetch the dog");
        }

        setDogToEdit(responseData);

        setMessage("");
      } catch (error) {
        console.error("Error fetching the dog:", error);
        setMessage(
          error.message || "Failed to fetch the dog. Please try again."
        );
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDogToEdit({ ...dogToEdit, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/v1/dogs/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dogToEdit),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to edit dog");
      }

      setMessage(responseData.message || "Dog edited successfully!");
    } catch (error) {
      console.error("Error editing dog:", error);
      setMessage(error.message || "Failed to edit dog. Please try again.");
    }
  };

  if (!dogToEdit) {
    return <p>{message}</p>;
  }

  return (
    <div className='add-new-dog-form'>
      <h2>Edit Dog</h2>
      <form onSubmit={handleSubmit} className='dog-form'>
        <FormRow
          type='text'
          name='name'
          labelText='Name:'
          defaultValue={dogToEdit.name}
          value={dogToEdit.name}
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormSelect
          value={dogToEdit.breed}
          name='breed'
          labelText='Breed:'
          options={DOG_BREEDS}
          defaultLabel='Please select'
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormSelect
          value={dogToEdit.gender}
          name='gender'
          labelText='Gender:'
          options={GENDER}
          defaultLabel='Please select'
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormSelect
          value={dogToEdit.size}
          name='size'
          labelText='Size:'
          options={SIZE}
          defaultLabel='Please select'
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormSelect
          value={dogToEdit.socialized}
          name='socialized'
          labelText='Socialized:'
          options={SOCIALIZED}
          defaultLabel='Please select'
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormRow
          type='date'
          name='dateOfBirth'
          labelText='Date of Birth:'
          value={dogToEdit.dateOfBirth}
          defaultValue={formattedDate(dogToEdit)}
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormRow
          type='number'
          name='weight'
          labelText='Weight:'
          value={dogToEdit.weight}
          defaultValue={dogToEdit.weight}
          onChange={handleChange}
          required
          className='form-row'
        />
        <FormRow
          type='text'
          name='imgSource'
          labelText='Image Source:'
          value={dogToEdit.imgSource}
          defaultValue={dogToEdit.imgSource}
          onChange={handleChange}
          required={false}
          className='form-row'
        />
        <FormTextarea
          name='attitude'
          labelText='Attitude (comma-separated):'
          value={dogToEdit.attitude}
          onChange={handleChange}
          required
          className='form-row'
        />
        <button type='submit' className='edit-btn'>
          Update Dog
        </button>
      </form>
      <Link to={`/dashboard`} className='edit-btn'>
        Back
      </Link>
      {message && <p className='message'>{message}</p>}
    </div>
  );
};

export default EditDogForm;
