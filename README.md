# JSとCSSで実装するaccordionのサンプル

## マークアップ

例

```
<button aria-expanded="false" aria-controls="accordion01">Accordion Toggle</button>

<div id="accordion01" aria-hidden="true">Accordion contents</div>
```

### アコーディオンを操作するボタン
`aria-expanded` 属性と `aria-controls` 属性をつける

※アコーディオンが閉じているときは `aria-expanded="false"`

### 操作対象のコンテンツ（アコーディオンの中身）
`aria-controls` で指定した名前と同じIDをつける

`aria-hidden` 属性をつける

※アコーディオンが閉じているときは `aria-hidden="true"`

## スタイル

例
```
.c-accordion__title {
  /* デフォルトのボタンのスタイル */
}

.c-accordion__title[aria-expanded=true] {
  /* アコーディオンが開いているときのボタンのスタイル */
}
```

このSampleでは、CSSセレクタにaria属性を使うことで状態と連動してスタイルを切り替えている

class名は任意でOK


## 開発用のタスクランナー実行環境
* node v12.18.4
* npm v6.14.6

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

