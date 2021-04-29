---
title: "UIkitのカスタマイズ方法"
date: "2021-04-29"
slug: "20210426"
---

## 準備
```none
yarn add uikit
```

lessも入れておこう。
```none
yarn add less
```

## lessファイル作成 & コンパイル
my.uikit.lessを作る。
```less
@import "./node_modules/uikit/src/less/uikit.theme.less";
```

以下のコマンドでCSSにコンパイルできる。
```none
npx lessc my.uikit.less my.uikit.css --math=always --relative-urls
```