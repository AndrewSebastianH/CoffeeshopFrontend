import React, {useState} from 'react'
import {InputAdornment, TextField, Button, Divider} from '@mui/material'
import {Box} from '@mui/system'
import {ingredientApi} from "../../../data/ingredientItems";

const EditIngredient = (props) => {

    const [successEdit, setSuccessEdit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            category: data.get('category'),
            stock: data.get('stock'),
            price: data.get('price')
        })
        ingredientApi.put(`${data.get('id')}`, {
            name: data.get('name'),
            category: data.get('category'),
            stock: data.get('stock'),
            price: data.get('price')
        })
            .then(res => console.log(res))
            .then(data => setSuccessEdit(true))
            .catch(err => console.error(err))
    }

    if (successEdit) {
        window.location.reload()
    }

    return (
        <Box component="form"
             onSubmit={handleSubmit}
        >
            <TextField
                type="hidden"
                name="id"
                defaultValue={props.item._id}
            />
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
                name="category"
                variant="standard"
                fullWidth
                label="Category"
                defaultValue={props.item.category}
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
