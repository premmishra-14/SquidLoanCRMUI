import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Avatar,
  Divider,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Paper,
  useMediaQuery,
  useTheme,
  Stack,
} from "@mui/material";
import {
  Edit as EditIcon,
  Save as SaveIcon,
  Cancel as CancelIcon,
  PhotoCamera as PhotoCameraIcon,
  PictureAsPdf as PdfIcon,
} from "@mui/icons-material";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const UserDetailsPage = () => {
  const [editMode, setEditMode] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [userDetails, setUserDetails] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    gender: "male",
    dateOfBirth: "1990-06-15",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "United States",
    occupation: "Software Developer",
    company: "Tech Solutions Inc.",
    bio: "Experienced software developer with a passion for creating intuitive and efficient applications.",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleSave = () => {
    // Here you would typically send the updated user details to your backend
    console.log("Saving user details:", userDetails);
    setEditMode(false);
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    // Set document properties
    doc.setProperties({
      title: `User Profile - ${userDetails.firstName} ${userDetails.lastName}`,
      author: "User Profile System",
      subject: "User Details",
      keywords: "user, profile, details",
    });

    // Add a title
    doc.setFontSize(20);
    doc.text(
      `User Profile: ${userDetails.firstName} ${userDetails.lastName}`,
      14,
      22
    );

    // Add user image - placeholder for actual image implementation
    // This would need to be replaced with proper image handling
    doc.rect(14, 30, 40, 40);
    doc.setFontSize(10);
    doc.text("User Photo", 24, 50);

    // Basic information
    doc.setFontSize(16);
    doc.text("Basic Information", 14, 80);
    doc.setFontSize(12);

    let yPos = 90;
    doc.text(
      `Name: ${userDetails.firstName} ${userDetails.lastName}`,
      14,
      yPos
    );
    yPos += 10;
    doc.text(`Email: ${userDetails.email}`, 14, yPos);
    yPos += 10;
    doc.text(`Phone: ${userDetails.phone}`, 14, yPos);
    yPos += 10;
    doc.text(`Gender: ${userDetails.gender}`, 14, yPos);
    yPos += 10;
    doc.text(`Date of Birth: ${userDetails.dateOfBirth}`, 14, yPos);

    // Professional information
    yPos += 20;
    doc.setFontSize(16);
    doc.text("Professional Information", 14, yPos);
    doc.setFontSize(12);

    yPos += 10;
    doc.text(`Occupation: ${userDetails.occupation}`, 14, yPos);
    yPos += 10;
    doc.text(`Company: ${userDetails.company}`, 14, yPos);

    // Contact information
    yPos += 20;
    doc.setFontSize(16);
    doc.text("Contact Information", 14, yPos);
    doc.setFontSize(12);

    yPos += 10;
    doc.text(`Address: ${userDetails.address}`, 14, yPos);
    yPos += 10;
    doc.text(`City: ${userDetails.city}`, 14, yPos);
    yPos += 10;
    doc.text(`State/Province: ${userDetails.state}`, 14, yPos);
    yPos += 10;
    doc.text(`Zip/Postal Code: ${userDetails.zipCode}`, 14, yPos);
    yPos += 10;
    doc.text(`Country: ${userDetails.country}`, 14, yPos);

    // Bio
    yPos += 20;
    doc.setFontSize(16);
    doc.text("Biography", 14, yPos);
    doc.setFontSize(12);

    // Split bio into multiple lines if needed
    const bioLines = doc.splitTextToSize(userDetails.bio, 180);
    yPos += 10;
    doc.text(bioLines, 14, yPos);

    // Add footer with date
    const today = new Date();
    doc.setFontSize(10);
    doc.text(`Generated on: ${today.toLocaleDateString()}`, 14, 280);

    // Save the PDF
    doc.save(
      `${userDetails.firstName.toLowerCase()}_${userDetails.lastName.toLowerCase()}_profile.pdf`
    );
  };

  // Create a meta viewport tag for proper mobile scaling
  useEffect(() => {
    // Check if viewport meta tag exists
    let viewportMeta = document.querySelector('meta[name="viewport"]');

    // If it doesn't exist, create it
    if (!viewportMeta) {
      viewportMeta = document.createElement("meta");
      viewportMeta.name = "viewport";
      document.getElementsByTagName("head")[0].appendChild(viewportMeta);
    }

    // Set the content attribute for proper mobile scaling
    viewportMeta.content =
      "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0";

    // Clean up function
    return () => {
      // Optional: reset to default if needed
    };
  }, []);

  return (
    <Box
      sx={{
        p: { xs: 1, sm: 2, md: 3 },
        maxWidth: "100%",
        mx: "auto",
        overflowX: "hidden",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: { xs: 1, sm: 2, md: 3 },
          mb: 3,
          overflowX: "hidden",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            mb: 2,
            gap: 2,
          }}
        >
          <Typography
            variant={isMobile ? "h5" : "h4"}
            component="h1"
            sx={{ mb: isMobile ? 1 : 0 }}
          >
            User Details
          </Typography>
          <Stack
            direction={isMobile ? "column" : "row"}
            spacing={1}
            sx={{ width: isMobile ? "100%" : "auto" }}
          >
            {!editMode ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<EditIcon />}
                  onClick={handleEdit}
                  fullWidth={isMobile}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<PdfIcon />}
                  onClick={handleDownloadPDF}
                  fullWidth={isMobile}
                >
                  Download PDF
                </Button>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="error"
                  startIcon={<CancelIcon />}
                  onClick={handleCancel}
                  fullWidth={isMobile}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  startIcon={<SaveIcon />}
                  onClick={handleSave}
                  fullWidth={isMobile}
                >
                  Save
                </Button>
              </>
            )}
          </Stack>
        </Box>

        <Grid container spacing={isMobile ? 2 : 3}>
          {/* Left column - Profile picture and basic info */}
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  p: isMobile ? 2 : 3,
                }}
              >
                <Avatar
                  sx={{
                    width: isMobile ? 100 : 150,
                    height: isMobile ? 100 : 150,
                    mb: 2,
                  }}
                  src="/api/placeholder/150/150"
                  alt={`${userDetails.firstName} ${userDetails.lastName}`}
                />
                {editMode && (
                  <Button
                    variant="outlined"
                    startIcon={<PhotoCameraIcon />}
                    component="label"
                    sx={{ mb: 2 }}
                    size={isMobile ? "small" : "medium"}
                  >
                    Upload Photo
                    <input type="file" hidden accept="image/*" />
                  </Button>
                )}
                <Typography
                  variant={isMobile ? "h6" : "h5"}
                  sx={{ mb: 1, textAlign: "center" }}
                >
                  {userDetails.firstName} {userDetails.lastName}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  {userDetails.occupation}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2, textAlign: "center" }}
                >
                  {userDetails.company}
                </Typography>
                <Divider sx={{ width: "100%", mb: 2 }} />
                <Typography
                  variant="body1"
                  sx={{
                    alignSelf: "flex-start",
                    fontWeight: "bold",
                    mb: 1,
                  }}
                >
                  Bio
                </Typography>
                {editMode ? (
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    name="bio"
                    value={userDetails.bio}
                    onChange={handleChange}
                    variant="outlined"
                    size={isMobile ? "small" : "medium"}
                  />
                ) : (
                  <Typography variant="body2" color="text.secondary">
                    {userDetails.bio}
                  </Typography>
                )}
              </CardContent>
            </Card>
          </Grid>

          {/* Right column - Detailed user information */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardHeader
                title="Personal Information"
                titleTypographyProps={{ variant: isMobile ? "h6" : "h5" }}
                sx={{ pb: isMobile ? 1 : 2, pt: isMobile ? 2 : 3 }}
              />
              <CardContent sx={{ pt: 0, pb: isMobile ? 1 : 2 }}>
                <Grid container spacing={isMobile ? 1 : 2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      name="firstName"
                      value={userDetails.firstName}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={userDetails.lastName}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={userDetails.email}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone"
                      name="phone"
                      value={userDetails.phone}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl
                      fullWidth
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                    >
                      <InputLabel
                        id="gender-label"
                        style={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
                      >
                        Gender
                      </InputLabel>
                      <Select
                        labelId="gender-label"
                        name="gender"
                        value={userDetails.gender}
                        label="Gender"
                        onChange={handleChange}
                        style={{ fontSize: isMobile ? "0.875rem" : "1rem" }}
                      >
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="other">Other</MenuItem>
                        <MenuItem value="prefer-not-to-say">
                          Prefer not to say
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Date of Birth"
                      name="dateOfBirth"
                      type="date"
                      value={userDetails.dateOfBirth}
                      onChange={handleChange}
                      margin="normal"
                      InputLabelProps={{
                        shrink: true,
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>

              <Divider />

              <CardHeader
                title="Professional Information"
                titleTypographyProps={{ variant: isMobile ? "h6" : "h5" }}
                sx={{ pb: isMobile ? 1 : 2, pt: isMobile ? 2 : 3 }}
              />
              <CardContent sx={{ pt: 0, pb: isMobile ? 1 : 2 }}>
                <Grid container spacing={isMobile ? 1 : 2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Occupation"
                      name="occupation"
                      value={userDetails.occupation}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Company"
                      name="company"
                      value={userDetails.company}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>

              <Divider />

              <CardHeader
                title="Contact Information"
                titleTypographyProps={{ variant: isMobile ? "h6" : "h5" }}
                sx={{ pb: isMobile ? 1 : 2, pt: isMobile ? 2 : 3 }}
              />
              <CardContent sx={{ pt: 0, pb: isMobile ? 1 : 2 }}>
                <Grid container spacing={isMobile ? 1 : 2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      name="address"
                      value={userDetails.address}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      name="city"
                      value={userDetails.city}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="State/Province"
                      name="state"
                      value={userDetails.state}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Zip/Postal Code"
                      name="zipCode"
                      value={userDetails.zipCode}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Country"
                      name="country"
                      value={userDetails.country}
                      onChange={handleChange}
                      margin="normal"
                      disabled={!editMode}
                      size={isMobile ? "small" : "medium"}
                      InputProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                      InputLabelProps={{
                        style: { fontSize: isMobile ? "0.875rem" : "1rem" },
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default UserDetailsPage;
