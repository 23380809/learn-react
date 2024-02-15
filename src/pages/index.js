// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
// import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
// import Counter from './components/snapshot'
// import Form from './components/snapshot2'
import Counter from './components/queueUpdates'
import RequestTracker from './qcomps/shoppingCart'
import Form from './components/updObjects'
import Scoreboard from './qcomps/updObjectsForm'

export default function Home() {
  return (
    <div className={styles.main}>
        {/* <Profile /> */}
        {/* <Form /> */}
        {/* <FeedbackForm /> */}
        {/* <Counter /> */}
        {/* <RequestTracker /> */}
        <Scoreboard />
    </div>
  )
}
