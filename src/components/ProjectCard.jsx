import {
  Divider,
  Icon,
  Stack,
  Text,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react';
import React from 'react';
import { BsThreeDotsVertical, BsPencilSquare, BsTrash } from 'react-icons/bs';

import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project, projects, setProjects }) => {
  const navigate = useNavigate();
  const editHandler = () => {
    navigate(`/edit/${project.id}`);
  };

  const deleteHandler = () => {
    setProjects(projects.filter(pr => pr.id !== project.id));
  };

  return (
    <>
      <Stack direction={'row'} w="100%" justifyContent={'space-between'} p={2}>
        <Stack>
          <Text variant='text'>
            {project.projectName}
          </Text>
          <Text variant="subtitle">
            Creation date: {project.date.toLocaleString('en-US')}
          </Text>
          {/* user */}
          <Stack direction={'row'} align="center">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/240px-Unofficial_JavaScript_logo_2.svg.png"
              alt="image"
              boxSize={'25px'}
              borderRadius={'full'}
            />
            <Text variant='text'>
              {project.assignedTo}
            </Text>
          </Stack>
          {/* user */}
        </Stack>
        {/* hamburger menu */}
        <Menu>
          <MenuButton>
            <Icon as={BsThreeDotsVertical} w="6" h="6" />
          </MenuButton>
          <MenuList>
            <MenuItem fontSize={'12px'} onClick={() => editHandler()}>
              <Icon as={BsPencilSquare} />
              <Text p={2}>Edit</Text>
            </MenuItem>
            <MenuDivider />
            <MenuItem fontSize={'12px'} onClick={() => deleteHandler()}>
              <Icon as={BsTrash} />
              <Text p={2}>Delete</Text>
            </MenuItem>
          </MenuList>
        </Menu>
        {/* hamburger menu */}
      </Stack>
      <Divider />
    </>
  );
};

export default ProjectCard;
