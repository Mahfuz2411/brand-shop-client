import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Mcards from "./Mcards";


const MyCart = () => {
  const {user, isloading} = useContext(AuthContext);
  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:5000/cartlist/${user.email}`)
    .then(res => res.json())
    .then(data=>setData(data));
  },[user, isloading])



  return (
    <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-20">
      {!isloading && user && data && data.map(cart=> <Mcards key={cart._id} cart={cart}/>)}
    </div>
  );
};

export default MyCart;