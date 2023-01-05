import './App.css';
import PizzaApp from './Components/PizzaApp';
import Signin from './Components/Signin';
import Register from './Components/Register';
import Topbar from './Components/Topbar';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import { useState } from 'react';
import AddToCart from './Components/AddToCart';
import Congrats from './Components/congrats';
import AddPizza from './Components/AddPizza';

function App() {

const [cart, setCart] = useState([]);
const [ loginUser, setLoginUser ] = useState({})
const [cartCount, setCartCount] = useState(0);
const [pizzaData, setPizzaData] = useState([]);




  return (
    <div className="App">

       { loginUser.message && loginUser.token  
       ? <Topbar count={cartCount}/> : null} 

       <Routes>
            <Route path='/'
              element={
              loginUser.message && loginUser.token 
               ? <Home /> : <Signin setLoginUser={setLoginUser}/>
              }/>

            <Route path='/register' element={<Register />}/>

            <Route path='/pizza'   element={
              loginUser.message && loginUser.token  ?
               <PizzaApp cart={cart} setCart={setCart} 
              setCount={setCartCount} count={cartCount}
              pizzaData={pizzaData} setPizzaData={setPizzaData}
              /> : <Signin setLoginUser={setLoginUser}/>
              }/>
           

            
            <Route path='/add-pizza' element={<AddPizza setPizzaData={setPizzaData}/>}/>


            <Route path='/pizza/cart'   
            element={<AddToCart cart={cart} setCart={setCart} 
            setCount={setCartCount} count={cartCount}/>} />

           <Route path='/congrats' element={<Congrats />}/>
           
           <Route path='/signin' element={<Signin />}/>

      </Routes>
      
      
      </div>
    
  );
}

export default App;
