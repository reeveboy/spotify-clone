import { Box } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'

export default function Player({ accessToken, trackUri }) {
    const [play, setPlay] = useState(false)

    useEffect(() => setPlay(true), [trackUri])

    if (!accessToken) return null
    return (
        <Box>
            <SpotifyPlayer
                token={accessToken}
                showSaveIcon
                callback={state => {
                    if (!state.isPlaying) setPlay(false)
                }}
                play={play}
                uris={trackUri ? [trackUri] : []}
                styles={{
                    bgColor: '#12161f'
                }}
                initialVolume={0.5}
            />
        </Box>
    )
}
