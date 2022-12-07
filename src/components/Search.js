import styled from "styled-components";

const Search = () => {
    return <Cover>
        <Place type="search" name="hostel-search" id="hostel-search" placeholder={"Search for Hostels"}/>
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
  padding: 3px 15px;
  border: 0;
  &:focus {
    //border: 2px palegoldenrod;
    border-bottom: 2px solid black;
  }
`
export default Search