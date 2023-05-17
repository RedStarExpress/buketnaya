import React from 'react'
import { styled } from 'styled-components'

function Buket() {
  return (
    <Wrapper>
        <div className="container">
            <div className="card">
                <ul className='card-list'>
                    <li className="card-item">
                        <img src="./images/buket1.png" alt="" />
                        <h3>Букеты</h3>
                    </li>

                    <li className="card-item">
                        <img src="./images/buket2.png" alt="" />
                        <h3>Цветочные композиции</h3>
                    </li>

                    <li className="card-item">
                        <img src="./images/buket3.png" alt="" />
                        <h3>Живые цветы</h3>
                    </li>

                    <li className="card-item">
                        <img src="./images/buket4.png" alt="" />
                        <h3>Товары</h3>
                    </li>
                </ul>
            </div>
        </div>
    </Wrapper>
  )
}

export default Buket

const Wrapper = styled.section`
    padding: 80px 0;
    
    .card {
        background-color: ${props => props.theme.colors.cardBackground};
        padding: 48px;
        border-radius: 30px;

        .card-list {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 32px;

            .card-item{
                border: 2px solid ${props => props.theme.colors.whiteColor};

                h3 {
                    font-style: normal;
                    font-weight: 500;
                    font-size: 32px;
                    line-height: 39px;
                    color: ${props => props.theme.colors.whiteColor};
                    text-align: center;
                    padding: 32px 0 83px;
                }
            }
        }
    }

    
`