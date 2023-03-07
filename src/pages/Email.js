import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

/*
const User={
    id:'test@example.com',
    pw:'test123!'
}*/


const Email = (props) => {

    const[id,setid]=useState("");
    const[pw,setpw]=useState("");

    const confirm=()=>{
        fetch('http://ec2-3-35-151-197.ap-northeast-2.compute.amazonaws.com/api/login',{
            method:'POST',
            body:JSON.stringify({
                email:id,
                password:pw,
            }),
        })
            .then(res=>res.json())
            .then((result)=>{
                if(result.token!==undefined){
                    alert('성공');
                    localStorage.setItem('access_token :',result.token);
                    Navigate('/MainP');
                }
                else{
                    alert('아이디 또는 패스워드를 확인해주세요');
                }
                console.log('결과 : ',result);
            });
       /*if(id===User.id && pw===User.pw){
            window.location.href='/MainP';
        }
        else{
            alert('noopp.');
        }*/
    }

    return (
        <div class="frame1">
            <div class="frame2">
                <div style={{color:'rgb(105, 103, 103)', fontSize:"14px", fontWeight:'600'}}>
                    이메일 로그인
                </div>
                <input 
                    placeholder='이메일을 입력해주세요' 
                    class='Input'
                    value={id}
                    onChange={(e)=>setid(e.target.value)}/>
                <hr style={{width:'90%' ,marginTop:'5px'}}></hr>
                <input 
                    placeholder='비밀번호를 입력해주세요' 
                    class='Input'
                    value={pw}
                    onChange={(e)=>setpw(e.target.value)}/>
                <hr style={{width:'90%', marginTop:'5px'}}></hr>
                <button onClick={confirm} class='Eloginbutton'>로그인</button>
                <Link to="/Findpw">
                <button class='findPW'>비밀번호 찾기</button>
                </Link>
            </div>
        </div>
    );
}

export default Email;