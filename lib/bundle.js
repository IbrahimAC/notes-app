(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // notesModel.js
  var require_notesModel = __commonJS({
    "notesModel.js"(exports, module) {
      var NotesModel2 = class {
        constructor() {
          this.model = [];
        }
        addNote(note) {
          console.log("item added");
          this.model.push(note);
        }
        getNotes() {
          return this.model;
        }
        reset() {
          this.model = [];
        }
      };
      module.exports = NotesModel2;
      var model2 = new NotesModel2();
      console.log(model2.getNotes());
      console.log(model2.addNote("Buy milk"));
      console.log(model2.addNote("Go to the gym"));
      console.log(model2.getNotes());
      console.log(model2.reset());
      console.log(model2.getNotes());
    }
  });

  // notesView.js
  var require_notesView = __commonJS({
    "notesView.js"(exports, module) {
      var NotesView2 = class {
        constructor(model2) {
          this.model = model2;
          this.mainContainerEl = document.querySelector("#main-container");
        }
        displayNotes() {
          const notes = this.model.getNotes();
          notes.forEach((note) => {
            const noteEl = document.createElement("div");
            noteEl.innerText = note;
            noteEl.className = "note";
            this.mainContainerEl.append(noteEl);
          });
        }
      };
      module.exports = NotesView2;
    }
  });

  // index.js
  var NotesModel = require_notesModel();
  var NotesView = require_notesView();
  var model = new NotesModel();
  var view = new NotesView(model);
  console.log("The notes app is running");
  console.log(model.getNotes());
  model.addNote("Buy milk");
  model.addNote("Go to the gym");
  view.displayNotes();
})();
