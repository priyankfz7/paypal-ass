import {
  Box,
  Button,
  Heading,
  HStack,
  IconButton,
  Image,
  Text,
  Icon,
} from "@chakra-ui/react";
import banner from "../assets/banner.jpg";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteSprint } from "../Redux/Sprint/sprint.actions";
import AddSprint from "./AddSprint";
import { DeleteIcon } from "@chakra-ui/icons";

const Home = () => {
  const sprints = useSelector((state) => state.sprintManager.sprints);
  const token = useSelector((state) => state.authManager.token);
  const dispatch = useDispatch();
  if (!token) {
    return (
      <div>
        <Box w={["90%", "60%", "50%"]} m="auto" mt="20px">
          <Text fontSize={"30px"} className="logo" align="center" mb="12px">
            Welcome To TaskMate!!!
          </Text>
          <Link to="/login">
            <Button
              m="auto"
              display="block"
              border="1px solid black"
              borderRadius={"0px"}
              mb="20px"
            >
              Login
            </Button>
          </Link>

          <Image w="100%" src={banner} />
        </Box>
      </div>
    );
  }
  return (
    <>
      <AddSprint />
      <Heading ml="10px" mb="35px" mt="35px" align="center">
        {`My Sprints (${sprints.length})`}
      </Heading>
      <Box>
        {sprints.map((s, i) => (
          <Box
            w={["85%", "60%", "55%"]}
            m="auto"
            p="14px"
            bgColor={"#01A66F"}
            mb="20px"
            color={"white"}
            borderRadius={"10px"}
          >
            <HStack justify={"space-between"}>
              <Heading size="lg" ml="20px">
                <Link to={`/sprints/${s._id}`}>{s.title}</Link>
              </Heading>
              <Box>
                <Icon
                  as={DeleteIcon}
                  color="red"
                  onClick={() => {
                    dispatch(deleteSprint(s._id, token));
                  }}
                  cursor="pointer"
                  w="30px"
                  h="30px"
                />
              </Box>
            </HStack>
            <Text color="#475B5A" ml="20px" fontSize="lg">
              {s?.description}
            </Text>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default Home;
