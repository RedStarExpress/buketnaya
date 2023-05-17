import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import Button from './Button'

function BlogSection() {
    return (
        <Wrapper>
            <div className="container">
                <h2 className='title'>Блог</h2>

                <ul className='blogs'>
                    <li className="blog-item">
                        <span className='date'>2022/22/8</span>

                        <img src="./images/blog1.png" alt="" />

                        <div className="info-title">
                            <h3 className='title'>Название статьи</h3>
                            <p className='text'>Текст </p>
                        </div>

                        <div className="blog-footer">
                            <div className="info">
                                <div className="hart">
                                    <img src="./images/hart.svg" alt="" />
                                    <span>15</span>
                                </div>

                                <div className="eye">
                                    <img src="./images/eye.svg" alt="" />
                                    <span>2001</span>
                                </div>
                            </div>

                            <Link to={"/blog/1"}>Читать</Link>
                        </div>
                    </li>

                    <li className="blog-item">
                        <span className='date'>2022/22/8</span>

                        <img src="./images/blog2.png" alt="" />

                        <div className="info-title">
                            <h3 className='title'>Название статьи</h3>
                            <p className='text'>Текст </p>
                        </div>

                        <div className="blog-footer">
                            <div className="info">
                                <div className="hart">
                                    <img src="./images/hart.svg" alt="" />
                                    <span>15</span>
                                </div>

                                <div className="eye">
                                    <img src="./images/eye.svg" alt="" />
                                    <span>2001</span>
                                </div>
                            </div>

                            <Link to={"/blog/1"}>Читать</Link>
                        </div>
                    </li>

                    <li className="blog-item">
                        <span className='date'>2022/22/8</span>

                        <img src="./images/blog3.png" alt="" />

                        <div className="info-title">
                            <h3 className='title'>Название статьи</h3>
                            <p className='text'>Текст </p>
                        </div>

                        <div className="blog-footer">
                            <div className="info">
                                <div className="hart">
                                    <img src="./images/hart.svg" alt="" />
                                    <span>15</span>
                                </div>

                                <div className="eye">
                                    <img src="./images/eye.svg" alt="" />
                                    <span>2001</span>
                                </div>
                            </div>

                            <Link to={"/blog/1"}>Читать</Link>
                        </div>
                    </li>

                    <li className="blog-item">
                        <span className='date'>2022/22/8</span>

                        <img src="./images/blog1.png" alt="" />

                        <div className="info-title">
                            <h3 className='title'>Название статьи</h3>
                            <p className='text'>Текст </p>
                        </div>

                        <div className="blog-footer">
                            <div className="info">
                                <div className="hart">
                                    <img src="./images/hart.svg" alt="" />
                                    <span>15</span>
                                </div>

                                <div className="eye">
                                    <img src="./images/eye.svg" alt="" />
                                    <span>2001</span>
                                </div>
                            </div>

                            <Link to={"/blog/1"}>Читать</Link>
                        </div>
                    </li>

                    <li className="blog-item">
                        <span className='date'>2022/22/8</span>

                        <img src="./images/blog2.png" alt="" />

                        <div className="info-title">
                            <h3 className='title'>Название статьи</h3>
                            <p className='text'>Текст </p>
                        </div>

                        <div className="blog-footer">
                            <div className="info">
                                <div className="hart">
                                    <img src="./images/hart.svg" alt="" />
                                    <span>15</span>
                                </div>

                                <div className="eye">
                                    <img src="./images/eye.svg" alt="" />
                                    <span>2001</span>
                                </div>
                            </div>

                            <Link to={"/blog/1"}>Читать</Link>
                        </div>
                    </li>

                    <li className="blog-item">
                        <span className='date'>2022/22/8</span>

                        <img src="./images/blog3.png" alt="" />

                        <div className="info-title">
                            <h3 className='title'>Название статьи</h3>
                            <p className='text'>Текст </p>
                        </div>

                        <div className="blog-footer">
                            <div className="info">
                                <div className="hart">
                                    <img src="./images/hart.svg" alt="" />
                                    <span>15</span>
                                </div>

                                <div className="eye">
                                    <img src="./images/eye.svg" alt="" />
                                    <span>2001</span>
                                </div>
                            </div>

                            <Link to={"/blog/1"}>Читать</Link>
                        </div>
                    </li>
                </ul>

                <div className="btn" style={{ textAlign: "center" }}>
                    <Button>Все статьи</Button>
                </div>
            </div>
        </Wrapper>
    )
}

export default BlogSection

const Wrapper = styled.section`
    padding: 80px 0;

    .title {
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        color: ${props => props.theme.colors.blackColor};
    }

    .blogs {
        position: relative;
        z-index: 1;
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 30px;
        margin-top: 40px;
        margin-bottom: 60px;

        .blog-item{
            width: 350px;
            background: #90AA91;
            box-shadow: 4px 4px 4px rgba(187, 187, 187, 0.25);
            border-radius: 5px;

            .info-title {
                padding: 34px 28px;
                
                .title {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 20px;
                    line-height: 24px;
                    color: ${props => props.theme.colors.whiteColor};
                }

                .text {
                    font-style: normal;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 25px;
                    color: ${props => props.theme.colors.whiteColor};
                }
            }

        }

        .date {
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            color: ${props => props.theme.colors.whiteColor};
            margin: 21px;
            display: flex;
            justify-content: flex-end;
        }
    }

    .blog-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 28px;
        margin-bottom: 14px;

        .info {
            display: flex;
            align-items: center;
            gap: 14px;

            span {
                font-style: normal;
                font-weight: 400;
                font-size: 12px;
                line-height: 15px;
                color: ${props => props.theme.colors.whiteColor};
            }

            .hart, .eye {
                display: flex;
                align-items: center;
                gap: 3px;
            }
        }

        a {
            text-decoration: none;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: ${props => props.theme.colors.whiteColor};
        }
    }

`