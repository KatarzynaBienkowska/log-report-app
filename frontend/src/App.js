import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SearchLogs from "./pages/SearchLogs";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/searchLogs" element={<SearchLogs />} />
      </Routes>
    </>
  );
};
export default App;
