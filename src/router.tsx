import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout";
import { Index } from "./pages";
import { SignUp } from "./pages/signup";
import { LoginPage } from "./pages/login";
import { Solutions } from "./pages/solutions";
import { Challenges } from "./pages/challenges";
import { Resources } from "./pages/resources";
import { Helper } from "./pages/helper/helper.tsx";
import React from "react";
import { Solution } from "./pages/solution";
import { Challenge } from "./pages/challenge";
import { Resource } from "./pages/resource";
import { Help } from "./pages/help/help.tsx";
import { Logout } from "./pages/logout.tsx";

export const Router = () => {
    const router = createBrowserRouter ([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Index /> },
                { path: '/signup', element: <SignUp /> },
                { path: '/login', element: <LoginPage /> },
                { path: '/solutions', element: <Solutions /> },
                { path: '/solution/:id', element: <Solution /> },
                { path: '/challenges', element: <Challenges /> },
                { path: '/challenge', element: <Challenge /> }, //{ path: '/challenge/:id', element: <Challenge /> },
                { path: '/resources', element: <Resources /> },
                { path: '/resources/:id', element: <Resource /> },
                { path: '/help', element: <Helper /> },
                { path: '/help/:id', element: <Help /> },
                { path: '/logout', element: <Logout /> },
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}