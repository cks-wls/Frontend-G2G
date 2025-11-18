import AppRoutes from '@/routes/AppRoutes'
import { UserProvider } from './stores/userContext'

function App() {
  return (
    <UserProvider>
      <AppRoutes />
    </UserProvider>
  )
}

export default App
