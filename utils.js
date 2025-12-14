// Yardımcı Fonksiyonlar - Üst Seviye
const Utils = {
    randInt(min, max){
        return Math.floor(Math.random()*(max-min+1))+min;
    },

    randChoice(arr){
        return arr[Utils.randInt(0, arr.length-1)];
    },

    normalize(text){
        return text.toLowerCase().trim();
    },

    wait(ms){
        return new Promise(resolve => setTimeout(resolve, ms));
    },

    safeCalc(expression){
        try{
            // Sadece güvenli karakterler: rakam, operatör, parantez, boşluk
            if(!/^[0-9+\-*/().\s]+$/.test(expression)) return "Geçersiz ifade";
            return Function('"use strict"; return ('+expression+')')();
        }catch(e){
            return "Hata: "+e.message;
        }
    },

    clamp(val, min, max){
        return Math.min(Math.max(val, min), max);
    },

    randomColor(){
        const r=Utils.randInt(0,255);
        const g=Utils.randInt(0,255);
        const b=Utils.randInt(0,255);
        return rgb(${r},${g},${b});
    },

    delayMap(arr, callback, interval=300){
        return arr.reduce((promise, item)=>{
            return promise.then(()=>callback(item)).then(()=>Utils.wait(interval));
        }, Promise.resolve());
    }
};

// Örnek export
const utils = Utils;
