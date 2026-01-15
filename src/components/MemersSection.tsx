import { Box, Button, Container, Typography } from "@mui/material";

type Props = {
  title?: string;
  paragraph1?: string;
  paragraph2?: string;
  ctaText?: string;
  onCtaClick?: () => void;

  topImageSrc: string;
  leftDecoSrc: string;  
  bottomDecoSrc: string;
};

export default function MembersSection({
  title = "MILLIONS OF HAPPY MEMBERS GETTING FIT.",
  paragraph1 = `Nascetur aenean massa auctor tincidunt, lacusli potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus.`,
  paragraph2 = `Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.`,
  ctaText = "Join Now",
  onCtaClick,
  topImageSrc,
  leftDecoSrc,
  bottomDecoSrc,
}: Props) {
  return (
    <Box component="section" sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Box sx={{ position: "relative" }}>
          {/* top img */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: { xs: 4, md: 5 },
            }}
          >
            <Box
              component="img"
              src={topImageSrc}
              alt="Members getting fit"
              sx={{
                width: { xs: 260, sm: 340, md: 460 },
                height: "auto",
                userSelect: "none",
              }}
              draggable={false}
            />
          </Box>

          {/* left decoration */}
          <Box
            component="img"
            src={leftDecoSrc}
            alt=""
            aria-hidden
            sx={{
              position: "absolute",
              left: { xs: -10, md: -30 },
              top: { xs: 250, md: 550 },
              width: { xs: 70, md: 120 },
              pointerEvents: "none",
              userSelect: "none",
            }}
            draggable={false}
          />

          {/* bottom decoration */}
          <Box
            component="img"
            src={bottomDecoSrc}
            alt=""
            aria-hidden
            sx={{
              position: "absolute",
              right: { xs: -10, md: -40 },
              bottom: { xs: -20, md: -40 },
              width: { xs: 90, md: 150 },
              pointerEvents: "none",
              userSelect: "none",
            }}
            draggable={false}
          />

          {/* txt */}
          <Box
            sx={{
              maxWidth: 820,
              mx: "auto",   
              textAlign: "center", 
              position: "relative",
            }}
>            <Typography
              sx={{
                fontWeight: 900,
                color: "#5B0B0B",
                letterSpacing: 0.6,
                textTransform: "uppercase",
                fontSize: { xs: 18, sm: 22, md: 26 },
                mb: 2,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#374151",
                fontSize: { xs: 13, sm: 14 },
                lineHeight: 1.9,
                mb: 2.2,
              }}
            >
              {paragraph1}
            </Typography>

            <Typography
              sx={{
                color: "#374151",
                fontSize: { xs: 13, sm: 14 },
                lineHeight: 1.9,
                mb: 3.2,
              }}
            >
              {paragraph2}
            </Typography>

            <Button
              variant="contained"
              onClick={onCtaClick}
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
              {ctaText}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
