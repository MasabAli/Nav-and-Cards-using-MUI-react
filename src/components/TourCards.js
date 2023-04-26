import { Grid } from "@mui/material"
import { Card, CardActions, CardContent, CardMedia, Button, Typography,Container,Alert } from "@mui/material"
import { render } from "@testing-library/react";
//Module not found: Error: Can't resolve '@mui/icons-material/Menu' in 'C:\Users\masab\OneDrive\Desktop\Cards\cards-app\src\components'




const TourCard = () => {
    const LearnMore = () => {
        console.log("Learn More");
    }
    const ShowAlert = () => {

       
        setTimeout(() => {
            render (
                <Alert severity="success">Success — check it out!</Alert>
            )  
            window.location.reload();
        }, 1000) ; 
        

    }

   



    return (
        <Container maxWidth="sm">
        
        <Grid container variant="contained" color="primary" sx={{ marginTop: '16px' }}>
            <Grid item xs={6} md={6} >
                <Card>
                    <CardMedia
                        component="img"
                        height="140"
                        image=" https://source.unsplash.com/l8Y5QZ6JnqU/1600x900"
                        alt="random"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Pakistan
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Pakistan, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the world's fifth-most populous country with a population exceeding 212.2 million, and has the world's second-largest Muslim population.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={ShowAlert}>Share</Button>
                        <Button size="small" onClick={LearnMore}>Learn More</Button>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
        </Container>
    )
}

export default TourCard;