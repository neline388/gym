import * as React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
  imageSrc: string;
  onSubmit: (data: {
    name: string;
    email: string;
    text: string;
  }) => void;
};

export default function ContactSection({
  title = "GET IN TOUCH",
  subtitle = "Have a question or want to join? Send us a message and we’ll get back to you shortly.",
  imageSrc,
  onSubmit,
}: Props) {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    text: "",
  });

  const handleChange =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm({ ...form, [field]: e.target.value });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(form);
  };

  return (
    <Box component="section" id="contactform" sx={{ bgcolor: "#fff", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: { xs: 4, md: 6 },
            alignItems: "center",
          }}
        >
          {/* form */}
          <Box component="form" onSubmit={handleSubmit}>
            <Typography
              sx={{
                fontWeight: 900,
                color: "#5B0B0B",
                fontSize: { xs: 22, sm: 26, md: 30 },
                mb: 1,
              }}
            >
              {title}
            </Typography>

            <Typography
              sx={{
                color: "#6B7280",
                fontSize: { xs: 13, sm: 14 },
                lineHeight: 1.8,
                mb: 3,
                maxWidth: 420,
              }}
            >
              {subtitle}
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Name"
                value={form.name}
                onChange={handleChange("name")}
                fullWidth
              />

              <TextField
                label="Email address"
                type="email"
                value={form.email}
                onChange={handleChange("email")}
                fullWidth
              />

              <TextField
                label="Message"
                multiline
                minRows={4}
                value={form.text}
                onChange={handleChange("text")}
                fullWidth
              />

              <Button
                type="submit"
                variant="contained"
                sx={{
                  alignSelf: "flex-start",
                  mt: 1,
                  bgcolor: "#F59E0B",
                  color: "#111827",
                  fontWeight: 800,
                  textTransform: "none",
                  px: 3,
                  py: 1.2,
                  borderRadius: 999,
                  "&:hover": { bgcolor: "#D97706" },
                }}
              >
                Send Message
              </Button>
            </Box>
          </Box>

          {/* img */}
          <Box
            sx={{
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box
              component="img"
              src={imageSrc}
              alt="Contact illustration"
              sx={{
                width: { xs: "100%", sm: "80%", md: 420 },
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
