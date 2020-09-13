import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {ForgotPass} from '../../actions/user.js';
import {connect} from 'react-redux';
 
  
  //LOS ESTILOS DEL FORMULARIO SETEADOS
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  

  //LOGIN PRINCIPAL DE LA PAGINA!
  export function ForgotPassword(props) {
    
    const classes = useStyles();
    const [email, setMail]= useState({
        email: '',
    })


      const onSend =  async (e) =>{
        e.preventDefault();
        props.ForgotPass(email)
      }
  
      //MANEJO DE ONCHANGE()
      const handleInputChange = function(e) {
        setMail({
            ...email,
          [e.target.name]:e.target.value
        })
      }

    

    //COMPONENTE DE MATERIAL UI
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          {/* <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar> */}
          <Typography component="h1" variant="h5">
            Ingrese su email
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email.email}
              onChange={(e) => handleInputChange(e)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e)=>onSend(e)}
            >
              Send
            </Button>
          </form>
        </div>
      </Container>
    );
  }

  const mapStateToProps = state => {		
    return {		
      email: state.email,
    }		
  }

function mapDispatchToProps(dispatch) {
  return {
    ForgotPass: state => dispatch(ForgotPass(state))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForgotPassword)