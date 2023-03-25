import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddSprint from "./AddSprint";

const Home = () => {
  const sprints = useSelector((state) => state.sprintManager.sprints);
  return (
    <>
      <Heading ml="10px" mb="10px" mt="20px">
        My Sprints
      </Heading>
      <Box>
        {sprints.map((s) => (
          <Box>
            <Link to={`/sprints/${s._id}`}>{s.title}</Link>
          </Box>
        ))}
      </Box>
      <AddSprint />
    </>
  );
};

export default Home;
