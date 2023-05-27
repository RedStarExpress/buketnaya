import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import axiosInstance from '../layout/config'

function Buket() {
    const [data, setData] = useState([])

    useEffect(() => {
        axiosInstance.get("/categoriya_base_all_views/")
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
    }, [])

    return (
        <Wrapper>
            <div className="container">
                <div className="card">
                    <ul className='card-list'>
                        {
                            data?.length > 0 && data?.map((item) => {
                                return (
                                    <li className="card-item">
                                        <img src="./images/buket1.png" alt="" />
                                        <h3>Букеты</h3>
                                    </li>
                                )
                            })
                        }
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
            grid-template-columns: repeat(auto-fit, minmax(490px, 1fr));
            justify-items: center;
            gap: 32px;

            .card-item{
                width: 100%;
                border: 2px solid ${props => props.theme.colors.whiteColor};

                img {
                    width: 100%;
                    height: 395px;
                    object-fit: cover;
                }

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