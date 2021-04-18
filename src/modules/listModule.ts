import { Module } from '@/modules/module';
import { Element } from '@/modules/element';
import { ListType } from './listType';

export class ListModule implements Module {
	type = 'ListModule';
	listType: ListType;
	elements: Element[];
	flex: number[];

	constructor(listType: ListType, elements: Element[], flex: number[]) {
		this.listType = listType;
		this.elements = elements;
		this.flex = flex;
	}
}
