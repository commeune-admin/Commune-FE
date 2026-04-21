import { Link } from "react-router";
import { Shield, Users, BookOpen, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              A safe space for{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                women's health
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Commune brings together verified medical information and supportive
              community discussions for women navigating complex health
              conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/topics">
                <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                  Explore Health Topics
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/topics">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-purple-300 text-purple-700 hover:bg-purple-50"
                >
                  Join the Community
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-y border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-xl flex-shrink-0">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Verified Information</h3>
                <p className="text-sm text-gray-600">
                  All articles are written or reviewed by medical professionals
                  and backed by research.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-pink-100 p-3 rounded-xl flex-shrink-0">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Safe Community</h3>
                <p className="text-sm text-gray-600">
                  Share experiences anonymously or with your name in a moderated,
                  supportive environment.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 p-3 rounded-xl flex-shrink-0">
                <BookOpen className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Free Access</h3>
                <p className="text-sm text-gray-600">
                  Read all articles and community discussions without needing an
                  account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Health Topics
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find verified information and connect with others who understand your
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/topics/fibroids"
            className="group bg-white rounded-2xl p-8 border-2 border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all"
          >
            <div className="text-5xl mb-4">🌸</div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
              Fibroids
            </h3>
            <p className="text-gray-600 mb-4">
              Understanding uterine fibroids, symptoms, and treatment options
            </p>
            <div className="flex items-center text-purple-600 font-medium">
              Learn more
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/topics/endometriosis"
            className="group bg-white rounded-2xl p-8 border-2 border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all"
          >
            <div className="text-5xl mb-4">🌺</div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-pink-600 transition-colors">
              Endometriosis
            </h3>
            <p className="text-gray-600 mb-4">
              Support and information for those living with endometriosis
            </p>
            <div className="flex items-center text-pink-600 font-medium">
              Learn more
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          <Link
            to="/topics/periods"
            className="group bg-white rounded-2xl p-8 border-2 border-teal-100 hover:border-teal-300 hover:shadow-xl transition-all"
          >
            <div className="text-5xl mb-4">🌿</div>
            <h3 className="text-2xl font-semibold mb-3 group-hover:text-teal-600 transition-colors">
              Periods
            </h3>
            <p className="text-gray-600 mb-4">
              Navigating menstrual health and period-related challenges
            </p>
            <div className="flex items-center text-teal-600 font-medium">
              Learn more
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Why Commune */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Commune?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      You're Not Alone
                    </h3>
                    <p className="text-gray-600">
                      Connect with thousands of women who understand what you're
                      going through.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Trusted Information
                    </h3>
                    <p className="text-gray-600">
                      Access verified, research-backed content you can trust for
                      your health decisions.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Your Privacy Matters
                    </h3>
                    <p className="text-gray-600">
                      Share your story anonymously or with your name - the choice
                      is always yours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      Moderated & Safe
                    </h3>
                    <p className="text-gray-600">
                      Our community is actively moderated to ensure a respectful,
                      supportive environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl blur-2xl opacity-30"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758274539654-23fa349cc090?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHdlbGxuZXNzJTIwbWVkaXRhdGlvbiUyMGNhbG18ZW58MXx8fHwxNzcyMDg2NTQxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Woman in peaceful meditation"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join Commune?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore verified health information and connect with a supportive
            community today.
          </p>
          <Link to="/topics">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}