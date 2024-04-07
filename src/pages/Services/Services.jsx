import { List, Space } from 'antd'
import React from 'react'
import False from '../../assets/Services/False.svg'
import None from '../../assets/Services/None.svg'
import True from '../../assets/Services/True.svg'

import style from './Services.module.scss'

const Services = () => {
    const prices = [
        {
            title: 'Стандарт',
            money: '28 699',
            discount: 10,
            advantages: [
                'Консультация',
                'Разработка индивидуального дизайна',
                'Разработка front-end',
                'Разработка back-end',
                'Подключение к серверу',
                'Подключение домена',
                'Тестирование продукта',
                'Поддержка \n' +
                '(первый месяц бесплатно)\n'
            ],
        },
        {
            title: 'Конструирование маркетплейса',
            money: '179 000',
            discount: 10,
            advantages: [
                'Консультация',
                'Разработка индивидуального дизайна',
                'Разработка front-end',
                'Разработка back-end',
                'Подключение к серверу',
                'Подключение домена',
                'Тестирование продукта',
                'Разработка базы данных',
                'Внедрение платёжной системы',
                'Поддержка \n' +
                '(первые шесть месяцев бесплатно)\n',
                'Расширенные дедлайны',
                'Личные консультации с главным ментором',
                'SEO-оптимизация',
                'Инструкция по установке и настройке',
                'Техническая документация',
                'Лицензионное соглашение и правила использования продукта'
            ],
        },
        {
            title: 'Разработка CRM системы',
            money: '107 500',
            discount: 10,
            advantages: [
                'Консультация',
                'Разработка индивидуального дизайна',
                'Разработка front-end',
                'Разработка back-end',
                'Подключение к серверу',
                'Подключение домена',
                'Тестирование продукта',
                'Разработка базы данных',
                'Поддержка \n' +
                '(первый месяц бесплатно)\n',
                'Инструкция по установке и настройке',
                'Техническая документация',
                'Лицензионное соглашение и правила использования продукта'
            ],
        },
        {
            title: 'Разработка LMS системы',
            money: '150 000',
            discount: 10,
            advantages: [
                'Консультация',
                'Разработка индивидуального дизайна',
                'Разработка front-end',
                'Разработка back-end',
                'Подключение к серверу',
                'Подключение домена',
                'Тестирование продукта',
                'Разработка базы данных',
                'Внедрение расписания с учётом времени аудитории и пользователей',
                'Загрузка-выгрузка учебных материалов',
                'Управление курсами и учащимися',
                'Преподавателями и оценками',
                'Отчетность и аналитика о процессе обучения',
                'Учёт менторов, студентов и менеджеров',
                'Поддержка \n' +
                '(первые шесть месяцев бесплатно)\n',
                'SEO-оптимизация',
                'Инструкция по установке и настройке',
                'Техническая документация',
                'Лицензионное соглашение и правила использования продукта'
            ],
        },
    ]

const renderAdvantages = advantages => {
        return (
            <List
                size='small'
                dataSource={advantages}
                renderItem={item => (
                    <List.Item>
                        {typeof item === 'string' ? (
                            <Space>
                                <img src={None} alt='' />
                                {item}
                            </Space>
                        ) : (
                            <Space>
                                <img src={item.willl ? True : False} alt={item.text} />
                                {item.text}
                            </Space>
                        )}
                    </List.Item>
                )}
            />
        )
    }

    return (
        <div className={style.Services}>
            <h3>Наши Пакеты</h3>
            <div
                className={`${style.servicesItems}`}
            >
                {prices.map((price, index) => (
                    <div
                        key={index}
                        className={`${style.item} ${
                            price.title === 'Разработка CRM системы' && style.business
                        }`}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>{price.title}</h4>
                        </div>
                        {price.discount ? (
                            <div>
                                <h5>{price.money} с. </h5>
                                <p className={style.instead}>
                                    Что входит:
                                </p>
                            </div>
                        ) : (
                            <span>{price.money} с.</span>
                        )}
                        {renderAdvantages(price.advantages)}
                        <div className={style.btn}>
                            <button>Заказать</button>
                        </div>
                        <p className={style.participants}> {price.participants}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services