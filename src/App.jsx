import './assets/styles/App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import Data from './data/kanban.json'
import ItemCard from './components/ItemCard'


function App() {


  return (
    <>
      <Navbar />

      <Sidebar></Sidebar>

      <div id='board'>
        <div className='cards'>
          <ItemCard list={Data}></ItemCard>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default App
