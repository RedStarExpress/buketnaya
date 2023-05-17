import React from 'react'
import { styled } from 'styled-components'
import Button from './Button'

function Reviews() {
    return (
        <Wrapper>
            <div className="reviews-section">
                <h2 className='title'>Отзывы</h2>

                <ul className='reviews'>
                    <li className='item1'>
                        <img src="./images/screen1.png" alt="" />
                    </li>

                    <li className='item2'>
                        <img src="./images/screen2.png" alt="" />
                    </li>
                </ul>

                <div className="btn">
                    <Button>Смотреть все отзывы</Button>
                </div>

            </div>

                <div className="images">
                    <img className='bg-1' src="./images/sharh1.png" alt="" />
                    <img className='bg-2' src="./images/sharh2.png" alt="" />
                </div>
        </Wrapper>
    )
}

export default Reviews

const Wrapper = styled.section`
    position: relative;

    .reviews-section {
        width: 100%;
        position: relative;
        z-index: 1;
    }

    .title {
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        color: #15100C;
        padding-left: 165px;
    }

    .reviews {
        list-style: none;
        display: flex;
        gap: 30px;
        margin-top: 100px;
        margin-bottom: 60px;

        .item1, .item2 {
            width: 50%;
            background: #8C5C38;
            padding: 36px 95px;
        }
        
        .item1 {
            border-radius: 0px 98.5px 98.5px 0px;
            text-align: end;
        }

        .item2 {
            border-radius: 98.5px 0px 0px 98.5px;
        }
    }

    .btn {
        text-align: center;
        margin-bottom: 160px;
    }

    .images {
        width: 100vw;
    }

    .bg-1 {
        position: absolute;
        top: 55px;
        left: 40px;
    }

    .bg-2 {
        position: absolute;
        top: 55px;
        right: 0;

    }
`