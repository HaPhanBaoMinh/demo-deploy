import React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import Link from 'next/link'
import Image from 'next/image'

function CommentHeadline ({ ...props }) {
  return (
    <Div className={props.className}>
      <LinkCustom
        href='/'
        title='KonoSuba: Yorimichi 2'
      >
        KonoSuba: Yorimichi 2
      </LinkCustom>
      <Content>Đây là bình luận demo</Content>
      <div className='h-[10px]' />
      <div className='flex gap-2 items-center'>
        <div className='h-[26px] w-[26px] rounded-full border bg-primary-900 overflow-hidden flex items-center justify-center'>
          <Link href='/' title='demoUser'>
            <Image alt='demoUser' src='/images/avatar-default.png' width={25} height={25} />
          </Link>
        </div>
        <Link href='/' title='demoUser'>
          <span className='text-sm font-bold text-primary-900 dark:text-white'>UserDemo</span>
        </Link>
        <div className='grow' />
        <span className='text-xs text-primary-900 dark:text-white'>1 giờ trước</span>
      </div>
    </Div>
  )
}

const Div = styled.div`
  ${tw`
    border-t
    py-3
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

const Content = styled.p`
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  ${tw`
  dark:text-white
  `}
`

export default CommentHeadline
