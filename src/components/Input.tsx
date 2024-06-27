import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType {
    name: string,
    placeholder: string
}

const Input = forwardRef((props: InputType, ref) => {
  return (
    <TextField
        variant="outlined"
        margin="normal"
        inputRef={ref}
        fullWidth
        type='text'
        {...props}  // 'Spread Operator'
    >
    </TextField>
  )
});

export default Input