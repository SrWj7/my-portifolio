import { styled } from "@mui/system"
import Avatar from "../../../../assets/images/avatar.png"

const Hero = () => {

  const StyledHero = styled("div")(()=> ({
    backgroundColor: "#140f17"
  }))

  const StyledImg = styled("img")(()=> ({
    width: "30%",
    borderRadius: "50%"
  }))

  return (
      <>
        <StyledHero>
          Ola 
          <img src= {Avatar} alt="Avatar" />
        </StyledHero>
      </>
    )
}

export default Hero
