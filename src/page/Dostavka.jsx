import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'

function Dostavka() {
    return (
        <Wrapper>
            <div class="container">
                <h3>Доставка</h3>
                <p>Мы находимся в Санкт-Петербурге по адресу ..... Вы можете оформить самовывоз любого понравившегося на сайте букета
                    из магазина или подобрать самостоятельно уже на месте.
                    График работы Вы можете посмотреть в разделе <ins>контакты</ins> или проконсультироваться с менеджером по номеру телефона
                    <b><Link to={"tel: +79119276162"}>+ 7 (911) 927-61-62</Link></b></p>
                <p><b>БЕСПЛАТНО</b>  с доставкой до дома и офиса во все районы Санкт-Петербурга в пределах КАДа, а также в ближайшие
                    пригороды.</p>
                <div className="images">
                    <img src="./images/dostavka1.svg" alt="" />
                    <img className="card" src="./images/dostavka2.svg" alt="" />
                </div>
            </div>
        </Wrapper>
    )
}

export default Dostavka

const Wrapper = styled.section`
    padding: 80px 0;

    a {
        color: ${props => props.theme.colors.blackColor};
        text-decoration: none;
        padding-left: 8px; 
    }
    
    h3 {
        margin-bottom: 40px;
        font-family: 'Cormorant';
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 58px;
        color: #15100C;
    }

    p {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 31px;
        color: #443926;
        margin-bottom: 40px;
    }

    .images {
        position: relative;
        
        .card {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(3.88deg);
        }
    }

`