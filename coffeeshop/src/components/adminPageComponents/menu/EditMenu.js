import React, {useEffect, useState} from 'react'
import {
    InputAdornment,
    TextField,
    Button,
    Divider,
    FormControl,
    InputLabel,
    Select,
    OutlinedInput,
    Chip, MenuItem
} from '@mui/material'
import {Box} from '@mui/system'
import {adminMenuApi} from "../../../data/adminMenuItems";
import {getIngredientItems} from "../../../data/ingredientItems";


const EditMenu = (props) => {



    const [ingredientName, setIngredientName] = React.useState([]);
    const [optionalIngredientName, setOptionalIngredientName] = React.useState([]);
    const [ingredients, setIngredients] = React.useState([]);

    useEffect(() => {
        getIngredientItems()
            .then(json => {
                setIngredients(json)
                return json
            })
    }, [])

    const handleIngredientChange = (event) => {
        const {
            target: {value},
        } = event;
        setIngredientName(
            typeof value === 'array' ? value.split(',') : value,
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

    const [successEditMenu, setSuccessEditMenu] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            id: data.get('id'),
            name: data.get('name'),
            basePrice: data.get('basePrice'),
            description: data.get('description')
        })
        adminMenuApi.put(`/${data.get('id')}`, {
            name: data.get('name'),
            basePrice: data.get('basePrice'),
            description: data.get('description'),
            imageUrl: data.get('imageUrl')
        })
            .then(res => console.log(res))
            .then(data => setSuccessEditMenu(true))
            .catch(err => console.error(err))
    }

    if (successEditMenu){
        window.location.reload();
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
            {/* Image Url */}
            <TextField
                defaultValue={props.item.imageUrl}
                fullWidth
                required
                name="imageUrl"
                variant="outlined"
                label="Image Url"
                sx={{
                    paddingBottom: 2
                }}
            />
            {/*Base Ingredients */}
            <FormControl sx={{width: "100%", paddingBottom: 2}}>
                <InputLabel id="baseIngredients">Base Ingredients</InputLabel>
                <Select
                    disabled
                    labelId="baseIngredientlabel"
                    id="baseIngredient"
                    name="baseIngredients"
                    multiple
                    value={props.item.baseIngredients}
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
                    disabled
                    labelId="optionalIngredientLabel"
                    id="optionalIngredient"
                    name="optionalIngredients"
                    multiple
                    value={props.item.optionalIngredients}
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
