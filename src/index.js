import 'phina.js'
import config from './config'
import GameClass from './GameClass'

// phina.jsを有効化
phina.globalize()

// クラスを定義
for (const className in GameClass) {
    phina.define(className, GameClass[className])
}

// アプリを実行
phina.main(() => {
    const app = GameApp({
        startLabel: 'main',
        assets: config.assets
    })
    app.run()
})
