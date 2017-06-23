// ==UserScript==
// @name         TootDeck Shortcut
// @namespace    http://github.com/TacosTea/
// @version      0.6
// @description  Add shortcut keys like TweetDeck to Mastodon
// @author       tacostea
// @match        https://*/web/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/TacosTea/TootDeckShortcut/master/TootDeckShortcut.js
// ==/UserScript==

(function() {
 'use strict';

 var drawer = document.getElementsByClassName("drawer")[0];
 function open_drawer(){
 drawer.style.width="300px";
 }
 function close_drawer(){
 drawer.style.width="0";
 }

 close_drawer();

 var elm = document.createElement('div');
 elm.id = ('drawer__nobb');
 elm.innerHTML='<button id="nobb">CLOSE(c)</button>';
 elm.style.margin="20px auto";
 document.getElementsByClassName("drawer__inner")[0].appendChild(elm);

 document.activeElement.blur();

 document.onkeyup = function(e) {
   if (document.activeElement.tagName != "INPUT" && document.activeElement.tagName != "TEXTAREA") {
     switch (e.keyCode) {

       case 67:
         // key: c - Close drawer
         close_drawer();
         break;

       case 78:
         // Key: n - prepare to post New toot
         open_drawer();
         document.getElementsByClassName("autosuggest-textarea__textarea")[0].focus();
         document.getElementsByClassName("autosuggest-textarea__textarea")[0].value="";
         break;

       case 83:
         // key: s - prepare to Search
         open_drawer();
         document.getElementsByClassName("search__input")[0].focus();
         document.getElementsByClassName("search__input")[0].value="";
         break;
     }
   }
 };
})();



