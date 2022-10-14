import {YMaps, Map, Placemark} from 'react-yandex-maps';
import classes from './AddressMap2.module.scss'
const AddressMap2 = () => {
    const placeMarks = [{
        geometry: [47.222998, 39.717973],
        properties: {
            hintContent: 'Флоппа Садовая',
            balloonContent: 'Большая Садовая, 69'
        },
        
    },
    {
        geometry: [47.212880, 39.642854],
        properties: {
            hintContent: 'Флоппа Западный',
            balloonContent: 'Стачки, 182'
        }, 
    },
    {
        geometry: [47.296155, 39.711936],
        properties: {
            hintContent: 'Флоппа Северный',
            balloonContent: 'Проспект Космонавтов, 37'
        }, 
    },
    {modules:
        ['geoObject.addon.balloon', 'geoObject.addon.hint']
    }]
    return (
        <YMaps>
            <div>
                <Map defaultState={{ center: [47.23, 39.72], zoom: 12 }}  className={classes['map']}>
                {placeMarks.map((placeMark) => (
                        <Placemark {...placeMark}/>
                    ))}
                </Map>
                
            
            </div>
        </YMaps>
    )
}

export default AddressMap2;