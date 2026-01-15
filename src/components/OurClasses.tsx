import { Box, Button, Container, Typography } from "@mui/material";

export type ImageCard = {
  src: string;
  alt: string;
  buttonText: string;
  onClick: () => void;
};

type Props = {
  title: string;
  paragraph: string;
  backgroundSrc: string;
  items: [ImageCard, ImageCard, ImageCard];
};

export default function OurClass({
  title = "OUR PROGRAMS",
  paragraph = "Choose a program that fits your goals. Explore our training options designed for every level.",
  backgroundSrc,
  items,
}: Props) {
  return (
    <Box
      component="section"
      id="ourclasses"
      sx={{
        bgcolor: "#fff",
        py: { xs: 7, md: 10 },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "50%",
          marginLeft: "-50vw",
          py: { xs: 6, md: 10 },
          overflow: "hidden",
          backgroundImage: `url("${backgroundSrc}")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom left",
          backgroundSize: {
            xs: "220px",
            sm: "320px",
            md: "420px",
          },
        }}
      >
        <Container maxWidth="lg">
          {/* txt */}
          <Box sx={{ maxWidth: 820, mb: { xs: 4, md: 5 } }}>
            <Typography
              sx={{
                fontWeight: 900,
                color: "#5B0B0B",
                letterSpacing: 0.6,
                textTransform: "uppercase",
                fontSize: { xs: 20, sm: 26, md: 32 },
                mb: 1.2,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#6B7280",
                fontSize: { xs: 13, sm: 14 },
                lineHeight: 1.9,
              }}
            >
              {paragraph}
            </Typography>
          </Box>

          {/* imgs */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
              gap: { xs: 3, md: 4 },
              alignItems: "stretch",
            }}
          >
            {items.map((item, idx) => (
              <Box
                key={idx}
                sx={{
                  position: "relative",
                  borderRadius: 1,
                  overflow: "hidden",
                  minHeight: { xs: 220, md: 280 },
                  boxShadow: "0 18px 45px rgba(17,24,39,0.18)",
                }}
              >
                <Box
                  component="img"
                  src={item.src}
                  alt={item.alt ?? `Image ${idx + 1}`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    userSelect: "none",
                  }}
                  draggable={false}
                />

                {/* btn */}
                <Box
                  sx={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    p: 2,
                    display: "flex",
                    justifyContent: "center",
                    background:
                      "linear-gradient(to top, rgba(17,24,39,0.55), rgba(17,24,39,0))",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={item.onClick}
                    sx={{
                      bgcolor: "#F59E0B",
                      color: "#111827",
                      fontWeight: 800,
                      borderRadius: 999,
                      textTransform: "none",
                      px: 3,
                      py: 1.1,
                      "&:hover": { bgcolor: "#D97706" },
                    }}
                  >
                    {item.buttonText}
                  </Button>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
