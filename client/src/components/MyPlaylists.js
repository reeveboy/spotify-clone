import { Box, Flex, Heading } from '@chakra-ui/layout'
import React from 'react'

export default function MyPlaylists({ myPlaylists }) {
    console.log(myPlaylists)
    return (
        <>
            <Heading>My Playlists</Heading>
            <Flex flexWrap='wrap'>
                {myPlaylists.map(playlist => (
                    <Flex direction="column" mr={4} mt={4}>
                        <Box>
                            <img src={playlist.images[0].url} width='200px' height='200px'></img>
                        </Box>
                        <Box>
                            {playlist.name}
                        </Box>
                    </Flex>
                ))}
            </Flex>
        </>
    )
}
