import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#38450f] to-[#1a2508]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-white">
            Portfolio
          </h1>
          <p className="mt-4 text-sm text-white/80 max-w-lg mx-auto">
            Design direction: The sentence is the layout. Olive on bone.
          </p>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-gap bg-white/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">React & Tailwind</h3>
              <p className="text-sm text-gray-600">Modern component library from 21st.dev Magic MCP</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">taste-skill</h3>
              <p className="text-sm text-gray-600">Anti-slop frontend design principles</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-2">AI Generated</h3>
              <p className="text-sm text-gray-600">Design direction: The sentence is the layout</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#38450f]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
          <p className="text-white/80 mb-8">Have a project in mind? Let's build something great together.</p>
          <button className="bg-[#38450f] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">
            Start a Project
          </button>
        </div>
      </section>
    </div>
  )
}
