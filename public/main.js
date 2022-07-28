
const socket = io.connect();
socket.on('messages', data => {
    console.log(data);
});

function render(data) {
  const html = data.map((elem, index) => {
      return(`<div>
          <strong>${elem.author}</strong>:
          <em>${elem.text}</em> </div>`)
  }).join(" ");
  document.getElementById('messages').innerHTML = html;
  var elem = document.getElementById('messages');
  elem.scrollTop = elem.scrollHeight;
  
}

socket.on('messages', function(data) { render(data); });

function addMessage(e) {
  const mensaje = {
      author: document.getElementById('username').value,
      text: document.getElementById('texto').value
  };
  document.getElementById('username').value = '';
  document.getElementById('texto').value = '';
  socket.emit('new-message', mensaje);
  return false;
}
