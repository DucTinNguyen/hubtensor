'use client'
import React from 'react'
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';

const Map = () => {
  return (
    <div className='grow h-full map'>
      <span className='bg-cyan-500 p-2 w-full block text-white font-semibold rounded'>Online nodes across the world: 0</span>
      <div className='h-full overflow-scroll'>
        <ComposableMap >
          <ZoomableGroup center={[0, 0]} zoom={9}>
            <Geographies geography="/map.json">
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography key={geo.rsmKey} geography={geo} />
                ))
              }
            </Geographies>
          </ZoomableGroup>
          
        </ComposableMap>
      </div>

    </div>
  )
}

export default Map
