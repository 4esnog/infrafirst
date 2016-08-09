'use strict';

const helpers = {
    getRandomHex () {
        const min = 0;
        const max = 255;

        return Math.floor(Math.random() * (max - min + 1) + min);
    },

    generateColor () {
        let color = [];
        for (let i = 0; i < 3; i++) {
            color.push(helpers.getRandomHex());
        }

        return color;
    }
};

module.exports = helpers;
