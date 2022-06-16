import {Routes, Route} from "react-router-dom";

import {WarningOutlined} from "@ant-design/icons/lib";

import Header from "./components/Header/Header";
import EventsPage from "./components/EventsPage/EventsPage";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import SelectedPage from "./components/SelectedPage/SelectedPage";
import PageInfo from "./components/PageInfo/PageInfo";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/events-calendar/events" element={<EventsPage/>}/>
                <Route path="/events-calendar/calendar" element={<CalendarPage/>}/>
                <Route path="/events-calendar/events/:id" element={<SelectedPage/>}/>
                <Route path='*' element={
                    <PageInfo>
                        <WarningOutlined/>
                        <p>Не пугайтесь, это пример 404 ошибки. </p>
                        <p>404 - извините, страница, которую вы посетили, не существует.</p>
                        <p>Используйте ссылки в шапке ↑↑↑</p>
                    </PageInfo>
                }/>
            </Routes>
        </div>
    );
}

export default App;
