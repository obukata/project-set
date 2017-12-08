// HTMLの読み込みが完全に完了したタイミングで発火
// 画像の幅など取得する場合はこっち。
window.addEventListener('load', function() {
	'use strict';

}, false);



// DOMの読み込みが完了したタイミングで発火
// loadイベントより早い。
window.addEventListener('DOMContentLoaded', function() {
	'use strict';

}, false);



// かといってもjQueryいきなり無くすのは難しいかと思うので
// jQuery系統はここで起動させよう。
$(function() {
	'use strict';

})



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


// 無名関数、今まで
// var f = function(a, b) {
// 	return a + b;
// };
// console.log(f(2, 4)); -> 6

// これからはアロー関数どう？
// const g = (a, b) => {
// 	return a + b;
// };
// console.log(g(2, 4)); -> 6

// アロー関数その2
// const h = (a, b) => a + b;
// console.log(h(2, 4)); -> 6


// 即時実行、今まで
// (function() {
// 	console.log("text");
// });

// アロー関数にて即時実行
// (() => {
// 	console.log("text");
// });