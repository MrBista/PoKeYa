import React, { useState } from 'react';
import PokemonCard from '../components/PokemonCard';

import rotateLogo from '../assets/rotate-bg.png';
import wrapperImage from '../assets/bg-space-main.png';
import ShowOffPokemon from '../components/ShowOffPokemon';
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { doShowSide, saveWidthAside } from '../features/mainSlice';
import { useGetAllPokemonQuery } from '../services/POKEMONAPI';
import Loader from '../components/Loader';
import Title from '../components/Title';
import LoaderRefetch from '../components/LoaderRefetch';

const Home = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const { widthAside } = useSelector((store) => store.main);
  const { data, isLoading, isSuccess, isFetching } =
    useGetAllPokemonQuery(page);

  const closeAside = (e) => {
    if (e.clientX > widthAside) {
      dispatch(doShowSide('hide'));
      dispatch(saveWidthAside(0));
    }
  };

  return (
    <>
      <Navbar />
      <div
        onClick={closeAside}
        className='w-full h-fit min-h-screen'
        style={{ backgroundImage: `url(${wrapperImage})` }}
      >
        <div>
          <Title />

          {isLoading ? (
            <Loader />
          ) : (
            isSuccess && (
              <div className='flex flex-wrap justify-center gap-x-4 items-start '>
                {data.results.map((el, i) => {
                  return <PokemonCard {...el} key={i + '-keysPokemon'} />;
                })}
              </div>
            )
          )}

          {isFetching && (
            <div className='flex justify-center w-full my-4'>
              <LoaderRefetch />
            </div>
          )}
          <div className='flex justify-center '>
            <button
              className=' text-[1.2rem] py-2 px-4 rounded-full mb-10 shadow-sky-300  text-[#B3EAF7] border-[#B3EAF7] border-2 shadow'
              onClick={() => setPage(page + 10)}
            >
              Lihat Lebih Banyak Pokemon
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
