import InputBinding from '../../binding/input';
import CompositeConstraint from '../../constraint/composite';
import {Constraint} from '../../constraint/constraint';
import Point2dConstraint from '../../constraint/point-2d';
import RangeConstraint from '../../constraint/range';
import StepConstraint from '../../constraint/step';
import * as Point2dConverter from '../../converter/point-2d';
import NumberFormatter from '../../formatter/number';
import PaneError from '../../misc/pane-error';
import TypeUtil from '../../misc/type-util';
import InputValue from '../../model/input-value';
import Point2d from '../../model/point-2d';
import Target from '../../model/target';
import StringNumberParser from '../../parser/string-number';
import InputBindingController from '../input-binding';
import Point2dPadTextInputController from '../input/point-2d-pad-text';
import {Point2dDimensionParams} from '../ui';
import * as UiUtil from '../ui-util';

interface Params {
	label?: string;
	x?: Point2dDimensionParams;
	y?: Point2dDimensionParams;
}

function createDimensionConstraint(
	params: Point2dDimensionParams | undefined,
): Constraint<number> | undefined {
	if (!params) {
		return undefined;
	}

	const constraints: Constraint<number>[] = [];

	if (!TypeUtil.isEmpty(params.step)) {
		constraints.push(
			new StepConstraint({
				step: params.step,
			}),
		);
	}
	if (!TypeUtil.isEmpty(params.max) || !TypeUtil.isEmpty(params.min)) {
		constraints.push(
			new RangeConstraint({
				max: params.max,
				min: params.min,
			}),
		);
	}
	return new CompositeConstraint({
		constraints: constraints,
	});
}

function createConstraint(params: Params): Constraint<Point2d> {
	return new Point2dConstraint({
		x: createDimensionConstraint(params.x),
		y: createDimensionConstraint(params.y),
	});
}

function createController(document: Document, value: InputValue<Point2d>) {
	const c = value.constraint;
	if (!(c instanceof Point2dConstraint)) {
		throw PaneError.shouldNeverHappen();
	}

	return new Point2dPadTextInputController(document, {
		parser: StringNumberParser,
		value: value,
		xFormatter: new NumberFormatter(
			UiUtil.getSuitableDecimalDigits(c.xConstraint, value.rawValue.x),
		),
		yFormatter: new NumberFormatter(
			UiUtil.getSuitableDecimalDigits(c.yConstraint, value.rawValue.y),
		),
	});
}

/**
 * @hidden
 */
export function create(
	document: Document,
	target: Target,
	initialValue: Point2d,
	params: Params,
) {
	const value = new InputValue(initialValue, createConstraint(params));
	const binding = new InputBinding({
		reader: Point2dConverter.fromMixed,
		target: target,
		value: value,
		writer: (v) => v.toObject(),
	});

	return new InputBindingController(document, {
		binding: binding,
		controller: createController(document, value),
		label: params.label || target.key,
	});
}
