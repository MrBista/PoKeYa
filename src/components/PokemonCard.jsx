import React from 'react';
import cardBg from '../assets/card-bg.png';
import { useGetPokemonByNameQuery } from '../services/POKEMONAPI';
import Loader from './Loader';
import { useNavigate } from 'react-router-dom';
import LoaderRefetch from './LoaderRefetch';

const PokemonCard = ({ name }) => {
  const { data, isLoading, isFetching } = useGetPokemonByNameQuery(name);
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    navigate(`/${name}`);
  };
  const display = isFetching ? (
    <div className='flex justify-between items-center flex-wrap'>
      <LoaderRefetch />
    </div>
  ) : (
    <div
      onClick={handleNavigate}
      className={` bg-cover bg-no-repeat w-[10.5rem] h-[16rem] bg-center mb-[1rem] relative flex justify-center md:h-[20rem] md:w-[12.5rem]  lg:w-[15.625rem] lg:h-[25rem]`}
      style={{ backgroundImage: `url(${cardBg})` }}
    >
      <img
        src={data?.sprites?.other['official-artwork']?.front_default}
        alt=''
        className=' object-cover w-[40%] absolute top-[15%]'
      />
      <div className='absolute top-[55%] left-[15%]'>
        <p className='text-[#B3EAF7] text-[1.2rem]'>00{data?.id}</p>
        <h2 className='text-white text-[1.2rem] capitalize'>{name}</h2>
      </div>
      <div className='absolute bottom-[2rem] flex flex-wrap gap-x-2 gap-y-2  justify-evenly  '>
        {data.types?.map((el, i) => {
          let bgColor = '';
          switch (el?.type?.name?.toLowerCase()) {
            case 'fire':
              bgColor = 'bg-[#FF3700]';
              break;
            case 'grass':
              bgColor = 'bg-[#92BF19]';
              break;
            case 'poison':
              bgColor = 'bg-[#BE78BE]';
              break;
            case 'flying':
              bgColor = 'bg-[#79BCD7]';
              break;
            case 'water':
              bgColor = 'bg-[#0094E5]';
              break;
            case 'bug':
              bgColor = 'bg-[#32B432]';
              break;
            case 'normal':
              bgColor = 'bg-[#A0A0A0]';
              break;

            default:
              bgColor = 'bg-slate-500/40';
              break;
          }

          return (
            <p
              key={i + '-typePokemon'}
              className={` ${bgColor} px-4  rounded-full text-[.8rem] text-white md:px-6 md:text-[.9rem] capitalize`}
            >
              {el?.type?.name}
            </p>
          );
        })}
      </div>
    </div>
  );
  return display;
};

export default PokemonCard;
