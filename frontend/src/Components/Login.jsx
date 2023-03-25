import React, { useState } from "react";
import {
  Box,
  Link,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Checkbox,
  Button,
  Heading,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { login, signUp } from "../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const intUser = {
  usercred: "",
  password: "",
};

const Login = () => {
  const [user, setUser] = useState(intUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(user));
    navigate("/");
  };
  return (
    <Box>
      <Box className="signup-form" my={8} m="auto" textAlign="left">
        <Heading size="lg" mb="12px" textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Username or email</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              name="usercred"
              value={user.usercred}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <Stack isInline justifyContent="space-between" mt={4}>
            <Box>
              <Checkbox>Remember Me</Checkbox>
            </Box>
          </Stack>

          <Button width="full" mt={4} type="submit">
            Sign In
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Login;
