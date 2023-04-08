import PropTypes from 'prop-types'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
    const { data, loading } = useFetchGifs(category);
  
    return (
      <>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <h3>{category}</h3>
            <div className="card-grid" key={category}>
              {data.map((img) => (
                <GifGridItem key={img.id} {...img} />
              ))}
            </div>
          </>
        )}
      </>
    );
  };
  
GifGrid.propTypes = {}

export default GifGrid