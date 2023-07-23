import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import tw from 'twin.macro'

function ComicCardDesc ({ ...props }) {
  return (
    <Div className={`${props.className}`}>
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

      <div className='col-span-2 flex flex-col gap-2'>
        <LinkCustom
          href='/'
          title='Chương 04: Ban sự bảo hộ thần thánh cho chú hổ con này!'
        >
          Chương 04: Ban sự bảo hộ thần thánh cho chú hổ con này!
        </LinkCustom>

        <Desc>
          Sao cổ lại nhốt mình lại cơ chứ? Tại sao?
          Igarashi Shirono, hay nàng thơ xinh đẹp hàng đầu tại học viện Saijo này,
          Igarashi Shirono, hay nàng thơ xinh đẹp hàng đầu tại học viện Saijo này,
        </Desc>
      </div>
    </Div>
  )
}

export default ComicCardDesc

const Div = styled.div`
  ${tw`
        text-xs
        text-gray-400
        gap-[20px]
        grid
        grid-cols-3
      `}
`

const LinkCustom = styled(Link)`
  text-overflow: ellipsis;
  -webkit-line-clamp: 1;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  ${tw`text-lg font-bold text-white dark:text-white text-primary-900`}
  &:hover {
    ${tw`
      text-primary-600
    `}
  }
`

const Desc = styled.p`
  text-overflow: ellipsis;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  ${tw`text-base text-black dark:text-white`}
`
