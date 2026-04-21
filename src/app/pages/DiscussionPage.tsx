import { useParams, Link } from "react-router";
import {
  getDiscussionById,
  getCommentsByDiscussion,
  getTopicById,
} from "../data/mockData";
import {
  ArrowLeft,
  ArrowUpCircle,
  MessageSquare,
  Flag,
  Tag,
  AlertCircle,
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Switch } from "../components/ui/switch";

export function DiscussionPage() {
  const { discussionId } = useParams<{ discussionId: string }>();
  const discussion = discussionId ? getDiscussionById(discussionId) : undefined;
  const comments = discussionId ? getCommentsByDiscussion(discussionId) : [];
  const topic = discussion ? getTopicById(discussion.topicId) : undefined;

  if (!discussion || !topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Discussion not found</p>
      </div>
    );
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
    
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link to={`/topics/${topic.id}`}>
        <Button variant="ghost" className="mb-6 -ml-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {topic.name}
        </Button>
      </Link>

      {/* Discussion Post */}
      <div className="bg-white rounded-xl border-2 border-purple-100 p-6 md:p-8 mb-8">
        <div className="flex gap-4 mb-4">
          {/* Upvote */}
          <div className="flex flex-col items-center gap-1">
            <button className="text-gray-400 hover:text-purple-600 transition-colors">
              <ArrowUpCircle className="w-6 h-6" />
            </button>
            <span className="text-sm font-medium text-gray-600">
              {discussion.upvotes}
            </span>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className={topic.color}>{topic.name}</Badge>
              {discussion.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {discussion.title}
            </h1>

            <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
              <span>
                Posted by{" "}
                {discussion.isAnonymous ? "Anonymous" : discussion.author}
              </span>
              <span>•</span>
              <span>{getTimeAgo(discussion.createdAt)}</span>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">
              {discussion.content}
            </p>

            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <MessageSquare className="w-4 h-4 mr-2" />
                {comments.length} Comments
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-500">
                <Flag className="w-4 h-4 mr-2" />
                Report
              </Button>
            </div>
          </div>
        </div>

        {/* Discussion Status */}
        {!discussion.isOpen && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex items-start gap-3 bg-amber-50 border border-amber-200 rounded-lg p-4">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-900">
                  This discussion has been closed
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  Comments are no longer being accepted to keep conversations
                  fresh and relevant.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Add Comment */}
      {discussion.isOpen && (
        <div className="bg-white rounded-xl border-2 border-purple-100 p-6 mb-8">
          <h3 className="font-semibold text-lg mb-4">Add a Comment</h3>
          <div className="space-y-4">
            <div>
              <Textarea
                placeholder="Share your thoughts, experiences, or support..."
                className="min-h-32"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Switch id="anonymous" />
                <Label htmlFor="anonymous" className="text-sm">
                  Post anonymously
                </Label>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Comments */}
      <div className="space-y-4">
        <h3 className="font-semibold text-lg mb-4">
          Comments ({comments.length})
        </h3>

        {comments.map((comment) => (
          <div
            key={comment.id}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex gap-4">
              {/* Upvote */}
              <div className="flex flex-col items-center gap-1">
                <button className="text-gray-400 hover:text-purple-600 transition-colors">
                  <ArrowUpCircle className="w-5 h-5" />
                </button>
                <span className="text-xs font-medium text-gray-600">
                  {comment.upvotes}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>
                    {comment.isAnonymous ? "Anonymous" : comment.author}
                  </span>
                  <span>•</span>
                  <span>{getTimeAgo(comment.createdAt)}</span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-3">
                  {comment.content}
                </p>

                <Button variant="ghost" size="sm" className="text-gray-500 -ml-2">
                  <Flag className="w-3 h-3 mr-1" />
                  Report
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Related Articles CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Looking for verified information?
        </h3>
        <p className="text-gray-600 mb-6">
          Read articles written and reviewed by medical professionals
        </p>
        <Link to={`/topics/${topic.id}`}>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            View {topic.name} Articles
          </Button>
        </Link>
      </div>
    </div>
  );
}
