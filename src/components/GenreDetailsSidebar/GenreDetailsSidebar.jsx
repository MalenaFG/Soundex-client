import { Badge, Card, Col, ListGroup, ListGroupItem, Row, Stack } from "react-bootstrap"

const GenreDetailsSidebar = ({
    origins,
    linkedBands,
    parentGenre = 'None',
    childrenGenres
}) => {
    return (
        <Card body bg="dark-subtle">
            <Row>
                <Col xs={{ span: 6 }}>

                    <h6 className="pt-1 mb-3">Origins date: <strong className="fs-5">{origins.date}</strong></h6>
                    <hr />

                    {
                        origins.countries.length > 1
                            ?
                            <>
                                <h6>Origins Countries:</h6>
                                <ListGroup>
                                    {
                                        origins.countries.map(country => {
                                            let keyStr = country.split(" ").concat("-")
                                            return <ListGroup.Item key={keyStr}>{country}</ListGroup.Item>
                                        })
                                    }
                                </ListGroup>

                            </>
                            :
                            <>
                                <h6>Origins Country:</h6>
                                <ListGroup>
                                    <ListGroup.Item>{origins.countries[0]}</ListGroup.Item>
                                </ListGroup>
                            </>

                    }

                    <hr />

                    <h6>Most influencial Bands:</h6>
                    <Stack direction="horizontal" gap={2} className="flex-wrap pt-1">
                        {
                            linkedBands.map(band => {
                                let keyStr = band.split(" ").concat("-")
                                return <Badge pill key={keyStr} bg="rebecca" text="light" className="fs-6">{band}</Badge>
                            })
                        }

                    </Stack>

                </Col>

                <Col xs={{ span: 6 }}>

                    <h6>Parent genre: <Badge pill bg="light" text="dark" className="fs-6 ms-3">{parentGenre}</Badge></h6>
                    <hr />

                    {
                        childrenGenres.length > 1
                            ?
                            <>
                                <h6>Subgenres:</h6>

                                <Stack direction="column" gap={2} className="pt-1">
                                    {
                                        childrenGenres.map(genre => {
                                            let keyStr = genre.split(" ").concat("-")
                                            return <Badge pill key={keyStr} bg="secondary" className="fs-6">{genre}</Badge>

                                        })
                                    }
                                </Stack>
                            </>
                            :
                            <>
                                <h6>Subgenre:</h6>

                                <Badge pill bg="secondary" className="fs-6">{
                                    childrenGenres.length === 1
                                        ?
                                        childrenGenres[0]
                                        :
                                        'None'
                                }</Badge>
                            </>
                    }

                </Col>
            </Row>


        </Card>
    )
}

export default GenreDetailsSidebar