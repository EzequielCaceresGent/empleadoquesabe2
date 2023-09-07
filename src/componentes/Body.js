import Tarea from "./Tarea";
import styled from "styled-components";
const StyledTarea=styled.div`
    display: flex;
    background-color: #F08080;
    align-items: stretch;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    .padre{
        height:100% ;
        width: 100%;
        
    }
`

 function Body(){
    const tarea=[{descripcion:"el pepe adsadsadasdsadasdasdasdsadsadasasdasdsa",cargaHoraria:5,completado:false},
    {descripcion:"el pepe",cargaHoraria:7,completado:false},
    {descripcion:"el pepe",cargaHoraria:8,completado:false},
    {descripcion:"el pepe",cargaHoraria:7,completado:false},
    {descripcion:"el pepe",cargaHoraria:8,completado:false},];
    return (
        <StyledTarea >
        <div className="padre">
         {tarea.map( unaTarea=><Tarea tarea={unaTarea}/>)}
         </div>
        </StyledTarea>
      );
}



export default Body;