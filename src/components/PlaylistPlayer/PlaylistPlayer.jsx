import { useEffect, useState } from 'react'
import { Badge, Button, Card, Col, ListGroup, Ratio, Row, Stack } from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'

const PlaylistPlayer = ({ songsData, isLoading }) => {
    const [playerState, setPlayerState] = useState({
        url: null,
        playing: false,
        idx: 0
    })

    useEffect(() => {
        loadSong(0, false)
    }, [])

    const loadSong = (idx, play) => {
        setPlayerState({
            url: songsData[idx].video,
            playing: play,
            idx
        })
    }

    const pauseSong = idx => {
        setPlayerState({ ...playerState, playing: false })
    }

    const handleEndedSong = () => {
        playerState.idx === songsData.length - 1
            ?
            loadSong(0, true)
            :
            loadSong(playerState[idx] + 1, true)

    }

    const { url, playing } = playerState

    return (
        <Card className='PlaylistPlayer'>
            <Card.Header>
                <Ratio aspectRatio='16x9'>
                    <ReactPlayer
                        controls
                        width='100%'
                        height='100%'
                        url={url}
                        playing={playing}
                        onEnded={handleEndedSong} />
                </Ratio>
            </Card.Header>
            <ListGroup variant='flush'>
                {
                    isLoading
                        ?
                        <h1>Loading...</h1>
                        :
                        songsData.map((song, idx) => {
                            return <ListGroup.Item
                                key={`playlist-${idx}`}
                                variant={idx === playerState.idx && 'info'} >
                                <Stack direction='horizontal' gap={3} className='justify-content-between'>
                                    <span className='w-auto'>
                                        <Link to={`/songs/${song.id}`}>
                                            {song.songBy.band}: {song.title}
                                        </Link>
                                        <hr className='my-2' />
                                        <Badge bg='rebecca'>{song.albumTitle}</Badge>
                                    </span>
                                    <span >
                                        <Button onClick={() => loadSong(idx, true)}>Play</Button>
                                    </span>
                                </Stack>
                            </ListGroup.Item>
                        })
                }
            </ListGroup>
        </Card>
    )
}

export default PlaylistPlayer