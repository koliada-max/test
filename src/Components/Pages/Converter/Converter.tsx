import React, { useState } from 'react';
import Header from '../../Header/Header';
import { Button } from '../../Ui/Button';
import InputUi from '../../Ui/InputUi';
import TitleComponent from '../../Ui/TitleComponent';

interface ConverterProps {}

const Converter: React.FC<ConverterProps> = () => {
  const [euro, setEuro] = useState<number>(0);
  const [dollar, setDollar] = useState<number>(0);

  const handleReset = () => {
    setEuro(0);
    setDollar(0);
  };

  const handleEuroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const euro = parseFloat(event.target.value);
    setEuro(euro);
    setDollar(euro * 1.2);
  };

  const handleDollarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const dollar = parseFloat(event.target.value);
    setDollar(dollar);
    setEuro(dollar / 1.2);
  };

  const handleStepClick = (step: number) => {
    setEuro(euro + step);
    setDollar((euro + step) * 1.2);
  };

  return (
    <>
      <Header type="home" />
      <section className="w-full h-screen bg-[#efefef]">
        <div className="container lg:max-w-[1600px] px-1 md:px-10 flex justify-center items-center w-full h-full relative">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <TitleComponent title="Currency Converter" />
            <form className="xl:w-[25%] md:w-[40%] w-[90%] pt-10 md:pt-20">
              <div className="pb-4 text-[#444444] text-base sm:text-lg font-bold tracking-[0.2rem]">
                <InputUi title="Euro:" type="number" value={euro} onChange={handleEuroChange} step="0.01" />
              </div>
              <div className="pb-10 text-[#444444] text-lgtext-base sm:text-lg font-bold tracking-[0.2rem]">
                <InputUi title="Dollar:" type="number" value={dollar} onChange={handleDollarChange} step="0.01" />
              </div>
              <div className="flex justify-around">
                <Button title="+10" onClick={() => handleStepClick(10)} size="sm" />
                <Button title="+100" onClick={() => handleStepClick(100)} size="sm" />
              </div>
              <div className="mt-10 mb-5 flex w-full justify-center ">
                <Button title="Reset" onClick={handleReset} size="md" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Converter;
