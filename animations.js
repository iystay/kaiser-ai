// ------------------------
// Animations - Ultra Premium GPU Accelerated
// ------------------------
class Animations {
    constructor() {}

    fadeIn(element, duration=500, delay=0) {
        element.style.opacity = 0;
        element.style.transition = opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms;
        requestAnimationFrame(()=> element.style.opacity = 1);
    }

    fadeOut(element, duration=500, delay=0) {
        element.style.opacity = 1;
        element.style.transition = opacity ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms;
        requestAnimationFrame(()=> element.style.opacity = 0);
    }

    slide(element, direction='left', distance=50, duration=500, delay=0) {
        element.style.transform = direction==='left'? translateX(-${distance}px) : translateY(-${distance}px);
        element.style.opacity = 0;
        element.style.transition = all ${duration}ms cubic-bezier(0.4,0,0.2,1) ${delay}ms;
        requestAnimationFrame(()=>{
            element.style.transform = 'translate(0,0)';
            element.style.opacity = 1;
        });
    }

    pulse(element, scale=1.08, duration=400) {
        element.style.transition = transform ${duration/2}ms ease-in-out;
        element.style.transform = scale(${scale});
        setTimeout(()=> element.style.transform = 'scale(1)', duration/2);
    }

    rotate(element, degree=360, duration=1000) {
        element.style.transition = transform ${duration}ms linear;
        element.style.transform = rotate(${degree}deg);
        setTimeout(()=> element.style.transform = 'rotate(0deg)', duration);
    }

    bounce(element, height=20, duration=600){
        element.style.transition = transform ${duration/2}ms ease-in-out;
        element.style.transform = translateY(-${height}px);
        setTimeout(()=> element.style.transform = 'translateY(0)', duration/2);
    }
}

// Export
const animations = new Animations();
