

// こんな感じにかけばいい感じjsテンプレート v1.0.0
// （モジュールjs）
// ------------------------------------------
// ・イベント発火タイミングには関数の呼び出しのみする。
// ・関数の処理内容などは関数定義にて同じように定義する。
// ・メンテナンス性などを考慮し、グローバルな空間を汚さない。
// ・jQueryは早いうちに脱却するべし。
// ・ES6に移行したい。（let, const, thisの挙動が分かりやすい。ES5以下は知らない。）
// ・アロー関数使いたい。かっこいい。




// ================================================================ //
// 関数定義
// ================================================================ //



// ■ object.function
// -----------------------*/

// function functionName() { }; は古いっす。らしいす。
// 「Obkt」さえユニークにしておけば、バッティングの心配はない！
// この部分だけ切り出して「/module/obkt-v1.0.0.js」とかにしちゃえばオリジナルjQueryね。
let Obkt = {

	// accordion
	// targetClickable: アコーディオンのクリックするタブ。
	// targetBody: クリックしたら開く部分
	// targetBodyMarginBottom: 開く部分の下余白
	/* ----------------------------------------------------------------
		Obkt.according({
			targetClickable: '#js--accordion .accordion-title',
			targetBody: '#js--accordion .accordion',
			targetBodyMarginBottom: '40px'
		})
	----------------------------------------------------------------
		<ul id="js--accordion">
			<li>
				<h3 class="accordion-title">タブタイトル</h3>
				<p class="accordion-text">タブテキスト</p>
			</li>
			<li>
				<h3 class="accordion-title">タブタイトル</h3>
				<p class="accordion-text">タブテキスト</p>
			</li>
		</ul>
	---------------------------------------------------------------- */
	accordion: ({targetClickable, targetBody, targetBodyMarginBottom}) => {
		const tag = document.querySelectorAll(targetClickable);
		for(let i = 0; i < tag.length; i++) {
			tag[i].addEventListener('click', () => {
				const text = document.querySelectorAll(targetBody);
				console.log(text);
				this.classList.toggle('is--open');
				if(text[i].style.maxHeight) {
					text[i].style.maxHeight = null;
					text[i].style.marginBottom = null;
				}else {
					text[i].style.maxHeight = text[i].scrollHeight + 'px';
					text[i].style.marginBottom = targetBodyMarginBottom;
				}
			}, false);
		}
	},

	loading: () => {
		
	},

	functionName2: () => {
		return;
	}
};




// ================================================================ //
// TIPS
// ================================================================ //



// ■ 非jQueryの為に
// -----------------------*/

// querySelectorが、jQueryの$('#name a')と同じように使えます。
// が、#name だけが欲しい時とかはgetElementByIdのが早いらしいです。
// document.getElementById('#name');
// document.querySelector('#name');
// document.querySelector('#name a'); 

// addEventListenerが、jQueryの$('').on('click', function() { });のようなものです。
// element.addEventListener('click', function() { }, false);
// element.addEventListener('resize', function() { }, false);


// ■ ES6 (ECMA2015)
// -----------------------*/

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