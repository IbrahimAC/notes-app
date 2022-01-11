class NotesModel {
  constructor() {
    this.model = [];
  }

  addNote(note) {
    console.log('item added');
    this.model.push(note);
  }

  getNotes() {
    return this.model;
  }

  reset() {
    this.model = [];
  }
}
module.exports = NotesModel;
const model = new NotesModel();
console.log(model.getNotes());
console.log(model.addNote('Buy milk'));
console.log(model.addNote('Go to the gym'));
console.log(model.getNotes());
console.log(model.reset());
console.log(model.getNotes());
