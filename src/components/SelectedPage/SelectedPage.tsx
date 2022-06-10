import {useParams} from "react-router-dom";

const SelectedPage = () => {
    const { id } = useParams<{id: any}>();

    return (
        <>
            <p>{id}</p>
        </>
    )
}

export default SelectedPage;