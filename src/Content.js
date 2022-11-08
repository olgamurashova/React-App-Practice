import React from 'react';
import { useState } from 'react';

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of Cocoa covered almonds"
    },
    {
      id: 2,
      checked: false,
      item: "React is not going well"
    },
  
    {
      id: 3,
      checked: false,
      item: "Ice-cream"
    }
  ]);
 
  

  const handleNameChange = () => {
    const names = ['Olga', 'Harry', 'Elena'];
    const int = Math.floor(Math.random() * 3);
    setName(names[int]);
   }



  return (
    <main>
        
    </main>
  )
}

export default Content
