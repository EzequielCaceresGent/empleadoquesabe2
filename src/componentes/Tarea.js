import { useState } from "react";
import styled from "styled-components";



  

function Tarea(props){
    const [mostrar,setMostrar]=useState(false);
    
    const StyledDatos=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
    align-items: center;
    #descripcion{
        display: ${mostrar?"block":"none"};
    }
    `
    function mostrarDescripcion(){
        setMostrar(!mostrar);
    }
    return(
        
            <StyledDatos>
            <p className="font-link">Carga Horaria:{props.tarea.cargaHoraria} Horas</p>
            <p className="font-link">{props.tarea.completado?"Esta completado":"No esta completado"}</p>
            <button className="font-link" onClick={mostrarDescripcion}>ver mas</button>
            <div className="font-link" id="descripcion">{props.tarea.descripcion}</div>
            </StyledDatos>
       
        );
}



export default Tarea;