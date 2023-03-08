import React from "react"

function Search(props){
    return( 
    <div className="search">
    <input
    value={props.value}
    onChange={event => props.setLocation(event.target.value)}
    onKeyPress={props.searchLocation}
    placeholder='Enter Location'
    type="text" />
    </div>
    )
}

export default Search