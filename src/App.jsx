import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from './basic-compo/Header';
import Footer from './basic-compo/Footer.jsx';
import Dark from "./home/Dark";


function App() {

  return (
    <>
      <ToastContainer />
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        <Dark></Dark>
      </div>
    </>
  )
}

export default App
