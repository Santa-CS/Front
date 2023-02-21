import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const User={
    id:'test@example.com',
    pw:'test123!'
}

const Email = (props) => {

    const[id,setid]=useState('');
    const[pw,setpw]=useState('');

    const confirm=()=>{
        if(id===User.id && pw===User.pw){
            window.location.href='/MainP';
        }
        else{
            alert('noopp.');
        }
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
                    onChange={(i)=>setid(i.target.value)}/>
                <hr style={{width:'90%' ,marginTop:'5px'}}></hr>
                <input 
                    placeholder='비밀번호를 입력해주세요' 
                    class='Input'
                    value={pw}
                    onChange={(p)=>setpw(p.target.value)}/>
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