import { useEffect, useState } from 'react'
import { Card, ListGroup, Ratio } from 'react-bootstrap'
import ReactPlayer from 'react-player/lazy'

const PlaylistPlayer = ({ songsData, isLoading }) => {
    const [playlist, setPlaylist] = useState(songsData)

    useEffect(() => {

    }, [])


    let playingIndex = 0
    const playNextSong = () => {
        playingIndex + 1

    }
    return (
        <Card className='PlaylistPlayer'>
            <Card.Header>
                <Ratio aspectRatio='16x9'>
                    <ReactPlayer
                        url={playlist[playingIndex].video}
                        width='100%'
                        height='100%'
                        onEnded={playNextSong} />

                </Ratio>
            </Card.Header>
            <ListGroup variant='flush'>
                {
                    isLoading
                        ?
                        <h1>Loading...</h1>
                        :
                        playlist.map((song, idx) => {
                            return <ListGroup.Item
                                key={`playlist-${song.id}`}
                                variant={idx === playingIndex && 'info'}
                            >
                                {song.title} - {song.albumTitle}
                            </ListGroup.Item>
                        })
                }
            </ListGroup>
        </Card>
    )
}

export default PlaylistPlayer