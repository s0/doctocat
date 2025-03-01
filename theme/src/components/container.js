import {Box} from '@primer/components'
import React from 'react'

function Container({children}) {
  return (
    <Box width="100%" maxWidth={960} p={5} mx="auto">
      {children}
    </Box>
  )
}

export default Container
