import React from 'react'
import { Flex } from '@chakra-ui/react'
import TrackSearchResults from './TrackSearchResults'

const SearchResultsAndLyrics = ({ searchResults, lyrics, chooseTrack }) => {
    return (
        <Flex direction="column" m={2} style={{ overflowY: "scroll" }} w="100%" >
            {searchResults.map(track => (
                <TrackSearchResults
                    track={track}
                    key={track.uri}
                    chooseTrack={chooseTrack}
                />
            ))}
            {searchResults.length === 0 && (
                <div className="text-center" style={{ whiteSpace: 'pre' }}>
                    {lyrics}
                </div>
            )}
        </Flex>
    )
}

export default SearchResultsAndLyrics
