import { useParams, Link } from "react-router";
import {
  getTopicById,
  getArticlesByTopic,
  getDiscussionsByTopic,
} from "../data/mockData";
import { BookOpen, MessageSquare, Clock, ArrowUpCircle, MessageCircle, Tag } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";

export function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicId ? getTopicById(topicId) : undefined;
  const articles = topicId ? getArticlesByTopic(topicId) : [];
  const discussions = topicId ? getDiscussionsByTopic(topicId) : [];

  if (!topic) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Topic not found</p>
      </div>
    );
  }

  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  function getTimeAgo(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    if (diffInDays < 7) return `${diffInDays}d ago`;
    return formatDate(dateString);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Topic Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-5xl">{topic.icon}</div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">{topic.name}</h1>
            <p className="text-lg text-gray-600 mt-2">{topic.description}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="articles" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2 mb-8">
          <TabsTrigger value="articles" className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            Articles ({articles.length})
          </TabsTrigger>
          <TabsTrigger value="community" className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Community ({discussions.length})
          </TabsTrigger>
        </TabsList>

        {/* Articles Tab */}
        <TabsContent value="articles">
          <div className="space-y-6">
            {articles.map((article) => (
              <Link
                key={article.id}
                to={`/articles/${article.id}`}
                className="block bg-white rounded-xl p-6 border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h2 className="text-2xl font-semibold hover:text-purple-600 transition-colors">
                    {article.title}
                  </h2>
                  <Badge variant="secondary" className="flex-shrink-0">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime} min
                  </Badge>
                </div>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span>By {article.author}</span>
                  {article.medicalReviewer && (
                    <>
                      <span>•</span>
                      <span>Reviewed by {article.medicalReviewer}</span>
                    </>
                  )}
                  <span>•</span>
                  <span>{formatDate(article.publishedDate)}</span>
                </div>
              </Link>
            ))}
          </div>
        </TabsContent>

        {/* Community Tab */}
        <TabsContent value="community">
          <div className="mb-6">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <MessageSquare className="w-4 h-4 mr-2" />
              Start a Discussion
            </Button>
          </div>

          <div className="space-y-4">
            {discussions.map((discussion) => (
              <Link
                key={discussion.id}
                to={`/discussions/${discussion.id}`}
                className="block bg-white rounded-xl p-6 border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  {/* Upvotes */}
                  <div className="flex flex-col items-center gap-1 text-gray-500">
                    <ArrowUpCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">{discussion.upvotes}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 hover:text-purple-600 transition-colors">
                      {discussion.title}
                    </h3>
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {discussion.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {discussion.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="text-xs"
                        >
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span>
                        {discussion.isAnonymous ? "Anonymous" : discussion.author}
                      </span>
                      <span>•</span>
                      <span>{getTimeAgo(discussion.createdAt)}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {discussion.commentCount} comments
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
