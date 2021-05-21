import { Box, Flex, Text } from '@chakra-ui/layout'
import { css } from '@emotion/react'
import React from 'react'

const DisplayMyPlaylists = ({ myPlaylists, setPlayingPlaylist }) => {
    if (!myPlaylists) {
        return null
    }

    return (
        <Flex direction="column" overflowY="scroll">
            {myPlaylists.map((playlist, idx) => (
                <Box
                    mb={2}
                    key={idx}
                    onClick={() => setPlayingPlaylist(playlist)}
                    style={{ cursor: 'pointer' }}
                >
                    <Text 
                        fontSize="sm"
                        color="gray.300"
                        css={css`
                            &:hover {
                               color: #fff;
                            }
                        `}
                    >
                        {playlist.name}
                    </Text>
                </Box>
            ))}
        </Flex>
    )
}

export default DisplayMyPlaylists
