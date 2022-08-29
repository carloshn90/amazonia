import "./ProductList.css";
import {useEffect, useState} from "react";
import ProductCard from "./product-card/ProductCard";
import {Col, Row} from "antd";
import {ProductService} from "../../../service/ProductService";
import {ProductModel} from "../../../model/ProductModel";
import {ProductTypeEnum} from "../../../enum/ProductTypeEnum";

interface ProductListProps {
    productTypeSelected: ProductTypeEnum
}

export default function ProductList (props: ProductListProps) {

    const productService: ProductService = ProductService.getInstance();
    const [productArray, setProductArray] =  useState<Array<ProductModel>>([])

    useEffect(() => {
        setProductArray(productService.findByType(props.productTypeSelected))
    }, [productService, props])

    const addProducts = (productList: Array<ProductModel>): JSX.Element => {

        return (
            <>{
                productList.map((p: ProductModel) => (
                    <Col key={p.id} className="gutter-row"
                         xs={22}
                         sm={12}
                         md={12}
                         lg={8}
                         xl={8}
                         xxl={4}><ProductCard product={p}></ProductCard></Col>))
            }</>
        );
    }

    return (
        <div className="product-list">
            <Row gutter={16} align="middle" justify="space-between">
                {addProducts(productArray)}
            </Row>
        </div>
    );
}
