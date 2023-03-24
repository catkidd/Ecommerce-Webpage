import { useRef } from "react";
import emailjs from "@emailjs/browser";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { emailConfig } from "src/config/email.config";
import { toastifyService } from "src/services/toastify.service";

export const AccountProfileDetails = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(emailConfig.serviceID, emailConfig.templateID, form.current, emailConfig.publicKEY)
      .then(
        (result) => {
          toastifyService.success("Email sent successfully");
          window.location.reload();
        },
        (error) => {
          toastifyService.error("Failed to send email");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="First name" name="firstName" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Last name" name="lastName" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="message" name="message" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="Phone Number" name="phone" />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField fullWidth label="email" name="email" />
              </Grid>
              <Grid xs={12} md={6}></Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <button variant="contained">Save details</button>
        </CardActions>
      </Card>
    </form>
  );
};
