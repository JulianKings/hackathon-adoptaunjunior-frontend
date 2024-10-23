import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout";
import { Index } from "./pages";
import { SignUp } from "./pages/signup";
import { Login } from "./pages/login";
import { Solutions } from "./pages/solutions";
import { Challenges } from "./pages/challenges";
import { Resources } from "./pages/resources";
import { Help } from "./pages/help";
import React from "react";

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
                { path: '/challenges', element: <Challenges /> },
                { path: '/resources', element: <Resources /> },
                { path: '/help', element: <Help /> }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
}