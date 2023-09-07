import styled from "styled-components";
 const StyledEmpleado=styled.div`
    width: 100%;
    height: 100%;
    background-color: #31302F;
    border: solid  #008CBA 1px;
    border-radius: 10px;
    color:white ;
 
 
 `

function Empleado(props){
    return(
        <StyledEmpleado>
           <p className="font-link">Area:{props.empleado.area}</p> 
           <p className="font-link">Proyecto asignado: {props.empleado.proyectoAsignado}</p>
           <p className="font-link">Usuario Asociado: {props.empleado.usuarioAsignado}</p>
        </StyledEmpleado>
    );
}


export default Empleado;