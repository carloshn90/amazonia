import './App.css';
import {Col, Layout, Row} from "antd";
import AppHeader from "./components/menu/header/AppHeader";
import ProductList from "./components/content/product-list/ProductList";
import {useState} from "react";
import {ProductTypeEnum} from "./enum/ProductTypeEnum";

const {Content} = Layout;

export default function App() {

    const [productTypeSelected, setProductTypeSelected] =  useState<ProductTypeEnum>(ProductTypeEnum.ELECTRONIC);

    return (
        <div className="App">
            <Layout>
                <AppHeader onSelectedMenu={setProductTypeSelected}></AppHeader>
                <Content>
                    <Row justify="center">
                        <Col>
                            <ProductList productTypeSelected={productTypeSelected}></ProductList>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </div>
    );
}
