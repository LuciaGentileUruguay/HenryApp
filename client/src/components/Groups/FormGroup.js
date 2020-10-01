import React, {useState, useEffect} from 'react';
import { CssBaseline,Button,TextField,Typography,Container,Grid,Box, Input } from '@material-ui/core';
import { makeStyles} from '@material-ui/core';
import { connect } from 'react-redux'
import axios from "axios"
import {addGroup} from '../../actions/group'
import {getPm} from '../../actions/pm'
import {getCohorts} from '../../actions/cohort'
import {useHistory } from 'react-router-dom'

/* componente de creacion de grupos  */

  const useStyles = makeStyles((theme) => ({
    submit: {
      margin: theme.spacing(2, 0, 0),
      marginButton: theme.spacing(2)
    },
    inputGroup:{
      fontSize:"1.5rem",
      right:1,
      fontWeight: "bold",
      color: "white"
    }
  }));
  
  export function FormGroup({ getPm, pms, getCohorts, addGroup, style}) {

  const history = useHistory()
  const classes = useStyles();
  const [pm,setPm] = useState(pms)
  const [groups,setGroups] = useState([])
  const [cohort, setCohort] = useState({usuarios:[]})
  const [input, setInput]= useState({
    grupos: 1
  });
  
  var aux
  useEffect(()=>{
    getPm()
    .then(data => {
      setPm(data.payload.filter(p=> !p.groupId))
    })
    getCohorts()  
    .then(res=>{
      setCohort(
        res.payload[res.payload.length-1]
      )
    })
    .catch(err =>{console.log("Error")})          
  },[input])
      

  const handleInputChange = function(e) {
    const g=Number(e.target.value)
    if (g > pm.length){
      e.target.value = pm.length
    }else if (g <= 0){
      e.target.value = 1
    } else{
      setInput({
        ...input,
        [e.target.name]:e.target.value
      })
    }
  }


const sleep= function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }  

  const handleSubmit = async function (e) {
    e.preventDefault()
    addGroup(cohort.id,input.grupos)
    await sleep(2000)
    axios.put("http://localhost:3001/pm/setGroup/"+cohort.id)
  }

  return (
    <div style = {style}>
    <Container component="main" class="bg-dark" style={{margin:"120px", maxWidth:"sm"}}>
      <h2 class="bg-dark text-warning text-center" style={{padding: '10px'}}>  Crear Grupos </h2>
      <Grid container style={{margin:"auto"}}>
        <Grid item xs={6}> <h4 class="table table-dark" style={{padding: '10px'}}>  Cohorte: </h4> </Grid>
        <Grid item xs={6}> <h4 class="table table-dark" style={{padding: '10px', align:"right"}}>  {cohort?cohort.name:"..."} </h4> </Grid>
        <Grid container>
          <Grid item xs={6}> <h4 class="table table-dark" style={{padding: '10px'}}> Alumnos totales </h4> </Grid>
          <Grid item xs={6}> <h4 class="table table-dark" style={{padding: '10px', align:"right"}}> {cohort?cohort.usuarios.length:"..."} </h4> </Grid>
          <Grid item xs={6}> <h4 class="table table-dark" style={{padding: '10px'}}> PMs disponibles </h4> </Grid>
          <Grid item xs={6}> <h4 className={classes.inputGroup} > {pm.length} </h4> </Grid>
        </Grid>
        <Grid container style={{justifyContent:"space-between"}}>
          <Grid item xs={6}> <h4 class="table table-dark" style={{padding: '10px'}}> Cantidad de grupos</h4> </Grid>
          <Grid item xs={2} sm={1}> <Input type="number" className={classes.inputGroup} name="grupos" defaultValue={1} onChange={(e) => handleInputChange(e)}/> </Grid>
        </Grid>
        <Grid style={{margin:"auto"}} item xs={6}>
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={(e) => handleSubmit(e)} >
            Crear
          </Button>
        </Grid>
      </Grid>
    </Container>
    </div>
  )
}

  const mapStateToProps = (state) => {
    return{
      emails: state.cohort.emails,
      pms: state.pm.pms,
    }
  }
 
  const mapDispatchToProps = dispatch => { 
    return {
      addGroup: (cohortId,grupos) => dispatch(addGroup(cohortId,grupos)),
      getPm: ()=> dispatch(getPm()),
      getCohorts: () => dispatch(getCohorts())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(FormGroup)
