import styled from "styled-components";
import "../assets/Delete.svg"

const Hostel = ({name, location}) => {
    return <Whole>
        {/*<DeleteBtn/>*/}
        <div>
            <HostelImage src={"https://images.unsplash.com/photo-1670272505497-d532f0b50702?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} alt="ghghg"/>

        </div>
        <Name>
            <h1>
                {name}
            </h1>
        </Name>
        <Bottom>
            <span className="location">{location}</span>
            <Prices>
                <h2>Prices: </h2>
                <span>3500</span>
                <span>4500</span>
                <span>5500</span>
                <span>6000</span>
            </Prices>
        </Bottom>
    </Whole>
}

const Whole = styled.div`
  border: 2px solid navy;
  background-color: navy;
  color: white;
  border-radius: 30px;
  width: 40%;
  height: 40vh;
  margin: 30px 50px;
  padding: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`

const Bottom = styled.div`
  display: flex;
  height: 30%;
  //border: 3px solid cadetblue;
  width: 100%;
  padding: 20px 0;
  justify-content: space-evenly;
  align-items: center;
  
   & span.location {
     font-size: 2rem;
   }
  `

const Name = styled.div`
 & h1 {
   text-align: center;
 }`
const Prices = styled.div`
  width: 40%;
  //border: 2px solid green;
  display: flex;
  padding: 10px 0;
  justify-content: space-evenly;
  align-items: center;
`

const HostelImage = styled.img`
  object-fit: cover;
  width: 700px;
  height: 200px;
`



export default Hostel