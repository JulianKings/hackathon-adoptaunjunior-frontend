import React, { useState } from "react";
import { NavLink } from "react-router-dom";
//Imports Images
import difficultyPoints from "../assets/images/icons/tumba.svg";
import favorite from "../assets/images/icons/favorite.svg";
import percentage from "../assets/images/icons/check.svg";
import imageChallenge from "../assets/images/themesHalloween/Frankenstain.png";
import details from "../assets/images/icons/lupa.svg";
import batarrow from "../assets/images/icons/batarrow.svg";

export function Challenges() {
    const dataTest = [1,2,3,4,5,6,7,8,9,10];

    return (
        <section className="challenges">
            <h1 className="challenges__title">Tratos</h1>
            {/* Grid */}
            <div className="challenges__grid">
                {dataTest.slice(0,6).map(() => {
                    return (
                        <div className="challenges__grid__card">
                            <div className="challenges__grid__card__top">
                                <div className="challenges__grid__card__top__difficulty">
                                    <img src={difficultyPoints} alt="difficulty points" />
                                    <img src={difficultyPoints} alt="difficulty points" />
                                    <img src={difficultyPoints} alt="difficulty points" />
                                    <img src={difficultyPoints} alt="difficulty points" />
                                </div>
                                <div className="challenges__grid__card__top__infoTopRight">
                                    <div>
                                        <img src={favorite} alt="favorite" />
                                        <span>4.5</span>
                                    </div>
                                    <div>
                                        <img src={percentage} alt="percentage" />
                                        <span>50%</span>
                                    </div>
                                </div>
                            </div>
                            <div className="challenges__grid__card__middle">
                                <div className="challenges__grid__card__middle__head">
                                    <img src={imageChallenge} alt="Image Challenge" />
                                    <h2>Neque porro quisquam est qui dolorem ipsum</h2>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus tortor sed eleifend placerat. Aenean ac dapibus odio, a semper lectus. 
                                </p>
                                <div className="challenges__grid__card__middle__tags">
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
                            </div>
                            <div className="challenges__grid__card__btndetails">
                                <img src={details} alt="see details" />
                                <span>Ver Detalles del Reto</span>
                            </div>
                        </div>
                    )
                })}
            </div>
            {/* Pagination */}
            <div className="challenges__pagination">
                <img src={batarrow} alt="back" />
                <div className="challenges__pagination__numbers">
                    {Array.from({ length: dataTest.length % 6 === 0 ? dataTest.length / 6 : (dataTest.length / 6) + 1 }, (_, i) => (
                        <div
                        >
                            {i + 1}
                        </div>
                    ))}
                </div>
                <img src={batarrow} alt="next"/>
            </div>
        </section>
    );
}
/* Challenges Page<br />
                <NavLink to='/challenge/1'>Challenge 1</NavLink><br />
                <NavLink to='/challenge/2'>Challenge 2</NavLink><br /> */