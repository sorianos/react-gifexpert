import {useState, useEffect} from 'react'
import {getGifs} from '../helpers/getGifs'

export const useFetchGifs = (category) => {
  const [state, setstate] = useState({
    imgs: [],
    loading: true,
  })

  useEffect(() => {
    getGifs(category).then((imgs) => {
      setstate({imgs, loading: false})
    })
  }, [category])

  return state
}
