"use client";

import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Alert, Box, Button, Checkbox, Container, FormControlLabel, Snackbar, TextField, Typography } from "@mui/material";
import { useFormik } from 'formik';
import { MuiTelInput } from 'mui-tel-input';
import { Be_Vietnam_Pro, DM_Sans } from "next/font/google";
import React, { useState } from "react";
import * as Yup from 'yup';

const dmSans = DM_Sans({ weight: ["400", "500", "600", "700", "900"], subsets: ["latin"] });
const beVietnamPro = Be_Vietnam_Pro({ weight: ["400", "500", "600", "700"], subsets: ["latin"] });

const CustomInput = ({ label, placeholder, fullWidth = true, name, value, onChange, onBlur, error, helperText }: any) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', width: fullWidth ? '100%' : { xs: '100%', md: '48%' }, mb: 4 }}>
    <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: '18px', fontWeight: 600, color: error ? '#EA1B2C' : '#171515', mb: 1 }}>
      {label}
    </Typography>
    <TextField
      variant="standard"
      placeholder={placeholder}
      fullWidth
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      sx={{
        '& .MuiInput-underline:before': { borderBottomColor: error ? '#EA1B2C' : '#0F0E0E' },
        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: error ? '#EA1B2C' : '#0F0E0E' },
        '& .MuiInput-underline:after': { borderBottomColor: '#EA1B2C' },
        '& input': { fontFamily: beVietnamPro.style.fontFamily, fontSize: '16px', color: '#666', pb: 1 },
        '& .MuiFormHelperText-root': { fontFamily: beVietnamPro.style.fontFamily, ml: 0 }
      }}
    />
  </Box>
);

