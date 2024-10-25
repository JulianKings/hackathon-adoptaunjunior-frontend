import { useParams } from "react-router-dom";
import { HelperItemInterface } from "../helper/helper";
import data from '../helper/data.json';
import React from "react";

const helperitems: HelperItemInterface[] = data;

export const Help: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const item = helperitems.find((item) => item.id.toString() === id);


    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="help">
            <header className="help__header">
                <div>
                    <button onClick={() => window.history.back()}>
                        {"< Back"}
                    </button> |
                    <h1>{item.title}</h1>
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
                            <div>
                                <img src="src/assets/user_default_pic.webp" alt="user profile pic" />
                            </div>
                        </div>
                        <div className="help__content__info__user__name">
                            {item.username}
                        </div>
                        <div className="help__content__info__user__createdat">
                            {item.created_at}
                        </div>
                        <div className="help__content__info__user__views">
                            {item.views}
                        </div>
                    </div>
                    <div className="help__content__info__message">
                        {item.message}
                    </div>
                </div>
            </div>
        </div>
    );
};
