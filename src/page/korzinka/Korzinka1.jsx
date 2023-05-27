import React from 'react'
import { styled } from 'styled-components'
import Button from '../../components/Button'

function Korzinka1() {
  return (
    <Wrapper>
      <div className="container">
        <h3 className='title'>Ваш заказ</h3>

        <div className="wrap">
          <div className="left">
            <hr />
            <div class="container-section">
              <div class="container1">
                <img src="./images/korzinka12.svg" alt="" />
                <img src="./images/korzinka11.svg" alt="" />
                <p>Букет с подсолнухами</p>
              </div>
              <div class="container2">
                <div className="count">
                  <span className='plus'>+</span>
                  <span>1</span>
                  <span className='minus'>-</span>
                </div>
                <h4>3 900 ₽</h4>
              </div>
            </div>
            <hr />
          </div>

          <div className="right">
            <h3>Итого:</h3>
            <div class="price">
              <p>1 товар</p>
              <h4>3 900 ₽</h4>
            </div>

            <hr />
            <div class="price">
              <p>Доставка</p>
              <h4>300 ₽</h4>
            </div>
            <div class="price">
              <p>К оплате</p>
              <h4>4 200 ₽</h4>
            </div>

            <div className="btn">
              <Button>Оформить заказ</Button>
            </div>

            <p class="btn-p">Нажимая кнопку "Оформить заказ" вы соглашаетесь с условиями обработки персональных данных и
              публичной офертой.</p>
          </div>
        </div>

      </div>
    </Wrapper>
  )
}

export default Korzinka1

const Wrapper = styled.section`
padding: 80px 0;

.wrap {
  display: flex;
  gap: 30px;
  margin: 20px 0;
}

.left {
  width: 635px;
}

.title {
    margin-bottom: 32px;
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100C;
  }
  
  hr {
      border-bottom: 1px solid #779243;
  }

.right {
  width: 445px;
  background: #779243;
  border-radius: 20px;
  padding: 40px;
}

.right h3 {
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
}
    
.right hr {
  border: 1px solid #FFFFFF;
}


.container-section {
    display: flex;
    gap: 60px;
}

.container-section img {
    display: flex;
    gap: 14px;
}

.container1{
    display: flex;
    gap: 20px;
    align-items: center;
}

.container2{
    display: flex;
    gap: 38px;
    align-items: center;
}

.count {
  display: flex;
  align-items: center;
  gap: 8px;
}

.container1 p {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #443926;
    margin-top: 64px;
    margin-bottom: 64px;
}

.container2 span {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    font-feature-settings: 'tnum' on, 'lnum' on;
    color: #443926;
}

.container2 .plus,
.container2 .minus {
  width: 20px;
  height: 20px;
  background: #FFFFFF;
  border-radius: 50%;
  box-shadow: 0px 4px 4px rgba(197, 197, 197, 0.25);
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  font-feature-settings: 'tnum' on, 'lnum' on;
  color: #443926;
  text-align: center;
}

.container2 h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #443926;
}

.section {
    position: absolute;
    width: 445px;
    height: 485px;
    left: 830px;
    top: 90px;
    background: #779243;
    border-radius: 20px;
    padding: 30px;
}

.section h3 {
    background: #779243;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
}

.price {
    display: flex;
    justify-content: space-between;
    background: #779243;
}

.price p {
    background: #779243;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    margin-bottom: 20px;
    margin-top: 20px;
}

.price h4 {
    background: #779243;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
    margin-bottom: 20px;
    margin-top: 20px;
}

.btn-p {
    background: #779243;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    text-align: center;
    color: #FFFFFF;
}

.btn {
  text-align: center;
  margin-top: 40px;
  margin-bottom: 20px;
}
`