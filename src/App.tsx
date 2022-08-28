import './App.css';
import React from 'react';
import {Layout} from "antd";
import AppHeader from "./components/menu/header/AppHeader";
import ProductList from "./components/content/product-list/ProductList";

const {Content} = Layout;

export default function App() {

    return (
        <div className="App">
            <Layout>
                <AppHeader></AppHeader>
                <Content>
                    <ProductList></ProductList>
                </Content>
            </Layout>
        </div>
    );
}
