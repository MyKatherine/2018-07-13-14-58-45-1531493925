describe('main()', () => {
    it('should calculate the remaindar', () => {
        expect(main.calRe(9, 4)).toBe(1);
        expect(main.calRe(11, 3)).toBe(2);
    });
});
