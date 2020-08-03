import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/52496574?s=460&u=86fc6ef72a87c961c622eed233423e7cae217d52&v=4"
                    alt="Alexandre yucra" />
                <div>
                    <strong>Alexandre yucra</strong>
                    <span>Math</span>
                </div>
            </header>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br /><br />
                Non incidunt libero exercitationem saepe nulla repellendus omnis
                repudiandae consequatur ex adipisci praesentium, inventore sunt, eaque beatae! Magni porro eveniet sed sequi?
            </p>
            <footer>
                <p>
                    Preço Hora
                    <strong> R$ 100,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem