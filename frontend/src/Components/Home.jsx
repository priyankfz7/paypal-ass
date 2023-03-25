import { Box } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddSprint from "./AddSprint";

const Home = () => {
  const sprints = useSelector((state) => state.sprintManager.sprints);
  return (
    <div>
      <Box>
        {sprints.map((s) => (
          <Box>
            <Link to={`/sprints/${s._id}`}>{s.title}</Link>
          </Box>
        ))}
      </Box>
      <AddSprint />
    </div>
  );
};

export default Home;
