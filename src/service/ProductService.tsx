import {ProductModel} from "../model/ProductModel";
import {ProductTypeEnum} from "../enum/ProductTypeEnum";

export class ProductService {

    private static INSTANCE: ProductService;

    private static PRODUCT_LIST: Array<ProductModel> = [
        new ProductModel("1", "Europe Street beat", "ELECTRONIC", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", ProductTypeEnum.ELECTRONIC),
        new ProductModel("2", "Europe Street beat", "ELECTRONIC", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", ProductTypeEnum.ELECTRONIC),
        new ProductModel("3", "Europe Street beat", "ELECTRONIC", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", ProductTypeEnum.ELECTRONIC),
        new ProductModel("4", "Europe Street beat", "ELECTRONIC", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", ProductTypeEnum.ELECTRONIC),
        new ProductModel("5", "Europe Street beat", "ELECTRONIC", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", ProductTypeEnum.ELECTRONIC),
        new ProductModel("6", "Europe Street beat", "ELECTRONIC", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", ProductTypeEnum.ELECTRONIC),
        new ProductModel("7", "Europe Street beat", "ELECTRONIC", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", ProductTypeEnum.ELECTRONIC),
        new ProductModel("8", "Europe Street beat", "MUSIC", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", ProductTypeEnum.MUSIC),
        new ProductModel("9", "Europe Street beat", "BOOK", "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png", ProductTypeEnum.BOOK)
    ]

    public findAll = (): Array<ProductModel> => ProductService.PRODUCT_LIST;

    public findByType = (type: ProductTypeEnum): Array<ProductModel> => ProductService.PRODUCT_LIST.filter(p => p.type === type);


    public static getInstance = (): ProductService => {

        if (!ProductService.INSTANCE) {
            ProductService.INSTANCE = new ProductService();
        }

        return ProductService.INSTANCE;
    }

}