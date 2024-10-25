import React from "react";

const challenges = [
    { name: 'The Builder of Things', description: 'For this kata you will be using some meta-programming...', rank: 1, done: false },
    { name: 'Challenge 2', description: 'For this kata you will be using some meta-programming...', rank: 2, done: true },
    { name: 'Challenge 3', description: 'For this kata you will be using some meta-programming...', rank: 3, done: false },
    { name: 'Challenge 4', description: 'For this kata you will be using some meta-programming...', rank: 4, done: true },
  ];
  

export function ChallengesSnippet() {
    return (
        <>
            <table className="challenges-snippet">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Rank</th>
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>
                    {challenges.map((challenge, index) => (
                        <tr>
                            <td>{index + 1}.</td>
                            <td>{challenge.name}</td>
                            <td>{challenge.description}</td>
                            <td>{challenge.rank}</td>
                            <td>{challenge.done ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}