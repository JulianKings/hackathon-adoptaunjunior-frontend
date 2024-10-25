import React from "react";
import { ChallengesSnippet } from "../components/ChallengesSnippet";
import { ResourcesSnippet } from "../components/ResourcesSnippet";
import { HomeLink } from "../components/HomeLink";

export function Index() {
    return (
        <div className="index-page">
            <img className="index-page__pumpkin" src="src/assets/pumpkin.webp" />
            <h1 className="index-page__title">TRUCOS</h1>
            <ChallengesSnippet />
            <button className="index-page__button">VER TODOS</button>
            <h1 className="index-page__title">TRATOS</h1>
            <ResourcesSnippet />
            <button className="index-page__button">VER TODOS</button>
            <div>
                <HomeLink name="Preguntas" icon=""/>
                <HomeLink name="Logros" icon=""/>
            </div>
        </div>
    );
}