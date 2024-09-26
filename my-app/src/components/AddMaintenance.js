// src/components/AddMaintenance.js
import React, { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddMaintenance = () => {
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const recordsCollection = collection(db, "maintenanceRecords");
    await addDoc(recordsCollection, { description, date });
    setDescription("");
    setDate("");
    alert("Maintenance record added!");
  };

  return (
    <div>
      <h2>Add Maintenance Record</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <button type="submit">Add Record</button>
      </form>
    </div>
  );
};

export default AddMaintenance;
