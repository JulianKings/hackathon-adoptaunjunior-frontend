import React from "react";
import { NavLink } from "react-router-dom";
const userDefault = "../assets/user_default_pic.webp";

const data = [
    {
        id: 1,
        username: "witchy_coder",
        title: "Spooky Sorting Algorithms",
        tags: ["algorithms", "sorting", "Halloween Challenge"],
        created_at: "2024-10-20T00:00:00Z",
        votes: 5,
        views: 300
    },
    {
        id: 2,
        username: "ghostly_dev",
        title: "Haunted Binary Tree Traversal",
        tags: ["trees", "binary tree", "Halloween Challenge"],
        created_at: "2024-10-19T19:00:00Z",
        votes: 2,
        views: 150
    },
    {
        id: 3,
        username: "frankenstein_code",
        title: "Zombie Apocalypse Survival Simulation",
        tags: ["simulation", "survival", "Halloween Challenge"],
        created_at: "2024-10-18T15:30:00Z",
        votes: 8,
        views: 450
    },
    {
        id: 4,
        username: "batman_developer",
        title: "Witch's Brew: Recipe API",
        tags: ["API", "recipe", "Halloween Challenge"],
        created_at: "2024-10-17T11:00:00Z",
        votes: 1,
        views: 200
    },
    {
        id: 5,
        username: "pumpkin_master",
        title: "Creepy Code Review",
        tags: ["review", "coding", "Halloween Challenge"],
        created_at: "2024-10-16T09:15:00Z",
        votes: 3,
        views: 350
    }
];

export const Helper = () => {
    return (
        <div className="helper">
            <h2>Help Page</h2>
            <div className="helper__list">
                {data.map((item) => (
                    <NavLink to={`/help/${item.id}`} key={item.id} className="helper__list__item">
                        <div className="helper__list__item__userpic">
                            <div>
                                <img src={userDefault} alt="user profile pic" />
                            </div>
                        </div>
                        <div className="helper__list__item__userinfo">
                            <div>
                                <strong>{item.title}</strong> <span>({item.tags.join(', ')})</span>
                            </div>
                            <div>
                                <em>{item.username}</em> - {new Date(item.created_at).toLocaleDateString()}
                            </div>
                        </div>
                        <div className="helper__list__item__userstats">
                            <div>
                                Votes: {item.votes}
                            </div>
                            <div>
                                Views: {item.views}
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
