import {Button, Layout} from "antd";


interface ButtonBrowseProps {
    text: string,
}

export default function ButtonBrowse({text}: ButtonBrowseProps) {
    return (
        <Button color="default" variant="link">
            {text}
        </Button>
    );
}

