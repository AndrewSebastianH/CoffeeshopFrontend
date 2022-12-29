import React from 'react'
import {InputAdornment, TextField, Button, Divider} from '@mui/material'
import {Box} from '@mui/system'

const EditIngredient = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            category: data.get('category'),
            stock: data.get('stock'),
            price: data.get('price')

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
                name="price"
                variant="outlined"
                label="Price"
                type="number"
                defaultValue={props.item.price}
                InputProps={{
                    startAdornment: <InputAdornment position='start'>Rp</InputAdornment>,
                }}
                sx={{
                    paddingBottom: 3
                }}
            />
            <TextField
                required
                fullWidth
                name="stock"
                variant="outlined"
                label="Stock"
                type="number"
                defaultValue={props.item.stock}
                InputProps={{
                    endAdornment: <InputAdornment position='end'>Boxes, Bottles, etc.</InputAdornment>
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

export default EditIngredient
