import React from 'react'
import { styled } from 'styled-components'
import Button from './Button'

function Dostavka() {
    return (
        <Wrapper style={{ backgroundImage: `url(./images/dostavka_bg.png)` }}>
            <div className="container dostavka">
                <div className="title-div">
                    <h2 className='title'>Доставка цветов</h2>
                    <div className="circle"></div>
                </div>

                <div className="info">
                    <p>Мы работаем только с лучшими поставщиками, чтобы наши клиенты получали цветы высочайшего качества. Наша главная цель - порадовать наших клиентов красивыми и свежими букетами в любой ситуации.</p>
                    <Button>Заказать букет</Button>
                </div>
            </div>
        </Wrapper>
    )
}

export default Dostavka

const Wrapper = styled.section`
    height: 410px;
    margin: 80px 0;
    background-position: right;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    align-items: center;

    .title-div{
        position: relative;
    }

    .title {
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 600;
        font-size: 64px;
        line-height: 78px;
        color: ${props => props.theme.colors.blackColor};
    }

    .circle{
        width: 93px;
        height: 93px;
        background: ${props => props.theme.colors.secondaryBackground};
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: -30px;
        z-index: -1;
    }

    .info {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-top: 20px;

        p {
            max-width: 448px;
            font-style: normal;
            font-weight: 500;
            font-size: 20px;
            line-height: 24px;
            color: ${props => props.theme.colors.primaryColor};
        }
    }
`