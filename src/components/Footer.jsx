import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <Wrapper>
            <div className="container">
                <div className="footer">
                    <div className="info">
                        <Link to={"/"}>
                            <img className='logo' src="./images/logo.svg" alt="" />
                        </Link>

                        <p className="text">
                            Мы обожаем цветы и чувствуемих особую роль в жизни города.
                            Воплощаем  современных букетах чувства современных людей.
                        </p>
                    </div>

                    <div className="navigation">
                        <div className="ul-list">
                            <ul className="nav">
                                <li className='nav-item'>
                                    <Link to="/oнас">О нас</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/букеты">Букеты</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/доставка">Доставка</Link>
                                </li>
                            </ul>

                            <ul className='nav'>
                                <li className='nav-item'>
                                    <Link to="/oтзывы">Отзывы</Link>
                                </li>

                                <li className='nav-item'>
                                    <Link to="/блог">Блог</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="ul-list contact">
                            <ul className="nav">
                                <li className="nav-item">
                                    <img src="./images/mail.svg" alt="" />
                                    <Link to={"mail: info@"}>info@</Link>

                                    <span></span>
                                </li>

                                <li className='nav-item'>
                                    <img src="./images/tel.svg" alt="" />
                                    <Link to={"tel: +79119276162"}>+ 7 (911) 927-61-62</Link>
                                </li>

                                <li className='nav-item'>
                                    <img src="./images/location.svg" alt="" />
                                    <Link to={"tel: +79119276162"} style={{ maxWidth: "228px" }}>г. Санкт-Петербург, адрес адрес адрес</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <p className='end-p'>Букетная Мануфактура © 2023 Все права защищены</p>
            </div>
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.footer`
    background-color: ${props => props.theme.colors.secondaryBackground};
    padding-top: 30px;

    .logo {
        cursor: pointer;
    }

    .footer {
        display: flex;
        justify-content: space-between;
    }

    .navigation {
        display: flex;
        gap: 56px;

        .contact .nav-item {
            display: flex;
            gap: 9px;
        }
    }

    .info {
        display: flex;
        align-items: center;
        gap: 54px;
        
        .text {
            max-width: 306px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: ${props => props.theme.colors.whiteColor};
        }
    }

    .ul-list {
            display: flex;
            gap: 30px;

            .nav {
                list-style: none;
                display: flex;
                flex-direction: column;
                gap: 12px;

                a {
                    text-decoration: none;
                    color: ${props => props.theme.colors.whiteColor};
                    font-style: normal;
                    font-weight: 500;
                    font-size: 18px;
                    line-height: 22px;
                }
            }
        }  

    .end-p {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #F4ECDF;
        padding-top: 80px;
        padding-bottom: 40px;
    }
`