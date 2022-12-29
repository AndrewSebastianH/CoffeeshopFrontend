import React from 'react'
import {Chip, FormControl, MenuItem, InputLabel, InputAdornment, Select, TextField, Button, OutlinedInput} from '@mui/material'
import {Box} from '@mui/system'

const AddIngredient = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            category: data.get('category'),
            price: data.get('price'),
            stock: data.get('stock'),
            imageUrl: data.get('imageUrl'),

        })
    }

    const [ingredientName, setIngredientName] = React.useState([]);
    const [optionalIngredientName, setOptionalIngredientName] = React.useState([]);

    const handleIngredientChange = (event) => {
        const {
            target: {value},
        } = event;
        setIngredientName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    const handleOptionalIngredientChange = (event) => {
        const {
            target: {value},
        } = event;
        setOptionalIngredientName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <Box component="form"
             onSubmit={handleSubmit}
        >
            {/* Name */}
            <TextField
                fullWidth
                required
                name="name"
                variant="outlined"
                label="Name"
                sx={{
                    paddingBottom: 2
                }}
            />
            <br/>
            {/* Price */}
            <TextField
                fullWidth
                required
                name="price"
                variant="outlined"
                label="Price"
                type="number"
                InputProps={{
                    startAdornment: <InputAdornment position='start'>Rp</InputAdornment>,
                }}
                sx={{
                    paddingBottom: 2
                }}
            />
            <br/>
            {/* Stock */}
            <TextField
                fullWidth
                required
                name="stock"
                variant="outlined"
                label="Stock"
                type="number"
                InputProps={{
                    endAdornment: <InputAdornment position='end'>Boxes, Bottles, etc</InputAdornment>
                }}
                sx={{
                    paddingBottom: 2
                }}
            />
            {/* Image Url */}
            <TextField
                defaultValue="/static/images/ingredient/"
                fullWidth
                required
                name="imageUrl"
                variant="outlined"
                label="Image Url"
                sx={{
                    paddingBottom: 2
                }}
            />

            <br/>
            <br/>
            <br/>
            <Button
                variant='contained'
                type='submit'
            >
                Add Ingredient
            </Button>
        </Box>

    )
}

export default AddIngredient;
