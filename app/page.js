import Link from "next/link";
import ButtonSignin from "@/components/ButtonSignin";
import MicroOfferBuilder from "@/components/MicroOfferBuilder";
import config from "@/config";

const tools = [
  { icon: "💡", name: "Product Idea Generator", kit: "Profit Engine" },
  { icon: "📊", name: "Content Strategist", kit: "Profit Engine" },
  { icon: "✍️", name: "Copywriter AI", kit: "Profit Engine" },
  { icon: "📧", name: "Email Sequence Builder", kit: "Profit Engine" },
  { icon: "🤝", name: "Affiliate Program Creator", kit: "Profit Engine" },
  { icon: "📱", name: "Social Media Manager", kit: "Marketing Suite" },
  { icon: "📝", name: "Content Generator", kit: "Marketing Suite" },
  { icon: "📈", name: "Trend Spotter", kit: "Marketing Suite" },
  { icon: "🎯", name: "Marketing Mentor", kit: "Marketing Suite" },
  { icon: "👥", name: "Community Builder", kit: "Marketing Suite" },
];

const pricingPlans = [
  {
    name: "Starter",
    price: 79,
    priceAnchor: 199,
    description: "10 AI tools for profit & marketing",
    features: [
      "AI Profit Engine (5 tools)",
      "Marketing Suite (5 tools)",
      "Lifetime access",
      "All future updates",
    ],
    priceId: process.env.NODE_ENV === "development" 
      ? "price_1Niyy5AxyNprDp7iZIqEyD2h" 
      : "price_456",
  },
  {
    name: "Complete Bundle",
    price: 99,
    priceAnchor: 299,
    description: "All 15 tools - best value",
    featured: true,
    features: [
      "AI Profit Engine (5 tools)",
      "Marketing Suite (5 tools)",
      "BrandSprint (5 tools)",
      "Lifetime access",
      "All future updates",
      "Priority support",
    ],
    priceId: process.env.NODE_ENV === "development" 
      ? "price_1O5KtcAxyNprDp7iftKnrrpw" 
      : "price_456",
  },
];

export default function Page() {
  return (
    <>
      {/* Header */}
      <header className="p-4 flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <span className="text-2xl">⚗️</span>
          <span>{config.appName}</span>
        </Link>
        <nav className="flex items-center gap-6">
          <a href="#features" className="hover:text-amber-600 transition-colors hidden sm:block">Features</a>
          <a href="#pricing" className="hover:text-amber-600 transition-colors hidden sm:block">Pricing</a>
          <ButtonSignin text="Login" />
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-amber-600 font-medium mb-4">⚗️ Distilling Business Success</p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
              10 AI Tools to Cook Up Your Dream Business
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              No tech skills needed. No intimidating dashboards. Just tell our AI what you want to build, and watch your business take shape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#micro-offer"
                className="btn bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-none text-lg px-8"
              >
                Try It Free ⚗️
              </a>
              <a href="#pricing" className="btn btn-outline text-lg px-8">
                View Pricing
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              ✓ No credit card required · ✓ Cancel anytime · ✓ Lifetime access available
            </p>
          </div>
        </section>

        {/* Micro-Offer Builder - FREE TOOL */}
        <div id="micro-offer">
          <MicroOfferBuilder />
        </div>

        {/* Tools Grid */}
        <section id="features" className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                All 10 AI Tools at Your Fingertips
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to go from idea to profitable business
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 hover:bg-amber-50 p-6 rounded-xl text-center transition-all hover:shadow-md"
                >
                  <span className="text-3xl block mb-3">{tool.icon}</span>
                  <h3 className="font-medium text-gray-900 text-sm">{tool.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{tool.kit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 md:py-24 px-6 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              AI Feels Overwhelming. We Get It.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              ChatGPT, Claude, prompts, APIs... it&apos;s a lot. Most people give up before they even start.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="bg-gray-800 p-6 rounded-xl">
                <span className="text-3xl mb-3 block">😵</span>
                <h3 className="font-bold mb-2">Too Many Options</h3>
                <p className="text-gray-400 text-sm">Hundreds of AI tools, zero clear direction on which to use.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <span className="text-3xl mb-3 block">🤯</span>
                <h3 className="font-bold mb-2">Prompt Engineering?</h3>
                <p className="text-gray-400 text-sm">You just want results, not a PhD in talking to robots.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <span className="text-3xl mb-3 block">💸</span>
                <h3 className="font-bold mb-2">Expensive Subscriptions</h3>
                <p className="text-gray-400 text-sm">$20/month here, $50/month there... it adds up fast.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-16 md:py-24 px-6 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              AI Biz Brewery Makes It Simple
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Pre-built AI tools designed for real business tasks. No prompts to write. No learning curve.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">1️⃣</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Pick a Tool</h3>
                <p className="text-gray-600">Choose from 10 purpose-built AI assistants</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">2️⃣</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Answer Questions</h3>
                <p className="text-gray-600">The AI guides you step by step</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">3️⃣</span>
                </div>
                <h3 className="font-bold text-lg mb-2">Get Results</h3>
                <p className="text-gray-600">Copy, paste, and launch your business</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-16 md:py-24 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Simple, One-Time Pricing
              </h2>
              <p className="text-gray-600 text-lg">
                Pay once, use forever. No subscriptions, no hidden fees.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
              {pricingPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative p-8 rounded-2xl ${
                    plan.featured 
                      ? 'bg-gradient-to-b from-amber-500 to-orange-500 text-white shadow-2xl scale-105' 
                      : 'bg-gray-50 border-2 border-gray-200'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-sm font-bold px-4 py-1 rounded-full">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className={`text-sm mb-4 ${plan.featured ? 'text-amber-100' : 'text-gray-500'}`}>
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className={`text-lg line-through ${plan.featured ? 'text-amber-200' : 'text-gray-400'}`}>
                      ${plan.priceAnchor}
                    </span>
                    <span className="text-4xl font-extrabold">${plan.price}</span>
                    <span className={`text-sm ${plan.featured ? 'text-amber-100' : 'text-gray-500'}`}>
                      one-time
                    </span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className={plan.featured ? 'text-amber-200' : 'text-green-500'}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={config.auth.loginUrl}
                    className={`block text-center py-3 px-6 rounded-xl font-bold transition-all ${
                      plan.featured
                        ? 'bg-white text-amber-600 hover:bg-gray-100'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 px-6 bg-gray-900 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Cook Up Something Special? ⚗️
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join entrepreneurs who are building smarter with AI
            </p>
            <a
              href="#micro-offer"
              className="inline-block py-4 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Try the Free Tool →
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-gray-950 text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">⚗️</span>
            <span className="font-bold text-white">{config.appName}</span>
          </div>
          <nav className="flex gap-6 text-sm">
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/tos" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
          </nav>
          <p className="text-sm">© 2024 {config.appName}. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
