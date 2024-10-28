import React from "react";
import { ChallengesSnippet } from "../components/index/ChallengesSnippet";
import { ResourcesSnippet } from "../components/index/ResourcesSnippet";
import { HomeLink } from "../components/index/HomeLink";
import { ApiResourceInterface } from '../interfaces/resource';

export const resources: ApiResourceInterface[] = [
    {
        id: 1,
        created_at: new Date('2024-10-21T10:30:00Z'),
        updated_at: new Date('2024-10-23T12:15:00Z'),
        title: "Fundamentos de JavaScript",
        description: "Una introducción a los fundamentos de JavaScript para principiantes.",
        content: "JavaScript es uno de los lenguajes de programación más importantes en el desarrollo web. Este curso cubre los fundamentos necesarios, comenzando con la sintaxis básica, variables, operadores, y estructuras de control como bucles y condicionales. Aprenderás a manipular el DOM, a realizar operaciones básicas de manipulación de datos, y a entender el flujo de ejecución. También te introduciremos a conceptos como funciones y objetos para construir programas más complejos. Este curso proporciona ejercicios prácticos y ejemplos reales para reforzar cada tema, y te permitirá establecer una base sólida en JavaScript.",
        published: true,
        type: 'course',
        url: "https://www.linkedin.com/posts/braismoure_el-curso-de-fundamentos-de-javascript-desde-activity-7232378595594153984-saKp/?originalSubdomain=es",
        image: "/public/assets/fundamentos_javascript.jpeg"
    },
    {
        id: 2,
        created_at: new Date('2024-10-22T09:20:00Z'),
        updated_at: new Date('2024-10-24T14:45:00Z'),
        title: "Consejos de Diseño Responsivo",
        description: "Las mejores prácticas para diseño web adaptable.",
        content: "El diseño responsivo es esencial para brindar una buena experiencia de usuario en dispositivos de diferentes tamaños. Este curso explora los principios del diseño adaptable, el uso de media queries y técnicas para crear layouts flexibles que se adapten a cualquier pantalla. Aprenderás a usar unidades relativas y a trabajar con imágenes y videos que cambien dinámicamente de tamaño. También cubriremos la accesibilidad y cómo asegurarte de que el contenido sea fácil de navegar y legible en cualquier dispositivo. Este curso combina teoría y práctica para ayudarte a construir interfaces modernas y funcionales.",
        published: false,
        type: 'video',
        url: "https://www.linkedin.com/pulse/5-consejos-b%C3%A1sicos-sobre-dise%C3%B1o-responsive-juan-alonso/",
        image: "public/assets/consejos_responsivo.jpeg"
    },
    {
        id: 3,
        created_at: new Date('2024-10-23T08:15:00Z'),
        updated_at: new Date('2024-10-25T16:00:00Z'),
        title: "Diseño de Layouts con CSS Grid",
        description: "Aprende a crear layouts dinámicos con CSS Grid.",
        content: "CSS Grid es una tecnología poderosa que permite crear layouts complejos y adaptables de forma sencilla. En este curso, se enseñan los fundamentos de CSS Grid, incluidas las propiedades para definir filas y columnas, y los diferentes modos de alinear y justificar elementos en una cuadrícula. A lo largo del curso, verás cómo usar `grid-template-areas`, `grid-gap`, y cómo combinar CSS Grid con otros enfoques como Flexbox para lograr una mayor flexibilidad. A través de ejemplos y proyectos, aprenderás a dominar esta herramienta para construir interfaces modernas y estructuradas.",
        published: true,
        type: 'course',
        url: "https://www.linkedin.com/pulse/css-grid-b%C3%A1sico-todo-lo-que-necesitas-saber-para-empezar-campos/",
        image: "public/assets/css_grid.png"
    },
    {
        id: 4,
        created_at: new Date('2024-10-24T07:30:00Z'),
        updated_at: new Date('2024-10-26T18:10:00Z'),
        title: "Patrones de Componentes en React",
        description: "Patrones avanzados para construir componentes en React.",
        content: "Este curso explora patrones avanzados para desarrollar componentes en React que sean reutilizables, optimizados y fáciles de mantener. Aprenderás a implementar patrones como el patrón de render props, el patrón de contenedor y presentación, y el patrón de composición. También se cubrirán técnicas para mejorar el rendimiento de los componentes y optimizar el manejo del estado global. Con ejemplos prácticos, verás cómo estos patrones pueden mejorar la arquitectura de tus aplicaciones React y facilitar la colaboración en proyectos de equipo.",
        published: true,
        type: 'video',
        url: "https://developero.io/blog/react-js-design-patterns",
        image: "public/assets/patrones_react.jpeg"
    },
    {
        id: 5,
        created_at: new Date('2024-10-25T11:45:00Z'),
        updated_at: new Date('2024-10-27T10:05:00Z'),
        title: "Fundamentos de TypeScript",
        description: "Aprende los fundamentos de TypeScript para mejorar tu JavaScript.",
        content: "TypeScript es un superset de JavaScript que agrega tipado estático al lenguaje, lo cual ayuda a reducir errores y facilita la creación de código más seguro y fácil de mantener. Este curso cubre desde los conceptos básicos de tipado hasta temas avanzados, como tipos generics, interfaces, y la integración con librerías y frameworks como React. Aprenderás cómo usar TypeScript en tus proyectos para obtener un mejor control sobre el tipo de datos y cómo aprovechar sus herramientas de desarrollo para mejorar tu flujo de trabajo y la calidad del código.",
        published: false,
        type: 'course',
        url: "https://johnserrano.co/blog/typescript-desde-cero-descubriendo-sus-ventajas-y-fundamentos-basicos",
        image: "public/assets/fundamentos_typescript.webp"
    },
    {
        id: 6,
        created_at: new Date('2024-10-26T15:25:00Z'),
        updated_at: new Date('2024-10-27T17:35:00Z'),
        title: "Introducción a Webpack",
        description: "Una introducción a la herramienta de empaquetado Webpack.",
        content: "Webpack es una herramienta esencial para los desarrolladores modernos de JavaScript, ya que permite empaquetar y optimizar el código para la web. Este curso te enseñará cómo configurar un proyecto con Webpack, cómo gestionar dependencias y cómo optimizar tus archivos para reducir el tiempo de carga de tu aplicación. Aprenderás a trabajar con loaders y plugins, y a crear configuraciones personalizadas según las necesidades del proyecto. Este curso es ideal para desarrolladores que desean mejorar el rendimiento y la estructura de sus proyectos JavaScript mediante el uso de Webpack.",
        published: true,
        type: 'video',
        url: "https://www.youtube.com/watch?app=desktop&v=EwAWX91Bk3E",
        image: "public/assets/intro_webpack.jpg"
    }
];

export function Index() {
    return (
        <div className="index-page">
            <img className="index-page__image index-page__image--pumpkin" src="src/assets/pumpkin.webp" />
            <h1 className="index-page__title">TRUCOS</h1>
            <ChallengesSnippet />
            <button className="index-page__button">VER TODOS</button>
            <img className="index-page__image index-page__image--skullworm" src="src/assets/skullworm.webp" />
            <h1 className="index-page__title">TRATOS</h1>
            <ResourcesSnippet />
            <button className="index-page__button">VER TODOS</button>
            <div className="home-link-container">
                <HomeLink name="Preguntas" icon="src/assets/question-mark-icon.png"/>
                <HomeLink name="Logros" icon="src/assets/cup-icon.png"/>
            </div>
            <img className="index-page__image index-page__image--ghost" src="src/assets/ghost.webp" />
        </div>
    );
}