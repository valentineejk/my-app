import { useContext, useEffect, useMemo } from "react";
import { StudentContext } from "../context/studentContext";

interface WizzyStudent {
  id: string;
  name: string;
  level: number;
  height: string;
}

// const useIsSelected = (student: WizzyStudent) => {
//   const { selectedStudents } = useContext(StudentContext);

//   return useMemo(() => {
//     return selectedStudents.some((s) => s.id === student.id);
//   }, [selectedStudents, student]);
// };

export default function Yo() {
  const {addSelectedStudent, removeSelectedStudent, selectedStudents} =
    useContext(StudentContext);

  const wizzyStudents: WizzyStudent[] = [
    {
      id: "3355h3g3j5g53",
      name: "Leo",
      level: 300,
      height: "3.4ft",
    },
    {
      id: "3355h3g3j5g54",
      name: "John",
      level: 200,
      height: "3.2ft",
    },
    {
      id: "3355h3g3j5g55",
      name: "Alex",
      level: 400,
      height: "3.6ft",
    },
    {
      id: "3355h3g3j5g56",
      name: "Omad",
      level: 100,
      height: "3.0ft",
    },
  ];

   const handleStudentClick = (student: WizzyStudent) => {
     if (isSelected(student)) {
       removeSelectedStudent(student);
     } else {
       addSelectedStudent(student);
     }
         console.log("Selected Student:", student);

   };

   const isSelected = (student: WizzyStudent) => {
     return selectedStudents.some((s) => s.id === student.id);
   };
     const logSelectedStudents = () => {
       console.log("Selected Students:", selectedStudents);
     };
  useEffect(() => {
    logSelectedStudents();
  }, [selectedStudents]);

  return (
    <div>
      <h2>Student Selection</h2>
      <ul>
        {wizzyStudents.map((student) => (
          <li
            key={student.id}
            onClick={() => handleStudentClick(student)}
            style={{fontWeight: isSelected(student) ? "bold" : "normal"}}
          >
            {student.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
