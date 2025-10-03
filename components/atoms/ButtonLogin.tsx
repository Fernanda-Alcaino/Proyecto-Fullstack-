import {Avatar, Button, Layout} from "antd";
import {assets} from "virtual:react-router/server-build";
import {isImageUrl} from "antd/es/upload/utils";

interface ButtonLoingProps {
    text: string,
}

export default function ButtonLoing({text}: ButtonLoingProps) {
    return (
        <Layout style={{flexDirection: 'row', alignItems: 'center'}}>
            <Button color= "default" variant="link">
                {text}
            </Button>
            <Avatar src={<img draggable={false} src={"assets/image/profile_icon.png"} alt="avatar" />} />
        </Layout>

    );

}

