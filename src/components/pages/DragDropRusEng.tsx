import React from 'react'
import '../styles/style.scss'
import { Link } from 'react-router-dom'
import { MAINPAGE_ROUTE } from '../router/path'

const DragDropRusEng = () => {
  return (
    <main>
      <section className='block_write'>
        <Link to={MAINPAGE_ROUTE} className='btn_back btn__green'>
          ← Назад
        </Link>
      </section>
    </main>
  )
}

export default DragDropRusEng