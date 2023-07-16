import React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import { BRAND_NAME, SITE_BASE_URL } from '../constants'
import { NextSeo } from 'next-seo'
import { getJobsListAPI } from '../apis/job_apis'
import { useEffectOnce } from 'react-use'
import Link from 'next/link'
import { formatDate, getMediaURL, getSalaryEstimation, getSalaryPeriod, numberWithCommas } from '../utils'
import Image from 'next/image'
import NoSSR from '../components/NoSSR'
import { useSelector } from 'react-redux'
import UnAuthCard from '../components/UnAuthCard'

function JobTypeTag (jobType) {
  let label = ''
  switch (jobType) {
    case 'P':
      label = 'Bán thời gian'
      break
    case 'F':
      label = 'Toàn thời gian'
      break
    case 'O':
      label = 'Làm một lần'
      break
  }
  return (
    <span className='text-xs inline-flex rounded-lg bg-primary-600/50 px-2'>{label}</span>
  )
}

function Index ({ jobs, ...props }) {
  const pageTitle = 'Việc Làm UIT'
  const pageDesc = `Những việc làm mới được cập nhật tại ${BRAND_NAME}, chia sẽ với bạn bè công việc thú vị có thể giúp bạn kiếm thêm thu nhập.`

  const [items, setItems] = React.useState(null)

  const store = useSelector(state => state.UserStore)

  useEffectOnce(() => {
    getJobsListAPI().then(r => {
      setItems(r.data)
    }).catch(() => null)
  })

  if (store.isAuth === false) {
    return (
      <>
        <NextSeo
          title={`${pageTitle} - ${BRAND_NAME}`}
          description={pageDesc}
          canonical={SITE_BASE_URL}
        />

        <UnAuthCard />
      </>
    )
  }

  if (items === null) return null

  return (
    <Div className='container mx-auto px-4 pt-4 pb-12'>
      <NextSeo
        title={`${pageTitle} - ${BRAND_NAME}`}
        description={pageDesc}
        canonical={SITE_BASE_URL}
      />

      <h1 className='text-sm uppercase font-bold font-heading text-gray-400 mb-4'>
        Những việc làm mới được cập nhật
      </h1>

      {store.isEmployer === true && (
        <div className='mb-4'>
          <span className='italic text-xs '>
            Tài khoản tuyển dụng chỉ có thể thấy những bài đăng của chính bạn!
          </span>
          <br />
          <Link href='/jobs/manage/' className='underline text-primary-600'>
            Xem danh sách bài đăng đầy đủ
          </Link>
        </div>
      )}

      {items.length === 0 && (
        <div>Không có bài đăng nào!</div>
      )}

      <ul className='itemsList'>
        {items.map(item => (
          <li key={item.code}>
            <Link href={item.url}>
              <div>
                <h2 className='text-lg font-bold'>{item.title}</h2>

                <div className='flex items-center space-x-2'>
                  <span>#{item.code}</span>
                  <span className='font-bold text-gray-400'>&middot;</span>
                  <span>{item.username}</span>
                  <span className='font-bold text-gray-400'>&middot;</span>
                  <span>{formatDate(item.publishedAt, true)}</span>
                  <span className='font-bold text-gray-400'>&middot;</span>
                  <span>{item.removeAfter}</span>
                </div>

                <div className='flex items-center space-x-2'>
                  {item.tags.map(tag => (
                    <span key={tag.url} className='text-xs inline-flex rounded-lg bg-primary-600/50 px-2'>
                      {tag.name}
                    </span>
                  ))}
                  <span>{JobTypeTag(item.jobType)}</span>
                </div>
                <div className='flex items-center'>
                  <span>{getSalaryEstimation(item.salaryEstimation)}</span>
                  <span className='text-lg text-primary-700 font-bold'>
                    {numberWithCommas(item.salaryVnd)}₫/{getSalaryPeriod(item.salaryPeriod)}
                  </span>
                </div>
              </div>
              <div className='grow' />
              {item.avatarUrl && (
                <div className='ml-2'>
                  <Image
                    src={getMediaURL(item.avatarUrl)}
                    alt=''
                    width={80}
                    height={80}
                    className='rounded'
                  />
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </Div>
  )
}

export default NoSSR(Index)

// language=SCSS prefix=*{ suffix=}
const Div = styled.div`
  .site-cols {
    ${tw`flex w-full`}
    
    .main-col {
      margin-right: 20px;
      flex-grow: 1;
      width: calc(100% - 340px);
    }

    .sidebar-col {
      width: 310px;
      flex: 0 0 310px;
    }
  }
  
  .itemsList {
    ${tw`flex flex-col`}
    
    > li {
      ${tw`flex mb-4`}
      
      > a {
        ${tw`
          flex items-center
          border-4 border-primary-800/50
          rounded
          py-2 px-4
          w-full
          hover:bg-primary-600/10
          hover:border-primary-800/80
          active:bg-primary-600/20
        `}
      }
    }
  }
`
