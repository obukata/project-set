### Project-set

---

#### ▼ Grunt

ターミナル上でpackage.jsonが置いてあるフォルダに移動し、下記のコマンドを実行する

```
$ npm install -g grunt-cli
$ npm install
```

作業前にタスクランナーを起動させる。

```
$ grunt
```
---

### ▼ ディレクトリ構成

#### grunt_v1.x系

作業ディレクトリ、開発ディレクトリ、出力ディレクトリが全て同じの分かりやすいやつ。展開前のSassなどは納品時に手作業で抜く必要がある。

* ファイル監視
* ローカルサーバー立ち上げ
* Sass展開

```
project-name_v1.x
  |     
  +-index.html
  +-assets
  |   +-images
  |   +-sass
  |   +-scripts
  |
  +-node_modules
  +-Gruntfile.js
  +-package.json
  +-README.md
```

#### grunt_v2.x系

作業ディレクトリ、開発ディレクトリ（出力ディレクトリ）になったバージョン。Includeも入ってる。便利。

* ファイル監視
* ローカルサーバー立ち上げ
* Sass展開
* Includeでの共通ファイル作成
* 作業ディレクトリ、開発ディレクトリを別に。

```
project-name_v2.x
  |     
  +-src
  |   +-index.html
  |   +-assets
  |       +-images
  |       +-includes
  |       +-sass
  |       +-scripts
  |
  +-dev
  |   +-index.html
  |   +-assets
  |       +-images
  |       +-styles
  |       +-scripts
  |
  +-node_modules
  +-Gruntfile.js
  +-package.json
  +-README.md
```

#### grunt_v3.x系

IncludeとSass展開のみ。比較的簡単に共通ファイルの作成とSassの展開、ライブリロードで作業できる。

* ファイル監視
* ローカルサーバー立ち上げ
* Sass展開
* Includeでの共通ファイル作成

```
project-name_v3.x
  |     
  |-index.html
  |-assets
  |   +-images
  |   +-includes
  |   +-sass
  |   +-scripts
  |
  +-node_modules
  +-Gruntfile.js
  +-package.json
  +-README.md
```

#### parcel_v0.x系

webpack通り越して、parcelがやってきたよ。新時代のバンドラー。期待。

起動コマンドはこんなもん `parcel index.html -d "../dist/"`

今後の課題は、バンドルして出力後のファイル名変えれるの？ディレクトリ別に出力できるの？など。

* ファイル監視
* ローカルサーバー立ち上げ
* Sass、babelなど設定ファイル何もかかなくても勝手にやってくれる。

```
project-name_v4.x
  |     
  +-src
  |   +-index.html
  |   +-assets
  |       +-images
  |       +-sass
  |       +-scripts
  |       +-node_modules
  |       +-package.json
  |
  +-dist
  |   +-index.html
  |   +-バンドル後ランダム英数字.js
  |   +-バンドル後ランダム英数字.css
  |
  +-README.md
```


**■src**

作業ディレクトリはここです。v1.x系は全てがルートディレクトリがそうです。

* assets/includes

	共通パーツを使えます。

	xxxx.html 形式で保存し、呼び出したいhtmlファイル内で
	
	`@include xxxx.html` と記述する。

**■dev**

開発ディレクトリはここです。v1.x系は全てが開発ディレクトリです。

**■grunt関連**

* node_modules

	nodeのライブラリ関係が配置されます。

	※npm installコマンドで自動生成されるフォルダです。

* Gruntfile.js

	gruntコマンド関係の定義ファイルです。コマンドを作成したり、カスタマイズしない限りは触りません。

* package.json

	必要なライブラリの定義ファイルです。触りません。

* README.md

	このファイルです。

---