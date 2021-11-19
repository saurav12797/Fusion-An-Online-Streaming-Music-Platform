
import { SubCategory } from '../SubCategory/subCategory.model';

import {serializable, alias, object, list, primitive} from 'serializr';

export class Category { 

	@serializable(alias('id', primitive()))
	id?: number;

	@serializable(alias('name', primitive()))
	name?: string;

	@serializable(alias('attachment', primitive()))
	attachment?: string;

	@serializable(alias('discount_percentage', primitive()))
	discountPercentage?: number;

	@serializable(alias('sub_categories', list(object(SubCategory))))
	subCategories?: SubCategory[] = [];

}