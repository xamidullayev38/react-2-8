import { Box, Button, Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import recruiterImg from '../assets/img/recruiter.png';

export default function Recruiter() {
  return (
    <Box
      sx={{
        width: "100%",
        py: { xs: "60px", md: "80px" }, // Mobilda biroz kichikroq padding
        background: "#04000E",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            // Mobilda ustma-ust (column), desktopda yonma-yon (row)
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: 'space-between',
            textAlign: { xs: "center", md: "left" }, // Mobilda matnni o'rtaga olish
            gap: { xs: 5, md: 0 }
          }}
        >
          {/* Matn qismi */}
          <Box sx={{ 
            width: "100%", 
            maxWidth: { xs: "100%", md: "466px" } // Qat'iy 466px o'rniga maxWidth
          }}>
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
              fontSize={{ xs: 32, md: 44 }} // Mobilda shrift kichrayadi
              sx={{ color: "white", textWrap: "balance" }}
            >
              Do you have a position to post job?
            </Typography>
            <Typography color={grey[500]} mt={3} mb={{ xs: 4, md: 8 }}>
              Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi.
              Morbi mattis ullamcorper velit.
            </Typography>
            <Button
              sx={{
                bgcolor: "#FA541C",
                color: "white",
                textTransform: "capitalize",
                px: 4,
                py: 1.5,
                borderRadius: '8px',
                width: { xs: "100%", sm: "auto" }, // Mobilda tugma to'liq kenglikda
                "&:hover": { bgcolor: "#e44310" },
              }}
              variant="contained"
              startIcon={<UploadFileIcon />}
              size="large"
            >
              Post a job
            </Button>
          </Box>

          {/* Rasm qismi */}
          <Box 
            sx={{ 
              width: "100%", 
              maxWidth: { xs: "300px", md: "500px" }, // Mobilda rasm kichrayadi
              display: "flex",
              justifyContent: "center"
            }}
          >
            <Box
              component="img"
              src={recruiterImg}
              alt="recruiterImg"
              sx={{
                width: "100%",
                height: "auto",
                objectFit: "contain"
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}