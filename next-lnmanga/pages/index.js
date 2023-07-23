import React from 'react'
import { BRAND_NAME, SITE_BASE_URL } from '@/constants'
import { NextSeo } from 'next-seo'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import ComicCardHeadline from '@/components/comic/ComicCardHeadline'
import styled from '@emotion/styled'
import 'swiper/css'
import 'swiper/css/pagination'
import tw from 'twin.macro'
import Span from '@/components/Span'
import Link from 'next/link'
import ComicCardChapter from '@/components/comic/ComicCardChapter'
import ComicCardReadRecent from '@/components/comic/ComicCardReadRecent'
import CommentHeadline from '@/components/comment/CommentHeadline'
import ComicCardDesc from '@/components/comic/CommicCardDesc'
import ComicCardFollowNumber from '@/components/comic/ComicCardFollowNumber'

function Index ({ jobs, ...props }) {
  const pageTitle = ''
  const pageDesc = ''
  return (
    <>
      <NextSeo
        title={`${pageTitle} - ${BRAND_NAME}`}
        description={pageDesc}
        canonical={SITE_BASE_URL}
      />
      <div className='container mx-auto grid grid-cols-12 md:py-10 gap-[20px] '>
        <div className='md:col-span-9 col-span-12 flex flex-col gap-4'>
          <div className='flex items-center gap-3'>
            <Span boldText='️️🔥 Nổi bật' />
            <Link href='/' className='dark:text-white text-dark_main-100 hover:text-primary-600 hover:dark:text-primary-600 font-bold text-base hover'>
              Top tháng
            </Link>
            <Link href='/' className='dark:text-white text-dark_main-100 hover:text-primary-600 hover:dark:text-primary-600 font-bold text-base hover'>
              Toàn t/gian
            </Link>
          </div>
          <DivSwiper>
            <Swiper
              pagination={{
                clickable: true
              }}
              modules={[Pagination]}
              className='mySwiper'
              slidesPerView={1}
              spaceBetween={10}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
                480: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1100: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 20
                }
              }}
            >
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
                  <SwiperSlide key={index}>
                    <ComicCardHeadline className='lg:h-[300px] xl:[330px] md:h-[250px] sm:h-[300px] h-[300px] bg-amber-100' />
                  </SwiperSlide>
                )
              }
            </Swiper>
          </DivSwiper>
        </div>
        <div className='md:col-span-3 col-span-12 gap-4 flex flex-col'>
          <Span boldText='️️Thảo' underlineText='LUẬN' />
          <ul className='w-100 block h-[300px] pl-3 pr-3 md:pr-0 overflow-scroll'>
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
            <DiscussionTopics />
          </ul>
        </div>
      </div>
      <div className='container mx-auto grid grid-cols-12 md:py-10 gap-[20px] '>
        <div className='md:col-span-9 col-span-12 flex flex-col gap-4'>
          <Span boldText='Sáng tác' underlineText='MỚI NHẤT' />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 px-3 md:px-0 gap-0 md:gap-[30px]'>
            <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
            <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
            <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
            <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
            <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
            <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[350px]' />
          </div>
        </div>
        <div className='md:col-span-3 col-span-12 gap-4 flex flex-col'>
          <Span boldText='Truyện' underlineText='VỪA ĐỌC' />
          <ul className='w-100 block h-[260px] overflow-scroll md:pl-3 px-3 md:px-0'>
            <ComicCardReadRecent className='h-[65px] pb-3' />
            <ComicCardReadRecent className='h-[65px] pb-3' />
            <ComicCardReadRecent className='h-[65px] pb-3' />
            <ComicCardReadRecent className='h-[65px] pb-3' />
            <ComicCardReadRecent className='h-[65px] pb-3' />
            <ComicCardReadRecent className='h-[65px] pb-3' />
            <ComicCardReadRecent className='h-[65px] pb-3' />
            <ComicCardReadRecent className='h-[65px] pb-3' />
          </ul>
        </div>
      </div>
      <div className='container mx-auto grid grid-cols-12 md:py-10 gap-[20px] '>
        <div className='md:col-span-9 col-span-12 flex flex-col gap-4'>
          <Span boldText='Chương' underlineText='MỚI NHẤT' />
          <div className='grid grid-cols-1 px-3 md:px-0 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-0 md:gap-[30px]'>
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
        </div>
        <div className='md:col-span-3 col-span-12 gap-4 flex flex-col'>
          <Span boldText='Bình luận' underlineText='GẦN ĐÂY' />
          <ul className='w-100 block overflow-scroll px-3 md:pl-3 md:px-0'>
            <CommentHeadline />
            <CommentHeadline />
            <CommentHeadline />
            <CommentHeadline />
            <CommentHeadline />
          </ul>
        </div>
      </div>
      <div className='w-screen bg-light_main-200 dark:bg-dark_main-300 py-5'>
        <div className='container mx-auto grid grid-cols-12 md:py-10 gap-[20px] '>
          <div className='md:col-span-9 col-span-12 flex flex-col gap-4'>
            <Span boldText='Truyện' underlineText='VỪA ĐĂNG' />
            <div className='grid grid-cols-1 gap-[20px] px-3 md:px-0 md:grid-cols-2'>
              <ComicCardDesc className='h-[160px]' />
              <ComicCardDesc className='h-[160px]' />
              <ComicCardDesc className='h-[160px]' />
              <ComicCardDesc className='h-[160px]' />
              <ComicCardDesc className='h-[160px]' />
              <ComicCardDesc className='h-[160px]' />
            </div>
            <Link href='/' title='xem them' className='w-100 text-center'>
              <span className='text-[#2f54eb] hover:underline'>Xem thêm</span>
            </Link>
          </div>
          <div className='md:col-span-3 col-span-12 gap-4 flex flex-col'>
            <Span boldText='Theo dõi' underlineText='NHIỀU' />
            <ul className='w-100 block h-[520px] overflow-scroll px-3 md:pl-3 md:px-0'>
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
              <ComicCardFollowNumber className='h-[65px] pb-1' />
            </ul>
          </div>
        </div>
      </div>
      <div className='container mx-auto md:py-10 flex flex-col gap-4'>
        <Span boldText='Truyện' underlineText='ĐÃ HOÀN THÀNH' />
        <DivSwiper>
          <Swiper
            pagination={{
              clickable: true
            }}
            modules={[Pagination]}
            className='mySwiper'
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
              300: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              480: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 5,
                spaceBetween: 20
              },
              1100: {
                slidesPerView: 6,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 8,
                spaceBetween: 20
              }
            }}
          >
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) =>
                <SwiperSlide key={index}>
                  <ComicCardChapter className='lg:h-[220px] md:h-[240px] sm:h-[265px] h-[200px]' />
                </SwiperSlide>
              )
            }
          </Swiper>
        </DivSwiper>
      </div>
    </>
  )
}

