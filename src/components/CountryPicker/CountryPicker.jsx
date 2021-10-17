import React, { useState, useEffect} from "react";
import {FormControl, NativeSelect } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from "../../api";

const CountryPicker = ({handleCountryChange}) =>{
    const [fetchedCountries, setFetchedCountries] = useState([]);

    useEffect(() =>{
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries());
        }
        fetchAPI();
    }, [setFetchedCountries]);

    console.log(fetchedCountries);

    return (
        <FormControl>
            <NativeSelect className={styles.container} defaultValue='' onChange={(e) => handleCountryChange(e.target.value)}>
                <option value="">Toàn cầu</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}> {country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}
export default CountryPicker;