import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FaCartShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import './Bannercard.css';

const BookCards = ({ headline, projects = [] }) => {
  return (
    <div className='my-1 px-4 lg:px-24 '>
      <h2 className='text-5xl text-center font-bold text-black my-5 '>{headline}</h2>
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {Array.isArray(projects) && projects.map(project => (
            <SwiperSlide key={project._id} className="custom-card ">
              <Link to={`/project/${project._id}`}>
                <div className='relative'>
                  <img src={project.Project_Url} alt="" />
                </div>
                <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                  <FaCartShopping className='w-4 h-4 text-white' />
                </div>
                <div>
                  <h3>{project.ProjectTitle}</h3>
                  <p>{project.Name}</p>
                </div>
                <div>
                  <p>$10.00</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
