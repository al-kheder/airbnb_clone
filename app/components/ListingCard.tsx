
import Image from 'next/image';
import { ListingCardItem } from '../types/app';
import { HeartIcon, StarIcon } from '@heroicons/react/16/solid';
 

// Omit the lng and lat properties from the ListingCardItem type
type ListingCardProps = Omit<ListingCardItem, "lng" | "lat">;

export default async function ListingCard({
  imageUrl,
  name,
  location,
  price_per_night,
  description,
  total,
  star,
}: ListingCardProps) {
  const imgRsc = `http://127.0.0.1:5001${imageUrl}`;


  return (
    <div className='flex py-2 px-2 border-b cursor-pointer pr-4 hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t'>
    <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
      <Image
        src={imgRsc}
        fill
        className='rounded-2xl object-cover'
        alt='Listing-Card'
      />
    </div>
    <div className='flex flex-col flex-grow pl-5'>
      <div className='flex justify-between'>
        <p>{location}</p>
        <HeartIcon className='h-7 cursor-pointer' />
      </div>
      <h4 className='text-xl'>{name}</h4>
      <div className='border-b w-10 pt-2' />
      <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>
      <div className='flex justify-between items-end pt-5'>
        <p className='flex items-center'>
          <StarIcon className='h-5 text-red-400' />
          {star}
        </p>
        <div>
          <p className='text-lg lg:text-2xl font-semibold pb-2'>{price_per_night}$</p>
          <p className='text-right font-extralight '>{total}</p>
        </div>
      </div>
    </div>
  </div>
  );
}
