'use strict';

function testPrintList() {
  var noteList = new NoteList();
  noteList.addToList('note');
  assert.isTrue(noteList.printList() == 'note')
};

testPrintList();