import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom';
import { RideBizProvider } from './context/Ridenbis.jsx';
import { DropmenuProvider } from './context/menuContext.jsx';
import { ProdsProvider } from './context/product.jsx';
import { EarnProvider } from './context/earn.jsx';
import { CompProvider } from './context/company.jsx';
import { SafeProvider } from './context/safety.jsx';
import { SupportProvider } from './context/support.jsx';
import { OtherProvider } from './context/other.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <BrowserRouter>
    <RideBizProvider>
      <DropmenuProvider>
        <ProdsProvider>
          <EarnProvider>
            <CompProvider>
              <SafeProvider>
                <SupportProvider>
                  <OtherProvider>
                  <App/> 
                  </OtherProvider>
                </SupportProvider>
              </SafeProvider>
            </CompProvider>
          </EarnProvider>
        </ProdsProvider> 
      </DropmenuProvider>
    </RideBizProvider>
    
    </BrowserRouter>
  </StrictMode>,
)
