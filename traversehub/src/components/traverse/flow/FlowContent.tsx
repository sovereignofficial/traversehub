import { Box } from '@mui/material'
import { ReactNode } from 'react'

export const FlowContent = ({children}:{children:ReactNode}) => {
  return (
    <Box>
      {children}
    </Box>
  )
}
