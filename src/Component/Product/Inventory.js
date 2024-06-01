const generateAlbum = (folderPath, count) => {
    return Array.from({ length: count }, (_, i) => `${folderPath}/${i + 1}.jpg`);
  };


const inventory = [
    // POP UPS 
    { 
        condition: 'Used',
        year: 2020, 
        name: 'Pop Camper', 
        model: 'Model Demo Name',
        type: 'Popup', 
        price: 15000,
        sleeps: 5, 
        gvwr: 123,
        height: 456,
        freshWater: 55,
        image: '/images/models/modelType/make/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
    // TRAVEL TRAILERS 
    { 
        condition: 'Used',
        year: 2020, 
        name: 'Travel Trailer', 
        model: 'Model Demo Name',
        type: 'Trailer', 
        price: 20000,
        sleeps: 5, 
        gvwr: 123,
        height: 456,
        freshWater: 55,
        image: '/images/models/modelType/make/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
    // BUMPER PULLS 
    { 
        condition: 'Used',
        year: 2020, 
        name: 'Fifth Wheel', 
        model: 'Model Demo Name',
        type: 'Fifth', 
        price: 35000,
        sleeps: 5, 
        gvwr: 123,
        height: 456,
        freshWater: 55,
        image: '/images/models/modelType/make/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
    // FIFTH WHEELS 
    { 
        condition: 'Used',
        year: 2020, 
        name: 'Toy Hauler', 
        model: 'Model Demo Name',
        type: 'ToyHauler', 
        price: 45000,
        sleeps: 5, 
        gvwr: 123,
        height: 456,
        freshWater: 55,
        image: '/images/models/modelType/make/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
    // Add more RVs

    { 
        condition: 'Used',
        year: 2020, 
        name: 'Flagstaff', 
        model: 'Model Demo Name',
        type: 'Trailer', 
        price: 7300,
        sleeps: 5, 
        gvwr: 123,
        height: 456,
        freshWater: 55,
        image: '/images/models/bumper/flagstaff/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/bumper/flagstaff', 17)
    },

    { 
        condition: 'Used',
        year: 2020, 
        name: 'Laredo', 
        model: 'Model Demo Name',
        type: 'Fifth', 
        price: 10300,
        sleeps: 5, 
        gvwr: 123,
        height: 456,
        freshWater: 55,
        image: '/images/models/fifth/laredo/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/fifth/laredo', 16)
    },

    { 
        condition: 'Used',
        year: 2016, 
        name: 'Outback', 
        model: 'Model Demo Name',
        type: 'Travel', 
        price: 14900,
        sleeps: 5, 
        gvwr: 123,
        height: 456,
        freshWater: 55,
        image: '/images/models/travel/outback/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/travel/outback', 15)
    },

    { 
        condition: 'Used',
        year: 2007, 
        name: 'Wilderness', 
        model: 'Model Demo Name',
        type: 'Camper', 
        price: 8900,
        sleeps: 5, 
        gvwr: 123,
        height: 456,
        freshWater: 55,
        image: '/images/models/camper/wilderness/1.jpg',
        length: 34,
        weight: 100,
        slides: 2,
        album: generateAlbum('/images/models/camper/wilderness', 14)
    },
  ];
  

const inventoryWithIds = inventory.map((item, index) => ({ ...item, id: index + 1 }));

export {inventory, inventoryWithIds};