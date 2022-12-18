import {data} from "../data/hostelData.js";
import Hostel from "./Hostel.js";
import styled from "styled-components";
import Search from "./Search";
import {useState} from "react";

const HostelList = () => {
    const [hostel, setHostel] = useState()

    const getHostel = (found) => {
        setHostel(found)
    }
    const {name, id, location} = hostel
    return <div>
        <TopArea />
        <Search hostels={data} filterProp={getHostel}/>
        <Columns>
            {hostel ? <Hostel key={id} name={name} location={location} />: data.map((hostel)=> {
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