// Tailwind v3 Play CDN config for the Shahzaib design system.
// This is loaded as an inline <script> in __root.tsx head before any page renders.
export const TW_CONFIG_SCRIPT = `tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#5516be",
        "inverse-surface": "#e5e2e1",
        "outline-variant": "#414755",
        "secondary": "#d0bcff",
        "electric-glow": "rgba(0, 122, 255, 0.4)",
        "secondary-container": "#571bc1",
        "surface-container-highest": "#353534",
        "primary-fixed": "#d8e2ff",
        "inverse-primary": "#005bc1",
        "on-background": "#e5e2e1",
        "surface-variant": "#353534",
        "text-muted": "#A1A1AA",
        "primary": "#adc6ff",
        "surface-container-low": "#1c1b1b",
        "outline": "#8b90a0",
        "surface-container": "#201f1f",
        "error": "#ffb4ab",
        "inverse-on-surface": "#313030",
        "background": "#131313",
        "on-secondary": "#3c0091",
        "on-surface-variant": "#c1c6d7",
        "surface": "#131313",
        "on-error-container": "#ffdad6",
        "surface-dim": "#131313",
        "secondary-fixed": "#e9ddff",
        "on-secondary-fixed": "#23005c",
        "surface-container-lowest": "#0e0e0e",
        "on-tertiary-fixed-variant": "#004e5c",
        "on-primary-fixed-variant": "#004493",
        "on-secondary-container": "#c4abff",
        "on-tertiary-container": "#002f38",
        "on-primary-container": "#00285c",
        "glass-surface": "rgba(255, 255, 255, 0.03)",
        "on-primary": "#002e69",
        "on-tertiary": "#003640",
        "secondary-fixed-dim": "#d0bcff",
        "error-container": "#93000a",
        "primary-container": "#4b8eff",
        "tertiary-fixed-dim": "#4cd7f6",
        "on-surface": "#e5e2e1",
        "tertiary-container": "#009eb9",
        "tertiary": "#4cd7f6",
        "on-tertiary-fixed": "#001f26",
        "tertiary-fixed": "#acedff",
        "primary-fixed-dim": "#adc6ff",
        "surface-bright": "#3a3939",
        "surface-container-high": "#2a2a2a",
        "glass-border": "rgba(255, 255, 255, 0.1)",
        "on-error": "#690005",
        "on-primary-fixed": "#001a41",
        "surface-tint": "#adc6ff"
      },
      borderRadius: { DEFAULT: "0.25rem", lg: "0.5rem", xl: "0.75rem", full: "9999px" },
      spacing: {
        "container-max": "1440px",
        "margin-mobile": "20px",
        "margin-desktop": "64px",
        "unit": "8px",
        "gutter": "24px"
      },
      fontFamily: {
        "display-2xl": ["Hanken Grotesk"],
        "display-lg": ["Hanken Grotesk"],
        "headline-md": ["Hanken Grotesk"],
        "body-lg": ["Inter"],
        "button": ["Inter"],
        "label-caps": ["JetBrains Mono"],
        "display-lg-mobile": ["Hanken Grotesk"],
        "body-md": ["Inter"]
      },
      fontSize: {
        "display-2xl": ["72px", { lineHeight: "80px", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "headline-md": ["24px", { lineHeight: "32px", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "button": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "500" }],
        "display-lg-mobile": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }]
      }
    }
  }
};`;

// Combined custom CSS used by every page (cursor, glass cards, animations, etc.)
export const GLOBAL_PAGE_CSS = `
body { background-color: #050505; color: #e5e2e1; overflow-x: hidden; }
@media (pointer: fine) {
  body { cursor: none; }
}
#cursor-glow { position: fixed; top: 0; left: 0; width: 400px; height: 400px; background: radial-gradient(circle, rgba(0, 122, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); z-index: 9999; transition: width 0.3s ease, height 0.3s ease, background 0.3s ease; mix-blend-mode: screen; }
#cursor-dot { position: fixed; top: 0; left: 0; width: 8px; height: 8px; background-color: #adc6ff; border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); z-index: 10000; box-shadow: 0 0 10px rgba(173, 198, 255, 0.8); }
.cursor-trail { position: fixed; top: 0; left: 0; width: 40px; height: 40px; border: 2px solid rgba(0, 122, 255, 0.8); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); z-index: 9998; transition: width 0.2s, height 0.2s; box-shadow: 0 0 20px rgba(0, 122, 255, 0.5); }
.particle { position: fixed; border-radius: 50%; pointer-events: none; z-index: 9999; animation: explode 0.6s ease-out forwards; }
@keyframes explode { 0% { transform: scale(1); opacity: 1; } 100% { transform: scale(0); opacity: 0; } }
.glass-card { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.1); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); position: relative; overflow: hidden; }
.glass-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent); }
.bento-glow-hover { position: relative; }
.bento-glow-hover::after { content: ''; position: absolute; inset: 0; background: radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(173, 198, 255, 0.06), transparent 40%); opacity: 0; transition: opacity 0.5s; pointer-events: none; z-index: -1; }
.bento-glow-hover:hover::after { opacity: 1; }
.magnetic-text-container { perspective: 1000px; }
.magnetic-text { display: inline-block; transition: transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94); transform-style: preserve-3d; }
.hide-scrollbar::-webkit-scrollbar { display: none; }
.hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
.fade-in-up { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1); }
.fade-in-up.visible { opacity: 1; transform: translateY(0); }
.parallax-bg { position: fixed; inset: 0; z-index: -2; background-image: radial-gradient(ellipse at top, rgba(0, 122, 255, 0.15) 0%, rgba(0, 0, 0, 0) 70%); pointer-events: none; }
`;
