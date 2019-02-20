'use strict';

function testPrintListView() {
  var note = new Note('note');
  var noteListView = new NoteListView();
  var noteList = new NoteList();
  noteList.addToList(note);
  console.log(noteListView.printNotes(noteList));
  assert.isTrue(noteListView.printNotes(noteList) === ('<ul><div><li>' + note + '</div></li></ul>'));
}
testPrintListView();