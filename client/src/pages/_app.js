import '@/styles/globals.css'
import { useEffect } from 'react';
import { Provider } from "react-redux";
import { persistor, store } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import Layout from '@/components/Layout'
export default function App({ Component, pageProps }) {
    useEffect(() => {
        import('preline')
      }, [])
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </PersistGate>
        </Provider >
    )
}