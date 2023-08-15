import { Inter } from 'next/font/google'
import Home from './home'
import Profile from './profile'
import {UseSelector,useSelector} from 'react-redux'

const inter = Inter({ subsets: ['latin'] })

export default function Main() {
    const {isLoggedIn} = useSelector(state=> state.user) 
        if(isLoggedIn){
            return  <Profile />
        }else {
            return <Home />
        }
}