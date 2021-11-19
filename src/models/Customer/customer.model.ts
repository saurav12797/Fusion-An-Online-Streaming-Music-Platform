
import {serializable, alias, object, list, primitive} from 'serializr';

export class Customer {
	
	@serializable(alias('full_name', primitive()))
	fullName?: string;

	@serializable(alias('first_name', primitive()))
	firstName?: string;

	@serializable(alias('last_name', primitive()))
	lastName?: string;

	@serializable(alias('email', primitive()))
	email?: string;

	@serializable(alias('mobile_number', primitive()))
	mobileNumber?: string;

	@serializable(alias('password', primitive()))
	password?: string;

	@serializable(alias('is_guest', primitive()))
	isGuest?: string;

	@serializable(alias('status', primitive()))
	status?: string;

	@serializable(alias('isd_code', primitive()))
	isdCode?: string;

}