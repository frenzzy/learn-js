/*jslint browser: true*/
/*global View, List, HighlightedList, EventList, ListManager*/

var listManager = new ListManager();

var listOne = new List(document.getElementsByClassName("list-one")[0]);
var listTwo = new HighlightedList(document.getElementsByClassName("list-two")[0]);
var listThree = new EventList(document.getElementsByClassName("list-three")[0], listManager);

listManager.addList(listOne);
listManager.addList(listTwo);
listManager.addList(listThree);