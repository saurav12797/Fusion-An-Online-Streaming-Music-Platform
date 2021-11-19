
import {serializable, alias, object, list, primitive} from 'serializr';

export class SubCategory { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('name', primitive()))
	name?: string;

	@serializable(alias('attachment', primitive()))
	attachment?: string;

	@serializable(alias('discount_percentage', primitive()))
	discountPercentage?: number;

	@serializable(alias('parent_id', primitive()))
	parentId?: number;

	@serializable(alias('deleted_at', primitive()))
	deletedAt?: string;

	@serializable(alias('created_at', primitive()))
	createdAt?: string;

	@serializable(alias('updated_at', primitive()))
	updatedAt?: string;

	@serializable(alias('service_id', primitive()))
	serviceId?: number;

}