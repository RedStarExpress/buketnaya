import React from 'react'
import { styled } from 'styled-components'

function MainOnas() {
    return (
        <Wrapper>
            <div className="container">
                <h3>O нас</h3>
                <ul className="card">
                    <li className="card-item">
                        <img src="./images/onas2.svg" alt="" />
                        <p>Никакой химии в производстве</p>
                    </li>
                    <li className="card-item">
                        <img src="./images/onas2.svg" alt="" />
                        <p>Никакой химии в производстве</p>
                    </li>
                    <li className="card-item">
                        <img src="./images/onas2.svg" alt="" />
                        <p>Никакой химии в производстве</p>
                    </li>
                    <li className="card-item">
                        <img src="./images/onas2.svg" alt="" />
                        <p>Никакой химии в производстве</p>
                    </li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default MainOnas

const Wrapper = styled.section`
    h3 {
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100C;
    margin-bottom: 40px;
}


.card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.card-item {
    border: 2px solid #779243;
    border-radius: 127.5px 0px 127.5px 40px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 49px 56px;

    p{
        text-align: start;
        width: 137px;
        margin-top: 20px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #443926;
    }
}
`