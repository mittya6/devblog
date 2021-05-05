---
title: "UIkitのカスタマイズ方法"
date: "2021-04-29"
avatar: './uikit.jpg'
---

UIkitのカスタマイズファイルをnode\_modulesの中でに作っちゃうと、モジュール追加する度に消えてしまう。

なので、node\_modulesの外側で作成しよう。

## 準備
UIkitとlessを入れる。

```none
yarn add uikit
yarn add less
```



## lessファイル作成 & コンパイル
my.uikit.lessを作る。中身は一旦1行だけ。

#### **`my.uikit.less`**
```less
@import "./node_modules/uikit/src/less/uikit.theme.less";
```

以下のコマンドでCSSにコンパイルできる。
```none
npx lessc my.uikit.less my.uikit.css --math=always --relative-urls
```
