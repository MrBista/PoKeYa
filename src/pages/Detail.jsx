import React from 'react';
import titleLogo from '../assets/title.png';
import wrapperImage from '../assets/bg-space-main.png';
import Navbar from '../components/Navbar';
import bgDetailPokemon from '../assets/pokemon_circle_bg.png';
import rotateDetail from '../assets/rotateDetailbg.png';
import leftPortal from '../assets/arrow_sp_left.png';
import rightPortal from '../assets/arrow_sp_right.png';
import containerBottom from '../assets/main_sp_bg_bottom.jpg';
import Title from '../components/Title';
import { useDispatch, useSelector } from 'react-redux';
import { doShowSide, saveWidthAside } from '../features/mainSlice';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../services/POKEMONAPI';
import Loader from '../components/Loader';
import ProgressBar from '@ramonak/react-progress-bar';
const Detail = () => {
  const dispatch = useDispatch();
  const { name } = useParams();
  const { data, isLoading } = useGetPokemonByNameQuery(name);

  const { widthAside } = useSelector((store) => store.main);
  const closeAside = (e) => {
    if (e.clientX > widthAside) {
      dispatch(doShowSide('hide'));
      dispatch(saveWidthAside(0));
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <Navbar />
      <div
        className='w-full h-full min-h-screen'
        style={{ backgroundImage: `url(${wrapperImage})` }}
        onClick={closeAside}
      >
        <Title />
        <div className='flex justify-between items-end'>
          <img
            src={leftPortal}
            alt=''
            className='w-[9rem] h-[5rem] md:w-[15rem] lg:w-[20rem]'
          />
          <p className='text-sky-300 text-[2rem]'>00{data.id}</p>
          <img
            src={rightPortal}
            alt=''
            className='w-[9rem] h-[5rem] md:w-[15rem] lg:w-[20rem]'
          />
        </div>

        <p className='text-white text-center text-[2.4rem] capitalize '>
          {data?.name}
        </p>
        <div className='flex justify-center  mt-[2rem] '>
          <div
            className={`bg-cover bg-no-repeat  flex justify-center items-center relative `}
            style={{
              backgroundImage: `url(${rotateDetail})`,
            }}
          >
            <div
              className={` bg-cover bg-no-repeat h-[20rem] w-[20rem] md:h-[22rem] md:w-[22rem] flex justify-center items-center relative z-30`}
              style={{
                backgroundImage: `url(${bgDetailPokemon})`,
              }}
            >
              <img
                src={data?.sprites?.other['official-artwork']?.front_default}
                style={{ height: '17rem', width: '17rem' }}
              />
            </div>
            <img
              src={rotateDetail}
              alt=''
              className='hidden md:flex md:absolute  h-[25rem] object-cover  animate-spin-slow'
            />
          </div>
        </div>
        <div
          className={` p-4 bg-[#253646] mx-auto w-[96vw] mt-10  shadow-sky-300 shadow rounded-xl min-h-[30rem] h-fit flex flex-col gap-y-8`}
        >
          <div className='flex flex-col items-center'>
            <h5 className='text-white text-[1.5rem] mb-2'>Type</h5>
            <div className='flex justify-between flex-wrap gap-x-4 gap-y-4'>
              {data?.types?.map((el, i) => {
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
                    key={i + 'typePok'}
                    className={`py-1 px-4 min-w-[10rem] rounded-full  text-white text-center text-[1.4rem] shadow-md ${bgColor}`}
                  >
                    {el?.type?.name}
                  </p>
                );
              })}
            </div>
          </div>

          <div className='flex flex-col gap-y-4 md:flex-row md:justify-center md:gap-x-6 '>
            <div className='flex justify-center gap-x-[3rem] flex-wrap'>
              <div>
                <h5 className='text-[#B3EAF7] text-[1.5rem] mb-2'>Species</h5>
                <p className='text-white text-[1.2rem] w-[5rem]'>
                  {data?.species?.name}
                </p>
              </div>
              <div>
                <h5 className='text-[#B3EAF7] text-[1.5rem] mb-2'>Height</h5>
                <p className='text-white text-[1.2rem] '>{data?.height} m</p>
              </div>
            </div>
            <div className='flex justify-center gap-x-[3rem] flex-wrap'>
              <div>
                <h5 className='text-[#B3EAF7] text-[1.5rem] mb-2'>Weight</h5>
                <p className='text-white text-[1.2rem]'>{data?.weight} kg</p>
              </div>
              <div>
                <h5 className='text-[#B3EAF7] text-[1.5rem] mb-2 '>
                  Abilities
                </h5>

                <p className='text-white text-[1.2rem] w-[5rem] md:w-fit'>
                  {data?.abilities.map((el) => el?.ability?.name).join(', ')}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={` p-4 bg-[#253646] mx-auto w-[96vw] mt-10  shadow-sky-300 shadow rounded-xl min-h-[30rem] h-fit flex flex-col gap-y-8`}
        >
          <p className=' capitalize text-[#B3EAF7] text-center text-[1.4rem]'>
            statistics
          </p>
          <div className='flex flex-col gap-y-4'>
            {data?.stats?.map((el, i) => {
              return (
                <div
                  key={i + 'statePoke'}
                  className='flex  w-full gap-x-4 items-center '
                >
                  <p className='w-[8rem] text-white'>{el?.stat?.name}</p>
                  <div className='flex-1'>
                    <ProgressBar
                      maxCompleted={100}
                      completed={el?.base_stat}
                      bgColor='#32B4FF'
                      height='.8rem'
                      labelSize='.7rem'
                      animateOnRender={true}
                      transitionDuration='2s'
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
