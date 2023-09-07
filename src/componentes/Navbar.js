import styled from "styled-components";
import logo from '../logo.svg';
const StyledNav = styled.nav`
    display: flex;
    height: 10vh;
    justify-content: space-between;
    background-color: #add8e6;
    img {
        height: 100%;
        ;
    }

    ul {
        display: flex;
        width: 30%;
        height: 100%;
        justify-content: space-around;
        align-items: stretch;
        margin: 0%;
        padding: 0%;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
    }

    li {
        display: block ;
        height: 100%;
        flex-grow: 1;
    }
    
    ul :hover{
        background-color: #85b0bd; /* Green */
    }
  
`;

export default function Navbar({user}) {
    return (
        <StyledNav>
            <ul>
                <li><p className="font-link">Proyecto</p></li>
                <li><p className="font-link">Propuestas</p></li>
                <li><p className="font-link">Empleados</p></li>
                <li><p className="font-link">Vacaciones</p></li>
                <li><p className="font-link">Cuenta</p></li>
            </ul>
            <img src={logo} alt='Logo' />

        </StyledNav>
    );
}

