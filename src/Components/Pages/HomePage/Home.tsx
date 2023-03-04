import React from 'react';
import { LinkButton } from '../../Ui/Button';

interface HomeProps {}

const data = [
  {
    id: 1,
    name: 'Converter',
    slug: '/converter',
  },
  {
    id: 2,
    name: 'To Do',
    slug: '/todo',
  },
  {
    id: 3,
    name: 'Weather',
    slug: '/weather',
  },
  {
    id: 4,
    name: 'Logout',
    slug: '/',
  },
];

const Home: React.FC<HomeProps> = () => {
  return (
    <section className="w-full h-screen bg-[#efefef]">
      <div className="container lg:max-w-[1600px] flex-col xl:flex-row gap-y-5 xl:gap-x-5 px-1 md:px-10 flex justify-center items-center w-full h-full">
        {data.map((item) => (
          <div
            key={item.id}
            className="flex  w-full justify-center items-center "
          >
            <LinkButton title={item.name} slug={item.slug} size="home" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
