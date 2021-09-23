import React from 'react';
import {Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import {FaShoppingCart} from 'react-icons/fa';
import {AiFillDelete} from 'react-icons/ai';
import {CartState} from  '../context/Context';
import{Navbar,Nav,Dropdown,Badge,FormControl,Container} from "react-bootstrap";
const Header = () => {
    const{state:{cart},dispatch,productDispatch}=CartState();
    return (
        <Navbar bg="dark" variant="dark" style={{height:80}}>
            <Container>
               <Navbar.Brand>
                  <Link to="/" >Shopping Cart</Link>
               </Navbar.Brand>
               <Navbar.Text className="search">
                   <FormControl style={{width:500}}placeholder="search a product"  className="m-auto" onChange={(e)=>{
                       productDispatch({
                           type:"FILTER_BY_SEARCH",
                           payload:e.target.value,
                       })
                   }}/>
               </Navbar.Text>
               <Nav>
                   <Dropdown alignRight>
                       <Dropdown.Toggle variant="success">
                           <FaShoppingCart color="white" fontSize="25px"/>
                           <Badge>{cart.length}</Badge>
                       </Dropdown.Toggle>
                 
                   <Dropdown.Menu style={{minWidth:370}}>
  
                       {cart.length>0?(<>
                      {cart.map((product)=>(
                           <span className="cartitem" key={product.id}>
                              <img src={product.image} className='cartItemImg' alt=
                              {product.name}/>
                              <div className="cartItemDetail">
                                  <span>{product.name}</span>
                                  <span>{product.price.split(".")[0]}</span>
                              </div>
                              <AiFillDelete fontSize="20px" style={{cursor:"pointer"}} onClick={()=>dispatch({
                                  type:"Remove from Cart",
                                  payload:product,
                              })}
                              />
                            </span> 
                       ))}
                       <Link to ="/cart">
                           <Button style={{width:"95%",margin:" 0 10px"}}>Go to Cart</Button>
                           </Link>
                         </>
                     ):(<span style={{padding:10}}>Cart is empty</span>)}
                   </Dropdown.Menu>  
                
                   </Dropdown>

               </Nav>
            </Container>
        </Navbar>
    )
}

export default Header
