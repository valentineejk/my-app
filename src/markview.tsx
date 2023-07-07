"use client";

import React, {useContext} from "react";
import { StudentContext } from "./context/studentContext";

const SelectedStudentsScreen: React.FC = () => {
  
  const {selectedStudents} = useContext(StudentContext);

  return (
    <div>
      <h2>Selected Students</h2>
      {selectedStudents.length > 0 ? (
        <ul>
          {selectedStudents.map((student) => (
            <li key={student.id}>{student.name}</li>
          ))}
        </ul>
      ) : (
        <p>No students selected</p>
      )}
    </div>
  );
};

export default SelectedStudentsScreen;
