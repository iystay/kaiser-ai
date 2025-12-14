// Ana JS kontrol
const input = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const chatContainer = document.getElementById('chat-container');

function appendMessage(text, sender='user'){
    const msg = document.createElement('div');
    msg.classList.add('chat-bubble', sender);
    msg.innerText = text;
    chatContainer.appendChild(msg);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendBtn.addEventListener('click', ()=>{
    const text = input.value.trim();
    if(!text) return;
    appendMessage(text,'user');
    input.value = '';
    // Placeholder: AI cevabı simülasyonu
    setTimeout(()=>appendMessage('Bu AI cevabıdır.','ai'), 500);
});

input.addEventListener('keypress', e=>{
    if(e.key === 'Enter') sendBtn.click();
});
