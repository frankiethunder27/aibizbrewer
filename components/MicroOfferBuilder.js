'use client';

import { useState } from 'react';

const MICRO_OFFER_SYSTEM_PROMPT = `You are the Micro-Offer Builder, a friendly AI that helps first-time entrepreneurs turn any business idea into a clear, actionable one-page plan. 

Your audience is people who are intimidated by AI and business - so be warm, encouraging, and simple. No jargon. No overwhelming details.

When given a business idea, generate a beautiful one-page plan with:

## 🎯 Your Micro-Offer
**[Catchy offer name]** - One compelling sentence describing what you're selling

## 👥 Perfect Customer
Who this is for (be specific and relatable)

## 🔥 The Problem You Solve
The pain point you're addressing (make it emotional and real)

## ✨ Your Solution
What you deliver and how it helps (keep it simple)

## 📦 What's Included
- Bullet point 1
- Bullet point 2  
- Bullet point 3
(3-5 tangible deliverables)

## 💰 Suggested Price
$X - $Y range with brief reasoning

## 🚀 First 3 Steps to Launch
1. [Immediate action they can take today]
2. [Next step for this week]
3. [Validation step]

## 💡 Bonus Tip
One encouraging insight to boost their confidence

Keep the entire response concise, scannable, and motivating. Use emojis tastefully. The goal is to make them think "I can actually do this!"`;

export default function MicroOfferBuilder() {
  const [idea, setIdea] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!idea.trim()) return;

    setIsLoading(true);
    setError('');
    setResult('');

    try {
      const response = await fetch('/api/claude', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tool: 'micro-offer-builder',
          systemPrompt: MICRO_OFFER_SYSTEM_PROMPT,
          userMessage: `My business idea: ${idea}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.response);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setIdea('');
    setResult('');
    setError('');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-5xl mb-4 block">⚗️</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Brew Your First Micro-Offer
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Got a business idea swimming in your head? Drop it below and watch our AI 
            turn it into a clear, actionable plan in seconds. <strong>100% free.</strong>
          </p>
        </div>

        {/* Input Form */}
        {!result && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-amber-200">
              <label className="block text-gray-700 font-medium mb-3 text-lg">
                What&apos;s your business idea? ✨
              </label>
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Example: I want to help busy moms meal prep healthy lunches for their kids..."
                className="w-full p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-amber-400 focus:ring-2 focus:ring-amber-200 outline-none transition-all min-h-[120px] resize-none"
                disabled={isLoading}
              />
              
              {error && (
                <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || !idea.trim()}
                className="mt-6 w-full py-4 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isLoading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Brewing Your Plan...
                  </>
                ) : (
                  <>
                    🍺 Brew My Plan
                  </>
                )}
              </button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> No signup required
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Takes 10 seconds
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Completely free
              </span>
            </div>
          </form>
        )}

        {/* Result */}
        {result && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <span className="text-3xl">🎉</span>
                <div>
                  <h3 className="font-bold text-xl text-gray-900">Your Micro-Offer Plan</h3>
                  <p className="text-gray-500 text-sm">Here&apos;s your roadmap from idea to product</p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {result}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(result);
                  alert('Copied to clipboard!');
                }}
                className="py-3 px-6 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-xl transition-all flex items-center justify-center gap-2"
              >
                📋 Copy Plan
              </button>
              <button
                onClick={handleReset}
                className="py-3 px-6 bg-amber-100 hover:bg-amber-200 text-amber-700 font-medium rounded-xl transition-all flex items-center justify-center gap-2"
              >
                ⚗️ Brew Another
              </button>
            </div>

            {/* CTA to full product */}
            <div className="mt-8 p-6 bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl text-center">
              <p className="text-gray-700 mb-4">
                <strong>Love this?</strong> Get access to all 10 AI tools to build, market, and launch your business.
              </p>
              <a
                href="#pricing"
                className="inline-block py-3 px-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                See Full Toolkit →
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

