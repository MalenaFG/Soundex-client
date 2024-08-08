import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'

const CustomGoogleMap = () => {
    const position = { lat: 40.39293880569503, lng: - 3.6986587456372346 }

    return (
        <APIProvider apiKey={import.meta.env.VITE_GOOGLE_API_KEY} onLoad={() => console.log('Maps API has loaded.')}>
            <Map defaultCenter={position} defaultZoom={17} style={{ height: 'min(65vw, 450px)' }}>
                <Marker position={position} />
            </Map>
        </APIProvider>
    );
}

export default CustomGoogleMap