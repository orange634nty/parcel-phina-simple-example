// メインシーン定義
export default {
    superClass: 'DisplayScene',
    init() {
        this.superInit()
        // 背景色指定
        this.backgroundColor = 'gray'
        // スプライト作成・表示
        this.parcelPhina = PixcelSprite('parcelPhina')
            .setPosition(this.gridX.center(), this.gridY.center() - 50)
            .setScale(7)
            .addChildTo(this)
        // ラベル作成・表示
        this.label = Label({
            text: 'Hello Parcel + Phina.js',
            fill: 'white',
            x: this.gridX.center(),
            y: this.gridY.center() + 200
        }).addChildTo(this)
    }
}
