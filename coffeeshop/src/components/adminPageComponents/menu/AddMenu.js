import React, {useEffect, useState} from 'react'
import {
    Chip,
    FormControl,
    MenuItem,
    InputLabel,
    InputAdornment,
    Select,
    TextField,
    Button,
    OutlinedInput
} from '@mui/material'
import {Box} from '@mui/system'
import {getIngredientItems} from "../../../data/ingredientItems";
import axios from "axios";
import {adminMenuApi} from "../../../data/adminMenuItems";

const AddMenu = (props) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            name: data.get('name'),
            description: data.get('description'),
            basePrice: data.get('basePrice'),
            imageUrl: data.get('imageUrl'),
            baseIngredients: data.get('baseIngredients'),
            optionalIngredients: data.get('optionalIngredients')
        })
        adminMenuApi.post('/', {
            name: data.get('name'),
            description: data.get('description'),
            basePrice: data.get('basePrice'),
            imageUrl: data.get('imageUrl'),
            baseIngredients: data.get('baseIngredients'),
            optionalIngredients: data.get('optionalIngredients')
        })
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    const [ingredientName, setIngredientName] = React.useState([]);
    const [optionalIngredientName, setOptionalIngredientName] = React.useState([]);

    const [ingredients, setIngredients] = React.useState([]);

    // const [ingredientNameField, setIngredientNameField] = React.useState([]);
    // const [filteredData, setFilteredData] = React.useState()

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

    // const ingredients = [
    //     'Milk',
    //     'Almond Milk',
    //     'Caramel Syrup',
    //     'Hazelnut Syrup',
    //     'Strawberry Syrup',
    //     'Oat Milk',
    //     'Espresso',
    // ];

    useEffect(() => {
        getIngredientItems()
            .then(json => {
                setIngredients(json)
                return json
            })
    }, [])

    // useEffect(()=> {
    //     if (ingredients) {
    //         const fieldValues =
    //             ingredients.filter(item => item[ingredientNameField])
    //         setFilteredData(fieldValues)
    //     }
    // },[ingredients])

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

            {/* Base Price */}
            <TextField
                fullWidth
                required
                name="basePrice"
                variant="outlined"
                label="Base Price"
                type="number"
                InputProps={{
                    startAdornment: <InputAdornment position='start'>Rp</InputAdornment>,
                }}
                sx={{
                    paddingBottom: 2
                }}
            />
            <br/>
            {/* Image Url */}
            <TextField
                defaultValue="/static/images/menu/"
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
            {/*Base Ingredients */}
            <FormControl sx={{width: "100%", paddingBottom: 2}}>
                <InputLabel id="baseIngredients">Base Ingredients</InputLabel>
                <Select
                    labelId="baseIngredientlabel"
                    id="baseIngredient"
                    name="baseIngredients"
                    multiple
                    value={ingredientName}
                    onChange={handleIngredientChange}
                    input={<OutlinedInput label="Base Ingredients"/>}
                    renderValue={(selected) => (
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((value) => (
                                <Chip key={value} label={value}/>
                            ))}
                        </Box>
                    )}
                >
                    {ingredients.map((ingredient) => (
                        <MenuItem
                            key={ingredient.id}
                            value={ingredient.name}
                        >
                            {ingredient.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/*Optional Ingredients */}
            <FormControl sx={{width: "100%", paddingBottom: 2}}>
                <InputLabel id="optionalIngredients">Optional Ingredients</InputLabel>
                <Select
                    labelId="optionalIngredientLabel"
                    id="optionalIngredient"
                    name="optionalIngredients"
                    multiple
                    value={optionalIngredientName}
                    onChange={handleOptionalIngredientChange}
                    input={<OutlinedInput label="Optional Ingredients"/>}
                    renderValue={(selected) => (
                        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 0.5}}>
                            {selected.map((value) => (
                                <Chip key={value} label={value}/>
                            ))}
                        </Box>
                    )}
                >
                    {ingredients.map((ingredient) => (
                        <MenuItem
                            key={ingredient.id}
                            value={ingredient.name}
                        >
                            {ingredient.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            {/* Description */}
            <TextField
                fullWidth
                required
                name="description"
                variant="standard"
                label="Description"
                sx={{
                    paddingBottom: 2
                }}
            />
            <br/>
            <br/>
            <br/>
            <Button variant='contained'
                    type='submit'>
                Add Menu
            </Button>
        </Box>

    )
}

export default AddMenu
