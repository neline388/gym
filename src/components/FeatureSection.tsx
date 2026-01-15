import * as React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Link,
} from "@mui/material";

export type FeatureCard = {
  icon: React.ReactNode;  
  title: string;
  body: string;
  href: string;
};

type Props = {
  heading?: string;
  subheading?: string;
  cards: FeatureCard[]; 
};

export default function FeaturesSection({
  heading = "MORE THAN JUST A GYM.",
  subheading = `We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.`,
  cards,
}: Props) {
  return (
    <Box component="section" id="benefits" sx={{ bgcolor: "#fff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        {/* header */}
        <Typography
          sx={{
            fontWeight: 900,
            letterSpacing: 0.5,
            color: "#5B0B0B",
            fontSize: { xs: 22, sm: 28, md: 32 },
            mb: 1,
            textTransform: "uppercase",
          }}
        >
          {heading}
        </Typography>

        <Typography
          sx={{
            color: "#6B7280",
            maxWidth: 820,
            fontSize: { xs: 13, sm: 14 },
            lineHeight: 1.8,
            mb: { xs: 4, md: 5 },
          }}
        >
          {subheading}
        </Typography>

        {/* Cards */}
        <Box
          sx={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: { xs: 3, md: 4 },
            alignItems: "stretch",
          }}
        >
          {cards.map((c, idx) => (
            <Card
              key={idx}
              elevation={0}
              sx={{
                minHeight: 380,
                borderRadius: 2,
                border: "2px solid rgba(17,24,39,0.12)",
                boxShadow: "0 14px 30px rgba(17,24,39,0.06)",
                height: "100%",
              }}
            >  
              <CardContent
                sx={{
                  p: { xs: 3, md: 3.5 },
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: 1.3,
                }}
              >
                {/* icons */}
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    bgcolor: "rgba(239,68,68,0.12)",
                    display: "grid",
                    placeItems: "center",
                    color: "#5B0B0B",
                    mb: 0.5,
                  }}
                >
                  {c.icon}
                </Box>

                <Typography
                  sx={{
                    fontWeight: 800,
                    color: "#5B0B0B",
                    fontSize: { xs: 16, md: 17 },
                  }}
                >
                  {c.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#374151",
                    fontSize: { xs: 13, sm: 13.5 },
                    lineHeight: 1.8,
                    mb: 0.5,
                  }}
                >
                  {c.body}
                </Typography>

                <Link
                  href={c.href ?? "#"}
                  underline="hover"
                  sx={{
                    mt: "auto",
                    fontWeight: 700,
                    fontSize: 13,
                    color: "#EF4444",
                  }}
                >
                  Learn More
                </Link>
              </CardContent>
            </Card>
          ))}
          <Box
            component="img"
            src="/assets/Arrow.png"
            alt=""
            aria-hidden
            sx={{
            position: "absolute",
            right: { xs: -10, md: -40 },
            top: { xs: -30, md: -60 },
            width: { xs: 90, md: 130 },
            zIndex: 2,
            pointerEvents: "none",
            userSelect: "none",
            display: { xs: "none", sm: "block" },
            }}
            />
        </Box>
      </Container>
    </Box>
  );
}
