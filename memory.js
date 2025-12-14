// Kullanıcı Hafızası - Üst Seviye
class Memory {
    constructor(maxEntries=1000) {
        this.store = new Map(); // Map ile hızlı arama
        this.maxEntries = maxEntries;
    }

    remember(key, value){
        key = key.toLowerCase();
        if(this.store.size >= this.maxEntries){
            // İlk eklenen silinir (FIFO)
            const firstKey = this.store.keys().next().value;
            this.store.delete(firstKey);
        }
        this.store.set(key, value);
    }

    recall(key){
        return this.store.get(key.toLowerCase()) || null;
    }

    forget(key){
        this.store.delete(key.toLowerCase());
    }

    clearAll(){
        this.store.clear();
    }

    has(key){
        return this.store.has(key.toLowerCase());
    }

    all(){
        return Array.from(this.store.entries());
    }
}

// Örnek export
const memory = new Memory(2000); // 2000 mesajlık hafıza
