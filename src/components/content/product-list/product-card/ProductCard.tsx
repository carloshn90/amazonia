import "./ProductCard.css";
import {Card} from "antd";
import {ProductModel} from "../../../../model/ProductModel";

const {Meta} = Card;

interface ProductCardProps {
    product: ProductModel
}

export default function ProductCard(props: ProductCardProps) {

    return (
        <div className="product-card">
            <Card
                hoverable
                style={{ width: 240, margin: "auto" }}
                cover={<img alt="example" src={props.product.imageLink} />}
            >
                <Meta title={props.product.title} description={props.product.description} />
            </Card>
        </div>
    );
}
