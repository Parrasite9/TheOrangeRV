import React, { useState } from 'react'
import inventory from '../Inventory';

function Search() {

    const [query, setQuery] = useState('')

    const filteredInventory = inventory.filter(item => 
        item.name.toLowerCase().includes(query.toLowerCase()))



    return (
        <div>
            <input
            type="text"
            placeholder="Search RVs"
            value={query}
            onChange={e => setQuery(e.target.value)}
            />
            <div className='flex'>
            {filteredInventory.map(rv => (
                <div key={rv.id} className='border'>
                    <img src={rv.image} alt={rv.name} />
                    <h2>{rv.name}</h2>
                    <p>Price: ${rv.price}</p>
                </div>
            ))}
            </div>
        </div>
        );
    }
            

export default Search
