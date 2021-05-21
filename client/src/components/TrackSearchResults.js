import { Box, Flex, Text } from '@chakra-ui/layout'
import React from 'react'

export default function TrackSearchResults({ track, chooseTrack }) {
    const handlePlay = () => {
        chooseTrack(track)
    }

    return (
        <Flex
            m={4}
            alignItems="center"
            style={{ cursor: "pointer" }}
            onClick={handlePlay}
        >
            <img src={track.albumUrl} style={{ height: "64px", width: "64px" }} />
            <Box ml={2}>
                <Text>{track.title}</Text>
                <Text fontSize="sm" color="whiteAlpha.500" >{track.artist}</Text>
            </Box>
        </Flex>
    )
}
