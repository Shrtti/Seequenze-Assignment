import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frame3 from "./pages/Frame3.jsx";
import TodoVariant3 from "./pages/TodoVariant3.jsx";
import AddTaskSuccess from "./pages/AddTaskSuccess.jsx";
import Calendar from "./pages/Calendar.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frame3 />} />
        <Route path="/TodoVariant3" element={<TodoVariant3 />} />
        <Route path="/AddTaskSuccess" element={<AddTaskSuccess />} />
        <Route path="/Calendar" element={<Calendar />} />
        <Route path="/date/:date" element={<Frame3  />} />
      </Routes>
    </Router>
  );
};

export default App;
