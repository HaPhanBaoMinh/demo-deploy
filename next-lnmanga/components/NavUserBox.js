import React from 'react'
import Link from 'next/link'
import { useEffectOnce } from 'react-use'
import { getMyProfileAPI } from '../apis/user_apis'
import { useDispatch } from 'react-redux'
import { updateUserData } from '../actions'
import { getMediaURL } from '../utils'
import PersonCircle from 'bootstrap-icons/icons/person-circle.svg'
import CircularProgress from 'bootstrap-icons/icons/arrow-clockwise.svg'
import { Avatar } from 'antd'

function NavUserBox (props) {
  const dispatch = useDispatch()
  const [user, setUser] = React.useState(null)
  const lock = React.useRef(false)

  useEffectOnce(() => {
    if (lock.current === false) {
      lock.current = true
      getMyProfileAPI().then(r => {
        setUser(r.data)
        dispatch(updateUserData(r.data))
      })
    }
  })

  if (user === null) {
    return (
      <div className='w-12 inline-flex items-center justify-center'>
        <CircularProgress className='loading' />
      </div>
    )
  }

  return (
    <div className='max-w-[128px] inline-flex items-center justify-center'>
      <Link
        title='tài khoản'
        aria-label='tài khoản'
        color='inherit'
        href={user.isAuth ? '/account/' : '/account/login/'}
        className='inline-flex w-full'
      >
        {user.isAuth === true
          ? (
            <span className='flex items-center space-x-2 truncate'>
              {user.avatarSet.xs
                ? (
                  <img
                    src={getMediaURL(user.avatarSet.xs)}
                    alt=''
                    loading='lazy'
                    width={24}
                    height={24}
                    className='rounded'
                  />
                  )
                : (
                  <Avatar
                    size={24}
                    icon={<span className='h-full w-full flex items-center justify-center'><PersonCircle /></span>}
                    shape='square'
                  />
                  )}
              <b className='text-xs font-bold truncate'>
                {user.user.username}
              </b>
            </span>
            )
          : (
            <PersonCircle width={24} height={24} />
            )}
      </Link>
    </div>
  )
}

export default NavUserBox
