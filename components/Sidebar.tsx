/** @format */

import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import { signIn, signOut, useSession } from 'next-auth/react'
import SidebarRow from './SidebarRow'

function Sidebar() {
  const { data: session } = useSession()

  return (
    <div className='flex flex-col col-span-2 items-center px-4 md:items-start'>
      <img src='https://links.papareact.com/drq' className='h-10 w-10' alt='' />
      <SidebarRow Icon={HomeIcon} title='Home' />
      <SidebarRow Icon={HashtagIcon} title='Explore' />
      <SidebarRow Icon={BellIcon} title='Notification' />
      <SidebarRow Icon={MailIcon} title='Messages' />
      <SidebarRow Icon={BookmarkIcon} title='Bookmarks' />
      <SidebarRow
        onClick={session ? signOut : signIn}
        Icon={UserIcon}
        title={session ? 'Sign out' : 'Sign in'}
      />
      <SidebarRow Icon={DotsCircleHorizontalIcon} title='More' />
    </div>
  )
}
export default Sidebar
