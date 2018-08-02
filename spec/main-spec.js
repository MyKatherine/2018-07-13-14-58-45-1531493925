const main = require('../main/main');

describe('main()', () => {

    it('should calculate the remaindar', () => {
        expect(main.calRe(9, 4)).toBe(1);
        expect(main.calRe(9, 3)).toBe(0);
    });


});
