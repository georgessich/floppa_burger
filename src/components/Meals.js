import classes from './Home.module.css';
import HomeCards from './HomeCards';
import LoadingSpinner from './LoadingSpinner';
import { useEffect, useState } from 'react';

function Meals(props) {
    const [ meals, setMeals ] = useState ([]);
    const [ isLoading, setIsLoading] = useState(true);
    const [ httpError, setHttpError ] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
           const response = await fetch(`https://borger-app-334de-default-rtdb.firebaseio.com/meals/${props.mealsId}.json`);
           if(!response.ok) {
               throw new Error('Something went wrong!');
           }
           const responseData = await response.json();

           const loadedMeals = []

           for(const key in responseData) {
               loadedMeals.push({
                   id: key,
                   title:responseData[key].title,
                   img:responseData[key].img,
                   price:responseData[key].price,
               })
        }
        setMeals(loadedMeals);
        setIsLoading(false);
        }
        
        fetchMeals().catch((error) => {
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
    return <div className={classes.home}>
        <h1 className={classes.home__title}>{props.title}</h1>
        <HomeCards  burgers={meals}/>
    </div>
}

export default Meals;