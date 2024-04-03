import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./DogsList.css";
import ConfirmationDialog from "./ConfirmationDialog";

const deleteDog = async (id) => {
  await fetch(`/api/v1/dogs/${id}`, {
    method: "DELETE",
  });
};

function DogsList() {
  const [dogs, setDogs] = useState([]);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const [selectedDogId, setSelectedDogId] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, [search, sortOrder]);

  const fetchData = async () => {
    try {
      const queryParams = new URLSearchParams();

      if (search) {
        queryParams.append("search", search);
      }

      queryParams.append("sortOrder", sortOrder);

      const response = await fetch(`/api/v1/dogs?${queryParams}`);
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || "Failed to fetch dogs");
      }

      setDogs(responseData);
      setMessage("");
    } catch (error) {
      console.error("Error fetching dogs:", error);
      setMessage(error.message || "Failed to fetch dogs. Please try again.");
    }
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handleDeleteDialogCancel = () => {
    setIsDeleteDialogOpen(false);
  };

  const handleShowDeleteDialog = (id) => {
    setSelectedDogId(id);
    setIsDeleteDialogOpen(true);
  };

  const handleDelete = async (selectedDogId) => {
    try {
      await deleteDog(selectedDogId);
      setDogs((prevDogs) =>
        prevDogs.filter((dog) => dog._id !== selectedDogId)
      );
      setIsDeleteDialogOpen(false);
      setMessage("Dog deleted successfully.");
    } catch (error) {
      console.error("Error deleting dog:", error);
      setMessage("Failed to delete dog. Please try again.");
    }
  };

  return (
    <div>
      <h2 className="title">Dogs List</h2>
      {message && <p className="error-message">{message}</p>}
      <div className='dog-list-search'>
        <h3>Search Dog Name:</h3>
        <input
          type='text'
          placeholder='Search'
          value={search}
          onChange={handleSearchChange}
        />
      </div>
      <div className='sort-buttons'>
        <button onClick={handleSort} className='sort-button'>
          {sortOrder === "asc" ? "Sort Descending" : "Sort Ascending"}
        </button>
      </div>
      <div className='dogs-container'>
        {dogs.map((dog) => (
          <div className='dog-card' key={dog._id}>
            <div className='dog-image'>
              {dog.imgSource ? (
                <img
                  className='dog-image'
                  src={dog.imgSource}
                  alt={dog.name}
                  style={{ maxWidth: "200px" }}
                />
              ) : (
                <div className='placeholder-image'></div>
              )}
            </div>
            <div className='dog-details'>
              <h2>{dog.owner}</h2>
              <h2>{`Dog Name: ${dog.name}`}</h2>
              <h2>{`Breed: ${dog.breed}`}</h2>
              <h2>{dog.age}</h2>
              <h2>{`Gender: ${dog.gender}`}</h2>
              <h2>{`Size: ${dog.size}`}</h2>
              <h2>{`Weight: ${dog.weight}`}</h2>
              <h2>{`Socialized: ${dog.socialized}`}</h2>
              <ul>
                {dog.attitude.map((trait, i) => (
                  <li key={i}>{trait}</li>
                ))}
              </ul>
              <div className='btn-container'>
                <Link className='dogs-btn' to={`/dashboard/edit/${dog._id}`}>
                  Edit
                </Link>
                <button
                  className='dogs-btn'
                  onClick={() => {
                    handleShowDeleteDialog(dog._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedDogId && (
        <ConfirmationDialog
          isOpen={isDeleteDialogOpen}
          title='Delete Dog'
          content='Are you sure you want to delete this dog?'
          confirmLabel='Delete'
          cancelLabel='Cancel'
          onConfirm={() => handleDelete(selectedDogId)}
          onCancel={handleDeleteDialogCancel}
        />
      )}
    </div>
  );
}

export default DogsList;
