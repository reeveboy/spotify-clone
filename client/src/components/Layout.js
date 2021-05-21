import { useAuth } from "../utils/useAuth"
import { Box, Button, Container, Flex, Icon, IconButton, Text } from "@chakra-ui/react"
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'
import SpotifyWebApi from "spotify-web-api-node"
import { useEffect, useState } from "react"
import { Form } from 'react-bootstrap'
import TrackSearchResults from '../components/TrackSearchResults'
import Player from "./Player"
import axios from "axios"
import Home from "../components/MyPlaylists"
import MyPlaylists from "../components/MyPlaylists"



const Layout = (code) => {
    const accessToken = useAuth()

    return (
        <Flex height="100vh" direction="column" p={4}>
            {/* <Flex flexGrow={1}>

                <Flex minW="250px" direction="column">

                    <Flex flexGrow={1} p={2} direction="column">
                        <Button w="100%" my={2}
                            onClick={() => {
                                if (show === 'home') return
                                else {
                                    setShow("home")
                                }
                            }}
                        >
                            <HamburgerIcon mr={4} />
                            <Text>Home</Text>
                        </Button>
                        <Button w="100%" my={2}
                            onClick={() => {
                                if (show === 'search') return
                                else {
                                    setShow("search")
                                }
                            }}
                        >
                            <SearchIcon mr={4} />
                            <Text>Search</Text>
                        </Button>
                    </Flex>

                    <Flex flexGrow={1}>2</Flex>
                </Flex>

                <Flex flexGrow={1} p={2} overflowY="hidden" >
                    {show === 'home' ?
                        <div>
                            {loading ?
                                <Text>loading...</Text>
                                :
                                <MyPlaylists myPlaylists={myPlatlists} />
                            }
                        </div>
                        :
                        null
                    }
                    {show === 'search' ?
                        <div>
                            {loading ?
                                <Text>loading...</Text>
                                :
                                <div>search</div>
                            }
                        </div>
                        :
                        null
                    }
                </Flex>

            </Flex> */}
            <Box>
                <Player
                    accessToken={accessToken}
                // trackUri={playingTrack?.uri}
                />
            </Box>
        </Flex >
    )
}

export default Layout