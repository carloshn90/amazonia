import {ProductTypeEnum} from "../enum/ProductTypeEnum";

export class ProductModel {

    public readonly id: string;
    public readonly title: string;
    public readonly description: string;
    public readonly imageLink: string;
    public readonly type: ProductTypeEnum;

    constructor(id: string, title: string, description: string, imageLink: string, type: ProductTypeEnum) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageLink = imageLink;
        this.type = type;
    }
}