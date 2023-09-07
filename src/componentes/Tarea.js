import { useState } from "react";
import styled from "styled-components";



  

function Tarea(props){
    const [mostrar,setMostrar]=useState(false);
    const [completado,setCompletado]=useState(false);
    
    const StyledDatos=styled.div`
    display: flex;
    justify-content: space-around;
    margin: 10px;
    align-items: center;
    height: 100%;
    border: solid white 1px;
    border-radius: 5px;
    #descripcion{
        display: ${mostrar?"absolute":"none"};
        font-size: ${mostrar?"15px":"20px"};
        max-height: 100px;
        width: 300px;
    
    }
    #mas{
        background-color: white;
        font-size: 12px;
        border-radius: 8px;
        border: 2px solid #008CBA;
        -webkit-transition-duration: 0.4s; /* Safari */
        transition-duration: 0.4s;
    }
    #mas:hover {
    background-color: #4CAF50; /* Green */
   
}
    `
    function mostrarDescripcion(){
        setMostrar(!mostrar);
    }
    function marcarCompletado(){
        setCompletado(!completado);
    }
    return(
        
            <StyledDatos>
            <p className="font-link">Carga Horaria:{props.tarea.cargaHoraria} Horas</p>
            <p className="font-link">{props.tarea.completado?"Esta completado":"No esta completado"}</p>
            <button id="mas" className="font-link" onClick={mostrarDescripcion}>Ver más</button>
            <div className="font-link" id="descripcion">{props.tarea.descripcion}</div>
            <button id="mas" className="font-link" onClick={marcarCompletado}>Marcar como completado</button>
            </StyledDatos>
            
        );
}



export default Tarea;