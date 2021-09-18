basic.showLeds(`
    # . . . #
    . . # . .
    . # . # .
    . . # . .
    # . . . #
    `)
radio.setGroup(1)
let ruka2 = 0
WSJoyStick.JoyStickInit()
basic.clearScreen()
basic.forever(function () {
    if (WSJoyStick.Listen_Dir(DIR.NONE)) {
        radio.sendString("NONE")
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.U)) {
        radio.sendString("U")
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.D)) {
        radio.sendString("D")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # . # .
            . . # . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.L)) {
        radio.sendString("L")
        basic.showLeds(`
            . . . . .
            . # . . .
            # . . . .
            . # . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.R)) {
        radio.sendString("R")
        basic.showLeds(`
            . . . . .
            . . . # .
            . . . . #
            . . . # .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.U_L)) {
        radio.sendString("UL")
        basic.showLeds(`
            # # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.U_R)) {
        radio.sendString("UR")
        basic.showLeds(`
            . . . # #
            . . . . #
            . . . . .
            . . . . .
            . . . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.D_L)) {
        radio.sendString("DL")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . .
            # # . . .
            `)
    } else if (WSJoyStick.Listen_Dir(DIR.D_R)) {
        radio.sendString("DR")
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            `)
    }
    if (WSJoyStick.Listen_Key(KEY.P)) {
        radio.sendString("PX")
    } else if (WSJoyStick.Listen_Key(KEY.A)) {
        radio.sendString("AX")
    } else if (WSJoyStick.Listen_Key(KEY.B)) {
        radio.sendString("BX")
    } else if (WSJoyStick.Listen_Key(KEY.C)) {
        if (ruka2 > 0) {
            ruka2 += -1
        }
        radio.sendString("CX")
    } else if (WSJoyStick.Listen_Key(KEY.D)) {
        radio.sendString("DX")
    } else if (WSJoyStick.Listen_Key(KEY.E)) {
        if (ruka2 < 180) {
            ruka2 += 1
        }
        radio.sendString("EX")
    } else if (WSJoyStick.Listen_Key(KEY.F)) {
        radio.sendString("FX")
    }
    radio.sendValue("rameno2", ruka2)
})
