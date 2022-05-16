import axios from 'axios';
import React, { useEffect, useState } from 'react';

const SupperHeroPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get("http://localhost:4000/supperHero").then(res => {
            setData(res.data);
            setIsLoading(false);
        
        }
            
            );
    }, [])
    return (
        <div>
            <h2>Normal Supper hero Page {data.length}</h2>
            {data.map(x => <h4 key={x.id}>name: {x.name}</h4>)}
        </div>
    );
};

export default SupperHeroPage;