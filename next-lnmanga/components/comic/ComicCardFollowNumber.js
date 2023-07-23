// eslint-disable-next-line no-unused-vars
import React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import Link from 'next/link'

function ComicCardFollowNumber ({ ...props }) {
  return (
    <Div className={props.className}>
      <div className='col-span-4 gap-2 flex items-start'>
        <span className='px-3 text-sm bg-dark_main-100 font-bold rounded-lg mt-1 text-white'>
          1
        </span>
        <div>
          <LinkCustom
            href='/'
            title='KonoSuba: Yorimichi 2'
          >
            KonoSuba: Yorimichi 2
          </LinkCustom>
          <span className='text-md text-dark_main-100 dark:text-white'>
            11,550 theo dõi
          </span>
        </div>
      </div>
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
    text-dark_main-100
  `}
  &:hover {
    ${tw`
      text-primary-600
    `}
  }
`

export default ComicCardFollowNumber
