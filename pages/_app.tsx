import '@/styles/globals.css'
import '@/styles/tabcss.css'
import type { AppProps } from 'next/app'
import { AuthContextProvider } from "../context/AuthContext";
import { useRouter } from "next/router";
import ProtectedRoute from "../components/ProtectedRoute";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <AuthContextProvider>
    
    
          <Component {...pageProps} />
     
    </AuthContextProvider>
  );
}