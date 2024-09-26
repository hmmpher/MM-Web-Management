// src/components/MaintenanceRecords.js
import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const MaintenanceRecords = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const recordsCollection = collection(db, "maintenanceRecords");
      const recordsSnapshot = await getDocs(recordsCollection);
      const recordsList = recordsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setRecords(recordsList);
    };

    fetchRecords();
  }, []);

  return (
    <div>
      <h2>Maintenance Records</h2>
      <ul>
        {records.map((record) => (
          <li key={record.id}>
            {record.description} - {record.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceRecords;
