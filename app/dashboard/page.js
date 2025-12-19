import ButtonAccount from "@/components/ButtonAccount";
import Link from "next/link";

export const dynamic = "force-dynamic";

const tools = [
  {
    id: 'trendspotter',
    name: 'TrendSpotter',
    icon: '🔍',
    description: 'Find emerging market trends & gaps before competition',
    href: '/dashboard/trendspotter',
    kit: 'AI Profit Engine',
  },
  {
    id: 'productidea',
    name: 'Product Idea Generator',
    icon: '💡',
    description: 'Turn trends into validated product/service ideas',
    href: '/dashboard/product-idea',
    kit: 'AI Profit Engine',
  },
  {
    id: 'copywriter',
    name: 'Marketing Copywriter',
    icon: '✍️',
    description: 'Write high-converting ads, emails, and landing pages',
    href: '/dashboard/copywriter',
    kit: 'AI Profit Engine',
  },
  {
    id: 'contentstrategy',
    name: 'Content Strategist',
    icon: '📋',
    description: 'Build complete content plans for blogs, social, and email',
    href: '/dashboard/content-strategist',
    kit: 'AI Profit Engine',
  },
  {
    id: 'marketingmentor',
    name: 'Marketing Mentor',
    icon: '🎯',
    description: '24/7 AI business coach for strategy & scaling',
    href: '/dashboard/marketing-mentor',
    kit: 'AI Profit Engine',
  },
  {
    id: 'affiliate',
    name: 'Affiliate Marketing Strategist',
    icon: '🤝',
    description: 'Build and scale affiliate programs',
    href: '/dashboard/affiliate',
    kit: 'Marketing Suite',
  },
  {
    id: 'contentgen',
    name: 'AI Content Generator',
    icon: '📝',
    description: 'Create persona-targeted blogs, ads, and video scripts',
    href: '/dashboard/content-generator',
    kit: 'Marketing Suite',
  },
  {
    id: 'community',
    name: 'Community Engagement Strategist',
    icon: '👥',
    description: 'Build thriving online communities',
    href: '/dashboard/community',
    kit: 'Marketing Suite',
  },
  {
    id: 'email',
    name: 'Email Marketing Specialist',
    icon: '📧',
    description: 'Create high-impact email campaigns',
    href: '/dashboard/email',
    kit: 'Marketing Suite',
  },
  {
    id: 'social',
    name: 'Social Media Specialist',
    icon: '📱',
    description: 'Grow followers and boost engagement',
    href: '/dashboard/social',
    kit: 'Marketing Suite',
  },
];

export default async function Dashboard() {
  return (
    <main className="min-h-screen p-8 pb-24">
      <section className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">🍺 AI Biz Brewery</h1>
            <p className="text-base-content/70 mt-2">Brewing Your Business Success</p>
          </div>
          <ButtonAccount />
        </div>

        {/* Kit 1: AI Profit Engine */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">⚡ Kit 1: AI Profit Engine</h2>
          <p className="text-base-content/70">Find opportunity → Build product → Launch</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.filter(t => t.kit === 'AI Profit Engine').map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="card bg-base-200 hover:bg-base-300 transition-all duration-200 hover:shadow-lg"
              >
                <div className="card-body">
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <h3 className="card-title text-lg">{tool.name}</h3>
                  <p className="text-sm text-base-content/70">{tool.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Kit 2: Marketing Suite */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">🚀 Kit 2: Marketing Suite</h2>
          <p className="text-base-content/70">Promote → Engage → Convert</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.filter(t => t.kit === 'Marketing Suite').map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="card bg-base-200 hover:bg-base-300 transition-all duration-200 hover:shadow-lg"
              >
                <div className="card-body">
                  <div className="text-4xl mb-2">{tool.icon}</div>
                  <h3 className="card-title text-lg">{tool.name}</h3>
                  <p className="text-sm text-base-content/70">{tool.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
