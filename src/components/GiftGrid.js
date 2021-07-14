import React from 'react'
import {useFetchGifs} from '../hooks/useFetchGifs'
import {Item} from './Item'

export const GiftGrid = ({category}) => {
  const {imgs, loading} = useFetchGifs(category)

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'>{category}</h3>

      {loading && <p className='animate__animated animate__flash'>loading</p>}
      <div className='card-grid'>
        {imgs.map((img) => (
          <Item {...img} key={img.id} />
        ))}
      </div>
    </>
  )
}
