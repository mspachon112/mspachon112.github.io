class App {
    constructor() {
        this.themeManager = null;
        this.mobileMenuManager = null;
        this.init();
    }
    
    init() {
        console.log('Inicializando aplicación...');
        
        try {
            this.themeManager = new ThemeManager();
            console.log('ThemeManager inicializado');
        } catch (error) {
            console.error('Error inicializando ThemeManager:', error);
        }
        
        console.log('App inicializada correctamente');
    }
    
    getThemeManager() {
        return this.themeManager;
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.app = new App();
    });
} else {
    window.app = new App();
}