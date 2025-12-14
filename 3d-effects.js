// ------------------------
// 3D Effects - Ultra Premium & Device Adaptive
// ------------------------
class ThreeDEffects {
    constructor() {}

    parallax(element, factor=0.05){
        window.addEventListener('scroll', ()=>{
            const offset = window.scrollY * factor;
            element.style.transform = translateZ(${offset}px);
        });
    }

    perspectiveRotate(element, maxX=10, maxY=10) {
        element.addEventListener('mousemove', e=>{
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width/2;
            const centerY = rect.height/2;
            const rotateX = ((y - centerY)/centerY) * maxX;
            const rotateY = ((x - centerX)/centerX) * maxY;
            element.style.transform = rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(0);
            element.style.transition = 'transform 0.1s ease-out';
        });
        element.addEventListener('mouseleave', ()=>{
            element.style.transform = 'rotateX(0deg) rotateY(0deg)';
        });
    }

    hover3D(element, intensity=10){
        this.perspectiveRotate(element, intensity, intensity);
        element.style.willChange = 'transform';
    }

    parallaxBackground(element, speed=0.2){
        window.addEventListener('scroll', ()=>{
            const yOffset = window.scrollY * speed;
            element.style.backgroundPosition = center ${yOffset}px;
        });
    }
}

// Export
const threeDEffects = new ThreeDEffects();
