import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MAINPAGE_ROUTE } from '../router/path'
import '../styles/style.scss'
import { data } from '../data/words'

const Dictionary = () => {
  const [engWord, SetEngWord] = useState([])
  const [rusWord, SetRusWord] = useState([])
  const [nowNum, SetNowNum]:any = useState(1)

  function getWords(startNum:number, endNum:number, posNumber:number) {
    let nowPosNum:number = posNumber;
    data.then((result) => {
    const words:any = []
    function funcWord():string[][] {
        const arrayEng:string[] = []
        const arrayRus:string[] = []
        for (let i = startNum; i <= endNum; i++) {
            arrayEng.push(result[i].en)
            arrayRus.push(result[i].ru.split('(')[0])
        }
        const array:string[][] = [arrayEng, arrayRus]
        return array
    }
    words.push(funcWord())
    SetEngWord(words[0][0])
    SetRusWord(words[0][1])
    SetNowNum(nowPosNum)
    })
  }

  useEffect(() => {
    getWords(0, 1000, 1)
  }, [])

  return (
    <main>
      <section className='block_write'>
        <Link to={MAINPAGE_ROUTE} className='btn_back btn__red'>
          ← Назад
        </Link>
        <div className="slide_word">
          <button className={nowNum == 1 ? 'active' : ''} onClick={() => {getWords(0, 1003, 1)}}>1</button>
          <button className={nowNum == 2 ? 'active' : ''} onClick={() => {getWords(1003, 2006, 2)}}>2</button>
          <button className={nowNum == 3 ? 'active' : ''} onClick={() => {getWords(2006, 3009, 3)}}>3</button>
          <button className={nowNum == 4 ? 'active' : ''} onClick={() => {getWords(3009, 4012, 4)}}>4</button>
          <button className={nowNum == 5 ? 'active' : ''} onClick={() => {getWords(4012, 5015, 5)}}>5</button>
          <button className={nowNum == 6 ? 'active' : ''} onClick={() => {getWords(5015, 6018, 6)}}>6</button>
          <button className={nowNum == 7 ? 'active' : ''} onClick={() => {getWords(6021, 7024, 7)}}>7</button>
          <button className={nowNum == 8 ? 'active' : ''} onClick={() => {getWords(7024, 8026, 8)}}>8</button>
        </div>
        <table>
        <tr>
          <th>Английское слово</th>
          <th>Русский перевод</th>
        </tr>
          {
            engWord.map((_, index) => (
              <tr key={index}>
                <td>{engWord[index]}</td>
                <td>{rusWord[index]}</td>
              </tr>
            ))
          }
        </table>
      </section>
    </main>
  )
}

export default Dictionary