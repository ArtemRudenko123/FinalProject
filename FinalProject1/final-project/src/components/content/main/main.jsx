import React from "react";
import './mains.css'
import avatar from './../../../image/avatar.png'
const Main = () => {
    return(
        <div className="main__wrapper">
            <div className="main_information">
                <div className="container_img">
                   <img className="main_img" src={avatar} alt="" />
                </div>
                <h2>
                    Артём Руденко
                </h2>
            </div>
            <div className="main_sub_information">
                <h3 className="main_information_title">
                    Информация про меня:   
                </h3>
                <ul className="main_information_text">
                    <li>
                        15 Лет
                    </li>
                    <li>
                        Веб разработчик
                    </li>
                    <li>
                        7 месяцев опыта
                    </li>
                </ul>
            </div>
           
        </div>
    )
}

export default Main