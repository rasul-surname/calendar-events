import {Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import EventsPage from "./components/EventsPage/EventsPage";
import CalendarPage from "./components/CalendarPage/CalendarPage";
import SelectedPage from "./components/SelectedPage/SelectedPage";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <Routes>
                <Route path="/events-calendar/events" element={<EventsPage/>}/>
                <Route path="/events-calendar/calendar" element={<CalendarPage/>}/>
                <Route path="/events-calendar/events/:id" element={<SelectedPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
