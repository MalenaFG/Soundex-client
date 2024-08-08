import './PlaylistPlayer.css'
import musicFill from '../../assets/file-earmark-music-fill.svg'
import { useEffect, useState } from 'react'
import { Badge, Button, Card, ListGroup, Nav, Ratio, Stack, Image } from 'react-bootstrap'
import ReactPlayer from 'react-player/youtube'
import { Link } from 'react-router-dom'
import AnimatedMusicBars from '../Players/AnimatedMusicBars'

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

    const pauseSong = () => {
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
                        width='100%'
                        height='100%'
                        url={url}
                        playing={playing}
                        config={{
                            youtube: {
                                playerVars: {
                                    showinfo: 1,
                                    disablekb: 1
                                }
                            }
                        }}
                        onEnded={handleEndedSong} />
                </Ratio>
                <div className="yt-cover"></div>
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
                                        <Nav.Link as={Link} to={`/songs/${song.id}`}>
                                            {song.songBy.band} - {song.title}
                                        </Nav.Link>
                                        <Badge bg='rebecca' className='d-flex align-items-center'>
                                            <Image src={musicFill} className="me-2" />
                                            {song.albumTitle}
                                        </Badge>
                                    </span>
                                    <span>
                                        {
                                            playerState.idx === idx && playerState.playing
                                                ?
                                                <Stack direction='horizontal' gap={3} className='justify-content-end'>
                                                    <AnimatedMusicBars />
                                                    <Button onClick={() => pauseSong(idx)} variant='outline-info'>Pause</Button>
                                                </Stack>
                                                :
                                                <Button onClick={() => loadSong(idx, true)} variant='outline-info'>Play</Button>
                                        }
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