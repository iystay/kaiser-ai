// ------------------------
// Math Engine - Üst Seviye
// ------------------------
class MathEngine {
    constructor() {}

    evaluate(expr) {
        try {
            if(!/^[0-9+\-*/().^%\sA-Za-z∫d\/dx]+$/.test(expr)) return "Geçersiz ifade";

            // ^ -> ** (üstel)
            expr = expr.replace(/\^/g,'');

            // Basit sandbox fonksiyonlar
            const sin=Math.sin, cos=Math.cos, tan=Math.tan,
                  asin=Math.asin, acos=Math.acos, atan=Math.atan,
                  sqrt=Math.sqrt, log=Math.log, ln=Math.log,
                  exp=Math.exp, abs=Math.abs, pow=Math.pow, PI=Math.PI, E=Math.E;

            // Türev ve integral parser (mini engine)
            if(expr.startsWith('d/dx')) {
                // Örnek: "d/dx x^2" → "2*x"
                return this.simpleDerivative(expr.slice(4).trim());
            }
            if(expr.startsWith('∫')) {
                // Örnek: "∫ x dx" → "0.5*x^2"
                return this.simpleIntegral(expr.slice(1).trim());
            }

            return Function('"use strict"; return ('+expr+')')();
        } catch(e) {
            return "Hata: " + e.message;
        }
    }

    calculateFromString(input){
        const normalized = input.replace(/[^0-9+\-*/().^%\sA-Za-z∫d\/dx]/g,'');
        return this.evaluate(normalized);
    }

    async calculateAsync(input, delay=300){
        await utils.wait(delay);
        return this.calculateFromString(input);
    }

    // ------------------------
    // Basit türev ve integral çözücü
    // ------------------------
    simpleDerivative(expr){
        // Şu an sadece ax^n formlarını çözebilir
        // Örnek: "3*x^2" → "6*x"
        const match = expr.match(/([0-9.])\?x\^([0-9.]+)/);
        if(match){
            const a = parseFloat(match[1] || 1);
            const n = parseFloat(match[2]);
            return ${a*n}*x**${n-1};
        }
        return "Türev çözülemedi";
    }

    simpleIntegral(expr){
        // Şu an sadece ax^n formlarını çözebilir
        const match = expr.match(/([0-9.])\?x\^?([0-9.]*)/);
        if(match){
            const a = parseFloat(match[1] || 1);
            const n = parseFloat(match[2] || 1);
            return ${a/(n+1)}*x**${n+1} + C;
        }
        return "İntegral çözülemedi";
    }

    async solveAdvanced(input){
        await utils.wait(400);
        return this.calculateFromString(input);
    }
}

// Export
const mathEngine = new MathEngine();
