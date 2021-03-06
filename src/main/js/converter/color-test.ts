import {assert} from 'chai';
import {describe, it} from 'mocha';

import Color from '../model/color';
import * as ColorConverter from './color';

describe('ColorConverter', () => {
	it('should convert mixed to color', () => {
		// tslint:disable:object-literal-sort-keys
		assert.deepStrictEqual(ColorConverter.fromMixed('#112233').toRgbObject(), {
			r: 0x11,
			g: 0x22,
			b: 0x33,
		});
		assert.deepStrictEqual(ColorConverter.fromMixed('foobar').toRgbObject(), {
			r: 0,
			g: 0,
			b: 0,
		});
		assert.deepStrictEqual(ColorConverter.fromMixed(123).toRgbObject(), {
			r: 0,
			g: 0,
			b: 0,
		});
	});

	it('should convert color to string', () => {
		assert.strictEqual(
			ColorConverter.toString(new Color([0, 0, 0], 'rgb')),
			'#000000',
		);
		assert.strictEqual(
			ColorConverter.toString(new Color([0, 127, 255], 'rgb')),
			'#007fff',
		);
		assert.strictEqual(
			ColorConverter.toString(new Color([255, 255, 255], 'rgb')),
			'#ffffff',
		);
	});
});
