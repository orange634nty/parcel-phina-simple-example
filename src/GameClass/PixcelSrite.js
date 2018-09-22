// ドット絵用の拡大してもアンチエイリアスが効かないクラス
export default {
    superClass: 'Sprite',
    init(image, width, height) {
        this.superInit(image, width, height)
    },
    draw(canvas) {
        const image = this.image.domElement
        const srcRect = this.srcRect
        // アンチエイリアス無効化
        canvas.imageSmoothingEnabled = false
        canvas.context.drawImage(image,
            srcRect.x, srcRect.y, srcRect.width, srcRect.height,
            -this._width*this.originX, -this._height*this.originY, this._width, this._height
        )
    }
}
