// ------------------------
// Chat UI - Ultra Premium
// ------------------------
class ChatUI {
    constructor(container, input, sendBtn, brain, mathEngine) {
        this.container = container;
        this.input = input;
        this.sendBtn = sendBtn;
        this.brain = brain;
        this.mathEngine = mathEngine;

        this.init();
    }

    init() {
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', e => {
            if(e.key === 'Enter') this.sendMessage();
        });
    }

    appendMessage(text, sender='user') {
        const msg = document.createElement('div');
        msg.classList.add('chat-bubble', sender);
        msg.innerText = text;

        msg.style.transition = 'all 0.3s ease, box-shadow 0.3s ease';
        msg.addEventListener('mouseenter', ()=>{
            msg.style.transform = 'translateZ(8px)';
            msg.style.boxShadow = '0 10px 30px rgba(255,255,255,0.2)';
        });
        msg.addEventListener('mouseleave', ()=>{
            msg.style.transform = 'translateZ(0)';
            msg.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
        });

        this.container.appendChild(msg);
        this.container.scrollTop = this.container.scrollHeight;
    }

    async sendMessage() {
        const text = this.input.value.trim();
        if(!text) return;
        this.appendMessage(text, 'user');
        this.input.value = '';

        // Matematik ifadesi veya türev/integral kontrolü
        const mathPattern = /([0-9+\-*/().^%\s]+|d\/dx|∫)/i;
        let response;
        if(mathPattern.test(text)) {
            response = await this.mathEngine.solveAdvanced(text);
        } else {
            response = await this.brain.getAnswerAsync(text, 400);
        }

        this.appendMessage(response, 'ai');
    }
}

// Export
const chatUI = new ChatUI(
    document.getElementById('chat-container'),
    document.getElementById('user-input'),
    document.getElementById('send-btn'),
    brain,
    mathEngine
);
