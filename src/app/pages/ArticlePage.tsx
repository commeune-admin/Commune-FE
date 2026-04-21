import { useParams, Link } from "react-router";
import { getArticleById, getTopicById } from "../data/mockData";
import { Clock, ArrowLeft, Shield, FileText } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articleId ? getArticleById(articleId) : undefined;
  const topic = article ? getTopicById(article.topicId) : undefined;

  if (!article || !topic) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <p>Article not found</p>
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

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Back Button */}
      <Link to={`/topics/${topic.id}`}>
        <Button variant="ghost" className="mb-6 -ml-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {topic.name}
        </Button>
      </Link>

      {/* Article Header */}
      <article>
        <div className="mb-8">
          <Badge className={topic.color + " mb-4"}>{topic.name}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <span>By {article.author}</span>
            <span>•</span>
            <span>{formatDate(article.publishedDate)}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {article.readTime} min read
            </span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwd29tYW4lMjBkb2N0b3J8ZW58MXx8fHwxNzcxOTg0MzMxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Medical professional"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        {/* Medical Reviewer */}
        {article.medicalReviewer && (
          <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-purple-900 mb-1">
                  Medically Reviewed
                </p>
                <p className="text-sm text-purple-800">
                  This article has been reviewed by {article.medicalReviewer} to
                  ensure medical accuracy.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div
            className="whitespace-pre-line leading-relaxed"
            dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>') }}
          />
        </div>

        {/* Sources */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <FileText className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
            <h3 className="font-semibold text-lg">Sources & References</h3>
          </div>
          <ul className="space-y-2">
            {article.sources.map((source, index) => (
              <li key={index} className="text-sm text-gray-600 pl-6">
                {source}
              </li>
            ))}
          </ul>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 italic">
            This article is for informational purposes only and does not
            constitute medical advice. Always consult with a qualified healthcare
            provider regarding any medical concerns or before making any decisions
            about your health or treatment.
          </p>
        </div>
      </article>

      {/* Related Discussions CTA */}
      <div className="mt-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
        <h3 className="text-2xl font-semibold mb-3">
          Have questions or experiences to share?
        </h3>
        <p className="text-gray-600 mb-6">
          Join the community discussion on {topic.name.toLowerCase()}
        </p>
        <Link to={`/topics/${topic.id}`}>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            View Community Discussions
          </Button>
        </Link>
      </div>
    </div>
  );
}
