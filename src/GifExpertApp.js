import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

   //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
   //Hub del useState,  el segundo argumento es setXxxxxx es una funsion
   //const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
   const [categories, setCategories] = useState(['One Punch']);
   /* const handleAdd = () => {
      //operador express ...
      //setCategories([...categories, 'HunterXHunter']);
      setCategories(cats => [...cats, 'HunterXHunter']);
   } */
   
  return (
      <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories={setCategories}/>
         <hr />
         {/* <button onClick={handleAdd}>Agregar</button> */}
         <ol>
         {
            categories.map( ( category )  => (               
               //<li key={ category }>{ category }</li> 
               <GifGrid 
                  key={ category } 
                  category={ category }
               />
            ))
         }
         </ol>
      </>
  )
}

 