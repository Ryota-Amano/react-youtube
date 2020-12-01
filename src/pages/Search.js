import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { useLocation } from 'react-router-dom'
import { fetchSearchData } from '../api'
import { Store } from '../store'
import VideoGrid from '../components/VideoGrid/VideoGrid'
import VideoGridItem from '../components/VideoGridItem/VideoGridItem'

const Search = () => {
  const location = useLocation()
  const { globalState, setGlobalState } = useContext(Store)
  const setSearchResult = async () => {
    const searchPatams = new URLSearchParams(location.search)
    const query = searchPatams.get('query')
    if (query) {
      await fetchSearchData(query).then(res => {
        setGlobalState({ type: 'SET_SEARCHED', payload: { searched: res.data.items } })
      })
    }
  }
  useEffect(() => {
    setSearchResult()
  }, [location.search])
  return (
    <Layout>
      <VideoGrid>
        {globalState.searched ? globalState.searched.map(search => {
          return (
            <VideoGridItem id={search.id.videoId} key={search.id.videoId} src={search.snippet.thumbnails.medium.url} title={search.snippet.title} />
          )
        }) : ('no data')}
      </VideoGrid>
    </Layout>
  )
}

export default Search
