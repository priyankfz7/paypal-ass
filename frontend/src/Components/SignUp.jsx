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
import { signUp } from "../Redux/Auth/auth.action";
import { useNavigate } from "react-router-dom";

const intUser = {
  username: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [user, setUser] = useState(intUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signUp(user));
    navigate("/");
  };
  return (
    <Box>
      <Box
        className="signup-form"
        my={8}
        m="auto"
        textAlign="left"
        color="white"
      >
        <Heading size="lg" mb="12px" textAlign="center">
          SignUp
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>UserName</FormLabel>
            <Input
              type="text"
              placeholder="Enter your username"
              name="username"
              value={user.username}
              onChange={handleChange}
              isRequired
            />
          </FormControl>

          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email address"
              name="email"
              value={user.email}
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

          <Button width="full" mt={4} type="submit" backgroundColor={"#73A580"}>
            Sign Up
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default SignUp;
