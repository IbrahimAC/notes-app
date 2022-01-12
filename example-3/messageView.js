class MessageView {
  constructor() {
    this.buttonEl = document.querySelector('#show-message-button');
    this.mainContainerEl = document.querySelector('#main-container');

    this.buttonEl.addEventListener('click', () => {
       this.displayMessage();
    });
  }

  displayMessage() {
    console.log('Thanks for clicking me!');
    let messageEl = document.createElement('div');
    messageEl.append(this.value)
    messageEl.setAttribute("id", "message");
    this.mainContainerEl.append(messageEl);
  }
}
module.exports = MessageView;