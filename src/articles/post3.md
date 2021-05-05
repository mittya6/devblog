---
title: "投稿3"
date: "2020-01-03"
slug: "post3"
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et facilisis ligula. Morbi sed blandit elit, ac luctus tellus. Sed at libero condimentum ante vulputate blandit sed eu lectus. Curabitur quis purus fringilla, hendrerit erat ut, sagittis odio. Vivamus et rutrum odio. Proin dignissim eros a odio vestibulum pellentesque. Aenean finibus id velit blandit scelerisque. Duis tempus lorem vitae ligula placerat viverra. Fusce at posuere ligula. Phasellus nec sapien ultricies, ornare magna id, pharetra enim. Ut faucibus elementum orci id facilisis. Mauris pellentesque id lacus a volutpat. Nunc sed est id ipsum efficitur venenatis ac nec lacus.


```javascript
    // ビューの設定表示
    const app = new PIXI.Application({
      transparent: false,
      backgroundColor: 0x888888,
      width: 540,
      height: 400
    });
    document.body.appendChild(app.view);

    //画像のスプライト作成・表示
    const texture = PIXI.Texture.from('https://i.postimg.cc/vZC7bxrY/town-FTHG8455-TP-V4.jpg');
    const sprite = new PIXI.Sprite(texture);
    sprite.interactive = true;
    sprite.buttonMode = true;
    app.stage.addChild(sprite);

    //イベントの登録
    sprite
      .on('pointerdown', onDragStart)
      .on('pointerup', onDragEnd)
      .on('pointerupoutside', onDragEnd)
      .on('pointermove', onDragMove);


    function onDragStart(event) {
      this.dragging = true;
      //マウスの位置と画像の位置の差分を記録
      const initPosition = event.data.getLocalPosition(this.parent);
      this.initOffset = { x: initPosition.x - this.x, y: initPosition.y - this.y }
    }

    function onDragEnd() {
      this.dragging = false;
    }

    function onDragMove(event) {
      if (this.dragging) {
        //マウスの位置を取得
        const newPosition = event.data.getLocalPosition(this.parent);
        //マウスと画像にオフセットを適用して表示
        this.x = newPosition.x - this.initOffset.x;
        this.y = newPosition.y - this.initOffset.y;
      }
    }
```