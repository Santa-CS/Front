import React from 'react';
import { Link } from 'react-router-dom';

const Solve = (props) => {
    const confirm=()=>{
        fetch('http://ec2-3-35-151-197.ap-northeast-2.compute.amazonaws.com/api/questions/new',{
            method:'POST',
            body:JSON.stringify({
            }),
        })
            .then(res=>res.json())
            .then((result)=>{
                
            });
    }
}

export default Solve;