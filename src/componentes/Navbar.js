import styled from "styled-components";
import logo from '../logo.svg';
const StyledNav = styled.nav`
    display: flex;
    height: 20vh;
    justify-content: space-between;
    background-color: lightblue;
    img {
        height: 100%;
    }

    ul {
        display: flex;
        align-items: stretch;
        width: 30%;
        height: 100%;
    }

    li {
        display: block;
        height: 100%;
        flex-grow: 1;
    }
`;

export default function Navbar({user}) {
    return (
        <StyledNav>
          
            <ul>
             
                <li><p to="/proyecto">Proyecto</p></li>

                
                <li><p to="/propuestas">Propuestas</p></li>

                
                <li><p to="/empleados">Empleados</p></li>

                <li>Vacaciones</li>
                <li>Cuenta</li>
            </ul>
            <img src={logo} alt='Logo' />

        </StyledNav>
    );
}

