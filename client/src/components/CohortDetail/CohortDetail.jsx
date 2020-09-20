import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import Pms from './Pms.jsx'
import Send from './Send.jsx'
import Links from './Links.jsx'

export function CohortDetail({match}){

    return (
        <div style={{display: 'flex'}}>
        <div >
            <Pms match={match}/>
        </div>
        <div >
            <Send/> 
            <Links/> 
        </div> 
        </div>
    )
}

// const mapStateToProps = () => ({
   
//   })
  
//   const mapDispatchToProps = () => ({
    
//   })

export default connect(null, {})(CohortDetail)