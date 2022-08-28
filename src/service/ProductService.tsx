import {ProductModel} from "../model/ProductModel";

export class ProductService {

    private static INSTANCE: ProductService;

    public findAll = (): Array<ProductModel> => [
        new ProductModel("1", "Europe Street beat", "www.instagram.com", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"),
        new ProductModel("1", "Europe Street beat", "www.instagram.com", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"),
        new ProductModel("1", "Europe Street beat", "www.instagram.com", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png")
    ];


    public static getInstance = (): ProductService => {

        if (!ProductService.INSTANCE) {
            ProductService.INSTANCE = new ProductService();
        }

        return ProductService.INSTANCE;
    }

}