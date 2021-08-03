import {useState} from "react";

const students = ['ron', 'rosie', 'nicole', 'daniel'];
export default function StudentPicker() {

    const [student, setStudent] = useState(null)

    function pick() {
        setStudent(students.pop());
    }

    return <div>
        <button onClick={pick}>Pick</button>
        <div>{student}</div>
    </div>
}
