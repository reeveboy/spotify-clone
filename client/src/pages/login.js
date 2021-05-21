import { Button } from '@chakra-ui/button'
import { Flex, Link } from '@chakra-ui/layout'
import React from 'react'

const CLIENT_ID = 'c5f925cebbe54823b7c41f8344ddb0c6'
const REDIRECT_URI = 'http://localhost:3000'

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-read-private%20playlist-read-collaborative`

const Login = () => {
    return (
        <Flex minH="100vh" justifyContent="center" alignItems="center">
            <Button size="lg" as={Link} href={AUTH_URL} colorScheme="teal">Login with Spotify</Button>
        </Flex>
    )
}

export default Login
