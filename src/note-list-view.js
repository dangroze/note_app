'use strict';

(function(exports) {
  function NoteListView(NoteList) {}

  NoteListView.prototype.printNotes = function(NoteList) {
    for(var i = 0; i < NoteList.list.length; i ++) {
      return ('<div><li>' + NoteList.list[i] + '</div></li>');
    }
  };
  
  exports.NoteListView = NoteListView;
})(this);