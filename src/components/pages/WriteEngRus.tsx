import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MAINPAGE_ROUTE } from '../router/path'
import '../styles/style.scss'
import { data } from '../data/words'

const WriteEngRus = () => {
  const [engWord, SetEngWord] = useState([])
  const [rusWord, SetRusWord] = useState([])
  const [answer, SetAnswer] = useState('')

  const answerCheck:HTMLElement | null = document.querySelector('.answerCheck')
  const translationWord:HTMLElement | null = document.querySelector('.translation')
  const resBtn: HTMLButtonElement | null = document.querySelector('.result_btn')

  function refind() {
    data.then((result) => {
        const words:any = []
        function random():string[][] {
            const arrayEng:string[] = []
            const arrayRus:string[] = []
            const rand = Math.floor(Math.random() * result.length - 1);
            result.forEach((el:any) => {
                if (el.id === rand) {
                  arrayEng.push(el.en)
                  arrayRus.push(el.ru.split('(')[0])
                } 
            })
            const array:string[][] = [arrayEng, arrayRus]
            return array
        }
        for (let i = 0; i < 1; i++) {
            words.push(random())
        }
        SetEngWord(words[0][0])
        SetRusWord(words[0][1])
    })
    if (translationWord && answerCheck) {
      translationWord.textContent = ''
      answerCheck.textContent = ''
    }
    if (resBtn) {
      resBtn.disabled = false;
    }
  }

  useEffect(() => {
    refind()
  }, [])

  function result() {
    let rusWordLength = rusWord.join('').split(',').sort().join('').trim().length
    if (rusWord && translationWord && answer !== '') {
      translationWord.style.color = '#fff'
      let num = 0;
          rusWord.join('').split(',').sort().forEach((el:string) => {
            answer.toLowerCase().trim().split(',').sort().forEach((elem:string) => {
              if (el.trim() === elem) {
                num++
              }
            })
          })
        if (rusWord.join('').split(',').sort().join('').trim() === answer.toLowerCase().split(',').sort().join('').trim()) {
          num = rusWordLength
        }
        if (num === rusWordLength) {
          translationWord.style.color = '#56FF9A'
          translationWord.textContent = answer
        } else if (num === 0) {
          translationWord.style.color = '#FF6565'
          translationWord.textContent = rusWord.join('')
        } else {
          translationWord.textContent = rusWord.join('')
          translationWord.style.color = '#FFEE56'
        }
      if (resBtn) {
        resBtn.disabled = true;
      }
    }
    SetAnswer('')
  }

  function check() {
    if (answerCheck) {
      answerCheck.textContent = rusWord.join(' ')
    }
  }

  return (
    <main>
      <section className='block_write'>
        <Link to={MAINPAGE_ROUTE} className='btn_back btn__blue'>
          ← Назад
        </Link>
          <h1 className='word'>{engWord}</h1>
          <div className='ds'>
          <h2 className='translation'></h2>
          </div>
          <h2 style={{color: "white", textAlign: 'center'}} className='answerCheck'></h2>
        <div className="block_answer">
          <input type="text" placeholder='Перевод' value={answer} onChange={(event) => {SetAnswer(event.target.value)}}/>
          <button className='result_btn' onClick={() => {result()}}>Проверить</button>
          <div className='ds'>
          <button onClick={() => {refind()}}>⭮</button>
          <button onClick={() => {check()}}>👁</button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default WriteEngRus