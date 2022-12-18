import styled from "styled-components";
import {useState} from "react";

const Search = ({hostels, filterProp}) => {

    const [searchTerm, setSearchTerm] = useState('')

    const filterHostels = () => {
        console.log(hostels);
        const b = hostels.filter(hostel => hostel.name === searchTerm)
        console.log(b)
        filterProp(b)


    }

    return <Cover>
        <Place type="search" name="hostel-search" id="hostel-search" placeholder={"Search for Hostels"} value={searchTerm} onChange={(event)=> setSearchTerm(event.target.value)}/>
        <button onClick={filterHostels}>Search</button>
    </Cover>
}

const Cover = styled.div`
  width: 100vw;
  height: 8.3333vh;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Place = styled.input`
  outline: 0;
  width: 20vw;
  min-width: 300px;
  padding: 3px ;
  border: 0;
  &:focus {
    //border: 2px palegoldenrod;
    border-bottom: 2px solid black;
  }
`
export default Search