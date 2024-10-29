import { useParams } from "react-router-dom";
import { HelperItemInterface } from "../helper/helper.ts";
import React, { useEffect, useState } from "react";
import imgPath from '../../assets/user_default_pic.webp'; 

export const Help: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<HelperItemInterface | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem("allissues");
        if (storedData) {
            console.log("Loaded data from localStorage");
            const allIssues: HelperItemInterface[] = JSON.parse(storedData);

            const foundItem = allIssues.find(issue => issue.id === parseInt(id || "", 10));
            if (foundItem) {
                setItem(foundItem);
            } else {
                console.log("Item not found in localStorage");
                setItem(null);
            }
        } else {
            console.log("No data found in localStorage");
            setItem(null);
        }
    }, [id]);

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
                        <h1 className="help__header__title">{item.subject}</h1>
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
                                {item.author.name}
                            </div>
                            <div className="help__content__info__user__createdat">
                                {new Date(item.created_at).toLocaleString()}
                            </div>
                            <div className="help__content__info__user__views">
                                Views: {item.views}
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
