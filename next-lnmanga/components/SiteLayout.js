import React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Logo from '../img/logo4.svg'
import classnames from 'classnames'
import SiteFooter from './SiteFooter'
import Link from 'next/link'
import { Menu } from '@headlessui/react'
import ListIcon from 'bootstrap-icons/icons/list.svg'

const ignoreHeaderURLsList = [
  'rgx:^/auth',
  'rgx:^/lien-ket'
]

const NavUserBox = dynamic(() => import('./NavUserBox'), { ssr: false })
const Toast = dynamic(() => import('./Toast'), { ssr: false })
const GoTop = dynamic(() => import('./GoTop'), { ssr: false })

function SiteLayout (props) {
  const router = useRouter()
  for (const i of ignoreHeaderURLsList) {
    if (i.startsWith('rgx')) {
      const rgxStr = i.split(':')[1]
      if (router.pathname.match(new RegExp(rgxStr))) {
        return <>{props.children}</>
      }
    } else if (i === router.pathname) return <>{props.children}</>
  }

  return (
    <>
      <div className='container px-4 mx-auto py-8'>
        <div className='flex items-center'>
          <Link href='/' className='hover:bg-primary-600/10 rounded inline-flex px-1 py-2 active:outline-dashed active:outline-primary-600'>
            <Logo height={40} className='text-gray-800' />
          </Link>

          <nav className='ml-4 hidden lg:block'>
            <TopNavButton href='/'>
              Việc làm mới
            </TopNavButton>
            <TopNavButton href='/add-new-job/'>
              Đăng việc
            </TopNavButton>
            <TopNavButton href='/about/'>
              Giới thiệu website
            </TopNavButton>
          </nav>

          <div className='grow' />

          <NavUserBox />
        </div>

        <div className='lg:hidden'>
          <Menu>
            <Menu.Button>
              <ListIcon width={24} height={24} />
            </Menu.Button>

            <Menu.Items className='flex flex-col bg-red-50'>
              <Menu.Item>
                {({ active }) => (
                  <TopNavButton href='/'>
                    Việc làm mới
                  </TopNavButton>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <TopNavButton href='/add-new-job/'>
                    Đăng việc
                  </TopNavButton>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <TopNavButton href='/about/'>
                    Giới thiệu website
                  </TopNavButton>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>

      {props.children}

      <SiteFooter />

      <GoTop />
      <Toast />
    </>
  )
}

export default SiteLayout

const TopNavButton = ({ href, children, ...otherProps }) => {
  const router = useRouter()
  return (
    <MenuButton
      href={href}
      color='inherit'
      className={classnames({ active: href.replace(/\//g, '') === router.pathname.split('/')[1] })}
      {...otherProps}
    >
      {children}
    </MenuButton>
  )
}

// language=SCSS prefix=*{ suffix=}
const MenuButton = styled(Link)`
  ${tw`
    px-4
    py-2
    inline-flex
    rounded
    hover:underline
    active:outline-dashed
    active:outline-primary-600
  `}
  
  &.active {
    ${tw`
      underline
      text-primary-800
    `}
  }
`
