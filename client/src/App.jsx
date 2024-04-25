import { useState, useEffect } from 'react'
import Products from './components/Products';

function App() {
  const [n, setN] = useState(0);
  const [ngreater, setNgreater] = useState(false);
  const [page, setPage] = useState(0);
  const [category, setCategory] = useState("Phone"); 
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [show , setShow] = useState(false);
  useEffect(()=>{
    if(n>10){
      setNgreater(true);
    }else{
      setNgreater(false);
    }
  }, [n])
  //["Phone"," Charger", "Mouse", "Keypad", "Bluetooth","Computer", "TV", "Earphone", "Tablet ,"Pendrive", "Remote", "Speaker", "Headset", "Laptop", "PC]
  return (
    <div>
      <div>
        <label htmlFor="n">Number of products</label>
        <br />
        <input type="number" name="n" placeholder='0' onChange={(e)=>{setN(e.target.value)}}/>
      </div>
      <div>
        <label htmlFor="category">Select Category : </label>
        <select name="category" onChange={(e)=>{setCategory(e.target.value)}}>
          <option value="Phone">Phone</option>
          <option value="Charger">Charger</option>
          <option value="Mouse">Mouse</option>
          <option value="Keypad">Keypad</option>
          <option value="Bluetooth">Bluetooth</option>
          <option value="Computer">Computer</option>
          <option value="TV">TV</option>
          <option value="Earphone">Earphone</option>
          <option value="Tablet">Tablet</option>
          <option value="Pendrive">Pendrive</option>
          <option value="Remote">Remote</option>
          <option value="Speaker">Speaker</option>
          <option value="Headset">Headset</option>
          <option value="Laptop">Laptop</option>
          <option value="PC">PC</option>
        </select>
      </div>
      {ngreater?<div>
            <label htmlFor="page">Number of page</label>
            <br />
            <input type="number" name="page" placeholder='0' onChange={(e)=>{setPage(e.target.value)}}/>
          </div> : <></>
      }
      <div>
        <label htmlFor="minPrice">Min Price</label>
        <br />
        <input type="number" name="minPrice" placeholder='0' onChange={(e)=>{setMinPrice(e.target.value)}}/>
      </div>
      <div>
        <label htmlFor="MaxPrice">Max Price</label>
        <br />
        <input type="number" name="MaxPrice" placeholder='10000' onChange={(e)=>{setMaxPrice(e.target.value)}}/>
      </div>
      <button onClick={()=>{setShow(!show)}}>Show Products</button>
      {show?<Products n={n} page={1} maxPrice={maxPrice} minPrice={minPrice} category={category}/>:<></>}
      
    </div>
  )
}




export default App
