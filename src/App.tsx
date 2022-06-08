import React from 'react';
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import EventsPage from "./components/EventsPage/EventsPage";
import CalendarPage from "./components/CalendarPage/CalendarPage";

function App() {
    return (
        <div>
            <Header/>
            <div className="content">
                <Routes>
                    <Route path="/events" element={<EventsPage/>}/>
                    <Route path="/calendar" element={<CalendarPage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
