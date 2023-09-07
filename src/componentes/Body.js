import Tarea from "./Tarea";
import styled from "styled-components";
const StyledTarea=styled.div`
    display: flex;
    background-color: #FF7D33;
    align-items: stretch;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
`

 function Body(){
    const tarea=[{descripcion:"el pepe asdasdsadasdasdsa",cargaHoraria:5,completado:false},
    {descripcion:"el pepe",cargaHoraria:7,completado:false},
    {descripcion:"el pepe",cargaHoraria:8,completado:false},];
    return (
        <StyledTarea >
        
         {tarea.map( unaTarea=><Tarea tarea={unaTarea}/>)}
          
        </StyledTarea>
      );
}



export default Body;