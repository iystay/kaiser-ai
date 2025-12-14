// ------------------------
// Genel Efektler & GPU Accelerated Animasyonlar
// ------------------------
class Effects {
    constructor() {}

    fadeIn(element, duration=500) {
        element.style.opacity = 0;
        element.style.transition = opacity ${duration}ms cubic-bezier(0.4,0,0.2,1);
        requestAnimationFrame(()=>element.style.opacity = 1);
    }

    fadeOut(element, duration=500) {
        element.style.opacity = 1;
        element.style.transition = opacity ${duration}ms cubic-bezier(0.4,0,0.2,1);
        requestAnimationFrame(()=>element.style.opacity = 0);
    }

    slideIn(element, direction='left', distance=50, duration=500) {
        element.style.transform = direction==='left'? translateX(-${distance}px) : translateY(-${distance}px);
        element.style.opacity = 0;
        element.style.transition = all ${duration}ms cubic-bezier(0.4,0,0.2,1);
        requestAnimationFrame(()=>{
            element.style.transform = 'translate(0,0)';
            element.style.opacity = 1;
        });
    }

    hoverGlow(element, color='rgba(255,255,255,0.35)', intensity=15) {
        element.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
        element.addEventListener('mouseenter', ()=>{
            element.style.transform = 'translateZ(5px)';
            element.style.boxShadow = 0 0 ${intensity}px ${color}, 0 0 ${intensity*2}px ${color};
        });
        element.addEventListener('mouseleave', ()=>{
            element.style.transform = 'translateZ(0)';
            element.style.boxShadow = '';
        });
    }

    parallax(element, factor=0.05){
        window.addEventListener('scroll', () => {
            const offset = window.scrollY * factor;
            element.style.transform = translateY(${offset}px);
        });
    }
}

// Export
const effects = new Effects();
