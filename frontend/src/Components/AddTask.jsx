import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Redux/tasks/task.action";

const AddTask = ({ sprintID }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authManager.token);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, sprintID }, token));
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Add Task</FormLabel>
          <Input
            type="text"
            placeholder="Enter your task ..."
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isRequired
          />
        </FormControl>
        <Button width="full" mt={4} type="submit">
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default AddTask;
