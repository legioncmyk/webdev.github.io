export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0f0f0f',
        accent: '#ff2e2e',
        card: '#1c1c1c'
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif']
      },
      boxShadow: {
        neon: '0 0 30px rgba(255, 46, 46, 0.35)',
        glass: '0 25px 60px rgba(0, 0, 0, 0.45)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at top, rgba(255,46,46,0.12), transparent 34%), linear-gradient(135deg, rgba(255,46,46,0.08), transparent 50%)'
      }
    }
  },
  plugins: []
};
