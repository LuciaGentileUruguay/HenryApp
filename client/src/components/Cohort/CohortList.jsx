import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getCohorts, getCohortDetail } from '../../actions/cohort';

export function CohortList({getCohorts, getCohortDetail, cohortDetail, style}){

    const [cohorts, setCohorts] = useState()

    useEffect(()=>{
        getCohorts()     
        .then(data => setCohorts(data.payload))    
    }, [])
    

    //Busca el grupo al cual pertenece el alumno
    const buscarGrupo= (cohorte,grupoId)=>{
        let grupoName = "El alumno no tiene un grupo asignado"
        cohorte.groups.forEach(grupo => {
            if(grupoId==grupo.id){
                grupoName = grupo.name
            }
        })
        return grupoName
    }
    const orderById= (a,b) =>{
            if (a.id > b.id) {
              return 1;
            }
            if (a.id < b.id) {
              return -1;
            }
            // a must be equal to b
            return 0;
          }
    
    return (
        <div class="bg-dark" style = {style}>
            <h2 class="bg-dark text-warning text-center"> Alumnos </h2>
            <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <button class="btn btn-outline-warning mb-2 mt-2 " onClick={() => getCohorts()}> Ver Todos </button>
            </div>
            <div class="bg-dark" style={{display:"flex", justifyContent:"center", marginTop: '3px'}}>
                <h6 class="text-light mt-2">Filtrar por cohorte: </h6>
                <div>
                    {cohorts && cohorts.map((c) => (         
                        <button type="button" onClick={() => getCohortDetail(c.id)}class="btn btn-outline-warning ml-1 border-0" >{c.id}</button>
                        ))
                    } 
                </div>
            </div> 
            <table class="table">
                <thead class="thead-dark">
                <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Cohorte</th>
                <th scope="col">Email</th>
                <th scope="col">Grupo</th>
                </tr>
                </thead>
                <tbody>
                {/* Si se selecciono un cohorte en particular, solo mostrara informacion de los alumnos del mismo,
                 */}
                {cohortDetail[0] ? cohortDetail.sort((a,b)=>orderById(a,b)).map((c) => (
                    c.usuarios.sort((a,b)=>orderById(a,b)).map(u => (
                        <tr class="bg-light"> 
                        <td>{u.name}</td>
                        <td>{u.lastName}</td>
                        <td>{c.name}</td>
                        <td>{u.email}</td>
                        <td>{buscarGrupo(c,u.groupId)}</td>
                        </tr> 
                    ))                         
                    //si no, se mostrara todos los alumnos de todos los cohortes  
                    )): cohorts ? cohorts.sort((a,b)=>orderById(a,b)).map((c) => (
                    c.usuarios.sort((a,b)=>orderById(a,b)).map(u => (
                        <tr class="bg-light"> 
                        <td>{u.name}</td>
                        <td>{u.lastName}</td>
                        <td>{c.name}</td>
                        <td>{u.email}</td>
                        <td>{buscarGrupo(c,u.groupId)}</td>
                        </tr> 
                    ))   
                )) : null
                }                
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => ({
   cohorts: state.cohort.cohorts,
   cohortDetail: state.cohort.cohortDetail
  })
  
  const mapDispatchToProps = dispatch => ({
    getCohorts: () =>  dispatch(getCohorts()),
    getCohortDetail: (id) => dispatch(getCohortDetail(id))
  })

export default connect(mapStateToProps, mapDispatchToProps)(CohortList)