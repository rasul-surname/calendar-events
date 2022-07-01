import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {WarningOutlined} from "@ant-design/icons/lib";
import PageInfo from "../PageInfo/PageInfo";
import classes from "./Redirect.module.css";

interface InterfaceRedirectPage {
    path: string;
}

const RedirectPage: React.FC<InterfaceRedirectPage> = ({path}) => {
    let [count, setCount] = useState(10);
    const navigate = useNavigate();

    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;

        if(count !== 0) {
            timer = setTimeout(() => {
                setCount(count => count - 1);
            }, 1000);
        } else {
            navigate(path);
        }

        return () => {
            clearTimeout(timer);
        }
    }, [count])

    return (
        <PageInfo>
            <WarningOutlined/>
            <p>Не пугайтесь, это пример 404 ошибки.</p>
            <p>404 - извините, страница, которую вы посетили, не существует.</p>
            <p className={classes.warning}>Редирект произойдет через {count}</p>
        </PageInfo>
    )
}

export default RedirectPage;