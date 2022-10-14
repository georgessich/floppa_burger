// import classes from './Home.module.css';
import AddressCards from './AddressCards';
import LoadingSpinner from '../../components/LoadingSpinner';
import { useEffect, useState } from 'react';
import AddressMap2 from './AddressMap/AddressMap2';
import classes from './Address.module.scss'
function Address(props) {
    const [ address, setAddress ] = useState ([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [ httpError, setHttpError ] = useState();

    useEffect(() => {
        const fetchAddress = async () => {
           const response = await fetch(`https://borger-app-334de-default-rtdb.firebaseio.com/restaraunts.json`);
           if(!response.ok) {
               throw new Error('Something went wrong!');
           }
           const responseData = await response.json();

           const loadedAddress = []

           for(const key in responseData) {
               loadedAddress.push({
                   id: key,
                   title:responseData[key].title,
                   link:responseData[key].link,
                   hours:responseData[key].hours,
                   address:responseData[key].address
               })
        }
        setAddress(loadedAddress);
        setIsLoading(false);
        }
        
        fetchAddress().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
          });

            
      
    }, []);
    if(isLoading) {
        return <section>
            <LoadingSpinner />
        </section>
    }
    if(httpError) {
        return <section>
            <p>{httpError}</p>
        </section>
    }
    return <div className={classes['address']}>
        <AddressCards  restaraunts={address}/>
        <AddressMap2 />
    </div>
}

export default Address;