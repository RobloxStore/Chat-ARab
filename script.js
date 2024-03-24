var messages = document.getElementById('messages');
var input = document.getElementById('input');
var sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', sendMessage);
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var message = input.value.trim();
    if (message !== '') {
        var item = document.createElement('li');
        item.textContent = message;
        messages.appendChild(item);
        messages.scrollTop = messages.scrollHeight;
        input.value = '';
    }
}
