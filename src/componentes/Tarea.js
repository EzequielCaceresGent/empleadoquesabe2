import { useState } from "react";
import styled from "styled-components";
import Empleado from "./Empleado";

function Tarea(props){
    const [mostrar,setMostrar]=useState(false);
    const [completado,setCompletado]=useState(false);
    const[mostrarEmpleado,setMostrarEmpleado]=useState(false);
    const StyledDatos=styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px;
    align-items: center;
    height: 100%;
    border: solid #008CBA 2px;
    border-radius: 10px;
    font-weight: bold;
    color: white;
    #descripcion{
        display: ${mostrar?"block":"none"};
        font-size: ${mostrar?"15px":"20px"};
        max-height: 100px;
        width: 300px;
    
    }
    #mas{
        background-color: #31302F;
        font-size: 12px;
        -webkit-transition-duration: 0.4s; 
        transition-duration: 1s;
        height: 5vh;
        border: none
       
    }
    #mas:hover {
    background-color: #008CBA; 
    }
    #info{
        display: ${mostrarEmpleado?"block":"none"};
        font-size: ${mostrarEmpleado?"12px":"0px"};
    }
    #completado{
        color: ${completado?"green":"black"};
    }
    `
    function mostrarDescripcion(){
        setMostrar(!mostrar);
    }
    function marcarCompletado(){
        setCompletado(!completado);
        props.tarea.completado=true;
    }
    const empleado=[{area:"Informatica",proyectoAsignado:"PepeAdventures",usuarioAsignado:"MaxiBobo"}];
    function mostrarEmpleados(){
        setMostrarEmpleado(!mostrarEmpleado);
    }
    return(
        
            <StyledDatos>
            <p className="font-link">Carga Horaria:{props.tarea.cargaHoraria} Horas</p>
            <p id="completado"className="font-link">{props.tarea.completado?"Esta completado":"No fue completado"}</p>
            <button id="mas" className="font-link" onClick={mostrarDescripcion}>Ver más</button>
            <div className="font-link" id="descripcion">{props.tarea.descripcion}</div>
            <button id="mas" className="font-link" onClick={marcarCompletado}>Marcar como completado</button>
            <button id="mas"className="font-link" onClick={mostrarEmpleados} >Empleados Asociados</button>
            <div id="info"> {empleado.map( unEmpleado=><Empleado empleado={unEmpleado}/>)} </div>
            </StyledDatos>
            
        );
}



export default Tarea;