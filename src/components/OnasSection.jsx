import React from 'react'
import { styled } from 'styled-components'

function OnasSection() {
    return (
        <Wrapper>
            <div className="container">
                <h3>О нас</h3>
                <p className='pre'>Компания “Цветочная мануфактура” начала свою работу
                    в 2020 году. Сегодня мы доставляем более 220 букетов ежедневно.
                    За всю нашу деятельность мы сделали чуточку счастливее более 300.000 человек.</p>
                <img className='hero-img' src="./images/onas1.svg" alt="" />
                <h3>Наша миссия</h3>
                <p className='nash-p'>
                    Миссия нашего цветочного магазина в Санкт-Петербурге - создавать красоту и радость в жизни людей,
                    предоставляя
                    качественные цветы и букеты для всех случаев, от повседневных до торжественных. Мы становимся
                    надежным
                    партнером
                    для наших клиентов, предоставляя индивидуальный подход к каждому заказу и обеспечивая быстрое
                    и
                    качественное
                    обслуживание.
                    Мы стремимся к тому, чтобы наш цветочный магазин стал символом красоты и уюта для всех наших
                    клиентов.
                </p>


                <h3>Наша компания в цифрах</h3>

                <ul className="result">
                    <li className="result-numbers">
                        <h2>300 тыс.</h2>
                        <p className="p">Довольных покупателей</p>
                    </li>
                    <li className="result-numbers">
                        <h2>60%</h2>
                        <p className="p">Повторных заказов</p>
                    </li>
                    <li className="result-numbers">
                        <h2>22</h2>
                        <p className="p">Вежливых курьера</p>
                    </li>
                </ul>


                <h3>Почему выбирают нас?</h3>
                <ul className="card">
                    <li className="card-item">
                        <img src="./images/onas2.svg" alt="" />
                        <p>Никакой химии в производстве</p>
                    </li>
                    <li className="card-item">
                        <img src="./images/onas2.svg" alt="" />
                        <p>Никакой химии в производстве</p>
                    </li>
                    <li className="card-item">
                        <img src="./images/onas2.svg" alt="" />
                        <p>Никакой химии в производстве</p>
                    </li>
                    <li className="card-item">
                        <img src="./images/onas2.svg" alt="" />
                        <p>Никакой химии в производстве</p>
                    </li>
                </ul>


                <h3 className="end-h3">Наш ассортимент</h3>
                <p className="nash-p">Наша компания предоставляет более 1200 композиций цветов, на любой вкус и цвет. Мы
                    являемся прямым
                    импортером цветов из Голландии, Эквадора, Колумбии, Израиля. Силами наших профессиональных
                    флористов мы
                    собрали для Вас лучшие композии мировой флористики. Мы импортируем более 2500 разновидностей
                    цветов.
                </p>
                <h3>Мы доставляем больше чем цветы...</h3>
                <p className='nash-p'>За весь наш многолетний опыт – наша компания научилась давать больше чем цветы, наши курьеры и
                    менеджеры
                    дарят позитивное настроение и чувство высокой удовлетворенности после пользования услугами нашего
                    сервиса.
                    Так же, мы доставляем сладкие сюрпризы, живые цветы и другие товары!</p>
            </div>
        </Wrapper>
    )
}

export default OnasSection

const Wrapper = styled.section`
margin-top: 80px;

.pre {
    font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 24px;
color: #443926;
}
    
.hero-img {
    width: 1110px;
    height: 346px;
    margin-bottom: 80px;
    margin-top: 40px;
}

.nash-p {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #443926;
    margin-top: 40px;
    margin-bottom: 80px;
}

h3 {
    font-family: 'Cormorant';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    color: #15100C;
    margin-bottom: 40px;
}

.result-numbers h2 {
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    text-align: center;
    color: #443926;
    flex: none;
    order: 0;
    flex-grow: 0;
    margin-bottom: 12px;
}

.p {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #443926;
    display: flex;
    justify-content: center;
}

.result {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin-top: 40px;
    margin-bottom: 80px;
}

.card {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
}

.card-item {
    border: 2px solid #779243;
    border-radius: 127.5px 0px 127.5px 40px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 49px 56px;

    p{
        text-align: start;
        width: 137px;
        margin-top: 20px;
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        color: #443926;
    }
}

.card img {
    width: 49px;
    height: 53px;
}

.end-h3 {
    margin-top: 80px;
}

.end-p {
    margin-bottom: 80px;
}

`