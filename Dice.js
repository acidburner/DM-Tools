class Dice {
    constructor() {
        this.secret = false;
        this.dice = {
            "d100": 100,
            "d20": 20,
            "d14": 14,
            "d12": 12,
            "d10": 10,
            "d8": 8,
            "d6": 6,
            "d4": 4,
            "d2": 2
        };
    }
    rollDice(dice) {
        var rand = Math.random();
        return Math.floor(rand * dice) + 1;
    }
    xRollDice(amount, dice) {
        var results = [];
        for (var i = 0; i < amount; i++) {
            results.push(this.roll(dice));
        }
        return results;
    }
    coinFlip() {
        var result = Math.floor(rand * 2) + 1;
        if (result == 1) {
            return "heads";
        }
        return "tails";
    }
    xCoinFlip(amount) {
        var results = [];
        for (var i = 0; i < amount; i++) {
            var result = Math.floor(rand * 2) + 1;
            if (result == 1) {
                results.push("heads");
            } else {
                results.push("tails");
            }
        }
        return results;
    }
}