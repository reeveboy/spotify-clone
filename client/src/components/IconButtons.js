import React from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons'

const IconButtons = ({ setDisplayState, handleHomeClick }) => {


    return (
        <Flex direction="column" mb={4}>
            <button onClick={handleHomeClick}>
                <Flex alignItems="center">
                    <HamburgerIcon color="white" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Text 
                        fontSize="lg"
                        color="white"
                    >
                        Home
                    </Text>
                </Flex>
            </button>
            <button onClick={() => setDisplayState('search')}>
                <Flex alignItems="center">
                    <SearchIcon color="white" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Text fontSize="lg" color="white">
                        Search
                    </Text>
                </Flex>
            </button>
        </Flex>
    )
}

export default IconButtons
