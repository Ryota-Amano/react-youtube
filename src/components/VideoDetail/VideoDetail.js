import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { fetchSelectedData } from '../../api'
import { Store } from '../../store'
import Style from './VideoDetail.module.scss'
import VideoPlay from '../VideoPlay/VideoPlay'
import Linkify from 'react-linkify'

const VideoDetail = () => {
  const { globalState } = useContext(Store)
  return globalState.selected.id ? (
    <div className={Style.wrap}>
      <VideoPlay id={globalState.selected.id} />
      <p>{globalState.selected.snippet.title}</p>
      <hr />
      <Linkify>
        <pre>{globalState.selected.snippet.description}</pre>
      </Linkify>

    </div>
  ) : ('no data')
}

export default VideoDetail
