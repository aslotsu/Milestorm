import {data} from "../data/hostelData.js";
import Hostel from "./Hostel.js";
import styled from "styled-components";

const HostelList = () => {
    return <div>
        <TopArea />
        <Columns>
            {data.map((hostel)=> {
                return  <Hostel key={hostel.id} name={hostel.name} location={hostel.location} />
            })}
        </Columns>
    </div>
}

const TopArea = styled.div`
  height: 16.67vh;
`

const Columns = styled.div`
  display: flex;
  flex-flow: row wrap;
`
export default HostelList