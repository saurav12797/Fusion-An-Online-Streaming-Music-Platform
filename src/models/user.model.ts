import {serializable, alias, primitive} from 'serializr';

export class User {

    @serializable(alias('full_name', primitive()))
    fullName?: string;

    @serializable(alias('phone', primitive()))
    phone?: string;

    @serializable(alias('email', primitive()))
    email?: string;

    @serializable(alias('password', primitive()))
    password?: string;
}
