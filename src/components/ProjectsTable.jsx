import React from 'react';
import {
  Stack,
  Text,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Menu,
  MenuButton,
  Icon,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import { BsThreeDotsVertical, BsPencilSquare, BsTrash } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
const ProjectsTable = ({ projects, setProjects }) => {
  const navigate = useNavigate();

  const editHandler = id => {
    navigate(`/edit/${id}`);
  };

  const deleteHandler = id => {
    setProjects(projects.filter(pr => pr.id !== id));
  };

  return (
    <Stack w={'100%'}>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>Project info</Th>
            <Th>Project manager</Th>
            <Th>Assigned to</Th>
            <Th>Status</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {projects.map((pr, i) => (
            <Tr key={i}>
              <Td>
                <Text variant="text">{pr.projectName}</Text>
                <Text variant="subtitle">
                  Creation date:
                  {pr.date.toLocaleString('en-US')}
                </Text>
              </Td>
              <Td>
                <Stack direction={'row'} align="center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="image"
                    boxSize={'25px'}
                    borderRadius={'full'}
                  />
                  <Text variant="text">{pr.projectManager}</Text>
                </Stack>
              </Td>
              <Td>
                <Stack direction={'row'} align="center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
                    alt="image"
                    boxSize={'25px'}
                    borderRadius={'full'}
                  />
                  <Text variant="text">{pr.assignedTo}</Text>
                </Stack>
              </Td>
              <Td>
                <Stack align={'flex-start'}>
                  <Text
                    variant="text"
                    bg="#F5F5F5"
                    p={1}
                    border={'#D9D9D9 solid 1px'}
                    borderRadius={'4px'}
                  >
                    {pr.status}
                  </Text>
                </Stack>
              </Td>
              <Td>
                <Menu>
                  <MenuButton>
                    <Icon as={BsThreeDotsVertical} w="6" h="6" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      fontSize={'12px'}
                      onClick={() => editHandler(pr.id)}
                    >
                      <Icon as={BsPencilSquare} />
                      <Text p={2}>Edit</Text>
                    </MenuItem>
                    <MenuDivider />
                    <MenuItem
                      fontSize={'12px'}
                      onClick={() => deleteHandler(pr.id)}
                    >
                      <Icon as={BsTrash} />
                      <Text p={2}>Delete</Text>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Stack>
  );
};

export default ProjectsTable;
