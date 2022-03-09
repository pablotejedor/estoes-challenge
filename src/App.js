import { Container, Stack, Divider } from '@chakra-ui/react';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProjectScreen from './components/screens/AddProjectScreen';
import EditProjectScreen from './components/screens/EditProjectScreen';
import HomeScreen from './components/screens/HomeScreen';
function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      projectName: 'Pokedex',
      description: 'Gen 1-3 Pokedex',
      projectManager: 'Marie',
      assignedTo: 'Peter',
      status: 'Disabled',
      date: new Date(),
    },
    {
      id: 2,
      projectName: 'E-Commerce',
      description: 'Meli clone',
      projectManager: 'John',
      assignedTo: 'Marie',
      status: 'Enabled',
      date: new Date(),
    },
  ]);
  return (
    <>
      <Container
       maxW={'container.xl'}
       w={'100vw'}>
        <Stack alignItems={'center'} py={6}>
          {/* header with logo */}
          <Stack alignItems={'center'} w="100%" px={[1, 12]}>
            <Stack align={'flex-start'} w="100%">
              <Divider />
            </Stack>
          </Stack>
          {/* header with logo */}

          <BrowserRouter>
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <HomeScreen projects={projects} setProjects={setProjects} />
                }
              />
              <Route
                path="/create"
                element={
                  <AddProjectScreen
                    projects={projects}
                    setProjects={setProjects}
                  />
                }
              />
              <Route
                path="/edit/:id"
                element={
                  <EditProjectScreen
                    projects={projects}
                    setProjects={setProjects}
                  />
                }
              />
            </Routes>
          </BrowserRouter>
        </Stack>
      </Container>
    </>
  );
}

export default App;
