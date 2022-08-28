import "./ProductList.css";
import React, {useEffect, useState} from "react";
import ProductCard from "./product-card/ProductCard";
import {Col, Row} from "antd";
import {ProductService} from "../../../service/ProductService";
import {ProductModel} from "../../../model/ProductModel";

export default function ProductList () {

    const productService: ProductService = ProductService.getInstance();
    const [productArray, setProductArray] =  useState<Array<ProductModel>>([])

    useEffect(() => {
        setProductArray(productService.findAll())
    }, [productService])

    const addProducts = (productList: Array<ProductModel>): JSX.Element => {

        return (
            <>{
                productList.map(p => (<Col span={4}><ProductCard product={p}></ProductCard></Col>))
            }</>
        );
    }

    return (
        <div className="product-list">
            <Row gutter={16}>
                {addProducts(productArray)}
            </Row>
        </div>
    );
}
