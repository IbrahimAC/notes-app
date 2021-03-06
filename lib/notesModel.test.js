const NotesModel = require('./notesModel');

describe('NotesModel', () => {
  const model = new NotesModel();
  it('returns an “[]” ', () => {
    expect(model.getNotes()).toEqual([]);
  });
  it('adds a note', () => {
    model.addNote('Buy milk');
    expect(model.getNotes()).toContain('Buy milk');
  });
  it('empties the notes', () => {
    model.addNote('Buy Ice cream');
    model.reset();
    expect(model.getNotes()).toEqual([]);
  });
});
