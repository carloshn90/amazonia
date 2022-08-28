
export class ProductModel {

    public readonly id: string;
    public readonly title: string;
    public readonly description: string;
    public readonly imageLink: string;

    constructor(id: string, title: string, description: string, imageLink: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imageLink = imageLink;
    }
}