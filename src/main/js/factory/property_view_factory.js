const Errors          = require('../misc/errors');
const PropertyBuilder = require('../misc/property_builder');
const Control         = require('../view/control/control');
const PropertyView    = require('../view/property_view');

class PropertyViewFactory {
	static supports(value) {
		throw Errors.notImplemented('supports');
	}

	static createControlProperty(target, propName, opt_options) {
		const options = (opt_options !== undefined) ?
			opt_options :
			{};
		const model = this.createModel_(options);
		const prop = this.createProperty_(target, propName, model, options);
		prop.applySourceValue();

		const ControlClass = this.getControlClass_(options);
		const control = new ControlClass(model);
		control.getEmitter().on(
			Control.EVENT_CHANGE,
			(value) => {
				model.setValue(value);
			}
		);

		const propView = new PropertyView(prop);
		propView.addSubview(control);

		return propView;
	}

	static createMonitorProperty(target, propName, opt_options) {
		const options = (opt_options !== undefined) ?
			opt_options :
			{};
		const model = this.createModel_(options);
		const prop = this.createProperty_(target, propName, model, options);
		prop.applySourceValue();

		const MonitorClass = this.getMonitorClass_(options);
		const monitor = new MonitorClass(model);

		const propView = new PropertyView(prop);
		propView.addSubview(monitor);

		return propView;
	}

	static createProperty_(target, propName, model, options) {
		const builder = new PropertyBuilder(target, propName, model);
		if (options.id !== undefined) {
			builder.setId(options.id);
		}
		if (options.label !== undefined) {
			builder.setLabel(options.label);
		}
		return builder.build();
	}

	static createControl_(options) {
		const ControlClass = this.getControlClass_(options);
		const model = this.createModel_(options);
		return new ControlClass(model);
	}

	static getControlClass_(options) {
		throw Errors.notImplemented('getControlClass_');
	}

	static getMonitorClass_(options) {
		throw Errors.notImplemented('getMonitorClass_');
	}

	static instanciateModel_() {
		throw Errors.notImplemented('instanciateModel_');
	}

	static createModel_(options) {
		const model = this.instanciateModel_();

		Object.keys(this.CONSTRAINT_FACTORIES).forEach((key) => {
			const value = options[key];
			if (value === undefined) {
				return;
			}

			const constraint = this.CONSTRAINT_FACTORIES[key](value);
			model.addConstraint(constraint);
		});

		return model;
	}
}

module.exports = PropertyViewFactory