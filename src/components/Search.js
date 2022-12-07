import styled from "styled-components";

const Search = () => {
    return <Cover>
        <input type="search" name="hostel-search" id="hostel-search" placeholder={"Search for Hostels"}/>
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
export default Search