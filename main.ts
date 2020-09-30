let gpa = 0
input.onGesture(Gesture.Shake, function () {
    gpa = randint(80, 100)
    if (gpa < 84) {
        basic.showNumber(randint(80, 84))
        basic.showString("A-")
    } else if (gpa < 89) {
        basic.showNumber(randint(85, 89))
        basic.showString("A")
    } else if (gpa < 100) {
        basic.showNumber(randint(90, 100))
        basic.showString("A+")
    } else {
        basic.showString("A-")
    }
})
basic.forever(function () {
	
})
