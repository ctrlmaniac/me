import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  CardActions,
} from "@mui/material";
import { View } from "../Components";

const Works: React.FC = () => {
  return (
    <View>
      <Container>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Works
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="240"
                image={process.env.PUBLIC_URL + "/static/works/larapida.webp"}
                alt="la rapida"
              />
              <CardContent>
                <Typography>
                  A Website written in python with django for La Rapida di
                  Davide Di Criscito.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  href="https://larapidamolinetto.com"
                  target="_blank"
                  aria-label="link to larapidamolinetto.com"
                >
                  View website
                </Button>
                <Button
                  fullWidth
                  color="secondary"
                  href="https://github.com/ctrlmaniac/larapida"
                  target="_blank"
                  aria-label="source-code of larapidamolinetto.com"
                >
                  View Source-code
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </View>
  );
};

export default Works;
