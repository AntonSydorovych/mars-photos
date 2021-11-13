import axios from "axios";
import {loadPhotos} from '../store/reducer';
//import {loadMorePhotos} from '../store/reducer';

const DEMO_KEY = 'lxi2yNb024qot0MsYqP6WYbRPp0eQhDU9W5puQTK';
//'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=DEMO_KEY'

export const downloadPhotos = (rover, camera, solarDay) => {
    return async (dispatch) => {
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${solarDay}&camera=${camera}&api_key=${DEMO_KEY}`)
        dispatch(loadPhotos(response.data))
        console.log(response.data)
    }
}

