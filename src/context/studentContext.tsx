"use client";

import {createContext, useState, ReactNode} from "react";

interface Student {
  id: string;
  name: string;
  level: number;
  height: string;
}

interface StudentContextState {
  selectedStudents: Student[];
  addSelectedStudent: (student: Student) => void;
  removeSelectedStudent: (student: Student) => void;
}

const initialContextState: StudentContextState = {
  selectedStudents: [],
  addSelectedStudent: () => {},
  removeSelectedStudent: () => {},
};

export const StudentContext =
  createContext<StudentContextState>(initialContextState);

interface StudentProviderProps {
  children: ReactNode;
}

export const StudentProvider: React.FC<StudentProviderProps> = ({children}) => {
  const [selectedStudents, setSelectedStudents] = useState<Student[]>([]);

  const addSelectedStudent = (student: Student) => {
    setSelectedStudents((prevSelectedStudents) => [
      ...prevSelectedStudents,
      student,
    ]);
  };

  const removeSelectedStudent = (student: Student) => {
    setSelectedStudents((prevSelectedStudents) =>
      prevSelectedStudents.filter((s) => s.id !== student.id)
    );
  };

  return (
    <StudentContext.Provider
      value={{selectedStudents, addSelectedStudent, removeSelectedStudent}}
    >
      {children}
    </StudentContext.Provider>
  );
};
