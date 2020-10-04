# JSとCSSで実装するaccordionのサンプル

## マークアップ
アコーディオンを操作するボタンに `aria-expanded` と `aria-controls` 属性をつける

アコーディオンが閉じているときは `aria-expanded="false"`

操作対象のコンテンツ（アコーディオンの中身）には `aria-controls` で指定した名前と同じIDをつける

### マークアップ例

```
<button aria-expanded="false" aria-controls="accordion01">Accordion Toggle</button>

<div id="accordion01" aria-hidden="true">Accordion contents</div>
```

## スタイル
このSampleでは、任意のclassを指定し、CSSセレクタにaria属性を使うことで状態の切り替えと連動するスタイルを定義している

## スタイル例

```
.c-accordion__title {
  /* デフォルトのボタンのスタイル */
}

.c-accordion__title[aria-expanded=true] {
  /* アコーディオンが開いているときのボタンのスタイル */
}
```

## 開発用のタスクランナー実行環境
node v12.18.4
npm v6.14.6

## ローカル開発環境の起動

初回のみ
```
npm i
```

```
npm start
```

2回目以降

```
npm start
```

