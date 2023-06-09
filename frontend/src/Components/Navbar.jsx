import { Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../Redux/Auth/auth.action";

const Navbar = () => {
  const token = useSelector((state) => state.authManager.token);
  const dispatch = useDispatch();
  return (
    <HStack
      justify="space-between"
      p="10px 20px 10px 20px"
      borderBottom={"1px solid gainsboro"}
    >
      <Box fontSize="28px" fontWeight="bold" color="#73A580">
        <Link to="/">
          <Text className="logo">TaskMate</Text>
        </Link>
      </Box>
      <Box>
        <Button
          backgroundColor="white"
          className="btn-hover"
          color="#3E363F"
          mr="12px"
        >
          <Link to="/login">Login</Link>
        </Button>
        {token ? (
          <Button
            backgroundColor="#3E363F"
            className="btn-hover"
            color="white"
            mr="12px"
            onClick={() => dispatch(logout())}
          >
            Logout
          </Button>
        ) : (
          <Button
            backgroundColor="#3E363F"
            className="btn-hover"
            color="white"
            mr="12px"
          >
            <Link to="/signup">Signup</Link>
          </Button>
        )}
      </Box>
    </HStack>
  );
};

export default Navbar;
