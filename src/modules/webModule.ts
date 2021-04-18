import { Module } from './module';

export class WebModule implements Module {
	type = 'WebModule';
	url: string;

	constructor(url: string) {
		this.url = url;
	}
}
