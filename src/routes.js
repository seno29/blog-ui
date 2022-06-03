import AdminDashboard from "./pages/AdminDashboard/admin-dashboard";
import ArticleRequestView from "./pages/ArticleRequestView/article-request-view";
import ArticleView from "./pages/ArticleView/article-view";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import SecurityCheck from "./pages/SecurityCheck/security-check";
import SupAdmin from "./pages/SuperAdminDashboard/sup-admin";
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
        path: "/security-check",
        exact: true,
        component: <SecurityCheck />
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
    {
        path: "/admin",
        exact: true,
        component: <AdminDashboard />
    },
    {
        path: "/article-req-view",
        exact: true,
        component: <ArticleRequestView />
    },
    {
        path: "/sup-admin",
        exact: true,
        component: <SupAdmin />
    },
]
