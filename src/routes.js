import ArticleView from "./pages/ArticleView/article-view";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import UserDashboard from "./pages/UserDashboard/user-dashboard";

export const routes = [
    {
        path: "/",
        exact: true,
        component: <Login/>
    },
    {
        path: "/login",
        exact: true,
        component: <Login/>
    },
    {
        path: "/register",
        exact: true,
        component: <Register/>
    },
    {
        path: "/user-dashboard",
        exact: true,
        component: <UserDashboard/>
    },
    {
        path: "/article-view",
        exact: true,
        component: <ArticleView />
    },
]
