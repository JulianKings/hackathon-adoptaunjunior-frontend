import React from "react";

const challenges = [
    { name: 'Challenge 1', description: 'Description of Challenge 1', rank: 1, done: false },
    { name: 'Challenge 2', description: 'Description of Challenge 2', rank: 2, done: true },
    { name: 'Challenge 3', description: 'Description of Challenge 3', rank: 3, done: false },
    { name: 'Challenge 4', description: 'Description of Challenge 4', rank: 4, done: true },
    { name: 'Challenge 5', description: 'Description of Challenge 5', rank: 5, done: false },
  ];
  

export function ChallengesSnippet() {
    return (
        <>
            <table className="challenges-snippet">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Rank</th>
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>
                    {challenges.map(challenge => (
                        <tr>
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