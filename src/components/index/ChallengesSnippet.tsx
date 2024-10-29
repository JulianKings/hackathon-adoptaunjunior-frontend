import React from "react";
import { ApiChallengeInterface } from "../../interfaces/challenge";

const challenges: ApiChallengeInterface[] = [
    {
        id: 1,
        created_at: new Date('2023-10-01'),
        updated_at: new Date('2023-10-02'),
        title: "Verificador de Palíndromos",
        description: "Crea una función que verifique si una cadena dada es un palíndromo.",
        content: "Tu tarea es implementar una función que tome una cadena como entrada y devuelva verdadero si es un palíndromo y falso de lo contrario. Recuerda ignorar espacios y puntuación.",
        published: true,
        difficulty: 'easy',
        picture: "/assets/challenge1.png"
    },
    {
        id: 2,
        created_at: new Date('2022-12-15'),
        updated_at: new Date('2023-01-10'),
        title: "Secuencia de Fibonacci",
        description: "Escribe una función para generar la secuencia de Fibonacci hasta un número dado.",
        content: "Implementa una función que devuelva un array que contenga la secuencia de Fibonacci hasta n. La secuencia de Fibonacci comienza con 0 y 1, donde cada número subsecuente es la suma de los dos anteriores.",
        published: true,
        difficulty: 'medium',
        picture: "/assets/challenge2.png"
    },
    {
        id: 3,
        created_at: new Date('2023-07-05'),
        updated_at: new Date('2023-07-06'),
        title: "Algoritmos de Ordenamiento",
        description: "Implementa y compara diferentes algoritmos de ordenamiento.",
        content: "Crea funciones para al menos tres algoritmos de ordenamiento diferentes (por ejemplo, ordenamiento burbuja, ordenamiento rápido, ordenamiento por mezcla) y compara su rendimiento en arrays de números aleatorios.",
        published: false,
        difficulty: 'hard',
        picture: "/assets/challenge3.png"
    },
    {
        id: 4,
        created_at: new Date('2023-09-20'),
        updated_at: new Date('2023-09-21'),
        title: "Búsqueda Binaria",
        description: "Implementa un algoritmo de búsqueda binaria.",
        content: "Dada una array ordenada y un valor objetivo, escribe una función para determinar si el objetivo existe en la array utilizando búsqueda binaria. Devuelve el índice si se encuentra, de lo contrario, devuelve -1.",
        published: true,
        difficulty: 'medium',
        picture: "/assets/challenge4.png"
    },
    {
        id: 5,
        created_at: new Date('2024-01-10'),
        updated_at: new Date('2024-01-15'),
        title: "Verificador de Anagramas",
        description: "Crea una función que verifique si dos cadenas son anagramas.",
        content: "Escribe una función que tome dos cadenas como entrada y determine si son anagramas entre sí. Ignora espacios y distinciones entre mayúsculas y minúsculas.",
        published: true,
        difficulty: 'easy',
        picture: "/assets/challenge5.png"
    },
    {
        id: 6,
        created_at: new Date('2024-03-05'),
        updated_at: new Date('2024-03-06'),
        title: "Contar Vocales y Consonantes",
        description: "Crea una función que cuente las vocales y consonantes en una cadena.",
        content: "Implementa una función que tome una cadena y devuelva un objeto con los conteos de vocales y consonantes. Asegúrate de que maneje tanto letras mayúsculas como minúsculas.",
        published: false,
        difficulty: 'basic',
        picture: "/assets/challenge6.png"
    }
];


export function ChallengesSnippet() {
    function capitalizeFirstLetter(str: string) {
        if (!str) return str;
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    return (
        <>
            <table className="challenges-snippet">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Rango</th>
                        <th>Done</th>
                    </tr>
                </thead>
                <tbody>
                    {challenges.slice(0,4).map((challenge, index) => (
                        <tr>
                            <td>{index + 1}.</td>
                            <td>{challenge.title}</td>
                            { challenge.description.length > 70 ?
                                <td>{challenge.description.substring(0, 70)}...</td>
                                :
                                <td>{challenge.description}</td>
                            }
                            <td>{capitalizeFirstLetter(challenge.difficulty)}</td>
                            <td>No</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}