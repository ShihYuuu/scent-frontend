import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import MKBox from "components/MKBox";
// import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// import profilePicture from "assets/images/bruce-mars.jpg";

function Intro() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }} textAlign="center">
              <MKBox display="flex" justifyContent="center" alignItems="center" mb={1}>
                <MKTypography variant="h3">開始調配自己喜愛的味道吧！</MKTypography>
              </MKBox>
              <MKTypography variant="body1" fontWeight="light" color="text">
                填寫問卷，獲得你專屬的香味配方吧！
              </MKTypography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Intro;
