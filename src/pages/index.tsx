import React from "react";
import { ChallengesSnippet } from "../components/ChallengesSnippet";
import { ResourcesSnippet } from "../components/ResourcesSnippet";
import { HomeLink } from "../components/HomeLink";

export function Index() {
    return (
        <div className="index-page">
            <img className="index-page__image index-page__image--pumpkin" src="src/assets/pumpkin.webp" />
            <h1 className="index-page__title">TRUCOS</h1>
            <ChallengesSnippet />
            <button className="index-page__button">VER TODOS</button>
            <img className="index-page__image index-page__image--skullworm" src="src/assets/skullworm.webp" />
            <h1 className="index-page__title">TRATOS</h1>
            <ResourcesSnippet />
            <button className="index-page__button">VER TODOS</button>
            <div className="home-link-container">
                <HomeLink name="Preguntas" icon="src/assets/question-mark-icon.png"/>
                <HomeLink name="Logros" icon="src/assets/cup-icon.png"/>
            </div>
            <img className="index-page__image index-page__image--ghost" src="src/assets/ghost.webp" />
        </div>
    );
}