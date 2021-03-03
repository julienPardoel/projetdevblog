import React, { useState, useEffect } from 'react';
import { useRouteMatch} from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:5000/api/v1/posts';

const Single = () => {
    const [single, setSingle] = useState([]);
    const match = useRouteMatch();

    const getSingle = async () => {
        const res = await axios.get(`${url}/${match.params.title}`);
        setSingle(res.data);
        console.log(res.data);
    }
    useEffect(() => {
        getSingle();
    },[])
    return (
        <div>
            <h1>{single.title}</h1>
            <h2>{single.content}</h2>
            <h3>{single.tags}</h3>
        </div>
    )
}

export default Single
