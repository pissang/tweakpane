import {assert} from 'chai';
import {describe, it} from 'mocha';

import TestUtil from '../../misc/test-util';
import Color from '../../model/color';
import InputValue from '../../model/input-value';
import ColorPickerController from './color-picker';

describe(ColorPickerController.name, () => {
	it('should dispose', () => {
		const doc = TestUtil.createWindow().document;
		const c = new ColorPickerController(doc, {
			value: new InputValue(new Color([0, 0, 0], 'rgb')),
		});
		c.dispose();
		assert.strictEqual(c.view.disposed, true);
	});
});
