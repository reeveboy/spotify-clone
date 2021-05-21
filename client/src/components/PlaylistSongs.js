import { Image } from '@chakra-ui/image'
import {Text} from '@chakra-ui/react'
import { Flex, Heading } from '@chakra-ui/layout'
import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table'
import { css } from '@emotion/react'
import React from 'react'

const PlaylistSongs = ({ playlistSongs, setPlayingTrack, selectedPlaylist }) => {
    if (!playlistSongs) {
        return null
    }
    return (
        <Flex
            direction="column"
            overflowY="scroll"
            p={4}
            alignItems="flex-start"
        >
            <Flex>
                <Image 
                    src={selectedPlaylist.playlistImgUrl} 
                    maxH="250px"
                    maxW="250px"
                    mr={4}
                />
                <Flex
                    direction="column"
                    justifyContent="flex-end"
                >
                    <Heading color="white" as="h1" size="2xl">{selectedPlaylist.name}</Heading>
                    <Text color="white">{selectedPlaylist.owner}</Text>
                </Flex>
            </Flex>
            <Table variant="unstyled">
                <Thead>
                    <Tr>
                        <Th color="white">#</Th>
                        <Th color="white">Title</Th>
                        <Th color="white">Album</Th>
                        <Th color="white">Duration</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {playlistSongs.map((track, idx) => (
                        <Tr
                            key={idx}
                            onClick={() => setPlayingTrack(track)}
                            style={{ cursor: 'pointer' }}
                            css={css`
                                &:hover {
                                    background-color: #2a2a2a;
                                }
                            `}
                            maxH="90px"
                        >
                            <Td color="white">{idx + 1}</Td>
                            <Td color="white">
                                <Flex alignItems="center">
                                    <Image src={track.imgUrl} maxH="40px" maxW="40px" mr={3}/>
                                    <Flex direction="column">
                                        <Text>{track.name}</Text>
                                        <Text fontSize="smaller" color="gray.400">{track.artist}</Text>
                                    </Flex>
                                </Flex>
                            </Td>
                            <Td><Text color="white">{track.album}</Text></Td>
                            <Td color="white">{track.duration}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Flex>
    )
}
// ho
export default PlaylistSongs
