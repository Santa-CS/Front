import React from 'react';
import { Link } from 'react-router-dom';

const MainP = (props) => {
    return (
        <div class="frame1">
            <div class="frame2">
                <h3>OO님 환영합니다!</h3>
                <Link to="/Solve">
                <button class='findPW'>문제풀기</button>
                </Link>
            </div>
        </div>
    );
}

export default MainP;