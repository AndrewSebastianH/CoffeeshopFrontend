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


export const CustomerListToolbar = (props) => (

    <Box {...props}>
        <Box sx={{ mt: 3 }}>
            <Card>
                <CardContent>
                    <Box sx={{ maxWidth: 500 }}>
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
                            placeholder="Search Customer"
                            variant="outlined"
                        />
                    </Box>
                </CardContent>
            </Card>
        </Box>
    </Box>


)
