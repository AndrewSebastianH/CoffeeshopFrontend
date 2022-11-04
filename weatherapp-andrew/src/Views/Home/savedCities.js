import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './index.css';
import useFetchWeather from "../../Hooks/useFetchWeather";
import {Box, Button, Container, Snackbar, TextField} from "@mui/material";
import SavedCityCardList from "./components/SavedCityCardList";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

const View = ()=>{
  const navigate = useNavigate();
  const [citiesArray, setCitiesArray] = useState(
    [
     
    ]);

  useEffect(()=>{
    var citiesSaved = JSON.parse(localStorage.getItem('savedCities'))
    if(citiesSaved == null){
        return;
    } else {
        for (let index = (citiesSaved.length - 1); index >= 0; --index) {
          const element = citiesSaved[index];
          setCitiesArray(citiesArray => [...citiesArray, {cityName: element}]);
        }
    }
  }, [])

  return (
    <div className="container">
      <div className="form">
          <Typography sx={{ fontWeight: 'bold' , fontSize: 20}}>Saved Cities |
              <IconButton color="error" onClick={() => {
                  localStorage.removeItem('savedCities');
                  window.location.reload(false);
              }}>
                  <DeleteIcon/>
              </IconButton>
          </Typography>
        <br/>
        <Container maxWidth="sm">
          &nbsp;
        </Container>
      </div>
        <SavedCityCardList
          cityArray={citiesArray}
        />
        <br/>
        <Button color="success" variant="contained" onClick={()=>{
                navigate('/')
            }}>
                Back
        </Button>
    </div>
    
  );
}

export default View;
