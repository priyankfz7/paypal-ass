import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../Redux/tasks/task.action";

const AddTask = ({ sprintID, onClose }) => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authManager.token);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({ title, sprintID, type, status: false }, token));
    onClose();
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
        <FormControl>
          <FormLabel>Add Task</FormLabel>
          <Select
            type="text"
            placeholder="Select task type "
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            isRequired
          >
            <option value="bug">Bug</option>
            <option value="feature">Feature</option>
            <option value="story">Story</option>
          </Select>
        </FormControl>
        <Button width="full" mt={4} type="submit">
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default AddTask;
