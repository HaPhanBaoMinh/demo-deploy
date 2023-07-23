import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import tw from 'twin.macro'

function ComicCardChapter ({ ...props }) {
  return (
    <Div
      className={`w-full ${props.className}`}
    >
      <div className='h-[85%] relative'>
        <Link
          className='block w-full h-full'
          href='/'
          title='Bằng một cách nào đó, dàn mỹ nhân hạng S lại đề cập đến tôi'
        >
          <div
            className='w-full h-full flex bg-center opacity-80 '
            style={{ backgroundImage: 'url(/images/default_cover_2.png)', backgroundSize: 'cover' }}
          />
        </Link>

        <div className='p-2 z-10 absolute bottom-0 right-0'>
          <LinkCustom
            href='/'
            title='Chương 04: Ban sự bảo hộ thần thánh cho chú hổ con này!'
          >
            Chương 04: Ban sự bảo hộ thần thánh cho chú hổ con này!
          </LinkCustom>
          <SmTitle>KonoSuba Yorimichi</SmTitle>
        </div>
      </div>
      <ComicName
        href='/'
        title='The Hidden Strongest Knight Executed in the'
      >
        The Hidden Strongest Knight Executed in the
      </ComicName>
    </Div>
  )
}

export default ComicCardChapter

const Div = styled.div`
  ${tw`
        text-xs
        text-gray-400
        block
        flex
        flex-col
        gap-1
      `}
`

const LinkCustom = styled(Link)`
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;

  ${tw`text-base font-bold text-white`}
  &:hover {
    ${tw`
      text-primary-600
    `}
  }
`

const SmTitle = styled.p`
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  ${tw`text-primary-600 font-medium text-base md:text-sm`}
`

const ComicName = styled(Link)`
  -webkit-line-clamp: 2;
  display: -webkit-box;
  overflow: hidden;
  text-align: center;
  height: 36px;
  ${tw`text-sm font-bold leading-[17px] dark:text-white text-primary-900 block text-center`}
  &:hover {
    ${tw`
      text-primary-600
    `}
  }
`
