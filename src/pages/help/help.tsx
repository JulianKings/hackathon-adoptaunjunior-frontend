import { useParams } from "react-router-dom";
import { HelperItemInterface } from "../helper/helper.ts";
import React from "react";
import data from '../helper/data.json';
import imgPath from '../../assets/user_default_pic.webp'; 
const helperitems: HelperItemInterface[] = data;

export const Help: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const item = helperitems.find((item) => item.id.toString() === id);


    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="help">
            <div>
                <header className="help__header">
                    <div>
                        <button onClick={() => window.history.back()}>
                            {"< Back"}
                        </button> |
                        <h1 className="help__header__title">{item.title}</h1>
                    </div>
                    <div>
                        <button>Share</button>
                    </div>
                </header>
                <div className="help__content">
                    <div className="help__content__sidebar">
                        <button>+</button> {item.votes} <button>-</button>
                    </div>
                    <div className="help__content__info">
                        <div className="help__content__info__user">
                            <div className="help__content__info__user__pic">
                                <img src={imgPath} alt="user profile pic help" />
                            </div>
                            <div className="help__content__info__user__name">
                                {item.author}
                            </div>
                            <div className="help__content__info__user__createdat">
                                {item.created_at}
                            </div>
                            <div className="help__content__info__user__views">
                                {item.views}
                            </div>
                        </div>
                        <div className="help__content__info__message">
                            {item.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
