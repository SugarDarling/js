var config = {
    type: Phaser.AUTO,
    // pixel size * tile map size * zoom 
    width: 32 * 18.7,
    height: 32 * 18.8,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: false,
            debug: true, //这个最后最后的时候要关掉，所以那个红色的格子会没有掉
        }
    },
    scale: { //这个是responsive跟着你的screen的大小，会自动scale
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    backgroundColor: '#000000',
    pixelArt: true,
    scene: [preload, mainPage, storyline01, storyline02, RuleOfTheGame, instructions1, instructions2, world, map2, map3, map4, Congratulations]//load你的scene
    // gameover
};

var game = new Phaser.Game(config);

window.item1= 0;
window.item2= 0;
window.item3= 0;