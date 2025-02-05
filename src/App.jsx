import "./assets/styles/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ItemCard from "./components/ItemCard";

function App() {
  return (
    <>
      <Navbar />

      <Sidebar></Sidebar>

      <div id="board">
        <div>
          <ItemCard></ItemCard>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
