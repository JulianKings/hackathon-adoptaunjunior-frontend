import React, { useState } from "react";
import { ChallengesSnippet } from "../components/index/ChallengesSnippet";
import { ResourcesSnippet } from "../components/index/ResourcesSnippet";
import { HomeLink } from "../components/index/HomeLink";
import { useNavigate } from "react-router-dom";

export function Index() {
    const navigate = useNavigate();
    const [homeLinkIconOnHover, setHomeLinkIconOnHover] = useState('');
    const handleNavigation = (event) => {
        const buttonClass = event.currentTarget.className;

        if (buttonClass.includes('index-page__button--challenges')) {
            navigate('/challenges');
        } else if (buttonClass.includes('index-page__button--resources')) {
            navigate('/resources');
        }
        window.scrollTo(0, 0);
    };

    const handleHomeLinkHover = () => {
        setHomeLinkIconOnHover('/public/assets/vampire-icon.webp');
    }

    return (
        <div className="index-page">
            <img className="index-page__image index-page__image--pumpkin" src="src/assets/pumpkin.webp" />
            <h1 className="index-page__title">TRUCOS</h1>
            <ChallengesSnippet />
            <button className="index-page__button index-page__button--challenges" onClick={handleNavigation}>VER TODOS</button>
            <img className="index-page__image index-page__image--skullworm" src="src/assets/skullworm.webp" />
            <h1 className="index-page__title">TRATOS</h1>
            <ResourcesSnippet />
            <button className="index-page__button index-page__button--resources" onClick={handleNavigation}>VER TODOS</button>
            <div className="home-link-container">
                <HomeLink name="Preguntas" icon={homeLinkIconOnHover || 'src/assets/question-mark-icon.png'} id='preguntas' onMouseEnter={handleHomeLinkHover}/>
                {/* <HomeLink name="Logros" icon="src/assets/cup-icon.png" id='logros'/> */}
            </div>
            <img className="index-page__image index-page__image--ghost" src="src/assets/ghost.webp" />
        </div>
    );
}