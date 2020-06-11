namespace SpriteKind {
    export const leftside = SpriteKind.create()
    export const Leftsidewalk = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    mySprite.x = 0
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    speed = 10
})
let roadslice_right: Sprite = null
let roadslice: Sprite = null
let speed = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . 7 7 7 7 7 7 . . . . 
. . . . . 7 7 7 7 7 7 7 7 . . . 
. . . . 7 c 3 3 3 3 3 3 c 7 . . 
. . . 7 3 c d 3 3 3 3 3 c 3 7 . 
. . . 7 3 3 d 3 3 3 3 3 c 3 7 . 
. . . f 3 3 d 3 3 3 3 3 3 3 f . 
. . . f 3 3 d 3 3 3 3 3 3 3 f . 
. . . f 3 c 3 d d 3 3 3 c 3 f . 
. . . a 3 c a c c c c a c 3 a . 
. . . a 3 a c b b b b c a 3 a . 
. . . a 3 a b b b b b b a 3 a . 
. . . a a a a a a a a a a a a . 
. . . f a d a a a a a a d a f . 
. . . f a 3 d a a a a d 3 a f . 
. . . f f a a a a a a a a f f . 
. . . . f f . . . . . . f f . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
speed = 0
info.setLife(3)
game.onUpdateInterval(100, function () {
    roadslice = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c . . 7 7 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c . . . 7 7 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 c c c . . . . 7 7 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 c c c c . . . 7 7 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 c c c c . . . 7 7 7 7 7 c c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 c c c c c c c 7 7 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 c c c c c c c c c 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c c c c 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c 7 c c c c . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c c c c 7 7 c c c . . . . . . . . . . . . . . . . 
`, 0, 80)
    roadslice_right = sprites.createProjectileFromSide(img`
. . . . . . . . c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . c c c c c c c c c c 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . c c c 7 7 c c c c c 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 c c c . . . . . . . . . . . . . . . . 
. . . . . . . . c c c 7 c c c c c 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . . c c 7 c c c c c c 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . . c c c c c c c c c c 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . . c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . . c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . . c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
. . . . . . . . c c c c c c c c c c 7 7 7 7 7 7 7 7 7 7 7 7 8 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . . 
`, 0, 80)
    roadslice_right.right = 200
})
