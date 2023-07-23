// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import Link from 'next/link'

function ComicCardReadRecent ({ ...props }) {
  return (
    <Div className={props.className}>
      <Link
        className='col-span-1 block'
        href='/'
        title='Bằng một cách nào đó, dàn mỹ nhân hạng S lại đề cập đến tôi'
      >
        <div
          className='w-full h-full flex bg-center opacity-100'
          style={{ backgroundImage: 'url(/images/default_cover_2.png)', backgroundSize: 'cover' }}
        />
      </Link>
      <div className='col-span-4 flex flex-col items-start'>
        <LinkCustom
          href='/'
          title='KonoSuba: Yorimichi 2'
        >
          KonoSuba: Yorimichi 2
        </LinkCustom>
        <span className='text-md font-medium text-outstanding'>
          KonoSuba Yorimichi
        </span>
        <SmTitle
          href='/'
          title='Chương 01 : Tới tất cả mọi người ở làng Hồng Ma!'
          className='text-sm'
        >
          Chương 01 : Tới tất cả mọi người ở làng Hồng Ma!
        </SmTitle>
      </div>
    </Div>
  )
}

const Div = styled.div`
  ${tw`
        text-xs
        flex
        grid
        grid-cols-5
        gap-2
        flex
        text-primary-900
      `}
`

const LinkCustom = styled(Link)`
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  ${tw`
    text-sm 
    font-bold 
    text-white 
    dark:text-white 
    text-primary-900
  `}
  &:hover {
    ${tw`
      text-primary-600
    `}
  }
`

const SmTitle = styled(Link)`
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  ${tw`
    text-sm 
    text-white 
    dark:text-white 
    text-primary-900
    mt-auto
  `}
  &:hover {
    ${tw`
      text-primary-600
    `}
  }
`

export default ComicCardReadRecent
