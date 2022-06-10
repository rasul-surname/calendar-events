import {useParams} from "react-router-dom";
import {useTypedSelector} from "../../store/hooks/useTypedSelector";
import SelectedItem from "./SelectedItem/SelectedItem";
import classes from './SelectedPage.module.css';

const SelectedPage = () => {
    const {listEvents} = useTypedSelector(state => state.events);
    const {id} = useParams<{ id: any }>();

    return (
        <div className={classes.cards}>
            {listEvents.slice(id, Number(id) + 1).map((event: any, index: number) => {
                return (
                    <SelectedItem
                        id={id}
                        image={event.image}
                        title={event.title}
                        date={event.date}
                        description={event.description}
                    />
                )
            })}
        </div>
    )
}

export default SelectedPage;