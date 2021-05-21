import { Flex, Image, Text } from '@chakra-ui/react'
import { css } from '@emotion/react'
import React from 'react'

const Home = ({ myPlaylists, setPlayingPlaylist, playingPlaylist }) => {
    return (
        <Flex flexWrap="wrap" justifyContent="center" alignItems="center" style={{ overflowY: "scroll" }} >
            {myPlaylists.map((playlist, idx) => (
                <Flex
                    key={idx}
                    width={220}
                    height={300}
                    backgroundColor='#161616'
                    m={4}
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    onClick={() => setPlayingPlaylist(playlist)}
                    style={{cursor: "pointer"}}
                    borderRadius={5}
                    css={css`
                        &:hover {
                            background-color: #262626;
                        }
                    `}
                >
                    <Image
                        src={playlist.playlistImgUrl}
                        alt={playlist.name}
                        boxSize={200}
                        objectFit='cover'
                    />
                    <Text color="white" fontSize='sm'>
                        {playlist.name}
                    </Text>
                    <Text fontSize='smaller' color="gray.400">{playlist.owner}</Text>
                </Flex>
            ))}
        </Flex>
    )
}

export default Home
