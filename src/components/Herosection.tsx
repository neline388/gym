import { Box, Button, Container, Typography } from "@mui/material";

type Props = {
  watermarkText: string;
  brand: string;
  subtitle: string;
  body: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  rightImageSrc: string;
};

export default function HeroSection({
  watermarkText = "EVOGYM",
  brand = "EVOGYM",
  subtitle = "evolutionary fitness.",
  body = "Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of. Get Your Dream Body Now.",
  primaryCtaText = "Join Now",
  secondaryCtaText = "Learn More",
  onPrimaryClick,
  onSecondaryClick,
  rightImageSrc,
}: Props) {
  return (
    <Box
      component="section"
      id="home"
      sx={{
        bgcolor: "#F7F2E8",
        py: { xs: 7, md: 10 },
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
            alignItems: "center",
            gap: { xs: 5, md: 6 },
          }}
        >
          {/* left */}
          <Box sx={{ position: "relative" }}>
            {/* Watermark */}
            <Typography
              aria-hidden="true"
              sx={{
                position: "absolute",
                left: { xs: 20, md: 20 },
                top: { xs: -30, md: -75 },
                fontWeight: 900,
                letterSpacing: 2,
                lineHeight: 1,
                fontSize: { xs: 64, sm: 92, md: 150 },
                opacity: 0.12,
                color: "#6B7280",
                pointerEvents: "none",
                userSelect: "none",
                whiteSpace: "nowrap",
              }}
            >
              {watermarkText}
            </Typography>

            {/* foreground content */}
            <Box sx={{ position: "relative" }}>
              <Typography
                sx={{
                  fontWeight: 900,
                  color: "#5B0B0B", 
                  fontSize: { xs: 44, sm: 56, md: 64 },
                  lineHeight: 1,
                  mb: 1,
                }}
              >
                {brand}
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 18, md: 22 },
                  color: "#6B7280",
                  mb: 3,
                }}
              >
                {subtitle}
              </Typography>

              <Typography
                sx={{
                  maxWidth: 560,
                  color: "#374151",
                  fontSize: { xs: 13, sm: 14 },
                  lineHeight: 1.8,
                  mb: 3.5,
                }}
              >
                {body}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                <Button
                  variant="contained"
                  onClick={onPrimaryClick}
                  sx={{
                    bgcolor: "#F59E0B",
                    color: "#111827",
                    fontWeight: 800,
                    borderRadius: 1.5,
                    textTransform: "none",
                    px: 3,
                    py: 1.2,
                    boxShadow: "0 10px 22px rgba(17,24,39,0.12)",
                    "&:hover": { bgcolor: "#D97706" },
                  }}
                >
                  {primaryCtaText}
                </Button>

                <Button
                  variant="text"
                  onClick={onSecondaryClick}
                  sx={{
                    textTransform: "none",
                    fontWeight: 700,
                    color: "#EF4444",
                    px: 0,
                    "&:hover": { bgcolor: "transparent", textDecoration: "underline" },
                  }}
                >
                  {secondaryCtaText}
                </Button>
              </Box>
            </Box>
          </Box>

          {/* right */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box
              component="img"
              src={rightImageSrc}
              alt="Hero visual"
              sx={{
                width: { xs: "92%", sm: "78%", md: 520 },
                maxWidth: "100%",
                height: "auto",
                userSelect: "none",
              }}
              draggable={false}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
