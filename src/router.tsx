import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout";
import { Index } from "./pages";
import { SignUp } from "./pages/signup";
import { Login } from "./pages/login";
import { Solutions } from "./pages/solutions";
import { Challenges } from "./pages/challenges";
import { Resources } from "./pages/resources";
import { Helper } from "./pages/helper/helper";
import React from "react";
import { Solution } from "./pages/solution";
import { Challenge } from "./pages/challenge";
import { Resource } from "./pages/resource";
import { Help } from "./pages/help";

export const Router = () => {
    const router = createBrowserRouter ([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Index /> },
                { path: '/signup', element: <SignUp /> },
                { path: '/login', element: <Login /> },
                { path: '/solutions', element: <Solutions /> },
                { path: '/solution/:id', element: <Solution /> },
                { path: '/challenges', element: <Challenges /> },
                { path: '/challenge/:id', element: <Challenge /> },
                { path: '/resources', element: <Resources /> },
                { path: '/resource/:id', element: <Resource /> },
                { path: '/help', element: <Helper /> },
                { path: '/help/:id', element: <Help /> },
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}