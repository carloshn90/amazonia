import {Layout, Menu, MenuProps} from "antd";
import './AppHeader.css';
import {useEffect, useState} from "react";
import logoPic from "../../../img/logo.png";
import {HeaderService} from "../../../service/HeaderService";
import {ProductTypeEnum} from "../../../enum/ProductTypeEnum";

const {Header} = Layout;

interface AppHeaderProps {
    onSelectedMenu: (product: ProductTypeEnum) => void
}

export default function AppHeader(props: AppHeaderProps) {

    const headerService: HeaderService = HeaderService.getInstance();
    const [menuItems, setMenuItems] =  useState<MenuProps['items']>([]);

    useEffect(() => {
        const menuItems: MenuProps['items'] = headerService
            .findAllMenu()
            .map((label: string, index: number) => ({key: '' + (index + 1), label: label}));
        setMenuItems(menuItems)
    }, [headerService]);

    const selectProduct = (item: any) => {

        if (item.key === '1') {
            props.onSelectedMenu(ProductTypeEnum.ELECTRONIC);
        } else if (item.key === '2') {
            props.onSelectedMenu(ProductTypeEnum.BOOK);
        } else {
            props.onSelectedMenu(ProductTypeEnum.MUSIC);
        }
    }

    return (

        <div className="App">
            <Layout>
                <Header className="header" style={{'padding': '0px'}}>
                    <div className="header-logo"><img src={logoPic} alt="logo" width="63px"/></div>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} onSelect={selectProduct}/>
                </Header>
            </Layout>
        </div>
    );
}
