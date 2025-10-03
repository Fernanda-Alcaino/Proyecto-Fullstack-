import {Layout} from "antd";
import HeaderCont from "../molecules/HeaderCont";

const { Header, Footer, Content } = Layout;

export default function HomeLayout() {
    return (
        <Layout style={layoutStyle}>
            <Header style={headerStyle}>
                <HeaderCont />
            </Header>
            <Content style={contentStyle}>

            </Content>
            <Footer style={footerStyle}>

            </Footer>
        </Layout>
    );
}
const layoutStyle = {

}
const headerStyle = {

}
const contentStyle = {

}
const footerStyle = {

}