import React, { useState, useEffect, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Store } from '../../store/index'
import Style from './Header.module.scss'

const Header = () => {
  const [term, setTerm] = useState('')
  const history = useHistory()
  const { globalState, setGlobalState } = useContext(Store)
  const handleSubmit = (e) => {
    e.preventDefault()
    setGlobalState({ type: 'SET_TERM', payload: { term } })
    history.push(`/search?query=${term}`)
  }
  useEffect(() => {
    setTerm(globalState.term)
  }, [])
  return (
    <div className={Style.header}>
      <div className={Style.item}>
        <Link to='/'>VideoTube</Link>
      </div>
      <div className={Style.item}>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='検索' value={term} onChange={e => setTerm(e.target.value)} />
          <button type='submit'><FontAwesomeIcon icon={faSearch} /></button>
        </form>
      </div>
    </div>
  )
}

export default Header
