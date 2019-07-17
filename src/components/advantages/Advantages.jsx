import React from 'react';
import './Advantages.css';

const Advantages = () => {
    return(
        <section className="advantages">
            <div className="container">
                <div className="title title-light">
                    <h4 className="title__heading wow fadeInDown">Приемущества</h4>
                </div>

                <div className="advantages__content">
                    <div className="advantages__item wow fadeInLeft" data-wow-delay="0.7s">
                        <div className="advantages__icon">
                            <img src="./assets/img/advantages-1.svg" alt="advantages"/>
                        </div>
                        <h4 className="advantages__heading">Уникальная формула</h4>
                        <p className="advantages__text">
                            Уникальная формула позволяет улучшить качество и продолжительность 
                            активного долголетия при помощи инновационной разработки Казахстанских ученых, 
                            позволившей извлечь до 85% полезных веществ из 189 природных компонентов!
                        </p>
                    </div>
                    <div className="advantages__item  wow fadeInLeft" data-wow-delay="0.3s">
                        <div className="advantages__icon">
                            <img src="./assets/img/half-pomegranate.svg" alt="advantages"/>
                        </div>
                        <h4 className="advantages__heading">Богат антиоксидантами</h4>
                        <p className="advantages__text">
                            Абсолютно новый инновационный продукт, являющийся комплексом натуральных антиоксидантов, 
                            а так же эндогенные соединения, которые являются не синтетическими природными антиоксидантами, 
                            активно предотвращающими окислительные цепные процессы организма
                        </p>
                    </div>
                    <div className="advantages__item  wow fadeInLeft">
                        <div className="advantages__icon">
                            <img src="./assets/img/brain.svg" alt="advantages"/>
                        </div>
                        <h4 className="advantages__heading">Улучшает работу мозга</h4>
                        <p className="advantages__text">
                            По мере того как мы стареем, с хронологической точки зрения, наш организм стареет вместе с нами. 
                            Однако, мы можем увеличить наши шансы на сохранение здоровья нашего мозга, 
                            если начнем употреблять «умные» продукты и напитки разработанные специалистами группы компаний
                        </p>
                    </div>
                    <div className="advantages__item wow fadeInRight" >
                        <div className="advantages__icon">
                            <img src="./assets/img/strength.svg" alt="advantages"/>
                        </div>
                        <h4 className="advantages__heading">Улучшенный иммунитет</h4>
                        <p className="advantages__text">
                            Поскольку иммунитет - это целая система, на которую оказывает влияние огромное количество факторов, 
                            то и повысить иммунитет можно укрепив весь организм в целом. Если мы будем употреблять продукцию компании Глобал Тренд Компани, 
                            то сможем без труда повысить свой иммунитет. А повысив иммунитет - значительно продлим свою жизнь! 
                            Сильная иммунная система ключ к отличному здоровью. 
                            Она может справиться и с пищевыми отравлениями, и с аллергией, а также замедляет процесс старения
                        </p>
                    </div>
                    <div className="advantages__item wow fadeInRight" data-wow-delay="0.3s">
                        <div className="advantages__icon">
                            <img src="./assets/img/meditation.svg" alt="advantages"/>
                        </div>
                        <h4 className="advantages__heading">Найдите равновесие</h4>
                        <p className="advantages__text">
                            Nano balsam- это активная саморегуляция иммунной системы организма, 
                            его способности сохранять постоянство своего внутреннего состояния посредством скоординированных реакций организма, 
                            направленных на поддержание динамического равновесия. Стремление организма воспроизводить себя, 
                            восстанавливать утраченное равновесие, преодолевать сопротивление внешней среды.
                        </p>
                    </div>
                    <div className="advantages__item wow fadeInRight" data-wow-delay="0.7s">
                        <div className="advantages__icon">
                            <img src="./assets/img/sprout.svg" alt="advantages"/>
                        </div>
                        <h4 className="advantages__heading">100% натуральный состав</h4>
                        <p className="advantages__text">
                            Вся продукция произведена только из натуральных и проверенных компонентов. 
                            Продукция компании имеет все разрешительные документы. Рекомендована Международным Институтом Геронтологии. 
                            Уникальные продукты, в состав которых входит 189 компонентов: из которых только 40 водорослей, 
                            4 вида Жень-шеня (в том числе "красный корейский") и травы, собранные с пяти континентов нашей планеты. 
                            Также в состав входит натуральный природный убихинон (Coenzyme Q-10), 
                            который не разрушается при дневном свете и не теряет своих качеств при воздействии высокой температуры.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    ) 
}

export default Advantages;