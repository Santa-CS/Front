import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Solve=(props)=>{
    const [pbm, setpbm] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const problem = async()=>{
        try{
            setError(null);
            setpbm(null);
            setLoading(true);
            const response = await axios.get(
                'https://ec2-3-35-151-197.ap-northeast-2.compute.amazonaws.com/api/questions/new'
            );
            setpbm(response.data);
        }catch(e){
            setError(e);
        }
        setLoading(false);
    };

    useEffect(()=>{
        problem();
    },[]);

    if(loading) return <div>loading...</div>;
    if(error) return <div>error...</div>;
    if(!pbm) return <div>alert("none")</div>;

    return(
        <div>
        <h2>answer : {pbm.answer}</h2>
        </div>
    )
}


export default Solve;



/* 
    const Solve = async() => {
    
}

    const Solve = (props) =>

    const[pbm,setPbm]=useState([]);
    
    useEffect(()=>{
        fetch('http://ec2-3-35-151-197.ap-northeast-2.compute.amazonaws.com/api/questions/new',{
            method:'POST',
            headers: [["Content-Type", "application/json"]],
        })
            .then(res=>res.json())
            .then(pbm=>{
                setPbm(pbm);
            })
    });
    return(
        <div>
            <h2>chapter : {pbm.answer}</h2>
        </div>
        
    );
    */