import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Global/Footer';
import Navbar from '../Global/Navbar';
import { inventory } from './Inventory';

function Description({ inventory }) {
  const { id } = useParams();

  console.log("ID:", id);
  console.log("Inventory:", inventory);


  // Find the specific item in the inventory based on the id
  const item = inventory.find((item) => item.id === parseInt(id));

  console.log("Item:", item);

  return (
    <div>
      <Navbar />
      {item ? (
        <>
          <h1>{item.name}</h1>
          <p>Year: {item.year}</p>
          <p>Type: {item.type}</p>
          <p>Price: ${item.price}</p>
          {/* Render other details as needed */}
        </>
      ) : (
        <p>Item not found</p>
      )}
      <Footer />
    </div>
  );
}

export default Description;
