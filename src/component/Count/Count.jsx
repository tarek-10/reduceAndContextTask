import React from 'react'
import CounterContext from '../Context/ContextCounter'

const Count = ({count}) => {
  return (
     <CounterContext.Consumer>
        {(ctx)=>(
              <div>
              <p className="countShow">{ctx.data.counts}</p>
            </div>
        )}
     </CounterContext.Consumer>
  )
}

export default Count