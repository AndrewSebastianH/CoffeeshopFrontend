import {
    Box,
    Button,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon, Typography,
    Modal
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function IngredientListToolbar({ingredient, setIngredientSearchResults}) {

    const onSearchChange = (e) => {
        if (!e.target.value) return setIngredientSearchResults(ingredient)

        const resultsArray = ingredient.filter(ingredient =>
            ingredient.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            ingredient.category.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setIngredientSearchResults(resultsArray)
    }

    return (
        <Box sx={{mt: 3}}>
            <Card>
                <CardContent>
                    <Box sx={{maxWidth: 500}}>
                        <TextField
                            fullWidth
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SvgIcon
                                            color="action"
                                            fontSize="small"
                                        >
                                            <SearchIcon/>
                                        </SvgIcon>
                                    </InputAdornment>
                                )
                            }}
                            placeholder="Search Ingredient"
                            variant="outlined"
                            onChange={onSearchChange}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}
