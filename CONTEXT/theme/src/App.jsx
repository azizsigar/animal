import DisplayTheme from './components/DisplayTheme'
import ToggleTheme from './context/ToggleTheme'
import LanguageSwitcher from './components/LanguageSwitcher'
import { LanguageProvider } from './context/LanguageContext'
import { CartProvider } from './context/CartContext.jsx'
import Cart from './components/Cart'
import { AuthProvider } from "./context/AuthContext.jsx";
import LoginButton from "./components/LoginButton";
function App() {
  return (
    <div>
      <AuthProvider>

    <DisplayTheme />
      <ToggleTheme />    
      <LanguageProvider>
        

              <LanguageSwitcher />
      </LanguageProvider>
         <CartProvider>
        <Cart />
      </CartProvider>
        <LoginButton />
    </AuthProvider>
    </div>
  )
}

export default App