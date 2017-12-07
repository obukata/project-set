'use strict';

// HTMLの読み込みが完全に完了したタイミングで発火
// 画像の幅など取得する場合はこっち。
window.addEventListener('load', function() {

}, false);



// DOMの読み込みが完了したタイミングで発火
// loadイベントより早い。
window.addEventListener('DOMContentLoaded', function() {

}, false);






/* ======================= */
/* 非jQueryの為に           */
/* ======================= */

// querySelectorが、jQueryの$('#name a')と同じように使えます。
// が、#name だけが欲しい時とかはgetElementByIdのが早いらしいです。
// document.getElementById('#name');
// document.querySelector('#name');
// document.querySelector('#name a'); 


// addEventListenerが、jQueryの$('').on('click', function() { });のようなものです。
// element.addEventListener('click', function() { }, false);
// element.addEventListener('resize', function() { }, false);
