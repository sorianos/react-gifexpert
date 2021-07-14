import React, {useState} from 'react'
import {AddCategory} from './components/AddCategory'
import {GiftGrid} from './components/GiftGrid'

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(['One punch man'])

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategory {...{setCategories}} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GiftGrid {...{category}} key={category} />
        ))}
      </ol>
    </>
  )
}
