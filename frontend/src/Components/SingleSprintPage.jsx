import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import taskbanner from "../assets/task_banner.avif";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import AddTask from "./AddTask";
import { DeleteIcon, EditIcon, PlusSquareIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { deleteTask, toggleTaskStatus } from "../Redux/tasks/task.action";

const SingleSprintPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { sprintID } = useParams();
  const tasks = useSelector((state) => state.taskManager.tasks);
  const token = useSelector((state) => state.authManager.token);
  const validTasks = tasks.filter((t) => t.sprintID == sprintID);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTask(id, token));
  };

  useEffect(() => {}, []);

  return (
    <>
      <HStack mt="20px" mb="20px" ml="20px">
        <Heading mr="10px">Add Tasks</Heading>

        <Icon
          as={PlusSquareIcon}
          onClick={onOpen}
          cursor="pointer"
          w="40px"
          h="40px"
        />
      </HStack>
      <div>
        {tasks.length > 0 ? (
          <SimpleGrid templateColumns={"1fr 1fr"} w="70%" m="auto" gap="30px">
            {validTasks.map((t) => {
              return (
                <Box bgColor={t.status ? "#B2D3C2" : "#fafaf0"} p="15px">
                  <HStack justify="space-between" mb="10px">
                    <Text fontSize={"xl"}>{t.title}</Text>
                    <HStack>
                      <Popover placement="right">
                        <PopoverTrigger>
                          <Icon
                            as={EditIcon}
                            cursor="pointer"
                            w="20px"
                            h="20px"
                          />
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>toggle Status</PopoverHeader>
                          <PopoverBody>
                            <Button
                              onClick={() =>
                                dispatch(
                                  toggleTaskStatus(t._id, !t.status, token)
                                )
                              }
                            >
                              toggle Status
                            </Button>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                      <Icon
                        as={DeleteIcon}
                        color="red"
                        onClick={() => handleDelete(t._id)}
                        cursor="pointer"
                        w="20px"
                        h="20px"
                      />
                    </HStack>
                  </HStack>
                  <HStack justify="space-between">
                    <Text fontSize={"xl"}>{t.type}</Text>
                    <Badge colorScheme={t.status ? "green" : "yellow"}>
                      {t.status ? "Completed" : "Pending"}
                    </Badge>
                  </HStack>
                </Box>
              );
            })}
          </SimpleGrid>
        ) : (
          <Box w="30%" m="auto" mt="20px">
            <Text fontSize="30px" textAlign={"center"}>
              No Task Added
            </Text>
            <Image src={taskbanner} />
          </Box>
        )}
      </div>
      <div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Task</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AddTask sprintID={sprintID} onClose={onClose} />
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default SingleSprintPage;
