// ------------------------
// Tema & Renk Yönetimi - Dinamik & Smooth
// ------------------------
const themes = {
    dark: {
        '--bg-gradient':'linear-gradient(135deg,#0f0c29,#1c1b3a,#2a0f7c)',
        '--text-color':'#ffffff',
        '--accent-color':'#00ffcc',
        '--accent-gradient':'linear-gradient(135deg,#00ffcc,#00aaff)'
    },
    neon: {
        '--bg-gradient':'linear-gradient(135deg,#ff00ff,#00ffff,#ff9900)',
        '--text-color':'#ffffff',
        '--accent-color':'#ff00ff',
        '--accent-gradient':'linear-gradient(135deg,#ff00ff,#00ffff)'
    },
    light: {
        '--bg-gradient':'linear-gradient(135deg,#ffffff,#e0e0e0,#c0c0c0)',
        '--text-color':'#000000',
        '--accent-color':'#0066ff',
        '--accent-gradient':'linear-gradient(135deg,#0066ff,#00ccff)'
    }
};

function applyTheme(name='dark', smooth=true){
    const theme = themes[name] || themes.dark;
    if(smooth){
        document.documentElement.style.transition = 'all 0.5s ease';
    }
    for(const varName in theme){
        document.documentElement.style.setProperty(varName, theme[varName]);
    }
}

// Export
const themeManager = {themes, applyTheme};
