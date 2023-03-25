import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
} from "@chakra-ui/react";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSprint } from "../Redux/Sprint/sprint.actions";

const AddSprint = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authManager.token);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSprint({ title, description: desc }, token));
    setTitle("");
    setDesc("");
  };
  return (
    <>
      <Box
        w={["85%", "75%", "65%"]}
        m="auto"
        border={"2px solid #01A66F"}
        p="20px"
        mt="20px"
        mb="20px"
      >
        <Heading m="auto" size={"lg"} textAlign="center">
          Add Task List
        </Heading>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Enter Your Sprint Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter Sprint title ..."
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              isRequired
              mb="10px"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="write something about sprint..."
              isRequired
              name="description"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></Textarea>
          </FormControl>
          <Button width="full" mt={4} type="submit" bgColor="orange">
            Add
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddSprint;
