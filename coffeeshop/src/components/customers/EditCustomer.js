import React from 'react'
import {InputAdornment, TextField, Button, Divider} from '@mui/material'
import {Box} from '@mui/system'

const EditCustomer = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            username: data.get('username'),
            firstName: data.get('firstName'),
            email: data.get('email')
        })
    }

    return (
        <Box component="form"
             onSubmit={handleSubmit}
        >
            <TextField
                required
                name="username"
                variant="outlined"
                label="Username"
                defaultValue={props.item.username}
                fullWidth
                sx={{
                    paddingBottom: 3
                }}
            />
            <TextField
                required
                name="username"
                variant="outlined"
                label="Username"
                defaultValue={props.item.firstName}
                fullWidth
                sx={{
                    paddingBottom: 3
                }}
            />
            <TextField
                required
                name="email"
                variant="outlined"
                label="Email"
                defaultValue={props.item.email}
                fullWidth
                sx={{
                    paddingBottom: 3
                }}
            />

            <br/>
            <br/>
            <Button variant='contained'
                    type='submit'>
                Submit
            </Button>
        </Box>

    )
}

export default EditCustomer
