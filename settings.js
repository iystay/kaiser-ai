// ------------------------
// Settings - Kullanıcı Tercihleri
// ------------------------
class Settings {
    constructor() {
        this.settings = {
            theme: 'dark',
            fontSize: 16,
            showTimestamps: true
        };
        this.load();
    }

    load() {
        const stored = localStorage.getItem('chatSettings');
        if(stored){
            this.settings = JSON.parse(stored);
            this.applyTheme(this.settings.theme);
            this.applyFontSize(this.settings.fontSize);
        }
    }

    save() {
        localStorage.setItem('chatSettings', JSON.stringify(this.settings));
    }

    applyTheme(theme) {
        this.settings.theme = theme;
        applyTheme(theme); // themes.js
        this.save();
    }

    applyFontSize(size) {
        this.settings.fontSize = size;
        document.documentElement.style.setProperty('--font-size', size+'px');
        this.save();
    }

    toggleTimestamps() {
        this.settings.showTimestamps = !this.settings.showTimestamps;
        this.save();
    }

    resetAll() {
        this.settings = {theme:'dark', fontSize:16, showTimestamps:true};
        this.applyTheme(this.settings.theme);
        this.applyFontSize(this.settings.fontSize);
        this.save();
    }
}

// Export
const userSettings = new Settings();
