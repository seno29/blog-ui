import MyBlogs from "./pages/MyBlogs/myblogs";
import ArticleHistory from "./pages/ArticleHistory/article-history";
import ArticleRequestView from "./pages/ArticleRequestView/article-request-view";
import ArticleView from "./pages/ArticleView/article-view";
import EditArticle from "./pages/EditArticle/edit-article";
import Login from "./pages/Login/login";
import Register from "./pages/Register/register";
import ReviewArticle from "./pages/ReviewArticle/review-article";
import SecurityCheck from "./pages/SecurityCheck/security-check";
import SupAdmin from "./pages/SuperAdminDashboard/sup-admin";
import UserDashboard from "./pages/UserDashboard/user-dashboard";
import WriteArticle from "./pages/WriteArticle/write-article";

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
        component: <MyBlogs />
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
    {
        path: "/write-article",
        exact: true,
        component: <WriteArticle />
    },
    {
        path: "/edit-article",
        exact: true,
        component: <EditArticle />
    },
    {
        path: "/review-article",
        exact: true,
        component: <ReviewArticle />
    },
    {
        path: "/article-history",
        exact: true,
        component: <ArticleHistory />
    },
]
