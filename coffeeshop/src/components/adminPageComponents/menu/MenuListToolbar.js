import {
    Box,
    Card,
    CardContent,
    TextField,
    InputAdornment,
    SvgIcon,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export function MenuListToolbar({menu , setAdminMenuSearchResults }) {

    const onSearchChange = (e) => {
        if (!e.target.value) return setAdminMenuSearchResults(menu)

        const resultsArray = menu.filter(menu =>
            menu.name.toLowerCase().includes(e.target.value.toLowerCase()) ||
            menu.description.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setAdminMenuSearchResults(resultsArray)
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
                            placeholder="Search menu on admin"
                            onChange={onSearchChange}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>


    )
}
