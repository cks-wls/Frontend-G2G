import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/foundations/index.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

// MSW 워커를 활성화하는 함수
async function enableMocking() {
  if (import.meta.env.MODE !== 'development') {
    return
  }

  const { worker } = await import('./mocks/browser')

  return worker.start({
    onUnhandledRequest: 'bypass',
  })
}

enableMocking().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>
  )
})
