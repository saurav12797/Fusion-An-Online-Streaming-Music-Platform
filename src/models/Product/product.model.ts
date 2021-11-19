import {serializable, alias, primitive} from 'serializr';

export class Product {
    @serializable(alias('id', primitive()))
    id?: number;

    @serializable(alias('name', primitive()))
    name?: string;

    @serializable(alias('productUrl', primitive()))
    productUrl?: string;


    @serializable(alias('strips', primitive()))
    strips?: number;

    @serializable(alias('brand', primitive()))
    brand?: string;

    @serializable(alias('price', primitive()))
    price?: string;

    @serializable(alias('discount_price', primitive()))
    discountPrice?: string;

    @serializable(alias('offer', primitive()))
    offer?: number;
}