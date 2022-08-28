import {Layout, Menu, MenuProps} from "antd";
import './AppHeader.css';
import React, {useEffect, useState} from "react";
import logoPic from "../../../img/logo.png";
import {HeaderService} from "../../../service/HeaderService";

const {Header} = Layout;

export default function AppHeader() {

    const headerService: HeaderService = HeaderService.getInstance();
    const [menuItems, setMenuItems] =  useState<MenuProps['items']>([])

    useEffect(() => {
        const menuItems: MenuProps['items'] = headerService
            .findAllMenu()
            .map((label: string, index: number) => ({key: '' + (index + 1), label: label}));
        setMenuItems(menuItems)
    }, [headerService])

    return (

        <div className="App">
            <Layout>
                <Header className="header" style={{'padding': '0px'}}>
                    <div className="header-logo"><img src={logoPic} alt="logo" width="63px"/></div>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems}/>
                </Header>
            </Layout>
        </div>
    );
}
