import { Container, Grid, styled, Typography } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.png"
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

  const StyledHero = styled("div")(()=> ({
    backgroundColor: "#000000",
    height: "100vh",
  }))

  const StyledImg = styled("img")(()=> ({
    width: "100%",
    borderRadius: "50%"
  }))

  return (
      <>
        <StyledHero>
          <Container>
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 4 }}>
                  <StyledImg src= {Avatar} />
              </Grid>
              <Grid size={{ xs: 12, md: 8 }}>
                <Typography color="primary" variant="h1" textAlign="center">Wagner José</Typography>
                <Typography color="primary" variant="h3"textAlign="center">I'm a software Engineer</Typography>
                <Grid container display="flex" justifyContent="cente">
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                      <button><DownloadIcon/>DOWNLOAD CV</button>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                      <button><MailOutlineIcon/>CONTACT ME</button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </StyledHero>
      </>
    )
}

export default Hero
