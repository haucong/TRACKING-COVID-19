import React from "react";
import {Cards, Chart, CountryPicker} from './components';
import style from './App.module.css';
import { fetchData } from "./api/";
import covidimage from './image/covid.jpg';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const fetchedData = await fetchData()

    this.setState({ data: fetchedData })
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })

  }
  render() {
    const { data, country } = this.state
    return (
      <div className={style.container}>
        <img src={covidimage} alt='COVID 19' className={style.image} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
        <div className={style.coppyright}>©: conghau</div>
      </div>
    )
  }
}
export default App;
