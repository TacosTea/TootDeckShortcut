// ==UserScript==
// @name         MastodonDeck Shortcut
// @namespace    http://github,com/TacosTea/
// @version      0.2
// @description  Add shortcut keys like TweetDeck to Mastodon
// @author       tacostea
// @match        https://*/web/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/TacosTea/TootDeckShortcut/master/TootDeckShortcut.js
// ==/UserScript==

(function() {
 'use strict';
 document.onkeyup = function(e) {
   if (document.activeElement.tagName != "INPUT" && document.activeElement.tagName != "TEXTAREA") {
   switch (e.keyCode) {
   case 78:
   // Key: n
   document.getElementsByClassName("autosuggest-textarea__textarea")[0].focus();
   document.getElementsByClassName("autosuggest-textarea__textarea")[0].value="";
   break;

   case 83:
   // key: s
   document.getElementsByClassName("search__input")[0].focus();
   document.getElementsByClassName("input.search__input")[0].value="";
   break;
   }
   }
   });
 })();
