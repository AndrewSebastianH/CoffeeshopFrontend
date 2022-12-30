import {
    Box,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function CustomerMenuToolbar({menu , setSearchResults }) {

    const onSearchChange = (e) => {
        if (!e.target.value) return setSearchResults(menu)

        const resultsArray = menu.filter(menu =>
            menu.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            menu.description.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setSearchResults(resultsArray)
    }

    return (
        <Box sx={{mt: 3}}>
            <Card>
                <CardContent>
                    <Box sx={{maxWidth: 550}}>
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
                            placeholder="Search menu"
                            onChange={onSearchChange}
                            helperText={`${menu.length} menu items in total.`}

                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>


    )
}
