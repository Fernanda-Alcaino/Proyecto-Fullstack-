import React from "react";
import {Layout} from "antd";
import ButtonBrowse from "../atoms/ButtonBrowse";
import ButtonLoing from "../atoms/ButtonLogin";

const HeaderCont = () => {
    return (
        <Layout style={{flexDirection : "row", justifyContent: "space-between"}}>
            <Layout>

            </Layout>
            <Layout style={{flexDirection : "row"}}>
                <ButtonBrowse text={"Browse"} />
                <ButtonBrowse text={"My learning"} />
                <ButtonBrowse text={"Wishlist"} />
            </Layout>
            <Layout>
                <ButtonLoing text={"Log in"} />
            </Layout>
        </Layout>
    )
}

export default HeaderCont;