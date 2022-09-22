radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == number) {
        basic.showString("YES!")
    } else {
        basic.showString("NO!")
    }
})
input.onButtonPressed(Button.A, function () {
    number += 1
    basic.showNumber(number)
})
input.onButtonPressed(Button.B, function () {
    number += -1
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(number)
})
let number = 0
basic.showIcon(IconNames.Heart)
number = 0
basic.showNumber(number)
radio.setGroup(125)
