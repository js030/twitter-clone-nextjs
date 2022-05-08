/** @format */

import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { useSession } from 'next-auth/react'
import { useRef, useState } from 'react'

function TweetBox() {
  const [input, setInput] = useState<string>('')
  const { data: session } = useSession()
  const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = useState<boolean>(false)
  const [image, setImage] = useState<string>('')

  const imgInputRef = useRef<HTMLInputElement>(null)

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (!imgInputRef.current?.value) return
    setImage(imgInputRef.current?.value)
    imgInputRef.current.value = ''
    setImageUrlBoxIsOpen(false)
  }

  return (
    <div className='flex space-x-2 p-5'>
      <img
        src={session?.user?.image}
        alt=''
        className='h-14 w-14 rounded-full object-cover'
      />
      <div className='flex flex-1 items-center pl-2'>
        <form className='flex flex-1 flex-col'>
          <input
            value={input}
            type='text'
            className='h-24 w-full outline-none placeholder:text-xl'
            placeholder="What's Happening"
            onChange={(e) => setInput(e.target.value)}
          />
          <div className='flex items-center'>
            <div className='flex space-x-2 flex-1 text-twitter'>
              <PhotographIcon
                onClick={() => setImageUrlBoxIsOpen(!imageUrlBoxIsOpen)}
                className='h-5 w-5 cursor-pointer transition-transform
              duration-150 ease-out hover:scale-150'
              />
              <SearchCircleIcon className='h-5 w-5' />
              <EmojiHappyIcon className='h-5 w-5' />
              <CalendarIcon className='h-5 w-5' />
              <LocationMarkerIcon className='h-5 w-5' />
            </div>
            <button
              disabled={!input || !session}
              className='bg-twitter px-5 py-2
               font-bold text-white rounded-full disabled:opacity-40'>
              Tweet
            </button>
          </div>

          {imageUrlBoxIsOpen && (
            <form className='mt-5 flex rounded-lg bg-twitter/80 py-2 px-4'>
              <input
                ref={imgInputRef}
                type='text'
                placeholder='Enter Image URL...'
                className='flex-1 bg-transparent p-2 text-white outline-none
                 placeholder:text-white '
              />
              <button
                type='submit'
                onClick={(e) => addImageToTweet}
                className='font-bold text-white'>
                Add Image
              </button>
            </form>
          )}
        </form>

        {image && (
          <img
            src={image}
            className='mt-10 h-40 w-full rounded-xl
          object-contain shadow-lg'
            alt=''
          />
        )}
      </div>
    </div>
  )
}
export default TweetBox
