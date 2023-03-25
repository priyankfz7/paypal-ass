import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddTask from "./AddTask";

const SingleSprintPage = () => {
  const { sprintID } = useParams();
  const tasks = useSelector((state) => state.taskManager.tasks);
  useEffect(() => {}, []);

  return (
    <>
      <div>
        {tasks.map((t) => {
          if (t.sprintID == sprintID) {
            return <Box>{t.title}</Box>;
          }
        })}
      </div>
      <AddTask sprintID={sprintID} />
    </>
  );
};

export default SingleSprintPage;
