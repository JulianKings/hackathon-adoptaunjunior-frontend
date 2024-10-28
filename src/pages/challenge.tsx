import React from "react";
import { useParams } from "react-router-dom";
import avatar from "../assets/images/themesHalloween/Ghost.png";
import publishIcon from "../assets/images/icons/calendar.svg";
import completeIcon from "../assets/images/icons/completed.svg";
import updateIcon from "../assets/images/icons/update.svg";
import like from "../assets/images/icons/heart.svg";
import tumba from "../assets/images/icons/tumba.svg";
import bats from "../assets/images/themesHalloween/bats.svg";

export function Challenge() {
    const { id } = useParams<{ id: string }>();

    return (
        <section className="challenge">
            <h1>Dolorem ipsum quia</h1>
            <div className="challenge__description">
                <div className="challenge__description__txt">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus tortor sed eleifend placerat. Aenean ac dapibus odio, a semper lectus. </p>
                    <img src={avatar} alt="Avatar Challenge" />
                </div>
                <div className="challenge__description__tags">
                    <div>
                        <span>CSS</span>
                    </div>
                    <div>
                        <span>HTML</span>
                    </div>
                    <div>
                        <span>JAVASCRIPT</span>
                    </div>
                </div>
                <div className="challenge__description__info">
                    <div className="challenge__description__info__bloq">
                        <div><img src={publishIcon} alt="publised" />24/10/2024</div>
                        <div><img src={completeIcon} alt="percentage challenge completed" />50%</div>
                    </div>
                    <div className="challenge__description__info__bloq">
                        <div><img src={updateIcon} alt="last update challenge" />25/10/2024</div>
                        <div><img src={like} alt="pointer" />4.5</div>
                    </div>
                </div>
            </div>
            <div className="challenge__diff">
                <div className="challenge__diff__points">
                    <img src={tumba} alt="" />
                    <img src={tumba} alt="" />
                    <img src={tumba} alt="" />
                    <img src={tumba} alt="" />
                </div>
                <div className="challenge__diff__moon">
                    <div>
                        <img src={bats} alt="" />
                    </div>
                </div>
                <h2>Dificultad Macabra</h2>
                <div className="challenge__diff__btns">
                    <div>Empezar Reto</div>
                    <div>Ver Soluciones</div>
                </div>
            </div>
        </section>
    );
}
//<div className="challenge__description__box"><span>HACK O BUG</span></div>