import React from 'react';

const FindPW = (props) => {
    return (
        <div class="frame1">
            <div class="frame2">
                <div style={{color:'rgb(105, 103, 103)', fontSize:"14px", fontWeight:'600', marginBottom:'80px'}}>
                    비밀번호 찾기
                </div>
                <div class='aa'></div>
                <h6 style={{color:'rgb(105, 103, 103)', marginBottom:'8px'}}>가입한 이메일을 입력해주세요</h6>
                <input class='Input'></input>
                <hr style={{width:'90%' , marginBottom:'50px'}}></hr>
                <div class='aa'></div>
                <button class='Eloginbutton'>비밀번호 재설정 메일 보내기</button>
            </div>
        </div>
    );
}

export default FindPW;