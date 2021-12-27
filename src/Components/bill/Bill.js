import React from 'react';
import { useState } from 'react/cjs/react.development';
const Bill = () => {

    const [state,setState]= useState({products:[
        {title: 'Apple', count: 50, price: 100,newCount:0},
        {title: 'IBM', count: 0, price: 200,newCount:0},
        {title: 'HP', count: 0, price: 300,newCount:0},
      ]})
         
      const ProductList = ({ products, onChange }) => (
        <ul>
          {products.map((product, i) => (
            <li key={i}>
              {product.title}
              <input 
                type="text" 
                value={product.count}
                disabled
              />
              <input 
                type="text" 
                value={product.newCount}
                onChange={e => onChange(i, parseInt(e.target.value) || 0)}
              />
              <input 
                type="text" 
                value={product.newCount+product.count}
                disabled
              />
            </li>
          ))}
        </ul>
      );
      

      const onChange=(index,value)=>{
        
        setState({products:state.products.map((product,i)=>{
         
            console.log("value of i \t:"+i+"\t value of index:\t"+index+"\t value :"+value);
            console.log(i===index);
            
            return i===index ? {...product,newCount:value}:product;
        })})
         
      }
       

    return ( 
        <>
        <ProductList products={state.products} onChange={onChange} />
        </>
     );
}
 
export default Bill;