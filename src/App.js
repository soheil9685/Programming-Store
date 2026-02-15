import './App.css';
import Home from "./page/Home/Home"
import About from "./page/About/About"
import AddCourse from "./page/AddCourse/AddCourse"
import Courses from "./page/Courses/Courses"
import EditCourse from "./page/EditCourse/EditCourse"
import Course from "./page/Course/Course"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add-course" element={<AddCourse />} />
        <Route path="/edit-course/:courseId" element={<EditCourse />} />
        <Route path="/course/:courseId" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;