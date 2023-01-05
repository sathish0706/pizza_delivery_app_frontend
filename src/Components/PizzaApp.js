import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardContent } from '@mui/material';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';


export default function PizzaApp ({ cart, setCart,setCount,count, pizzaData, setPizzaData }) {
  
        useEffect(() => {
            const getData = async () => {
               const res = await axios.get('https://webcode-2-pizza-delivery-backend.onrender.com/pizza')
               setPizzaData(res.data);
             }
             getData();
        })
  return(
    
    <div className='pizza-list-container'>
      {pizzaData.map((pz,i) => <Pizza pizza={pz} key={i} id={pz.id} cart={cart} setCart={setCart} setCount={setCount} count={count}/>)}
      </div>
    
  )
}



function Pizza ( { pizza, id, cart, setCart, setCount, count } ) {
 
    const [summary, setSummary] = useState(true);
    
    

    // console.log(cart)

    const handleAddCart = async (e) => {
        let res =await axios.get(`https://webcode-2-pizza-delivery-backend.onrender.com/pizza/${id}`)
        let res1=res.data
        
        
         if(e.target.innerText === 'ADD TO CART'){
          setCount(count+1)
          setCart([...cart, res1])
          e.target.innerText = 'Remove'
        }else{
         
          let delt = cart.filter((deltData) => deltData.id !== id)
         setCart(delt);  
         setCount(count-1)
          e.target.innerText = 'ADD TO CART'
        }
        console.log(e.target.innerText)
      
       }
     
  
    return(
        <>
      <div className='pizz-container'>
      <Card sx={{ maxWidth: 345 }} className="card-container">
        <CardMedia
          component="img"
          height="194"
          image={pizza.img}
          alt="pizza dish"
        />
        <CardContent className='card-body'>

        <h3>{pizza.name} &nbsp;
        <span onClick={() => setSummary(!summary)}>
          {summary ? <i className="fa-solid fa-angle-up" ></i>
          : <i className="fa-solid fa-angle-down"></i>}
        </span>
        </h3>

         {summary ? <div variant="body2" color="text.secondary">
            {pizza.summary}
          </div> : "" }
          <div className="price-button">
          <div>
          <b >Price</b><br/>
          <b >₹ {pizza.price}</b>
          </div>
          
         <div>
          </div>
          </div>
          <div className="card-button">
        
          <Button variant="outlined"  color='success' id="cart" onClick={(e)=>handleAddCart(e)}>Add to cart</Button>
          </div>
          </CardContent>
          </Card>
          </div>

          </>
  
    )
  }

   