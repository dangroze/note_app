'use strict';

(function(exports) {
  function NoteList() {
    this.list = [];
  };
  
  NoteList.prototype.addToList = function(note) {
    return this.list.push(note);
  };

  NoteList.prototype.printList = function(){
    for (var i in this.list) {
      return this.list[i];
    }
  };

  exports.NoteList = NoteList;

})(this);