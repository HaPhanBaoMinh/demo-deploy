import React from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import tw from 'twin.macro'

function ComicCardHeadline ({...props}) {
  return (
    <Div
      className={`w-full relative ${props.className}`}
    >
      <Link className="absolute top-0 right-0 block w-full h-full"
            href="/"
            title="Bằng một cách nào đó, dàn mỹ nhân hạng S lại đề cập đến tôi">
        <div
          className="w-full h-full flex bg-center opacity-80 absolute top-0 left-0 "
          style={{ backgroundImage: 'url(/images/default_cover_2.png)', backgroundSize: 'cover' }}
        />
      </Link>

      <LinkBackground className="absolute bottom-0 p-3"
            href="/"
            title="Bằng một cách nào đó, dàn mỹ nhân hạng S lại đề cập đến tôi">
        <Span>
          Bằng một cách nào đó, dàn mỹ nhân hạng S lại đề cập đến tôi
        </Span>
      </LinkBackground>
    </Div>
  )
}

export default ComicCardHeadline

const Div = styled.div`
  ${tw`
        text-xs
        text-gray-400
        block
      `}
`

const Span = styled.span`
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -webkit-box-orient: vertical;
  line-height: 1.2rem;
  max-height: 3rem;
  display: -webkit-box;
  ${tw`text-base font-bold text-white`}
  &:hover {
    ${tw`
      text-primary-600
    `}
  }
`

const LinkBackground = styled(Link)`
  background: linear-gradient(180deg,transparent 0,rgba(0,0,0,.1) 65%,rgba(0,0,0,.2));
`