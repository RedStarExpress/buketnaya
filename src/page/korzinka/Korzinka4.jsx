import React from 'react'
import { styled } from 'styled-components'

function Korzinka4() {
  return (
    <Wrapper>
      <div class="container">
        <h2 class="title">Ваш заказ</h2>
        <div class="wrap">
          <div class="left">
            <div class="box">
              <h3>Уточните детали доставки</h3>
              <div class="input-label">
                <div class="input-label-1">
                  <h4>Адрес доставки (нас. пункт, улица, дом)</h4>
                  <input class="main-input" type="text" />
                    <label for=""></label>
                </div>
                <div class="checkbox1">
                  <input type="checkbox" />
                    <label class="checkbox1-p" for="">Я не знаю адрес получателя. Уточните по
                      телефону.</label>
                </div>
                <div class="input-label-2">
                  <h4>Дополнительная информация (подъезд, домофон, квартира):</h4>
                  <input class="main-input-1" type="text" />
                    <label for=""></label>
                    <div class="time">
                      <div class="time-date">
                        <h4>Дата доставки</h4>
                        <input class="main-input-2" type="date" />
                          <label for=""></label>
                      </div>
                      <div class="time-time">
                        <h4>Время доставки</h4>
                        <input class="main-input-2" type="time" />
                          <label for=""></label>
                      </div>
                    </div>
                </div>
              </div>

            </div>

            <div class="left-footer">
              <span>3/4</span>
              <div class="btn">
                <button class="back">Назад</button>
                <button class="next">Далее</button>
              </div>
            </div>
          </div>
          <div class="right">
            <h3 class="title-h3">Итого:</h3>
            <div class="price">
              <h4>1 товар</h4>
              <span>3 900 ₽</span>
            </div>
            <div class="price-1">
              <img src="./images/korzinka11.svg" alt="+18" />
                <h4>Букет с подсолнухами</h4>
            </div>

            <hr class="border-bottom" />

              <div class="price-2">
                <h4>Доставка</h4>
                <span>300 ₽</span>
              </div>
              <div class="price-3">
                <h4>К оплате</h4>
                <span>4 200 ₽</span>
              </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Korzinka4

const Wrapper = styled.section`
padding: 80px 0;

.title {
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100C;
    margin-bottom: 32px;
}

.box h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #443926;
    margin-bottom: 20px;
}

.wrap {
    display: flex;
    gap: 30px;
    align-items: flex-start;
}

.wrap .left {
    position: relative;
    box-sizing: border-box;
    width: 635px;
    min-height: 380px;
    background: #FFFFFF;
    border: 1px solid #779243;
    border-radius: 20px;
}

.left h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #443926;
    margin-bottom: 8px;
}

.left .checkbox1-p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #443926;
}

.checkbox1 {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
}

.time {
    display: flex;
    gap: 16px;
    margin-top: 20px;
}

.time .time-date .main-input-2 {
    border: 1px solid #779243;
    border-radius: 5px;
    width: 152px;
    height: 28px;
}

.time .time-time .main-input-2 {
    border: 1px solid #779243;
    border-radius: 5px;
    width: 152px;
    height: 28px;
}

.main-input {
    width: 335px;
    height: 28px;
    border: 1px solid #779243;
    border-radius: 5px;
    margin-bottom: 14px;
}

.main-input-1 {
    width: 521px;
    height: 28px;
    border: 1px solid #779243;
    border-radius: 5px;
}

.checkbox1 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #443926;
}

.left-footer {
    position: absolute;
    width: calc(100% - 56px);
    bottom: 28px;
    left: 28px;
    right: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}

.box {
    margin-top: 28px;
    margin-left: 28px;
}

.left-footer span {
    height: 15px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #443926;
}

.left-footer .btn {
    display: flex;
    gap: 12px;
}

.btn .back {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80px;
    height: 28px;
    background: #443926;
    border-radius: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}

.btn .next {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 80px;
    height: 28px;
    background: #443926;
    border-radius: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    flex: none;
    order: 0;
    flex-grow: 0;
}

/*right section*/

.right {
    width: 445px;
    min-height: 485px;
    background: #779243;
    border-radius: 20px;
    padding: 40px;
}

.right .title-h3 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #FFFFFF;
    margin-bottom: 20px;
}

.right .price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.right .price h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price-1 {
    display: flex;
    align-items: center;
    gap: 24px;
}

.right .price-1 h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .border-bottom {
    width: 365px;
    height: 0px;
    border: 1px solid #FFFFFF;
    margin: 20px 0;
}

.right .price-2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.right .price-2 h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price-2 span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price-3 {
    display: flex;
    justify-content: space-between;
}

.right .price-3 h4 {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}

.right .price-3 span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #FFFFFF;
}
`