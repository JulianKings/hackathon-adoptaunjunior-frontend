import React from "react";
import { ChallengesSnippet } from "../components/ChallengesSnippet";
import { ResourcesSnippet } from "../components/ResourcesSnippet";
import { HomeLink } from "../components/HomeLink";

export function Index() {
    return (
        <div className="index-page">
            <h1 className="index-page__title">Trucos</h1>
            <ChallengesSnippet />
            <button>VER TODOS</button>
            <h1 className="index-page__title">Tratos</h1>
            <ResourcesSnippet />
            <button>VER TODOS</button>
            <div>
                <HomeLink name="Preguntas" icon=""/>
                <HomeLink name="Logros" icon=""/>
            </div>
        </div>
    );
}