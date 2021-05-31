import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield,searchChange}) => {

    return (
        <div className='search-div'>
            <input
                className='search-input'
                type='search'
                placeholder='Search robots'
                // onChange this is a event we add event with function
                onChange={searchChange}

            />
        </div>
    )

}
export default SearchBox;