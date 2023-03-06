import React, { useState } from 'react';
import axios from 'axios';

import { Button } from '../../Ui/Button';
import Header from '../../Header/Header';
import TitleComponent from '../../Ui/TitleComponent';
import InputUi from '../../Ui/InputUi';

interface WeatherProps {}

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
  }[];
}

const Weather: React.FC<WeatherProps> = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.get<WeatherData>(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bbbdf49218437f7ce1844d356aac6f77&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(weatherData);

  return (
    <>
      <Header type="home" />
      <section className="w-full h-screen bg-[#efefef]">
        <div className="container lg:max-w-[1600px] px-1 md:px-10 flex items-center w-full h-full relative">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <TitleComponent title="Check the Weather" />
            <form
              onSubmit={handleSubmit}
              className="flex justify-center lg:flex-row flex-col items-center lg:items-end gap-x-10 pt-20 w-[90%] md:w-[50%]"
            >
              <div className="text-[#444444] text-xl font-bold tracking-[0.2rem]">
                <InputUi
                  title="Enter City:"
                  type="text"
                  id="city"
                  name="city"
                  value={city}
                  required={true}
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
              <div className="pt-10 lg:pt-0">
                <Button title="Get the Weather" type="submit" size="md" />
              </div>
            </form>
            {weatherData && (
              <div className="mt-10 task-input w-[90%] lg:w-[30%]">
                <h2>{weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp} °C</p>
                <p>Humidity: {weatherData.main.humidity} %</p>
                <p>Specification: {weatherData.weather[0].description}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Weather;
