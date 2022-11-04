import * as React from 'react';
import CityCards from "./SavedCityCards";
import {Box} from "@mui/material";

const SavedCityCardList = ({cityArray= []})=>{
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
            minHeight="200"
        >
            {cityArray.map(city=>{
                return (
                    <CityCards
                        cityName={city?.cityName}
                        countryCode={city?.countryCode}
                    />
                );
            })}
        </Box>
    );
};
export default SavedCityCardList;
