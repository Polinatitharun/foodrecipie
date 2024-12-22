import React, { useState, useEffect } from 'react';
import MainCards from './MainCards';

const Mainpage = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [msg, setMsg] = useState('');
    const [loading, setLoading] = useState(false); // State to track loading

    // Fetch default recipes when the component mounts
    useEffect(() => {
        const fetchDefaultRecipes = async () => {
            setLoading(true); // Start loading
            try {
                const get = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`); // Fetch recipes with a default keyword
                const jsondata = await get.json();
                setData(jsondata.meals);
            } catch (error) {
                setMsg('Failed to fetch data. Please try again.');
            } finally {
                setLoading(false); // Stop loading
            }
        };
        fetchDefaultRecipes();
    }, []);

    const handleInput = (event) => {
        setSearch(event.target.value);
    };

    const myfun = async () => {
        if (search === '') {
            setMsg('Please enter something in the search bar');
        } else {
            setLoading(true); // Start loading
            try {
                const get = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
                const jsondata = await get.json();
                setData(jsondata.meals);
                setMsg('');
            } catch (error) {
                setMsg('Failed to fetch data. Please try again.');
            } finally {
                setLoading(false); // Stop loading
            }
        }
    };

    return (
        <>
            <h1 className='head'>Food Recipe Page</h1>
            <div className='container'>
                <div className='searchBar'>
                    <input type="text" placeholder='Enter dish' onChange={handleInput} />
                    <button onClick={myfun}>Search</button>
                </div>
                <h3 className='msg'>{msg}</h3>
                {loading ? (
                    <h2 className='loading'>Loading...</h2> // Show loading indicator
                ) : (
                    <div>
                        <MainCards detail={data} />
                    </div>
                )}
            </div>
        </>
    );
};

export default Mainpage;
