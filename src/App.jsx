import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageMetaUpdater from "./features/page-meta/components/page-meta-updater.component.1.0.0";
/*import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Profile from "./pages/Profile";*/

const Home = () => <div>Home Page</div>;
const Messages = () => <div>Messages List</div>;
const MessageDetail = () => <div>Message Detail</div>;
const Profile = () => <div>Profile</div>;

function App() {
    return (
        <BrowserRouter>
            <PageMetaUpdater />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/messages/:id" element={<MessageDetail />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;