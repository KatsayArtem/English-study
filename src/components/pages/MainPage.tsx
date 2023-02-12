import React from 'react'
import '../styles/style.scss'
import { Link } from 'react-router-dom'
import { WRITE_E_R_ROUTE, WRITE_R_E_ROUTE, DRAGDROP_E_R_ROUTE, DRAGDROP_R_E_ROUTE, DICTIONARY_ROUTE} from '../router/path'

const MainPage = () => {
  return (
    <main className='main'>
        <section className='container'>
          <Link to={DICTIONARY_ROUTE} className='btn btn__red'>
          Словарь<br/>English - Russian
          </Link>
          <Link to={WRITE_E_R_ROUTE} className='btn btn__blue'>
          Правописание<br/>English - Russian
          </Link>
          <Link to={WRITE_R_E_ROUTE} className='btn btn__blue'>
          Правописание<br/>Russian - English
          </Link>
          <Link to={DRAGDROP_E_R_ROUTE} className='btn btn__green'>
          Перетаскивания<br/>English - Russian<br/>(В разработке)
          </Link>
          <Link to={DRAGDROP_R_E_ROUTE} className='btn btn__green'>
          Перетаскивания<br/>Russian - English<br/>(В разработке)
          </Link>
        </section>
    </main>
  )
}

export default MainPage