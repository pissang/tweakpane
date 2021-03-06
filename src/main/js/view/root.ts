import ClassName from '../misc/class-name';
import * as DisposingUtil from '../misc/disposing-util';
import PaneError from '../misc/pane-error';
import Folder from '../model/folder';
import View from './view';

interface Config {
	folder: Folder | null;
}

const className = ClassName('rot');

/**
 * @hidden
 */
export default class RootView extends View {
	private containerElem_: HTMLDivElement | null;
	private folder_: Folder | null;
	private titleElem_: HTMLButtonElement | null;

	constructor(document: Document, config: Config) {
		super(document);

		this.onFolderChange_ = this.onFolderChange_.bind(this);

		this.folder_ = config.folder;
		if (this.folder_) {
			this.folder_.emitter.on('change', this.onFolderChange_);
		}

		this.element.classList.add(className());

		const folder = this.folder_;
		if (folder) {
			const titleElem = document.createElement('button');
			titleElem.classList.add(className('t'));
			titleElem.textContent = folder.title;
			this.element.appendChild(titleElem);

			const markElem = document.createElement('div');
			markElem.classList.add(className('m'));
			titleElem.appendChild(markElem);

			this.titleElem_ = titleElem;
		}

		const containerElem = document.createElement('div');
		containerElem.classList.add(className('c'));
		this.element.appendChild(containerElem);
		this.containerElem_ = containerElem;

		this.applyModel_();
	}

	get titleElement(): HTMLElement | null {
		return this.titleElem_;
	}

	get containerElement(): HTMLDivElement {
		if (!this.containerElem_) {
			throw PaneError.alreadyDisposed();
		}
		return this.containerElem_;
	}

	public dispose(): void {
		this.containerElem_ = DisposingUtil.disposeElement(this.containerElem_);
		this.folder_ = null;
		this.titleElem_ = DisposingUtil.disposeElement(this.titleElem_);
		super.dispose();
	}

	private applyModel_() {
		const expanded = this.folder_ ? this.folder_.expanded : true;
		const expandedClass = className(undefined, 'expanded');
		if (expanded) {
			this.element.classList.add(expandedClass);
		} else {
			this.element.classList.remove(expandedClass);
		}

		// TODO: Animate
	}

	private onFolderChange_() {
		this.applyModel_();
	}
}
