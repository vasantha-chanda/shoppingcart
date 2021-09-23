import React from 'react';
import {CartState} from '../context/Context';
import SingleProduct from './SingleProduct';
import Filters from './Filters'
import "./styles.css";
const Home = () => {
    const{state:{products},productState:{sort,byStock,byFastDelivery,byRating,searchQuery}}=CartState();
    const transformProducts =()=>{
        let sortedproducts=products;
        if(sort){
            sortedproducts=sortedproducts.sort((a,b)=>(
                sort==="lowToHigh"?a.price-b.price:b.price-a.price
            ));
        }
        if(!byStock){
            sortedproducts=sortedproducts.filter((product)=>product.inStock);

        }
        if(byFastDelivery){
            sortedproducts=sortedproducts.filter((product)=>product.fastDelivery);

        }
        if(byRating){
            sortedproducts=sortedproducts.filter(
                (product)=>product.ratings>=byRating
            )
        }
        if(searchQuery){
            sortedproducts=sortedproducts.filter((product)=>
            product.name.toLowerCase().includes(searchQuery));
        }


        return sortedproducts;
    }
    return (
        <div className="home">
            <Filters/>
            <div className="productContainer">
                {transformProducts().map((product)=>{
                   return <SingleProduct product={product} key={product.id}/>
                })}
            </div>
        </div>
    )
}

export default Home
