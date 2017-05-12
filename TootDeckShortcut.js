// ==UserScript==
// @name         MastodonDeck Shortcat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Add shortcat keys like TweetDeck to Mastodon
// @author       tacostea
// @match        https://*/web/*
// @grant        none
// ==/UserScript==

(function() {
 'use strict';
 $(document).keyup(function(e) {
   if (document.activeElement.tagName != "INPUT" && document.activeElement.tagName != "TEXTAREA") {
   switch (e.keyCode) {
   case 78:
   // Key: n
   $("textarea.autosuggest-textarea__textarea")[0].focus();
   $("textarea.autosuggest-textarea__textarea")[0].value="";
   break;
   case 83:
   // key: s
   $("input.search__input")[0].focus();
   $("input.search__input")[0].value="";
   break;
   }
   }
   });
 })();
