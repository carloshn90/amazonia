import "./ProductList.css";
import React from "react";
import ProductCard from "./product-card/ProductCard";
import {Col, Row} from "antd";

export default function ProductList () {

    return (
        <div className="product-list">
            <Row gutter={16}>
                <Col span={4}>
                    <ProductCard></ProductCard>
                </Col>
                <Col span={4}>
                    <ProductCard></ProductCard>
                </Col>
                <Col span={4}>
                    <ProductCard></ProductCard>
                </Col>
            </Row>
        </div>
    );
}
