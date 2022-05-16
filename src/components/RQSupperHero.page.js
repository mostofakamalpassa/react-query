import axios from 'axios';
import React from 'react';
import {useQuery} from 'react-query'

const supperHeroFetch = () =>{
    return  axios.get("http://localhost:4000/supperHero");
}

const RQSupperHeroPage = () => {

 const {isLoading, data, isError, error}=   useQuery('hero-unique-name', supperHeroFetch)

//  console.log(isError)
    if(isError){
        return <h3 style={{color:"red"}}>{error.message}</h3>
    }
    if(isLoading){
      return   <h2>Data is Loading Now ...</h2>
    }
    return (
        <div>
            <h2>Supper Hero Page {data?.data.length}</h2>
            {data?.data.map(hero => <h3 key={hero.id}>{hero.name}</h3>)}
        </div>
    );
};

export default RQSupperHeroPage