

// こんな感じに書けばいい感じjsテンプレート v1.0.0
// （イベント呼び出しjs）
// ------------------------------------------
// ・イベント発火タイミングには関数の呼び出しのみする。
// ・関数の処理内容などは関数定義にて同じように定義する。
// ・メンテナンス性などを考慮し、グローバルな空間を汚さない。
// ・jQueryは早いうちに脱却するべし。
// ・ES6に移行したい。（let, const, thisの挙動が分かりやすい。ES5以下は知らない。）
// ・アロー関数使いたい。かっこいい。




// ================================================================ //
// イベント発火タイミング
// ================================================================ //



// ■ dom load
// -----------------------*/

// DOMの読み込みが完了したタイミングで発火
// loadイベントより早い。
window.addEventListener('DOMContentLoaded', () => {
	'use strict';

	Obkt.accordion({
		targetClickable: '#js--accordion .faq_detail_title',
		targetBody: '#js--accordion .faq_detail_text',
		targetBodyMarginBottom: '40px'
	});

}, false);


// ■ load complete
// -----------------------*/

// HTMLの読み込みが完全に完了したタイミングで発火
// 画像の幅など取得する場合はこっち。
window.addEventListener('load', () => {
	'use strict';

	// Obkt.functionName2();

}, false);


// ■  jQuery dom load
// -----------------------*/

// かといってもjQueryいきなり無くすのは難しいかと思うので
// jQuery系統はここで起動させよう。
// $(function() {
// 	'use strict';

// });


// ■  jQuery load complete
// -----------------------*/

// jQuery系、完全ロードタイミング
// $(window).on('load', function() {
// 	'use strict';

// });