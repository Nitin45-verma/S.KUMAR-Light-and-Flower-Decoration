/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#0d0518',
        'midnight-card': '#190a2d',
        'midnight-border': 'rgba(212, 175, 55, 0.2)',
        'midnight-hover': '#260f42',
        gold: '#d4af37',
        'gold-200': '#fffaae',
        'gold-300': '#fff3a1',
        'gold-400': '#f5c451',
        'gold-500': '#d4af37',
        'gold-600': '#b8860b',
        'gold-700': '#aa7c11',
        'gold-glow': '#f5c451',
        'purple-950': '#0d0518',
        'purple-900': '#1a0a2e',
        'purple-800': '#2e0a4a',
        'purple-700': '#4a1268',
        'purple-600': '#6b1d96',
        accent: '#d4af37',
      },
      fontFamily: {
        display: ['Playfair Display', 'Cormorant Garamond', 'Cinzel', 'serif'],
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        sans: ['Poppins', 'Inter', 'sans-serif'],
        body: ['Poppins', 'Inter', 'sans-serif'],
        hindi: ['Mukta', 'Noto Sans Devanagari', 'Noto Serif Devanagari', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 8vw, 7rem)', { lineHeight: '1.02', letterSpacing: '-0.02em' }],   // Hero main heading
        'display-lg': ['clamp(2.75rem, 6vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],  // Section-level big statements
        'h1': ['clamp(2.25rem, 4.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],        // Page/section H1
        'h2': ['clamp(1.875rem, 3.5vw, 2.75rem)', { lineHeight: '1.15' }],                                // Section headings
        'h3': ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.2' }],                                      // Card titles, subsection heads
        'h4': ['clamp(1.25rem, 2vw, 1.5rem)', { lineHeight: '1.25' }],                                    // Small headings
        'body-lg': ['clamp(1.125rem, 1.5vw, 1.25rem)', { lineHeight: '1.6' }],                            // Lead paragraphs
        'body': ['1rem', { lineHeight: '1.65' }],                                                          // Default body text
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],                                                    // Secondary/caption text
        'label': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.08em' }],                             // Uppercase labels/eyebrows
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 40px -5px rgba(245, 196, 81, 0.5)',
      },
    },
  },
  plugins: [],
};
