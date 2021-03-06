import React, { useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
// import {Link} from 'react-router-dom';
// import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Axios from 'axios';
import {setUser} from '../../actions/user.js';
import {connect} from 'react-redux';
//import {useHistory} from 'react-router-dom';
  
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
  export function NewUser(props) {
    //const history = useHistory();
    const classes = useStyles();
    const [input,setInput]=React.useState({
      email:'',
      password:''
    });

    //MANEJO DE ONCHANGE()
    const handleInputChange = function(e) {
      setInput({
        ...input,
        [e.target.name]:e.target.value
      })
    }

    //FUNCION QUE MANDA AL BACK LOS DATOS SOLO SI SON CORRECTOS!
    const loginUser = function  (e,input){  
        //NO REFRESCA LA PAGINA!
      e.preventDefault();
      console.log(input)
      //CONFIRMA MAIL Y CONTRASEÑA
      if (/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,}$/.test(input.password) && /\S+@\S+\.\S+/.test(input.email))
      {
        //COMPRUEBA EN LA BASE DE DATOS QUE SEAN LOS CORRECTOS PARA UN USUARIO!
        Axios.put('http://localhost:3001/user/inviteuser',input)
        .then( async resp=> {
            await props.setUser(resp.data)
        })
        //TODAVIA NO ESTA ARMADO EL JSON DESDE EL BACK!!!
        .catch(error=>{
          //POR LA LINEA 72-> SIEMPRE ENTRA AL FALSE!!
            if (error ===404){
                alert("El mail ingresado no es valido! Por favor ingresa el mail con el que fusite invitado!")
            } else {
                alert("El usuario ya tiene un perfil asociado!")
            }
        })
      } else {
        //SI LOS DATOS NO SON CORRECTOS VUELVE PARA INGRESAR DATOS!
          alert("Los datos no son validos!")
        return;
      }
      return;
    }
    //COMPONENTE DE MATERIAL UI
    return (
        <div>
        {props.user.user.id === 0 &&
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Ingresar
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={(e) => handleInputChange(e)}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Contraseña"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e)=>handleInputChange(e)}
                    />
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={(e)=>loginUser(e,input)}
                    >
                    Ingresar
                    </Button>
                </form>
                </div>
            </Container>}
        </div>
    );
  }

  const mapStateToProps = state => {		
    return {		
      user: state.user,
    }		
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      setUser: (resp)=>dispatch(setUser(resp)),
    }
  }
      
  export default connect(mapStateToProps, mapDispatchToProps)(NewUser);  