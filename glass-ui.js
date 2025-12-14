// ------------------------
// Glass UI - Modern & Layered
// ------------------------
class GlassUI {
    constructor() {}

    applyGlass(element, options={blur:20, opacity:0.25, border:'1px solid rgba(255,255,255,0.3)', radius:16}) {
        element.style.background = rgba(255,255,255,${options.opacity});
        element.style.backdropFilter = blur(${options.blur}px);
        element.style.border = options.border;
        element.style.borderRadius = options.radius+'px';
        element.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
        element.style.transition = 'all 0.3s ease';
        element.style.willChange = 'transform, backdrop-filter, background';
    }

    hoverGlass(element, options={blur:25, opacity:0.35, translateZ:5}) {
        element.addEventListener('mouseenter', ()=>{
            element.style.backdropFilter = blur(${options.blur}px);
            element.style.background = rgba(255,255,255,${options.opacity});
            element.style.transform = translateZ(${options.translateZ}px);
        });
        element.addEventListener('mouseleave', ()=>{
            element.style.backdropFilter = blur(${options.blur-5}px);
            element.style.background = rgba(255,255,255,${options.opacity-0.1});
            element.style.transform = 'translateZ(0)';
        });
    }

    stackGlass(elements, offset=10){
        elements.forEach((el, i)=>{
            el.style.transform = translateZ(${i*offset}px);
            el.style.zIndex = 100 - i;
        });
    }
}

// Export
const glassUI = new GlassUI();