function DiscussionTopics () {
  return (
    <li className='w-100 h-fit pb-1.5 flex gap-1.5 items-center'>
      <span className='h-3.5 w-3.5 rounded-full block bg-red-500' />
      <LinkCustom href='/' title='Hỏi Truyện từ A>Z. Góc 8 nhảm cho dịch giả 2.0'>
        Hỏi Truyện từ A-Z. Góc 8 nhảm cho dịch giả 2.0
      </LinkCustom>
      <div className='grow' />
      <span className='text-xs text-gray-400 dark:text-gray-400'>1 giờ trước</span>
    </li>
  )
}

const DivSwiper = styled.div`
  .mySwiper {
    padding-bottom: 35px;
  }

  .swiper-pagination {
    bottom: 0;

    .swiper-pagination-bullet {
      height: 10px;
      width: 10px;
      background-color: #141a26;
      ${tw`dark:bg-gray-300`};
    }

    .swiper-pagination-bullet-active {
      background-color: #212a3e;
    }
  }
  ${tw`
    px-3
    md:px-0
  `}
`

const LinkCustom = styled(Link)`
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  ${tw`text-sm lg:w-[65%] md:w-[43%] w-[70%] text-white dark:text-white text-primary-900`}
  &:hover {
    ${tw`
      text-primary-600
    `}
  }
`
export default Index
