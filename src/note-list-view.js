'use strict';

(function(exports) {
  function NoteListView(NoteList) {}

  NoteListView.prototype.printNotes = function(NoteList) {
    var noteHTML = '';
    for(var i = 0; i < NoteList.list.length; i ++) {
      noteHTML += ('<div><li>' + NoteList.list[i] + '</div></li>');
    }
    return noteHTML;
  };
  
  exports.NoteListView = NoteListView;
})(this);