import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Global/Footer';
import Navbar from '../Global/Navbar';
import Modal from 'react-modal';

import StraightenIcon from '@mui/icons-material/Straighten';
import ScaleIcon from '@mui/icons-material/Scale';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import HeightIcon from '@mui/icons-material/Height';
import HotelIcon from '@mui/icons-material/Hotel';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Location from '../Home/Location';


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
            <div className="description__title text-3xl font-bold mb-4">
              <div className="condition__year__name flex">
                <h1>
                  <span className="font-normal text-lively-orange">{item.condition}</span>
                  {' • '}
                  <span className='font-light'>{item.year} {item.name}</span>
                </h1>
              </div>
              <h1>{item.model} </h1>
            </div>

            <div className='lg:flex lg:mb-5'>
              {/* CARASOUL  */}
              <div className="mb-4 lg:w-2/3">
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
                    <div key={index} className="sm:h-80 md:h-96 lg:h-128 xl:h-144" onClick={() => openModal(image)}>
                      <img src={image} alt={`${item.name} ${index + 1}`} className="object-cover h-full w-full rounded-lg cursor-pointer" />
                    </div>
                  ))}
                </Carousel>
              </div>

              {/* DETAILS  */}
              <div className="description__rv__info mx-2 lg:w-1/3 lg:ml-5">
                  <div className="description__year__and__model flex mb-5">
                      <p className="description__text-lg font-semibold">{item.year}</p>
                      <h2 className="description__text-xl font-semibold ml-2">{item.name}</h2>
                  </div>

                  {/* PRICE AND SLEEPS  */}
                  <div className="description__price__and__sleeps flex justify-between">
                      <div className="condition__and__sleeps">
                          <p className='font-semibold '>USED</p>
                          <p className="text-lg">{item.title}</p>
                      </div>

                      {/* PRICE AND PRICE TEXT  */}
                      <div className="price__and__priceText flex flex-col flex-end lg:mb-5">
                          <p>Sale Price</p>
                          <p className="text-lg">${item.price}</p>
                      </div>              
                  </div>

                  {/* BUTTONS  */}
                  <div className="description__offer__and__available flex justify-between mb-10">
                      <button className='bg-blue-500 rounded text-center text-white p-2 w-[40%]'>Confirm Availability</button>    
                      <button className='bg-fresh-green rounded text-white p-2 w-[40%]'>Make An Offer</button>    
                  </div> 

                  {/* VIEW DETAILS  */}
                  <div className="description__details__button border rounded border-sunset-orange bg-sunset-orange hover:bg-lively-orange text-white text-center p-2 my-5">
                      <Link to={`/browse/${item.id}/${item.year}/${item.type}/${item.name}`}><button>Schedule Appointment</button></Link>
                  </div>
              </div>
            </div>

            <div className="description__details__container">
              {/* SECTION TITLES  */}
              <div className="section__titles flex justify-evenly mx-5 mb-5">
                <a href="#specs">Specs & Overview</a>
                <a href="#location">Location Details</a>
              </div>
              
              {/* SPECS  */}
              <div className="specs__and__overview" id='specs'>
                <div className="specs__title mb-5">
                  <h1 className='text-center font-bold text-2xl'>Specs & Overview</h1>
                </div>



                <div class="container mx-auto p-4">
                  <div class="grid grid-cols-4 grid-rows-6 gap-0">
                    <div class="col-span-4 row-span-6">
                      {/* div1 (container) */}
                      <div class="grid grid-cols-4 grid-rows-6 gap-0 md:gap-x-14 lg:gap-x-0">
                        <div class="col-span-2 row-span-2 mb-5 mr-5">
                          {/* div2 (section container) */}
                          <div class="grid grid-cols-2 grid-rows-2 gap-0">
                            <div class="col-span-1 row-span-2 flex justify-center items-center bg-lively-orange rounded-full w-16 h-16 lg:justify-self-end"><StraightenIcon className='text-white' /></div>
                            <div class="col-span-1 font-semibold text-center">Length</div>
                            <div class="col-span-1 font-normal text-center">{item.length} ft</div>
                          </div>
                        </div>
                        <div class="col-span-2 row-span-2 ml-5">
                          <div class="grid grid-cols-2 grid-rows-2 gap-0">
                            <div class="col-span-1 row-span-2 flex justify-center items-center bg-lively-orange rounded-full w-16 h-16 lg:justify-self-center"> <ScaleIcon className='text-white' /></div>
                            <div class="col-span-1 font-semibold text-center lg:justify-self-start"> Weight</div>
                            <div class="col-span-1 font-normal text-center lg:justify-self-start">{item.weight} lbs</div>
                          </div>
                        </div>
                        {/* <!-- Repeat the pattern for the rest of the divs --> */}
                        <div class="col-span-2 row-span-2 mb-5 mr-5">
                          <div class="grid grid-cols-2 grid-rows-2 gap-0">
                            <div class="col-span-1 row-span-2 flex justify-center items-center bg-lively-orange rounded-full w-16 h-16 lg:justify-self-end"><CarCrashIcon className='text-white' /></div>
                            <div class="col-span-1 font-semibold text-center">GVWR</div>
                            <div class="col-span-1 font-normal text-center">{item.gvwr} lbs </div>
                          </div>
                        </div>
                        <div class="col-span-2 row-span-2 ml-5">
                          <div class="grid grid-cols-2 grid-rows-2 gap-0">
                            <div class="col-span-1 row-span-2 flex justify-center items-center bg-lively-orange rounded-full w-16 h-16 lg:justify-self-center"><HeightIcon className='text-white' /> </div>
                            <div class="col-span-1 font-semibold text-center lg:justify-self-start">Height</div>
                            <div class="col-span-1 font-normal text-center lg:justify-self-start">{item.height} lbs </div>
                          </div>
                        </div>
                        <div class="col-span-2 row-span-2 mb-5 mr-5">
                          <div class="grid grid-cols-2 grid-rows-2 gap-0">
                            <div class="col-span-1 row-span-2 flex justify-center items-center bg-lively-orange rounded-full w-16 h-16 lg:justify-self-end"><HotelIcon className='text-white' /> </div>
                            <div class="col-span-1 font-semibold text-center">Sleeps</div>
                            <div class="col-span-1 font-normal text-center">{item.sleeps} </div>
                          </div>
                        </div>
                        <div class="col-span-2 row-span-2 ml-5">
                          <div class="grid grid-cols-2 grid-rows-2 gap-0">
                            <div class="col-span-1 row-span-2 flex justify-center items-center bg-lively-orange rounded-full w-16 h-16 lg:justify-self-center"><WaterDropIcon className='text-white' /> </div>
                            <div class="col-span-1 font-semibold text-center lg:justify-self-start">Water</div>
                            <div class="col-span-1 font-normal text-center lg:justify-self-start">{item.freshWater} gal. </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>

              {/* LOCATION DETAILS  */}
              <div className="location__details">
                <div className="specs__title mb-5">
                  <h1 className='text-center font-bold text-2xl'>Location Details</h1>
                </div>

                <div className="name__and__town mb-5">
                  <h2 className='flex'><span className='font-semibold'>The Orange RV</span>{' | '}<span>(West Odessa, TX)</span></h2>
                </div>

                <div className="address mb-5">
                  <h2>1234 streetName Rd.</h2>
                  <h2>Odessa, TX</h2>
                </div>

                <div className="get__directions mb-5">
                  <h2>Get Directions</h2>
                </div>

                <div className="description__phone flex">
                  <LocalPhoneIcon />
                  <a href="tel:4323019668" className='text-sunset-orange'>+1 (432) 301-9668</a>
                </div>

                <div className="location__import" id='location'>
                  <Location />
                </div>
              </div>
            </div>
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
          <button onClick={closeModal} className="absolute top-2 right-2 text-white bg-red-500 text-center hover:bg-red-700 rounded-full p-2">
            &times;
          </button>
          <img src={selectedImage} alt="Full View" className="w-full h-full object-contain" />
        </div>
      </Modal>
    </div>
  );
}

export default Description;