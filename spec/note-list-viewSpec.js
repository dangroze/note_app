'use strict';

function testPrintListView() {
  var noteListView = new NoteListView();
  var noteList = new NoteList();
  noteList.addToList('note');
  assert.isTrue(noteListView.printNotes(noteList) == ('<div><li>' + 'note' + '</div></li>'));
}
testPrintListView();