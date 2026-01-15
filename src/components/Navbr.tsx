import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

type NavItem = { label: string; href: string };

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Benefits", href: "#benefits" },
  { label: "Our Classes", href: "#ourclasses" },
  { label: "Contact Us", href: "#contactform" },
];

const logoSrc = "../assets/Logo.png";

export default function Navbr() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (nextOpen: boolean) => () => setOpen(nextOpen);
  const Logo = ({ height = 28 }: { height?: number }) => (
    <Box
      component="a"
      href="#"
      aria-label="Go to home"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <Box
        component="img"
        src={logoSrc}
        alt="Logo"
        sx={{
          height,
          width: "auto",
          display: "block",
          objectFit: "contain",
        }}
      />
    </Box>
  );

  const drawerContent = (
    <Box sx={{ width: 280, p: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <Logo height={26} />
        <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#E11D48" }} />
      </Box>

      <List sx={{ mb: 2 }}>
        {navItems.map((item) => (
          <ListItemButton
            key={item.label}
            component="a"
            href={item.href}
            onClick={toggleDrawer(false)}
            sx={{ borderRadius: 2 }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}
      </List>

      <Button
        component="a"
        href="#"
        fullWidth
        variant="text"
        sx={{ justifyContent: "flex-start", mb: 1 }}
        onClick={toggleDrawer(false)}
      >
        Sign In
      </Button>

      <Button
        component="a"
        href="#"
        fullWidth
        variant="contained"
        sx={{
          bgcolor: "#F59E0B",
          color: "#111827",
          fontWeight: 700,
          borderRadius: 999,
          textTransform: "none",
          "&:hover": { bgcolor: "#D97706" },
        }}
        onClick={toggleDrawer(false)}
      >
        Become a Member
      </Button>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: "#F7F2E8",
          color: "#111827",
          borderBottom: "1px solid rgba(17,24,39,0.08)",
          left: 0,
          right: 0,
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Toolbar disableGutters sx={{ width: "100%", boxSizing: "border-box" }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: 1200,
              mx: "auto",
              px: { xs: 2, sm: 3 },
              display: "flex",
              alignItems: "center",
              boxSizing: "border-box",
              overflowX: "hidden",
            }}
          >
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, minWidth: "max-content" }}>
              <Logo height={30} />
              <Box sx={{ width: 10, height: 10, borderRadius: "50%", bgcolor: "#E11D48" }} />
            </Box>

            {/* Center nav items (desktop) */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: 3, mx: "auto", alignItems: "center" }}>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    component="a"
                    href={item.href}
                    sx={{
                      textTransform: "none",
                      color: "inherit",
                      opacity: 0.8,
                      whiteSpace: "nowrap",
                      "&:hover": { opacity: 1, bgcolor: "transparent" },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
            )}

            {/* Right side (desktop) */}
            {!isMobile && (
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, minWidth: "max-content" }}>
                <Button
                  component="a"
                  href="#"
                  sx={{
                    textTransform: "none",
                    color: "inherit",
                    opacity: 0.85,
                    whiteSpace: "nowrap",
                    "&:hover": { opacity: 1, bgcolor: "transparent" },
                  }}
                >
                  Sign In
                </Button>

                <Button
                  component="a"
                  href="#"
                  variant="contained"
                  sx={{
                    bgcolor: "#F59E0B",
                    color: "#111827",
                    fontWeight: 700,
                    borderRadius: 999,
                    textTransform: "none",
                    px: 2.5,
                    whiteSpace: "nowrap",
                    "&:hover": { bgcolor: "#D97706" },
                  }}
                >
                  Become a Member
                </Button>
              </Box>
            )}

            {/* mobile menu button */}
            {isMobile && (
              <Box sx={{ ml: "auto" }}>
                <IconButton
                  onClick={toggleDrawer(true)}
                  aria-label="open navigation"
                  sx={{
                    bgcolor: "#F59E0B",
                    color: "#111827",
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    flex: "0 0 auto",
                    "&:hover": { bgcolor: "#D97706" },
                  }}
                >
                  <MenuRoundedIcon />
                </IconButton>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      <Toolbar />

      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </>
  );
}
