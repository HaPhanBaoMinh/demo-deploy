import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import styled from '@emotion/styled'
import 'swiper/css'
import 'swiper/css/pagination'
import ComicCardHeadline from '@/components/comic/ComicCardHeadline'
import ComicCardChapter from '@/components/comic/ComicCardChapter'
import ComicCardDesc from '@/components/comic/CommicCardDesc'
import Span from '@/components/Span'
import ComicCardFollowNumber from '@/components/comic/ComicCardFollowNumber'
import ComicCardReadRecent from '@/components/comic/ComicCardReadRecent'
import CommentHeadline from '@/components/comment/CommentHeadline'

function DisplayComponent () {
  return (
    <>
      <Div className='container mx-auto py-5'>
        <Swiper
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className='mySwiper'
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
                <ComicCardHeadline className='w-full lg:h-[330px] bg-amber-100' />
              </SwiperSlide>
            )
          }

        </Swiper>
      </Div>

      <div className='container mx-auto py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[30px]'>
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
        <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
      </div>

      <div className='container mx-auto grid grid-cols-1 gap-[30px] md:grid-cols-2'>
        <ComicCardDesc className='h-[170px]' />
        <ComicCardDesc className='h-[170px]' />
      </div>

      <div className='container mx-auto py-5 flex gap-5'>
        <Span boldText='Sáng tác' underlineText='MỚI NHẤT' />
        <Span boldText='Bình luận' underlineText='GẦN ĐÂY' />
        <Span boldText='Theo dõi' underlineText='NHIỀU' />
        <Span underlineText='NHIỀU' />
        <Span boldText='Theo dõi' />
      </div>

      <div className='container mx-auto grid grid-cols-12 py-5 gap-[30px] '>
        <div className='col-span-8 bg-gray-300' />
        <div className='col-span-4 gap-3 flex flex-col'>
          <ComicCardFollowNumber className='h-[65px]' />
          <ComicCardFollowNumber className='h-[65px]' />
          <ComicCardFollowNumber className='h-[65px]' />
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-12 py-5 gap-[30px] '>
        <div className='col-span-8 bg-gray-300' />
        <div className='col-span-4 gap-3 flex flex-col'>
          <ComicCardReadRecent className='h-[65px]' />
          <ComicCardReadRecent className='h-[65px]' />
          <ComicCardReadRecent className='h-[65px]' />
        </div>
      </div>

      <div className='container mx-auto grid grid-cols-12 py-5 gap-[30px] '>
        <div className='col-span-8 bg-gray-300' />
        <div className='col-span-4 gap-3 flex flex-col'>
          <CommentHeadline />
          <CommentHeadline />
          <CommentHeadline />
          <CommentHeadline />
          <CommentHeadline />
          <CommentHeadline />
        </div>
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
