// AI Karar Mekanizması - Üst Seviye
class Brain {
    constructor(memory, knowledge, responses) {
        this.memory = memory; // Hafıza bağlantısı
        this.knowledge = knowledge; // data/knowledge.json
        this.responses = responses; // data/responses.json
    }

    getAnswer(input) {
        const normalized = input.toLowerCase().trim();

        // 1. Hafızadan öncelik
        const memoryAnswer = this.memory.recall(normalized);
        if(memoryAnswer) return memoryAnswer;

        // 2. Bilgi tabanından eşleşme
        for(const key in this.knowledge){
            const pattern = new RegExp(\\b${key.toLowerCase()}\\b);
            if(pattern.test(normalized)){
                const answer = this.knowledge[key];
                this.memory.remember(normalized, answer); // AI öğreniyor
                return answer;
            }
        }

        // 3. Hazır cevaplardan dinamik
        const fallback = this.responses[Math.floor(Math.random()*this.responses.length)];
        this.memory.remember(normalized, fallback);
        return fallback;
    }

    learn(input, output){
        this.memory.remember(input, output);
    }

    async getAnswerAsync(input, delay=500){
        await utils.wait(delay); // Gerçekçi AI gecikmesi
        return this.getAnswer(input);
    }
}

// Örnek export
const brain = new Brain(memory, knowledgeData, responsesData);
