import "./assets/styles/App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ItemCard from "./pages/ItemCard";
import About from "./pages/About";
import ItemDetails from "./pages/ItemDetails";
import Error404 from "./pages/Error404";


function App() {
  return (
    <>
      <Navbar />

      <Sidebar></Sidebar>

      <div id="board">
        <Routes>
          <Route path="/" element={<ItemCard></ItemCard>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/item/?task" element={<ItemDetails></ItemDetails>}/>
          <Route path="/error404" element={<Error404></Error404>}/>

        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
