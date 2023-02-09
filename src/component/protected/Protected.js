import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Protected(props) {
    const {Cmp} = props;
    const navigate = useNavigate()
    const login = window.localStorage.getItem('login');
    useEffect(()=>{
        if(!login){
            navigate('/');
        }
    },[login])
  return (
    <div><Cmp/></div>
  )
}

export default Protected