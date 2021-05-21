import { useAuth } from "../utils/useAuth"
import { Flex } from "@chakra-ui/react"
import SpotifyWebApi from "spotify-web-api-node"
import { useEffect, useState } from "react"
import Player from "../components/Player"
import axios from "axios"
import SearchBar from "../components/SearchBar"
import SearchResultsAndLyrics from "../components/SearchResultsAndLyrics"
import DisplayMyPlaylists from "../components/DisplayMyPlaylists"
import IconButtons from "../components/IconButtons"
import Home from "../components/Home"
import PlaylistSongs from "../components/PlaylistSongs"


const spotifyApi = new SpotifyWebApi({
    clientId: process.env.REACT_APP_MY_CLIENT_ID
})

const Dashboard = (code) => {
    const accessToken = useAuth(code)
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState("")
    const [myPlaylists, setMyPlayLists] = useState([])
    const [displayState, setDisplayState] = useState("home")
    const [selectedPlaylist, setSelectedPlaylist] = useState({})
    const [playlistSongs, setPlaylistSongs] = useState([])

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSearch("")
        setLyrics("")
    }

    function handleHomeClick() {
        setDisplayState('home')
        setSelectedPlaylist({})
        setPlaylistSongs([])
    }

    useEffect(() => {
        if (!playingTrack) return

        axios.get('http://localhost:3001/lyrics', {
            params: {
                track: playingTrack.title,
                artist: playingTrack.artist
            }
        })
            .then(res => {
                setLyrics(res.data.lyrics)
            })
    }, [playingTrack])

    useEffect(async () => {
        if (!accessToken) return
        spotifyApi.setAccessToken(accessToken)

        spotifyApi.getUserPlaylists()
            .then((res) => {
                setMyPlayLists(res.body.items.map(playlist => {
                    const largestPlaylistImage = playlist.images.reduce((largest, image) => {
                        if (image.height > largest.height) return image
                        return largest
                    }, playlist.images[0])

                    return {
                        id: playlist.id,
                        name: playlist.name,
                        owner: playlist.owner.display_name,
                        tracksUrl: playlist.tracks.href,
                        uri: playlist.uri,
                        playlistImgUrl: largestPlaylistImage.url
                    }
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }, [accessToken])

    useEffect(() => {
        if (!accessToken) return
        if (Object.entries(selectedPlaylist).length === 0) return

        spotifyApi.getPlaylistTracks(selectedPlaylist.id)
            .then((res) => {
                setPlaylistSongs(res.body.items.map(track => {
                    const largestTrackImage = track.track.album.images.reduce((largest, image) => {
                        if (image.height > largest.height) return image
                        return largest
                    }, track.track.album.images[0])

                    const msToTime = (duration) => {
                        var seconds = Math.floor((duration / 1000) % 60),
                            minutes = Math.floor((duration / (1000 * 60)) % 60)

                        minutes = (minutes < 10) ? "0" + minutes : minutes;
                        seconds = (seconds < 10) ? "0" + seconds : seconds;

                        return minutes + ":" + seconds
                    }

                    const betterDate = (date) => {
                        return new Date(date).toDateString()
                    }

                    return {
                        id: track.track.id,
                        name: track.track.name,
                        added_at: betterDate(track.added_at),
                        uri: track.track.uri,
                        duration: msToTime(track.track.duration_ms),
                        album: track.track.album.name,
                        artist: track.track.artists[0].name,
                        imgUrl: largestTrackImage ? largestTrackImage.url : ''
                    }
                }))
            })
    }, [selectedPlaylist])

    useEffect(() => {
        if (!search) return setSearchResults([])
        if (!accessToken) return

        let cancel = false
        if (cancel) return
        spotifyApi
            .searchTracks(search)
            .then(res => {
                setSearchResults(res.body.tracks.items.map(track => {
                    const smallestAlbumImage = track.album.images.reduce((smallest, image) => {
                        if (image.height < smallest.height) return image
                        return smallest
                    }, track.album.images[0])

                    return {
                        artist: track.artists[0].name,
                        title: track.name,
                        uri: track.uri,
                        albumUrl: smallestAlbumImage.url
                    }
                }))
            })

        return () => cancel = true
    }, [search, accessToken])

    const getBody = () => {
        if (Object.entries(selectedPlaylist).length === 0) {
            return (<Home
                myPlaylists={myPlaylists}
                setPlayingPlaylist={setSelectedPlaylist}
                playingPlaylist={selectedPlaylist}
            />)
        }
        else {
            return (<PlaylistSongs
                playlistSongs={playlistSongs}
                setPlayingTrack={setPlayingTrack}
                selectedPlaylist={selectedPlaylist}
            />)
        }
    }

    return (
        <Flex direction="column" h="100vh">

            <Flex flexGrow={1} overflow="hidden" justifyContent="center">
                <Flex 
                    minW="18%" 
                    maxW="18%" 
                    direction="column" 
                    backgroundColor="#000"
                    pl={4}
                    pt={2}
                >
                    <IconButtons
                        setDisplayState={setDisplayState}
                        handleHomeClick={handleHomeClick}
                    />
                    <DisplayMyPlaylists
                        myPlaylists={myPlaylists}
                        setPlayingPlaylist={setSelectedPlaylist}
                    />
                </Flex>
                <Flex flexGrow={1} direction="column" backgroundColor="#121212">
                    {displayState === 'home' ?
                        getBody()
                        :
                        (<>
                            <SearchBar
                                search={search}
                                setSearch={setSearch}
                            />
                            <SearchResultsAndLyrics
                                searchResults={searchResults}
                                chooseTrack={chooseTrack}
                                lyrics={lyrics}
                            />
                        </>)
                    }
                </Flex>
            </Flex>
            <Player
                accessToken={accessToken}
                trackUri={playingTrack?.uri}
            />
        </Flex>
    )
}

export default Dashboard