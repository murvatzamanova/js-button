function createMessageBox() {
    var messageBox = document.createElement("div");
    messageBox.classList.add("message-box");
    var randomMessage = Math.floor(Math.random() * 3) + 1;
    messageBox.textContent = "Bu mesaj kutusu #" + randomMessage;
    document.body.appendChild(messageBox);

    setTimeout(function() {
        document.body.removeChild(messageBox);
    }, 4000);
}

