import { Link } from "react-router";
import { topics } from "../data/mockData";
import { ArrowRight } from "lucide-react";

export function TopicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Health Topics
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Explore verified medical information and community discussions on
          women's health topics. Choose a topic below to get started.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {topics.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.id}`}
            className="group bg-white rounded-2xl p-8 border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all"
          >
            <div className="text-5xl mb-4">{topic.icon}</div>
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
              {topic.name}
            </h2>
            <p className="text-gray-600 mb-4">{topic.description}</p>
            <div className="flex items-center text-purple-600 font-medium">
              Explore
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
