class ThemeManager {
    constructor() {
        this.toggleBtn = document.getElementById("toggle-theme");
        this.switchKnob = document.getElementById("switch-knob");
        this.switchIcon = document.getElementById("switch-icon");
        this.html = document.documentElement;
        
        this.sunIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-icon lucide-sun">
                <circle cx="12" cy="12" r="4"/>
                <path d="M12 2v2"/>
                <path d="M12 20v2"/>
                <path d="m4.93 4.93 1.41 1.41"/>
                <path d="m17.66 17.66 1.41 1.41"/>
                <path d="M2 12h2"/>
                <path d="M20 12h2"/>
                <path d="m6.34 17.66-1.41 1.41"/>
                <path d="m19.07 4.93-1.41 1.41"/>
            </svg>
        `;
        
        this.moonIcon = `
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-moon-icon lucide-moon">
                <path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/>
            </svg>
        `;
        
        this.init();
    }
  
    init() {
        const savedTheme = localStorage.getItem("theme") || "dark";
        this.setTheme(savedTheme);
        this.bindEvents();
    }
  
    setTheme(theme) {
        if (theme === "light") {
            this.html.classList.remove("dark");
            this.switchKnob.classList.remove("translate-x-6", "sm:translate-x-7", "md:translate-x-8");
            this.switchKnob.classList.add("translate-x-0");
            this.switchIcon.innerHTML = this.moonIcon;
        } else {
            this.html.classList.add("dark");
            this.switchKnob.classList.remove("translate-x-0");
            this.switchKnob.classList.add("translate-x-6", "sm:translate-x-7", "md:translate-x-8");
            this.switchIcon.innerHTML = this.sunIcon;
        }
        
        localStorage.setItem("theme", theme);
    }
  
    toggleTheme() {
        const isDark = this.html.classList.contains("dark");
        const newTheme = isDark ? "light" : "dark";
        this.setTheme(newTheme);
    }
    
    bindEvents() {
        this.toggleBtn.addEventListener("click", () => {
            this.toggleTheme();
        });
    }
    
    getCurrentTheme() {
        return this.html.classList.contains("dark") ? "dark" : "light";
    }
}

window.ThemeManager = ThemeManager;