import { to } from './calc'


describe("calc.js", () => {
    describe('to', () => {
        it('should return to res', () => {
            expect(to(5, 2)).toBe(3)
        })
    })
})