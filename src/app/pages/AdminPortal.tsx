import { useState } from "react";
import { Link } from "react-router";
import {
  FileText,
  MessageSquare,
  Tag as TagIcon,
  Settings,
  BarChart3,
  Plus,
  Edit,
  Trash2,
  Eye,
  ArrowLeft,
} from "lucide-react";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { articles, discussions, topics } from "../data/mockData";

export function AdminPortal() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Exit Admin
                </Button>
              </Link>
              <div className="h-6 w-px bg-gray-300"></div>
              <h1 className="text-xl font-semibold">Admin Portal</h1>
            </div>
            <div className="text-sm text-gray-600">Welcome, Admin</div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl grid-cols-4 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="discussions" className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Discussions
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">
                    Total Articles
                  </h3>
                  <FileText className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-3xl font-bold">{articles.length}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Across {topics.length} topics
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">
                    Community Discussions
                  </h3>
                  <MessageSquare className="w-5 h-5 text-pink-600" />
                </div>
                <p className="text-3xl font-bold">{discussions.length}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {discussions.filter((d) => d.isOpen).length} active
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">
                    Pending Reviews
                  </h3>
                  <Eye className="w-5 h-5 text-teal-600" />
                </div>
                <p className="text-3xl font-bold">3</p>
                <p className="text-xs text-gray-500 mt-1">
                  Requires moderation
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="font-semibold text-lg mb-4">Recent Activity</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <FileText className="w-4 h-4 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      New article published:{" "}
                      <span className="font-medium">
                        "Understanding Uterine Fibroids"
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b border-gray-100 last:border-0">
                  <div className="bg-pink-100 p-2 rounded-lg">
                    <MessageSquare className="w-4 h-4 text-pink-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      Discussion flagged for review:{" "}
                      <span className="font-medium">
                        "Recovery after myomectomy"
                      </span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-2 rounded-lg">
                    <TagIcon className="w-4 h-4 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">
                      New tag created:{" "}
                      <span className="font-medium">"pain-management"</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Articles Tab */}
          <TabsContent value="articles">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Manage Articles</h2>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Plus className="w-4 h-4 mr-2" />
                New Article
              </Button>
            </div>

            {/* Article Form */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
              <h3 className="font-semibold mb-4">Create New Article</h3>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="article-title">Article Title</Label>
                    <Input
                      id="article-title"
                      placeholder="Enter article title"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="article-topic">Health Topic</Label>
                    <Select>
                      <SelectTrigger className="mt-1.5">
                        <SelectValue placeholder="Select topic" />
                      </SelectTrigger>
                      <SelectContent>
                        {topics.map((topic) => (
                          <SelectItem key={topic.id} value={topic.id}>
                            {topic.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="article-excerpt">Excerpt</Label>
                  <Textarea
                    id="article-excerpt"
                    placeholder="Brief summary of the article"
                    className="mt-1.5"
                    rows={2}
                  />
                </div>

                <div>
                  <Label htmlFor="article-content">Article Content</Label>
                  <Textarea
                    id="article-content"
                    placeholder="Write your article content here"
                    className="mt-1.5"
                    rows={10}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="article-author">Author</Label>
                    <Input
                      id="article-author"
                      placeholder="Author name"
                      className="mt-1.5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="article-reviewer">Medical Reviewer</Label>
                    <Input
                      id="article-reviewer"
                      placeholder="Medical reviewer name (optional)"
                      className="mt-1.5"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="article-sources">Sources</Label>
                  <Textarea
                    id="article-sources"
                    placeholder="Add sources and citations (one per line)"
                    className="mt-1.5"
                    rows={3}
                  />
                </div>

                <div className="flex justify-end gap-3">
                  <Button variant="outline">Save as Draft</Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                    Publish Article
                  </Button>
                </div>
              </div>
            </div>

            {/* Articles List */}
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <h3 className="font-semibold">Published Articles</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {articles.map((article) => {
                  const topic = topics.find((t) => t.id === article.topicId);
                  return (
                    <div
                      key={article.id}
                      className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h4 className="font-medium">{article.title}</h4>
                          {topic && (
                            <Badge variant="outline" className="text-xs">
                              {topic.name}
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <span>By {article.author}</span>
                          <span>•</span>
                          <span>{article.publishedDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <Link to={`/articles/${article.id}`}>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </Link>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* Discussions Tab */}
          <TabsContent value="discussions">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Moderate Discussions</h2>
              <div className="flex items-center gap-3">
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Discussions</SelectItem>
                    <SelectItem value="flagged">Flagged</SelectItem>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="closed">Closed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200">
              <div className="divide-y divide-gray-200">
                {discussions.map((discussion) => {
                  const topic = topics.find((t) => t.id === discussion.topicId);
                  return (
                    <div
                      key={discussion.id}
                      className="p-6 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-medium">{discussion.title}</h4>
                            {topic && (
                              <Badge variant="outline" className="text-xs">
                                {topic.name}
                              </Badge>
                            )}
                            <Badge
                              variant={discussion.isOpen ? "default" : "secondary"}
                              className="text-xs"
                            >
                              {discussion.isOpen ? "Open" : "Closed"}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {discussion.content}
                          </p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>
                              By{" "}
                              {discussion.isAnonymous
                                ? "Anonymous"
                                : discussion.author}
                            </span>
                            <span>•</span>
                            <span>{discussion.upvotes} upvotes</span>
                            <span>•</span>
                            <span>{discussion.commentCount} comments</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Link to={`/discussions/${discussion.id}`}>
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </Link>
                          <Button variant="outline" size="sm">
                            {discussion.isOpen ? "Close" : "Reopen"}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <h2 className="text-2xl font-bold mb-6">Platform Settings</h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold mb-4">Content Management</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">Auto-close discussions</Label>
                      <p className="text-sm text-gray-600">
                        Automatically close discussions after a set period
                      </p>
                    </div>
                    <Select defaultValue="90">
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="never">Never</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold mb-4">Tags & Categories</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="new-tag">Add New Tag</Label>
                    <div className="flex gap-2 mt-1.5">
                      <Input
                        id="new-tag"
                        placeholder="Enter tag name"
                        className="flex-1"
                      />
                      <Button>
                        <Plus className="w-4 h-4 mr-2" />
                        Add Tag
                      </Button>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">Existing Tags</p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "diagnosis",
                        "treatment-options",
                        "surgery",
                        "pain-management",
                        "support",
                        "newly-diagnosed",
                      ].map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                          <button className="ml-2 text-gray-500 hover:text-red-600">
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="font-semibold mb-4">Moderation Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label className="text-base">
                        Require review for new discussions
                      </Label>
                      <p className="text-sm text-gray-600">
                        All new discussions must be approved before appearing
                      </p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
