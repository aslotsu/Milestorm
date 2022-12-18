import Nav from "./components/Nav";
import {Route, Routes} from "react-router-dom";
import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./pages/Home";
import HostelList from "./components/HostelList.js";

const App = () => {
    return <>
        <GlobalStyle/>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/hostels" element={<HostelList />} />
        </Routes>

    </>
}
export default App