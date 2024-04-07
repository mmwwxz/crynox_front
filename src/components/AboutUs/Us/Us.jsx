import React from 'react';
import style from './Us.module.scss';
import UsImage from '../../../assets/AboutUs/Us.jpg'


const AboutUs = () => {
  return (
    <section className={style.US}>
      <h3>О нас</h3>
      <div className={style.content}>
      <div className={style.text}>
        <p>
          <span>CRYNOX</span> - мы являемся командой опытных разработчиков программного обеспечения и предоставляем широкий спектр услуг . Состав нашей команды включает более 30 профессионалов, включая разработчиков, проектных менеджеров, дизайнеров и тестировщиков. Мы специализируемся на создании качественного программного обеспечения для разных секторов, включая бизнес, здравоохранение, финансы, образование и другие.
        </p>
      </div>
      <img src={UsImage} alt="" />
      </div>
    </section>
  );
};

export default AboutUs;