import { Box, Button, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import recruiterImg from '../assets/img/recruiter.png';

export default function Recruiter() {
  return (
    <Box
      sx={{
        width: "100%",
        py: "80px",
        background: "#04000E",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'space-between'
          }}
        >
          <Box width={"466px"}>
            <Typography
              sx={{ color: "#FA541C" }}
              fontSize={14}
              lineHeight={"18px"}
              fontWeight={"bold"}
              textTransform={"uppercase"}
              mb={2}
            >
              for recruiters
            </Typography>
            <Typography
              fontWeight={"bold"}
              fontSize={44}
              sx={{ color: "white", textWrap: "balance" }}
            >
              Do you have a position to post job?
            </Typography>
            <Typography color={grey[500]} mt={3} mb={8}>
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
              Morbi mattis ullamcorper velit.
            </Typography>
            <Button
              sx={{
                bgcolor: "#FA541C",
                color: "white",
                textTransform: "capitalize",
              }}
              variant="contained"
              startIcon={<UploadFileIcon />}
              size="large"
            >
              Post a job
            </Button>
          </Box>

          {/* right part */}
          <Box>
            <img src={recruiterImg} alt="recruiterImg" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
