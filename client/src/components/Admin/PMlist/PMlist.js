import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { getPms } from '../../actions/pm';

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

export function AllPms({getPms}){
   const [pms, setPms] = useState()
    const classes = useStyles()
    
    useEffect(()=>{
        getPms()
        .then(data => setPms(data.payload))    
    }, [])
    console.log(pms)
    return (
        <div> 
          {pms && pms.length === 0 ? (
        <div>
          <h4>
            {' '}
            No hay PMs para mostrar
          </h4>
        </div>
      ) : (
        <div className={classes.paper} >
          <h3>Project Managers</h3>
          {pms &&
            pms.map(u => (
            <div  className={classes.paper}  key={u.id} > 
            <ListItemText primary={u.name + " " + u.startDate} />
            <Link to="/gruop/:id" > ver detalles </Link> {/* Link a lista de alumnos del grupo en especifico */}
            <hr/>
            </div>
            ))}
            </div>)}
      </div>
    )
}

const mapDispatchToProps = dispatch => ({
  getPms: () =>  dispatch(getPms())
})
    
export default connect(null, mapDispatchToProps)(AllPms)