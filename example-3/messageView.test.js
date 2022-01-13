/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    const inputEl = document.querySelector('#message-input');
    const buttonEl = document.querySelector('#show-message-button');
    inputEl.value = 'This is a message displayed by JavaScript'
    buttonEl.click();
    
    view.displayMessage();

    let messageElTest= document.createElement('div');
    messageElTest.append(inputEl.value);
    messageElTest.setAttribute('id', 'message')
    let messageContent = document.getElementById('message').innerHTML //Isolates the contents of the message

    expect(messageContent).toEqual(inputEl.value); //Checks the actual contents against the test content
    expect(document.querySelector('#message')).toEqual(messageElTest); //Checks the whole <div> against the test <div> 
    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('hides the message', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new MessageView();
    const hideButtonEl = document.querySelector('#hide-message-button');
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    view.displayMessage();

    hideButtonEl.click();
    view.hideMessage();
    expect(document.querySelector('message')).toBeNull();
  });
});
