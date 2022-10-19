import ReactDOM from 'react-dom/client'
// import Parent from './props/Parent'
// import GuestList from './state/GuestList'
// import UserSearch from './state/UserSearch';
import UserSearch from './refs/UserSearch';
// import EventComponent from './events/EventComponent';

const App = () => {
    return (
        <UserSearch />
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);