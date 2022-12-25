import React from 'react'
import {InputAdornment, TextField, Button, Divider} from '@mui/material'
import {Box} from '@mui/system'

const EditMenu = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            basePrice: data.get('basePrice'),
            description: data.get('description')
        })
    }

    return (
        <Box component="form"
             onSubmit={handleSubmit}
        >

            <TextField
                required
                name="name"
                variant="outlined"
                label="Name"
                defaultValue={props.item.name}
                fullWidth
                sx={{
                    paddingBottom: 3
                }}
            />
            <TextField
                required
                fullWidth
                name="basePrice"
                variant="outlined"
                label="Base price"
                type="number"
                defaultValue={props.item.basePrice}
                InputProps={{
                    startAdornment: <InputAdornment position='start'>Rp</InputAdornment>,
                }}
                sx={{
                    paddingBottom: 3
                }}
            />
            <TextField
                name="description"
                variant="standard"
                fullWidth
                label="Description"
                defaultValue={props.item.description}
                sx={{
                    display: "flex",
                    flexDirection: "row"
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

export default EditMenu
