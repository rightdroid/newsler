import React from 'react';
import NewsList from '../components/NewsList';
import { useQuery } from '@apollo/client';
import LoadingSpinner from '../components/LoadingSpinner';
import queries from '../shared/constants/queries';


const Home = ({theme}) => {
    const { loading, error, data } = useQuery(queries.GET_NEWS_ITEMLIST);
    
    if (loading) return <LoadingSpinner />;
    if (error) return `Error! ${error}`;
    
    return <NewsList theme={theme} items={data.newsList.rows} />
};

export default Home;