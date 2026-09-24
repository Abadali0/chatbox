import { useEffect, useState } from "react";
import axios from "axios";

import JoinChat from "./components/JoinChat";
import ChatRoom from "./components/ChatRoom";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const[products,setProducts]=useState([]);
  const[newProductInfo,setNewProductInfo]=useState({
    id:"",
    name:"",
    price:"",
    desc:"",
    imageUrl:"",
  });
  const handleProductInfoChange=(e)=>{
    setNewProductInfo((prev)=>({...prev,[e.target.name]:e.target.value}));
  };

  const handleJoin = (username, groupName) => {
    setUser({
      username,
      groupName,
    });
  };

  async function fetchProducts() {
    try {
      const productRes = await axios.get("http://localhost:5050/products");
      console.log(productRes.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleLeave = () => {
    setUser(null);
  };

  async function addProduct(e) {
    e.preventDefault();
    try{
      await axios.post("http://localhost:5050/products",newProductInfo);
      alert("Product Added")
    } catch(err){
      console.log(err)
    }
  }
   async function deleteProduct(id) {
    e.preventDefault();
    try{
      await axios.delete('http://localhost:5050/products/${id}');
      alert("Product Deleted");
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className="app">
     <form onSubmit={addProduct}>
  <input type="text" name="id" id="id" placeholder="Enter Product ID"  onChange={handleProductInfoChange}/>

  <input type="text" name="name" id="name" placeholder="Enter Product Name" onChange={handleProductInfoChange} />

  <input type="number" name="price" id="price" placeholder="Enter Price"  onChange={handleProductInfoChange}/>
<input
    type="text"
    name="description"
    id="imageUrl"
    placeholder="Enter description"
    onChange={handleProductInfoChange}
  />
  <input
    type="text"
    name="imageUrl"
    id="imageUrl"
    placeholder="Enter Image URL"
    onChange={handleProductInfoChange}
  />

  <button type="submit">Add Product</button>
  <button onClick={(e) => deleteProduct(e, product.id)}>
  Delete
</button>
</form>
      {!user ? (
        <JoinChat onJoin={handleJoin} />
      ) : (
        <ChatRoom user={user} onLeave={handleLeave} />
      )}
    </div>
  );
}

export default App;
