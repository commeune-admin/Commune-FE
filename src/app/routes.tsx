import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { TopicsPage } from "./pages/TopicsPage";
import { TopicPage } from "./pages/TopicPage";
import { ArticlePage } from "./pages/ArticlePage";
import { DiscussionPage } from "./pages/DiscussionPage";
import { AdminPortal } from "./pages/AdminPortal";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: LandingPage },
      { path: "topics", Component: TopicsPage },
      { path: "topics/:topicId", Component: TopicPage },
      { path: "articles/:articleId", Component: ArticlePage },
      { path: "discussions/:discussionId", Component: DiscussionPage },
      { path: "admin", Component: AdminPortal },
    ],
  },
]);
