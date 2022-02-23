import React from 'react';
import {
  Stack,
  Text,
  Button,
  Divider,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard';
import ProjectsTable from '../ProjectsTable';

const HomeScreen = ({ projects, setProjects }) => {
  const isOnMobile = useBreakpointValue([true, false]);

  return (
    <>
      {/* header with button */}
      <Stack
        direction={'row'}
        align={'center'}
        justify={'space-between'}
        w="100%"
        px={[1, 12]}
      >
        <Text variant="title">My projects</Text>
        <Link to={'/create'}>
          <Button>+ Add project</Button>
        </Link>
      </Stack>
      <Divider p={1} bg={'#F0F2F5'} />
      {/* header with button */}
      {isOnMobile ? (
        <Stack w={'100%'}>
          {projects.map((project, i) => (
            <ProjectCard
              key={i}
              project={project}
              setProjects={setProjects}
              projects={projects}
            />
          ))}
        </Stack>
      ) : (
        <ProjectsTable projects={projects} setProjects={setProjects} />
      )}
    </>
  );
};

export default HomeScreen;
