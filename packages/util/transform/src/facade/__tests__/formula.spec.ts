import { formula } from '../formula'
import { dataset } from '../dataset'

const data = [
	{ x: 0, y: 28, c: 0 },
	{ x: 0, y: 55, c: 1 },
	{ x: 1, y: 43, c: 0 },
	{ x: 1, y: 91, c: 1 },
	{ x: 2, y: 81, c: 0 },
	{ x: 2, y: 53, c: 1 },
	{ x: 3, y: 19, c: 0 },
	{ x: 3, y: 87, c: 1 },
	{ x: 4, y: 52, c: 0 },
	{ x: 4, y: 48, c: 1 },
	{ x: 5, y: 24, c: 0 },
	{ x: 5, y: 49, c: 1 },
	{ x: 6, y: 87, c: 0 },
	{ x: 6, y: 66, c: 1 },
	{ x: 7, y: 17, c: 0 },
	{ x: 7, y: 27, c: 1 },
	{ x: 8, y: 68, c: 0 },
	{ x: 8, y: 16, c: 1 },
	{ x: 9, y: 49, c: 0 },
	{ x: 9, y: 15, c: 1 },
]

describe('The formula transformation', () => {
	it('can formula values', () => {
		const ds = dataset().add('data', data, formula(d => d.c * 2).as('derp'))

		// The result should not be the same instance (i.e. preserve the input for functional style)
		const transformed = ds.get('data')
		expect(transformed.length).toEqual(data.length)
		transformed.forEach(t => {
			expect(t.derp).toEqual(t.c * 2)
		})
	})
})
