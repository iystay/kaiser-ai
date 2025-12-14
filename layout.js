// ------------------------
// Layout & Responsive Yönetimi - GPU Accelerated
// ------------------------
class LayoutManager {
    constructor(containerId='ui-layer') {
        this.container = document.getElementById(containerId);
        this.updateLayout();
        window.addEventListener('resize', () => this.updateLayout());
    }

    updateLayout() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        if(width < 600){
            this.container.style.width = '95%';
            this.container.style.height = '90%';
        } else if(width < 1024){
            this.container.style.width = '90%';
            this.container.style.height = '85%';
        } else {
            this.container.style.width = '80%';
            this.container.style.height = '80%';
        }

        // Font boyutu responsive
        const baseFont = Math.max(14, Math.min(18, width/50));
        document.documentElement.style.setProperty('--font-size', baseFont+'px');

        // Smooth GPU transform
        this.container.style.transition = 'width 0.4s ease, height 0.4s ease';
    }
}

// Export
const layoutManager = new LayoutManager();
