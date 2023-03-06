import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../Header/Header';
import { Button } from '../../Ui/Button';
import InputUi from '../../Ui/InputUi';
import TitleComponent from '../../Ui/TitleComponent';

interface ConverterProps {}

const DOLLAR_RATE = 1.2;

const Converter: React.FC<ConverterProps> = React.memo(() => {
  const [euro, setEuro] = useState(0);
  const [dollar, setDollar] = useState(0);

  const handleReset = useCallback(() => {
    setEuro(0);
    setDollar(0);
  }, []);

  const handleEuroChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEuro(parseFloat(event.target.value));
  };

  const handleDollarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDollar(parseFloat(event.target.value));
  };

  const handleStepClick = useCallback(
    (step: number) => {
      const numberEuro = isNaN(euro) ? 0 : euro;

      setEuro(numberEuro + step);
      setDollar((numberEuro + step) * DOLLAR_RATE);
    },
    [euro]
  );

  useEffect(() => {
    setDollar(euro * DOLLAR_RATE);
  }, [euro]);

  useEffect(() => {
    setEuro(dollar / DOLLAR_RATE);
  }, [dollar]);

  return (
    <>
      <Header type="home" />
      <section className="w-full h-screen bg-[#efefef]">
        <div className="container lg:max-w-[1600px] px-1 md:px-10 flex justify-center items-center w-full h-full relative">
          <div className="flex flex-col justify-center items-center w-full h-full">
            <TitleComponent title="Currency Converter" />
            <form className="xl:w-[25%] md:w-[40%] w-[90%] pt-10 md:pt-20">
              <div className="pb-4 text-[#444444] text-base sm:text-lg font-bold tracking-[0.2rem]">
                <InputUi
                  title="Euro:"
                  type="number"
                  value={euro}
                  onChange={handleEuroChange}
                  step="0.01"
                  required={true}
                />
              </div>
              <div className="pb-10 text-[#444444] text-lgtext-base sm:text-lg font-bold tracking-[0.2rem]">
                <InputUi
                  title="Dollar:"
                  type="number"
                  value={dollar}
                  
                  onChange={handleDollarChange}
                  step="0.01"
                />
              </div>
              <div className="flex justify-around">
                <Button
                  title="+10"
                  onClick={() => handleStepClick(10)}
                  size="sm"
                />
                <Button
                  title="+100"
                  onClick={() => handleStepClick(100)}
                  size="sm"
                />
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
});

export default Converter;
