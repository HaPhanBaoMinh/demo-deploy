import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import styled from '@emotion/styled'
import 'swiper/css'
import 'swiper/css/pagination'
import ComicCardHeadline from '@/components/comic/ComicCardHeadline'
import ComicCardChapter from '@/components/comic/ComicCardChapter'

function DisplayComponent () {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return <div> Hello world </div>
    },
  }

  return (
    <>
      <Div className="container mx-auto py-5">
        <Swiper
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            323: {
              slidesPerView: 1,
              spaceBetween: 30
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            900: {
              slidesPerView: 4,
              spaceBetween: 30
            }
          }}
        >
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
              <SwiperSlide key={index}>
                <ComicCardHeadline className="w-full h-[330px] bg-amber-100"/>
              </SwiperSlide>
            )
          }

        </Swiper>
      </Div>
      <div className="container mx-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[30px]">
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
        <ComicCardChapter className="lg:h-[230px] md:h-[220px] sm:h-[255px] h-[350px]"/>
      </div>
    </>
  )
}

export default DisplayComponent

const Div = styled.div`
  .mySwiper {
    padding-bottom: 35px;
  }

  .swiper-pagination {
    bottom: 0;

    .swiper-pagination-bullet {
      height: 10px;
      width: 10px;
      background-color: #141a26;
    }

    .swiper-pagination-bullet-active {
      background-color: #212a3e;
    }

  }
`


