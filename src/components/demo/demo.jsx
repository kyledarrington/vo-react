import React from 'react'
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player'
import './style.scss'


export default function Demo(props) {
    return (
            <AudioPlayer 
                src={'/assets/demos/' + props.title + '.mp3'}
                layout='horizontal' 
                showJumpControls='false'
                customVolumeControls={[null]}
                customAdditionalControls={[]}
            />
    )
}
