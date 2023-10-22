import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import Header from './basic-compo/Header';
import Footer from './basic-compo/Footer.jsx';


function App() {

  return (
    <>
      <ToastContainer />
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
