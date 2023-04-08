import React, { useState } from 'react'
import AddCategori from './components/AddCategori';
import GifGrid from './components/GifGrid';

export const GifExpertApp = () => {


  const [categoris, setCategori] = useState(['Dragon Ball']);

  return (
    <>
      <h2>GiftExpertApp</h2>
      <AddCategori setCategori={setCategori}/>
      <hr />
     
      <ol>
        {
          categoris.map(category => (
            <GifGrid
              key={category}
              category={category}
            />
          ))
        }
      </ol>
    </>
  )
}
