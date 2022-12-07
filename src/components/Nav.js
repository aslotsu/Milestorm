import styled from "styled-components";

const Nav = () => {
    return <MainNav>
        <div>
            <Name>Milestorm</Name>
        </div>
    </MainNav>
}

const MainNav = styled.nav`
  background-color: #29027f;
  height: 16.67vh;
  display: flex;
  z-index: 4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  justify-content: center;
  align-items: center;

`

const Name = styled.h2`
  color: white;
  font-size: 3rem;
`
export default Nav