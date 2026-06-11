import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Surveys from "./views/Surveys";
import Signup from "./views/Signup";
import Login from "./views/Login";
import GuestLayout from "./Components/GuestLayout";
import DefaultLayout from "./Components/DefaultLayout";
import SurveyView from "./views/SurveyView";
import SurveyCreate from "./views/SurveyCreate";

const router = createBrowserRouter([
    {
        path: "/",
        element: <GuestLayout />,
        children: [
            {
                path: "/",
                element: <Signup />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },

    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/dashboard",
                element: <Dashboard />,
            },
            {
                path: "/surveys",
                element: <Surveys />,
            },
            {
                path: "/survey/view",
                element: <SurveyView />,
            },
            {
                path: "/surveys/create",
                element: <SurveyCreate />,
            },
        ],
    },
]);

export default router;
