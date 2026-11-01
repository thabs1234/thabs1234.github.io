import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#faf8f5]/90 backdrop-blur-md border-b border-[#e0dbc9]">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a3a4a] rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-[#e8d5b7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2C8 2 8 6 8 10c0 2-1 3-1 3s-1-1-1-3c0-4 0-8 4-8s4 4 4 8c0 2-1 3-1 3s-1-1-1-3c0-4 0-8 4-8s4 4 4 8c0 2-1 3-1 3"/>
              </svg>
            </div>
            <span className="font-display font-semibold text-[#1a3a4a] text-2xl">HILLS</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-[#4a4a4a] hover:text-[#1a3a4a]">Home</a>
            <a href="#story" className="text-sm font-medium text-[#4a4a4a] hover:text-[#1a3a4a]">Story</a>
            <a href="#products" className="text-sm font-medium text-[#4a4a4a] hover:text-[#1a3a4a]">Products</a>
            <a href="#pricing" className="text-sm font-medium text-[#4a4a4a] hover:text-[#1a3a4a]">Pricing</a>
            <a href="#contact" className="text-sm font-medium text-[#4a4a4a] hover:text-[#1a3a4a]">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="p-2">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3a4a] to-[#1a3a4a]/80" />
        <div className="absolute inset-0 water-wave bg-[url('data:image/svg+xml,%3Csvg width=%22100%%22 height=%2240%22 viewBox=%220 0 100 40%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M0 40c50-10 100-10 100 0%22 fill=%22%234a7c6f%22 opacity=%220.2%22/%3E%3C/svg%3E')]" />
        
        <div className="container relative z-10 flex flex-col items-center text-center text-white px-4">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium tracking-widest mb-6">
            NATURALLY RARE. SIMPLY PURE.
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Hills <span className="text-[#e8d5b7]">Artesian Spring Water</span>
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-white/90 mb-10">
            Premium South African water, sourced from a natural aquifer beneath the volcanic rock formations of Malelane, Mpumalanga.
          </p>
          <div className="flex gap-4">
            <a href="#products" className="bg-[#e8d5b7] hover:bg-[#d4c4a6] text-[#1a3a4a] px-6 py-3 rounded-lg font-semibold transition">
              Explore Products
            </a>
            <a href="#contact" className="border-2 border-[#e8d5b7] hover:bg-[#e8d5b7] text-[#e8d5b7] px-6 py-3 rounded-lg font-semibold transition">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 bg-[#faf8f5]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-[#4a7c6f] font-semibold text-sm tracking-widest uppercase">Our Story</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              Water With a <span className="text-[#1a3a4a]">Sense of Place</span>
            </h2>
            <div className="w-24 h-1 bg-[#4a7c6f] rounded mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in stagger-1">
              <p className="text-[#4a4a4a] leading-relaxed mb-6">
                Hills Artesian Water is a premium South African water brand sourced from a natural aquifer beneath the volcanic rock formations of Malelane, Mpumalanga.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed mb-6">
                Our story begins beneath the earth where naturally occurring water moves through ancient volcanic rock formations before reaching its natural underground aquifer.
              </p>
              <p className="text-[#4a4a4a] leading-relaxed">
                Hills is more than bottled water. It is a story of nature, origin and provenance.
              </p>
            </div>
            <div className="bg-[#1a3a4a] rounded-2xl p-8 text-white fade-in stagger-2">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#4a7c6f] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Natural Aquifer</h4>
                    <p className="text-white/70 text-sm">Sourced from a natural aquifer beneath volcanic rocks</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#4a7c6f] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Volcanic Origin</h4>
                    <p className="text-white/70 text-sm">Ancient volcanic rock formations of Malelane</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#4a7c6f] rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">South African</h4>
                    <p className="text-white/70 text-sm">Locally sourced premium water with distinctive sense of place</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-[#f1ede6]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-[#4a7c6f] font-semibold text-sm tracking-widest uppercase">Product Range</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              Naturally Sourced. <span className="text-[#1a3a4a]">Distinctive in Character.</span>
            </h2>
            <div className="w-24 h-1 bg-[#4a7c6f] rounded mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#e0dbc9] fade-in stagger-1">
              <div className="w-16 h-16 bg-[#1a3a4a] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#e8d5b7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-4">Hills Still</h3>
              <p className="text-[#4a4a4a] text-sm mb-4">A balanced pH profile that positions Hills Still as a clean and refreshing premium water choice.</p>
              <p className="text-[#1a3a4a] font-semibold">pH 7.0</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#4a4a4a]">
                <svg className="w-4 h-4 text-[#4a7c6f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                <span>For: Restaurants, Cafés, Hotels, Corporate meetings, Events, Retail, Sports</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border border-[#e0dbc9] fade-in stagger-2">
              <div className="w-16 h-16 bg-[#1a3a4a] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#4a7c6f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3 className="font-display text-2xl mb-4">Hills Sparkling</h3>
              <p className="text-[#4a4a4a] text-sm mb-4">The lower pH of Hills Sparkling is associated with the carbonation process, giving the sparkling variant its distinctive crisp and refreshing character.</p>
              <p className="text-[#4a7c6f] font-semibold">pH 4.9</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-[#4a4a4a]">
                <svg className="w-4 h-4 text-[#4a7c6f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
                <span>For: At home day to day consumption, Restaurants, Cafés, Hotels, Corporate meetings, Events</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[#4a4a4a] mb-6">Available in</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span className="bg-[#1a3a4a] text-[#e8d5b7] px-6 py-3 rounded-lg font-semibold">1L</span>
              <span className="bg-[#1a3a4a] text-[#e8d5b7] px-6 py-3 rounded-lg font-semibold">750ml</span>
              <span className="bg-[#1a3a4a] text-[#e8d5b7] px-6 py-3 rounded-lg font-semibold">500ml</span>
            </div>
            <p className="text-sm text-[#4a4a4a] mt-4">Still &amp; Sparkling</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-[#1a3a4a]">
        <div className="container">
          <div className="text-center mb-16">
            <span className="text-[#4a7c6f] font-semibold text-sm tracking-widest uppercase">Pricing</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6 text-white">
              Premium <span className="text-[#e8d5b7]">Presentation</span>
            </h2>
            <div className="w-24 h-1 bg-[#4a7c6f] rounded mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#2a4a5a] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">500ml (24)</h3>
              <p className="text-[#e8d5b7] text-sm mb-4">Still</p>
              <p className="text-2xl font-bold mb-2">R230</p>
              <p className="text-[#e8d5b7] text-sm">Unit: R9.50</p>
            </div>
            <div className="bg-[#2a4a5a] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">500ml (24)</h3>
              <p className="text-[#e8d5b7] text-sm mb-4">Sparkling</p>
              <p className="text-2xl font-bold mb-2">R242</p>
              <p className="text-[#e8d5b7] text-sm">Unit: R10.08</p>
            </div>
            <div className="bg-[#2a4a5a] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">750ml (24)</h3>
              <p className="text-[#e8d5b7] text-sm mb-4">Still</p>
              <p className="text-2xl font-bold mb-2">R274</p>
              <p className="text-[#e8d5b7] text-sm">Unit: R11</p>
            </div>
            <div className="bg-[#2a4a5a] rounded-xl p-6 text-white">
              <h3 className="font-semibold text-lg mb-2">1L (12 Pack)</h3>
              <p className="text-[#e8d5b7] text-sm mb-4">Still</p>
              <p className="text-2xl font-bold mb-2">R146</p>
              <p className="text-[#e8d5b7] text-sm">Unit: R12</p>
            </div>
            <div className="bg-[#2a4a5a] rounded-xl p-6 text-white col-span-2">
              <h3 className="font-semibold text-lg mb-2">1L (12 Pack)</h3>
              <p className="text-[#e8d5b7] text-sm mb-4">Sparkling</p>
              <p className="text-2xl font-bold mb-2">R156</p>
              <p className="text-[#e8d5b7] text-sm">Unit: R13</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#faf8f5]">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#4a7c6f] font-semibold text-sm tracking-widest uppercase">Contact</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4 mb-6">
              Get in <span className="text-[#1a3a4a]">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-[#4a7c6f] rounded mx-auto mb-10" />

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1a3a4a] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#e8d5b7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Orders</h4>
                    <p className="text-[#4a4a4a]">066 572 9783</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#1a3a4a] rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-[#e8d5b7]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <path d="M12 10a2 2 0 104 0 2 2 0 00-4 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp Line</h4>
                    <p className="text-[#4a4a4a]">077 373 9991</p>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a3a4a] rounded-2xl p-8 text-white">
                <p className="text-[#e8d5b7] text-sm mb-6">Hills Artesian Spring Water<br />Malelane, Mpumalanga<br />South Africa</p>
                <div className="flex gap-4 justify-center">
                  <a href="tel:+27665729783" className="text-[#e8d5b7] hover:text-white transition">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                  </a>
                  <a href="https://wa.me/27773739991" target="_blank" className="text-[#e8d5b7] hover:text-white transition">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l.5-4A9.864 9.864 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                    </svg>
                  </a>
                  <a href="mailto:info@hills.co.za" className="text-[#e8d5b7] hover:text-white transition">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a3a4a] text-[#e8d5b7] py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-display text-2xl mb-4">HILLS</h3>
              <p className="text-sm text-white/70">NATURALLY RARE. SIMPLY PURE.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#home" className="hover:text-white transition">Home</a>
                <a href="#story" className="hover:text-white transition">Story</a>
                <a href="#products" className="hover:text-white transition">Products</a>
                <a href="#pricing" className="hover:text-white transition">Pricing</a>
                <a href="#contact" className="hover:text-white transition">Contact</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="flex flex-col gap-2 text-sm">
                <p>Terms &amp; Conditions</p>
                <p>Privacy Policy</p>
                <p>Returns Policy</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#4a7c6f] text-center text-sm text-white/60">
            &copy; {new Date().getFullYear()} Hills Artesian Spring Water. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
