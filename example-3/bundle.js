(() => {
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // messageView.js
  var require_messageView = __commonJS({
    "messageView.js"(exports, module) {
      var MessageView2 = class {
        constructor() {
          this.buttonEl = document.querySelector("#show-message-button");
          this.hideButtonEl = document.querySelector("#hide-message-button");
          this.mainContainerEl = document.querySelector("#main-container");
          this.buttonEl.addEventListener("click", () => {
            this.displayMessage();
          });
          this.hideButtonEl.addEventListener("click", () => {
            this.hideMessage();
          });
        }
        displayMessage() {
          console.log("Thanks for clicking me!");
          let messageEl = document.createElement("div");
          messageEl.append(this.value = "This is a message displayed by JavaScript");
          messageEl.setAttribute("id", "message");
          this.mainContainerEl.append(messageEl);
        }
        hideMessage() {
          console.log("Message is now hidden!");
          let message = document.getElementById("message");
          message.parentElement.removeChild(message);
        }
      };
      module.exports = MessageView2;
    }
  });

  // index.js
  var MessageView = require_messageView();
  var view = new MessageView();
})();
