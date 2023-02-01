import './App.css';
import { ToastProvider } from 'react-toast-notifications';
import Login from './pages/login/login';
function App() {
 return (
    <ToastProvider autoDismiss={true}>
<Login></Login>
</ToastProvider>
 )
}
export default App;
