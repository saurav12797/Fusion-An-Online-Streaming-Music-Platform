
import {serializable, alias, object, list, primitive} from 'serializr';

export class Service { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('name', primitive()))
	name?: string;

	@serializable(alias('attachment', primitive()))
	attachment?: string;

}