export default function ContactUs() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      agreeTerms: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string()
        .required('Phone number is required')
        .test('is-10-digits', 'Phone number must be exactly 10 digits', val => {
          if (!val) return false;
          const digits = val.replace(/\D/g, '');
          return digits.length === 12; // +91 (2 digits) + 10 digit number
        }),
      message: Yup.string().required('Message is required'),
      agreeTerms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (response.ok) {
          setSnackbarOpen(true);
          resetForm();
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error sending message:', error);
        alert('An error occurred. Please try again.');
      }
    },
  });

  const handleCloseSnackbar = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarOpen(false);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "#EBEBE2", pt: { xs: "120px", md: "160px" }, pb: "100px", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, md: 8 } }}>
        <Box sx={{ maxWidth: "1200px", mx: "auto" }}>
          {/* Header */}
          <Box sx={{ mb: { xs: "30px", md: "60px" } }}>
            <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: { xs: "16px", md: "22px" }, fontWeight: 600, color: "#EA1B2C", mb: 1 }}>
              CONTACT US
            </Typography>
            <Typography sx={{ fontFamily: dmSans.style.fontFamily, fontSize: { xs: "36px", md: "64px" }, fontWeight: 900, color: "#171515", lineHeight: { xs: "44px", md: "69px" }, letterSpacing: "-1.84px" }}>
              Find Us Here !
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: "60px", md: "120px" }, justifyContent: "space-between" }}>
            
            {/* Left Column */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: "40px" }}>
              <Box>
                <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: { xs: "22px", md: "27px" }, fontWeight: 600, color: "#000000", mb: 4 }}>
                  Pahalwan Lassi Wale & Sweets
                </Typography>
                
                <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 4 }}>
                  <Box sx={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#111", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <PhoneInTalkIcon sx={{ color: "#fff", fontSize: "20px" }} />
                  </Box>
                  <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: { xs: "18px", md: "20px" }, fontWeight: 600, color: "#000000", wordBreak: 'break-word' }}>
                    +91-9219511640
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <Box sx={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#111", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <EmailIcon sx={{ color: "#fff", fontSize: "20px" }} />
                  </Box>
                  <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: { xs: "16px", sm: "18px", md: "20px" }, fontWeight: 600, color: "#000000", textDecoration: "underline", wordBreak: 'break-word' }}>
                    pahalwanlassiwale71@gmail.com
                  </Typography>
                </Box>
              </Box>

              {/* Form */}
              <Box component="form" onSubmit={formik.handleSubmit} noValidate autoComplete="off" sx={{ width: "100%", mt: { xs: 2, md: 4 } }}>
                <CustomInput 
                  label="Your Name" 
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
                <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: { xs: 0, md: 4 }, justifyContent: "space-between" }}>
                  <CustomInput 
                    label="Email" 
                    name="email"
                    fullWidth={false}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                  
                  <Box sx={{ display: 'flex', flexDirection: 'column', width: { xs: '100%', md: '48%' }, mb: 4 }}>
                    <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: '18px', fontWeight: 600, color: formik.touched.phone && Boolean(formik.errors.phone) ? '#EA1B2C' : '#171515', mb: 1 }}>
                      Phone Number
                    </Typography>
                    <MuiTelInput
                      variant="standard"
                      name="phone"
                      value={formik.values.phone}
                      onChange={(newValue) => {
                        // Allow typing only if the total number of digits is 12 or less (2 for '91' country code + 10 phone digits)
                        const digits = newValue.replace(/\D/g, '');
                        if (digits.length <= 12) {
                          formik.setFieldValue('phone', newValue);
                        }
                      }}
                      onBlur={() => formik.setFieldTouched('phone', true)}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone ? formik.errors.phone : ''}
                      defaultCountry="IN"
                      disableDropdown={true}
                      fullWidth
                      onKeyDown={(e) => {
                        // Allow control keys like backspace, delete, arrows, tab
                        if (['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'].includes(e.key)) return;
                        
                        const digits = formik.values.phone.replace(/\D/g, '');
                        // If we already have 10 digits (plus 2 for +91) and the user types a new number, block it natively
                        if (digits.length >= 12 && /^\d$/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                      sx={{
                        '& .MuiInput-underline:before': { borderBottomColor: formik.touched.phone && Boolean(formik.errors.phone) ? '#EA1B2C' : '#0F0E0E' },
                        '& .MuiInput-underline:hover:not(.Mui-disabled):before': { borderBottomColor: formik.touched.phone && Boolean(formik.errors.phone) ? '#EA1B2C' : '#0F0E0E' },
                        '& .MuiInput-underline:after': { borderBottomColor: '#EA1B2C' },
                        '& input': { fontFamily: beVietnamPro.style.fontFamily, fontSize: '16px', color: '#666', pb: 1 },
                        '& .MuiFormHelperText-root': { fontFamily: beVietnamPro.style.fontFamily, ml: 0, color: '#d32f2f' }
                      }}
                    />
                  </Box>
                </Box>
                <CustomInput 
                  label="Messsage" 
                  name="message"
                  placeholder="Enter your query here..." 
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.message && Boolean(formik.errors.message)}
                  helperText={formik.touched.message && formik.errors.message}
                />

                <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: { xs: "flex-start", sm: "center" }, justifyContent: "space-between", mt: 2, gap: 3 }}>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox 
                          name="agreeTerms"
                          checked={formik.values.agreeTerms}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          sx={{ 
                            color: formik.touched.agreeTerms && formik.errors.agreeTerms ? '#EA1B2C' : '#A0A0A0', 
                            '&.Mui-checked': { color: '#EA1B2C' },
                            '& .MuiSvgIcon-root': { fontSize: 24 }
                          }} 
                        />
                      }
                      label={
                        <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: '14px', color: formik.touched.agreeTerms && formik.errors.agreeTerms ? '#EA1B2C' : '#666', fontWeight: 500 }}>
                          I agree to the terms of your <span style={{ textDecoration: 'underline' }}>Privacy policy</span>.*
                        </Typography>
                      }
                    />
                  </Box>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      backgroundColor: "#EA1B2C",
                      color: "#F1E8E8",
                      borderRadius: "100px",
                      width: { xs: "100%", sm: "188px" },
                      height: "43px",
                      textTransform: "none",
                      fontFamily: dmSans.style.fontFamily,
                      fontWeight: 500,
                      fontSize: "20px",
                      letterSpacing: "-0.8px",
                      boxShadow: "inset 0px 0px 8px rgba(255, 255, 255, 0.25)",
                      "&:hover": { backgroundColor: "#C41B26", boxShadow: "inset 0px 0px 8px rgba(255, 255, 255, 0.25)" },
                      p: 0,
                    }}
                  >
                    SUBMIT
                  </Button>
                </Box>
              </Box>
            </Box>

            {/* Right Column */}
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", maxWidth: { md: "480px" } }}>
              <Box sx={{ display: "flex", gap: "24px", mb: 4 }}>
                <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: { xs: "16px", md: "21px" }, fontWeight: 400, color: "#000000", width: "110px" }}>
                  Weekdays
                </Typography>
                <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: { xs: "16px", md: "21px" }, fontWeight: 400, color: "#000000" }}>
                  07:30 AM - 10:00PM
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: "20px", mb: 4, alignItems: "flex-start" }}>
                <Box sx={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#111", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <LocationOnIcon sx={{ color: "#fff", fontSize: "20px" }} />
                </Box>
                <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: { xs: "16px", md: "20px" }, fontWeight: 600, color: "#000000", lineHeight: 1.5 }}>
                  Khai Dora, Jaiganj Road,<br />
                  Aligarh - 202001 , UP
                </Typography>
              </Box>

              <Box sx={{ display: "flex", gap: "20px", mb: 5, alignItems: "flex-start" }}>
                <Box sx={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#111", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <LocationOnIcon sx={{ color: "#fff", fontSize: "20px" }} />
                </Box>
                <Typography sx={{ fontFamily: beVietnamPro.style.fontFamily, fontSize: { xs: "16px", md: "20px" }, fontWeight: 600, color: "#000000", lineHeight: 1.5 }}>
                  1st floor of pahalwan lassi wale and sweets outlet,sasni gate chauraha, aligarh-202001
                </Typography>
              </Box>

              <Button
                variant="contained"
                href="https://www.google.com/maps/place/Pahalwan+Lassi+Wale+%26+Sweets/@27.8784476,78.0596517,16z/data=!4m10!1m2!2m1!1sPahalwan+Lassiwale+Khai+Dora+Jaiganj+Road+Aligarh+202001+UP!3m6!1s0x3974a486cb4c639f:0x50a6b161b2704811!8m2!3d27.8784476!4d78.0691789!15sCjtQYWhhbHdhbiBMYXNzaXdhbGUgS2hhaSBEb3JhIEphaWdhbmogUm9hZCBBbGlnYXJoIDIwMjAwMSBVUFo9IjtwYWhhbHdhbiBsYXNzaXdhbGUga2hhaSBkb3JhIGphaWdhbmogcm9hZCBhbGlnYXJoIDIwMjAwMSB1cJIBDmRlc3NlcnRfYnVmZmV04AEA!16s%2Fg%2F11csqgycwk?entry=ttu&g_ep=EgoyMDI2MDgxOS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                sx={{
                  backgroundColor: "#EA1B2C",
                  color: "#EFEFE6",
                  borderRadius: "100px",
                  width: { xs: "100%", md: "431px" },
                  height: "46px",
                  p: 0,
                  textTransform: "none",
                  fontFamily: dmSans.style.fontFamily,
                  fontWeight: 500,
                  fontSize: "20px",
                  lineHeight: "19.2px",
                  letterSpacing: "-0.8px",
                  boxShadow: "inset 0px 0px 8px rgba(255, 255, 255, 0.25)",
                  "&:hover": { backgroundColor: "#C41B26", boxShadow: "inset 0px 0px 8px rgba(255, 255, 255, 0.25)" }
                }}
              >
                Get Direction
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
      
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%', fontFamily: beVietnamPro.style.fontFamily, fontWeight: 500 }}>
          Your message has been sent successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
