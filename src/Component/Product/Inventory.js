const generateAlbum = (folderPath, count) => {
    return Array.from({ length: count }, (_, i) => `${folderPath}/${i + 1}.jpg`);
  };


const inventory = [
    // POP UPS 
    { 
        year: 2020, 
        name: 'Pop Camper', 
        type: 'Popup', 
        price: 15000,
        sleeps: 5, 
        image: '/images/models/modelType/make/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
    // TRAVEL TRAILERS 
    { 
        year: 2020, 
        name: 'Travel Trailer', 
        type: 'Trailer', 
        price: 20000,
        sleeps: 5, 
        image: '/images/models/modelType/make/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
    // BUMPER PULLS 
    { 
        year: 2020, 
        name: 'Fifth Wheel', 
        type: 'Fifth', 
        price: 35000,
        sleeps: 5, 
        image: '/images/models/modelType/make/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
    // FIFTH WHEELS 
    { 
        year: 2020, 
        name: 'Toy Hauler', 
        type: 'ToyHauler', 
        price: 45000,
        sleeps: 5, 
        image: '/images/models/modelType/make/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
    // Add more RVs

    { 
        year: 2020, 
        name: 'Flagstaff', 
        type: 'Trailer', 
        price: 7300,
        sleeps: 5, 
        image: '/images/models/bumper/flagstaff/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/bumper/flagstaff', 17)
    },

    { 
        year: 2020, 
        name: 'Laredo', 
        type: 'Fifth', 
        price: 10300,
        sleeps: 5, 
        image: '/images/models/fifth/laredo/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/fifth/laredo', 16)
    },

    { 
        year: 2016, 
        name: 'Outback', 
        type: 'Travel', 
        price: 14900,
        sleeps: 5, 
        image: '/images/models/travel/outback/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/travel/outback', 15)
    },

    { 
        year: 2007, 
        name: 'Wilderness', 
        type: 'Camper', 
        price: 8900,
        sleeps: 5, 
        image: '/images/models/camper/wilderness/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
  ];
  

const inventoryWithIds = inventory.map((item, index) => ({ ...item, id: index + 1 }));

export default inventory;