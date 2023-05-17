import React from 'react'
import { styled } from 'styled-components'

function MainDostavka() {
    return (
        <Wrapper>
            <div className="container">
                <h2>Доставка</h2>

                <div className="content">
                    <ul className='info'>
                        <li className="item">
                            <div className="image">
                                <img src="./images/dostavka2.png" alt="" />
                                <span>Быстро</span>
                            </div>

                            <p className="text">
                                Доставка до 3 часов по Санкт-Петербургу
                            </p>
                        </li>

                        <li className="item item-2">
                            <div className="image">
                                <img src="./images/dostavka3.png" alt="" />
                                <span>Бесплатно</span>
                            </div>

                            <p className="text">
                                При заказе от 5000 доставка в пределах Санкт-Петербурга бесплатна
                            </p>
                        </li>
                    </ul>

                    <div className="youtube">
                        <iframe width="1046" height="441" src="https://www.youtube.com/embed/Qz4OKVieTG4?list=RDT2cLhDzUo_A" title="Хамдам Собиров - Гавхарим (Премьера клипа, 2023)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <img className='bg' src="./images/dostavka1.png" alt="" />
        </Wrapper>
    )
}

export default MainDostavka

const Wrapper = styled.section`
    padding: 80px 0;
    position: relative;

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .bg {
        width: 337.5px;
        height: 500px;
        position: absolute;
        top: 0;
        left: 470px;
        margin-top: 135px;

    }

    h2 {
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        color: #15100C;
        padding-left: 150px;
        margin-bottom: 100px;
    }

    span {
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 39px;
        color: #443926;
        padding-left: 10px;
    }   
    
    .text {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #443926;
        padding-left: 45px;
        max-width: 320px;
        margin-top: 12px;
    }

    .info {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 145px;
    }

    .item-2 {
        padding-left: 70px;
    }

    .youtube{
        width: 493px;
        height: 702.39px;
        left: 782px;
        top: 3700.58px;
        background: #C4D7A7;
        backdrop-filter: blur(10px);
        border-radius: 257.5px 257.5px 0px 0px;
        overflow: hidden;
        padding: 45px 39px;

        iframe {
            width: 100%;
            height: 100%;
        border-radius: 257.5px 257.5px 0px 0px;
overflow: hidden;
        }
    }
`