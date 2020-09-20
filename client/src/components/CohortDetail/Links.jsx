import React, {useState, useEffect} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

export default function links(){
     return (
        <div style={{margin: '10px'}} className="border border-light">
            <div style={{display:'flex',justifyContent:'center', alignItems: 'center',  
            backgroundColor: "rgb(33,33,33)", padding: '10px'}} >
                 <button class="btn btn-outline-warning btn-sm  ml-1 ">Todos</button>
                 <button className='btn btn-outline-warning btn-sm ml-1 border-0'>M-1</button>
                 <button className='btn btn-outline-warning btn-sm ml-1 border-0'>M-2</button>
                 <button className='btn btn-outline-warning btn-sm ml-1 border-0'>M-3</button>
            </div>
            <div style={{width: "700px", height: "250px", overflow:'scroll' }} >
           <form >
               <div style={{display:'flex'}}>
                    <TextField variant="outlined" margin="normal" label="Nombre" size="small"
                    style={{ width: "211px",marginLeft:"25px"}}/>
                    <TextField variant="outlined" type='number' margin="normal"
                    size="small" label="Modulo" style={{width: "85px", marginLeft:"6px"}}/>
               
               <TextField variant="outlined"  margin="normal" fullWidth size="small" label="Link de la grabacion"
               style={{width: "300px", marginLeft: "6px"}}/>
               </div>
               <hr/>
           </form>
            <Paper style={{padding: '2px',margin: '20px auto',maxWidth: 300}}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography variant="body2">
                       
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1">X</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
            </div>
        </div>
     
    )
}