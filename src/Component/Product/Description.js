import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useParams } from 'react-router-dom';
import Footer from '../Global/Footer';
import Navbar from '../Global/Navbar';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

function Description({ inventory }) {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (image) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setIsOpen(false);
  };


  console.log("ID:", id);
  console.log("Inventory:", inventory);


  // Find the specific item in the inventory based on the id
  const item = inventory.find((item) => item.id === parseInt(id));

  console.log("Item:", item);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {item ? (
          <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
            <div className="mb-4">
              <Carousel
                showArrows={true}
                infiniteLoop={true}
                showThumbs={false}
                useKeyboardArrows={true}
                autoPlay={true}
                stopOnHover={true}
                showStatus={false}
                className="rounded-lg shadow-lg"
              >
                {item.album.map((image, index) => (
                  <div key={index} className="h-64" onClick={() => openModal(image)}>
                    <img src={image} alt={`${item.name} ${index + 1}`} className="object-cover h-full w-full rounded-lg cursor-pointer" />
                  </div>
                ))}
              </Carousel>
            </div>
            <p className="text-lg mb-2"><strong>Year:</strong> {item.year}</p>
            <p className="text-lg mb-2"><strong>Type:</strong> {item.type}</p>
            <p className="text-lg mb-2"><strong>Price:</strong> ${item.price}</p>
            {/* Render other details as needed */}
          </div>
        ) : (
          <p className="text-center text-xl mt-8">Item not found</p>
        )}
      </div>
      <Footer />

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Full Image"
        className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75"
      >
        <div className="relative bg-white p-4 rounded-lg max-w-3xl mx-auto">
          <button onClick={closeModal} className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-700 rounded-full p-2">
            &times;
          </button>
          <img src={selectedImage} alt="Full View" className="w-full h-full object-contain" />
        </div>
      </Modal>
    </div>
  );
}

export default Description;
