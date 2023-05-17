import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Header() {
    return (
        <Wrapper>
            <div className="container">
                <div className="navbar">
                    <Link to={"/"}>
                        <img className='logo' src="./images/logo.svg" alt="" />
                    </Link>

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

                            <li className='nav-item'>
                                <Link to="/oтзывы">Отзывы</Link>
                            </li>

                            <li className='nav-item'>
                                <Link to="/блог">Блог</Link>
                            </li>
                        </ul>

                        <ul className="nav">
                            <li className='nav-item'>
                                <Link to={"tel: +79119276162"}>+ 7 (911) 927-61-62</Link>
                            </li>

                            <li className='nav-item'>
                                <img src="./images/korzinka.svg" alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.header`
    height: 70px;
    background-color: ${props => props.theme.colors.secondaryBackground};

    .logo {
        cursor: pointer;
    }

    .navbar {
        display: flex;
        align-items: center;
        gap: 46px;

        .ul-list {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .nav {
                list-style: none;
                display: flex;
                align-items: center;
                gap: 20px;

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
    }
`