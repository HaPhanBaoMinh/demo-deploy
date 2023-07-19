import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Logo from '../img/logo4.svg'
import classnames from 'classnames'
import SiteFooter from './SiteFooter'
import Link from 'next/link'
import { Menu, Switch } from '@headlessui/react'
import ListIcon from 'bootstrap-icons/icons/list.svg'
import BrightnessHighFillIcon from 'bootstrap-icons/icons/brightness-high-fill.svg'
import MoonStarsFillIcon from 'bootstrap-icons/icons/moon-stars-fill.svg'
import { useEffectOnce } from 'react-use'

const ignoreHeaderURLsList = [
  'rgx:^/auth',
  'rgx:^/lien-ket'
]

const Toast = dynamic(() => import('./Toast'), { ssr: false })
const GoTop = dynamic(() => import('./GoTop'), { ssr: false })

function SiteLayout (props) {
  const router = useRouter()
  const [isDarkMode, setIsDarkMode] = useState(false)

  for (const i of ignoreHeaderURLsList) {
    if (i.startsWith('rgx')) {
      const rgxStr = i.split(':')[1]
      if (router.pathname.match(new RegExp(rgxStr))) {
        return <>{props.children}</>
      }
    } else if (i === router.pathname) return <>{props.children}</>
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
      } else {
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
      }
    }
  }, [isDarkMode])

  const onChangeTheme = () => {
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark'
    setIsDarkMode(!isDarkMode)
  }

  return (
    <>
      <Header className='py-1'>
        <div className="container mx-auto">
          <div className="flex items-center">
            <Link href="/"
                  className="hover:bg-primary-600/10 rounded inline-flex active:outline-dashed active:outline-primary-600">
              <Logo height={40} className="text-gray-800"/>
            </Link>
            {/* Desktop */}
            <nav className="hidden lg:block ml-1">
              <TopNavButton href="/">
                Sáng tác
              </TopNavButton>
              <TopNavButton href="/add-new-job/">
                Thảo luận
              </TopNavButton>
              <TopNavButton href="/about/">
                Giới thiệu
              </TopNavButton>
              <TopNavButton href="/about/">
                Danh sách truyện
              </TopNavButton>
            </nav>
            <div className="grow"/>
            <nav className="hidden lg:flex items-center ml-auto ">
              <Switch
                checked={isDarkMode}
                onChange={onChangeTheme}
                className={`${
                  isDarkMode ? 'bg-black' : 'bg-white'
                } relative inline-flex h-[29px] w-[50px] shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
              <span
                className={`${
                  isDarkMode ? 'translate-x-[21px] bg-white text-black' : 'translate-x-0 bg-yellow-400 text-white'
                } pointer-events-none flex items-center justify-center h-[25px] w-[25px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              >
                {isDarkMode ? <MoonStarsFillIcon width={13} height={13}/> : <BrightnessHighFillIcon width={13}
                                                                                                    height={13}/>}
              </span>
              </Switch>

              <TopNavButton href="/about/">
                Đăng nhập
              </TopNavButton>
            </nav>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <Menu>
              <Menu.Button>
                <ListIcon width={24} height={24}/>
              </Menu.Button>

              <Menu.Items className="flex flex-col bg-red-50">
                <Menu.Item>
                  {({ active }) => (
                    <TopNavButton href="/">
                      Việc làm mới
                    </TopNavButton>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <TopNavButton href="/add-new-job/">
                      Đăng việc
                    </TopNavButton>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <TopNavButton href="/about/">
                      Giới thiệu website
                    </TopNavButton>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>
          </div>
        </div>
      </Header>
      <Div>
        {props.children}
      </Div>

      <SiteFooter/>
      <GoTop/>
      <Toast/>
    </>
  )
}

export default SiteLayout

const TopNavButton = ({ href, children, ...otherProps }) => {
  const router = useRouter()
  return (
    <MenuButton
      href={href}
      color="inherit"
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
    py-1
    inline-flex
    rounded
    hover:underline
    active:outline-dashed
    active:font-normal
    active:outline-primary-600
    text-gray-600
    dark:text-gray-300
    text-sm
  `}
  &.active {
    ${tw`
      underline
      text-primary-800
    `}
  }
`

const Header = styled.div`
  ${tw`
    w-screen
    bg-light_main-100 
    dark:bg-dark_main-100
  `}
`
const Div = styled.div`
  ${tw`
    w-screen
    bg-light_main-100 
    dark:bg-dark_main-200
  `}
`
