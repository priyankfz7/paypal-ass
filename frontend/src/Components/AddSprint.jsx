import { Box, Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSprint } from "../Redux/Sprint/sprint.actions";

const AddSprint = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authManager.token);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSprint({ title }, token));
  };
  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Username or email</FormLabel>
          <Input
            type="text"
            placeholder="Enter Sprint title ..."
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            isRequired
          />
        </FormControl>
        <Button width="full" mt={4} type="submit">
          Add
        </Button>
      </form>
    </Box>
  );
};

export default AddSprint;
