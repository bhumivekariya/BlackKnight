import {
  Container,
  Paper,
  Box,
  Typography,
  Button,
  Grid,
  Link,
} from "@mui/material";
import bgImg from "../assets/LoginBG.png";
import Logo from "../assets/Logo.png";
import bgPattern from "../assets/LoginBG_1.png";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { FormInputText, FormInputPassword } from "../components/form";

function Login() {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   setError(loginError?.data.message);
  // }, [loginError]);

  const onSubmit = (data) => {
    console.log(data);
    // loginApi(data as authTypes.loginRegisterParams);
  };

  //  useEffect(() => {
  //    if (loginResponse?.success) {
  //      dispatch(login(loginResponse.data));
  //      navigate("/");
  //    }
  //  }, [loginResponse]);

  // useEffect(() => {
  //   console.log(apisuccess);
  //   if (apisuccess?.status) {
  //     dispatch(login(apisuccess?.data?.token));
  //     navigate("/");
  //   }
  // }, [apisuccess?.data]);

  // useEffect(() => {
  //   setError(apiError?.data.message);
  // }, [apiError]);

  const clearError = () => {
    setError(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "fit",
        backgroundPosition: "center",
      }}
    >
      <Box
        component="img"
        src={bgPattern}
        alt="Background Pattern"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 1,
        }}
      />
      <Paper sx={{ p: 4, borderRadius: 7 }} elevation={5}>
        <Box display="flex" flexDirection="column">
          <Box
            component="img"
            sx={{
              width: "300px",
              m: "auto",
            }}
            alt="Black Knight Logo"
            src={Logo}
          />
          <Typography
            variant="body1"
            sx={{ width: "fit-content", m: "auto", mt: 2 }}
          >
            Please enter your details to login
          </Typography>
          {/* {loginError && ( 
            <Box sx={{ color: "error.main", mb: 2, textAlign: "center" }}>
              {loginError?.data?.message}
            </Box>
          )} */}
        </Box>
        <Container
          maxWidth="xs"
          component="form"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
          sx={{ mt: 3 }}
          onChange={clearError}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormInputText
                control={control}
                {...register("username", {
                  required: {
                    value: true,
                    message: "User Name is required.",
                  },
                  // pattern: {
                  //   value: /^\S+@\S+\.\S+$/,
                  //   message: "Please enter a valid email address.",
                  // },
                })}
                label="Username"
              />
            </Grid>
            <Grid item xs={12}>
              <FormInputPassword
                control={control}
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password field is required.",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@+._-])[a-zA-Z@+._-\d]{8,}$/,
                    message:
                      "Password should have atleast one uppercase,one lowercase, one special character and should be of the minimum length 8.",
                  },
                })}
                label="Password"
              />
            </Grid>
            {error && (
              <Grid item xs={12} textAlign="center" color="red">
                {error}
              </Grid>
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Box>
  );
}

export default Login;
