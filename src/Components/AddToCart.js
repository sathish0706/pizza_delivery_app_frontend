import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';


function AddToCart ({ cart, setCart, setCount, count}) {
  const navigate = useNavigate()

  return<>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
          <TableRow>
            <TableCell>pizza image</TableCell>
            <TableCell align="left">pizza name</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Remove</TableCell>
            <TableCell align="right">price</TableCell>
          </TableRow>
        </TableHead>
        </Table>
  {cart.map
      ((cr,i) => <Cart key={i} cart={cr} id={cr.id} setCart={setCart} crt={cart} setCount={setCount} count={count}/>)}
<div id='order'>
<Button variant="contained" color='success' onClick={()=>navigate('/congrats')}>Place Order</Button>
</div>

  </>
}



function Cart ({ cart, setCart, id, crt, setCount, count }) {
   
    const [num, setNum ] = useState(1);


    const handleIncrement = () => {
        setNum(num+1)
    }

    const handleDecrement = () => {
        if(num > 1 ){
            setNum(num-1)
        }

    }
    const handleDelete = async () => {
      let delt = crt.filter((deltData) => deltData.id !== id)
      setCart(delt);  
      setCount(count-1)
  }


      const totalPrice = cart.price*num
      
   

    return(
        <>
        
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableBody>
        
            <TableRow>
              <TableCell component="th" scope="row">
                <img className='cart-img' src={cart.img} alt={cart.name}/>
              </TableCell>
              <TableCell align="left"><b>{cart.name}</b></TableCell>
              <TableCell align="right">
              <ButtonGroup>
              <Button
              aria-label="reduce"
              onClick={()=>handleDecrement()}
               >-
              </Button>
              <Button>{num}</Button>
              <Button
              aria-label="increase"
              onClick={()=>handleIncrement()}
              >+
              </Button>
              </ButtonGroup>

              </TableCell>
              <TableCell align="left">
              <Button variant="contained"  color='error' id="cart" onClick={() => handleDelete()} >Remove from cart</Button>
              </TableCell>
              <TableCell align="right">{totalPrice}</TableCell>
            </TableRow>
        </TableBody>
      </Table>
      
    </TableContainer>
       
        
        </>
    )
}
export default AddToCart;