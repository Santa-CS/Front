import React from 'react';
import { Link } from 'react-router-dom';

const Signin = (props) => {
    return (
        <div class="frame1">
            <div class="frame2">
                <div style={{color:'rgb(105, 103, 103)', fontSize:"14px", fontWeight:'600'}}>
                    회원가입하기
                </div>
                <h6 class='입력해주세요'>이름을 입력해주세요</h6>
                <input class='Input'></input>
                <hr style={{width:'90%'}}></hr>
                <h6 class='입력해주세요'>이메일을 입력해주세요</h6>
                <input class='Input'></input>
                <hr style={{width:'90%'}}></hr>
                <h6 class='입력해주세요'>비밀번호 설정(최소 8자리)</h6>
                <input class='Input'></input>
                <hr style={{width:'90%'}}></hr>
                <h6 class='입력해주세요'>비밀번호 재입력</h6>
                <input class='Input'></input>
                <hr style={{width:'90%'}}></hr>
                <button class='Eloginbutton'>가입완료</button>
                <Link to="/Email">
                    <button class='findPW'>기존 이메일로 로그인</button>
                </Link>
            </div>
        </div>
    );
}

export default Signin;