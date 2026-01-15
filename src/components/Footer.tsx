import {
  Box,
  Container,
  Typography,
  IconButton,
  Link,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

type Props = {
  logoSrc: string;
  phone: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
};

export default function Footer({
  logoSrc,
  phone,
  email,
  githubUrl,
  linkedinUrl,
}: Props) {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#F7F2E8",
        color: "#5B0B0B",
        py: { xs: 4, md: 5 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 0 },
          }}
        >
          {/* logo */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              src={logoSrc}
              alt="Site logo"
              sx={{
                height: 42,
                width: "auto",
                userSelect: "none",
              }}
              draggable={false}
            />
            <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#E11D48" }} />
          </Box>

          {/* right */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "center", md: "center" },
              gap: { xs: 1.5, md: 3 },
              textAlign: { xs: "center", md: "right" },
            }}
          >
            {/* info */}
            <Box>
              <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                {phone}
              </Typography>
              <Typography sx={{ fontSize: 14 }}>
                <Link
                  href={`mailto:${email}`}
                  underline="hover"
                  sx={{ color: "#5B0B0B" }}
                >
                  {email}
                </Link>
              </Typography>
            </Box>

            {/* icons */}
            <Box>
              <IconButton
                component="a"
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#5B0B0B"}}
              >
                <GitHubIcon fontSize="large"/>
              </IconButton>

              <IconButton
                component="a"
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ color: "#5B0B0B" }}
              >
                <LinkedInIcon fontSize="large"/>
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
