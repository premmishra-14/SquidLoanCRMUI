import { useState, useMemo } from "react";
import {
  CssBaseline,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  MenuItem,
  Select,
  FormControl,
  FormLabel,
  InputLabel,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();
  // Dynamically create the theme based on darkMode state
  const theme = useMemo(
    () => createTheme({ palette: { mode: darkMode ? "dark" : "light" } }),
    [darkMode]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
      role: formData.get("role"),
      persistent: formData.get("persistent") === "on",
    };
    // alert(JSON.stringify(data, null, 2));
    navigate("/dashboard");
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        height="100vh"
        sx={{
          backgroundImage: {
            xs: `url(${darkMode ? "https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2" : "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2"})`,
            md: "none",
          },
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: { xs: 10, md: 1 },
        }}
      >
        <Box
          width={{ xs: "100%", md: "50%" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
            sx={{ width: "100%", bgcolor: "", p: 2, borderRadius: 1 }}
          >
            <Typography variant="h6">
              <Box
                component="img"
                src="/squid logo.png"
                alt="Squid Logo"
                sx={{ width: 150, height: 100 }}
              />
            </Typography>
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
            </IconButton>
          </Box>
          <Box width="100%" maxWidth={400}>
            <Typography variant="h4" gutterBottom>
              Sign in
            </Typography>
            {/* <Filter/> */}
            {/* Dropdown for Role Selection */}
            <form onSubmit={handleSubmit}>
              <FormControl fullWidth margin="normal" required >
                <FormLabel>Select Role</FormLabel>
                <Select value={role} onChange={(e) => setRole(e.target.value)} name="role">
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="credit-sanction">
                    Credit & Sanction Team
                  </MenuItem>
                  <MenuItem value="disbursal">Disbursal Team</MenuItem>
                  <MenuItem value="collection">Collection Team</MenuItem>
                  <MenuItem value="recovery">
                    Recovery Team (Online & Field) → State/City Head
                  </MenuItem>
                  <MenuItem value="marketing-google">
                    Marketing Team → Google & Meta Leads
                  </MenuItem>
                  <MenuItem value="itteam">IT Team</MenuItem>
                  <MenuItem value="audit">Audit</MenuItem>
                </Select>
              </FormControl>
              <TextField
                label="UserName"
                name="username"
                fullWidth
                margin="normal"
                required
                sx={{}}
              />
              <TextField
                label="Password"
                type="password"
                name="password"
                fullWidth
                margin="normal"
                required
              />
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mt={2}
              >
                {/* <FormControlLabel
                  control={<Checkbox name="persistent" />}
                  label="Remember me"
                />
                <Link href="#">Forgot your password?</Link> */}
              </Box>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ mt: 1, p: 1.5, fontSize: 18 }}
              >
                Sign in
              </Button>
            </form>
          </Box>
          <Typography variant="body2" textAlign="center" mt={4}>
            &copy; Squid Loan {new Date().getFullYear()}
          </Typography>
        </Box>
        <Box
          display={{ xs: "none", md: "block" }}
          flex={1}
          sx={{
            backgroundImage: `url(${darkMode ? "https://images.unsplash.com/photo-1572072393749-3ca9c8ea0831?auto=format&w=1000&dpr=2" : "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8?auto=format&w=1000&dpr=2"})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </Box>
    </ThemeProvider>
  );
}
