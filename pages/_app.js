import Layout from '../components/Layout'
import '../styles/globals.css'
import { useRouter } from 'next/router';
import { useState, useEffect } from "react";
import Index from './404';

export default function App({ Component, pageProps }) {

  return<>
        
        <Layout>
            <Component {...pageProps} />
        </Layout>
          
        </>
    
  
  
}
