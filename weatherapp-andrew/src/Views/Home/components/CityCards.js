import {Button, Card, CardActionArea, CardContent, CardMedia} from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import savedCities from "../savedCities";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import {validateIfCityExist} from "../helper/ValidateIfCityExist";
import SearchIcon from "@mui/icons-material/Search";

const CityCards = ({
  cityName = "",
  countryCode= "",
 })=>{
  const navigate = useNavigate();
  return (
    <div className="mt-1 mb-1">
        <Card sx={{ maxWidth: 345, minWidth: 200 }}>
        <CardActionArea onClick={()=>{
          localStorage.setItem('city', cityName)
          navigate('/detail')
        }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {cityName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {countryCode}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Card>
    </div>
  );
}

export default CityCards;
