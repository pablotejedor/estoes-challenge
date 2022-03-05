import React from 'react';
import { Stack, Text, Divider, Icon, Button } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

const AddProjectScreen = ({ projects, setProjects }) => {
  const navigate = useNavigate();
  const submitHandler = values => {
    values.date = new Date();
    setProjects([values, ...projects]);
    navigate('/');
  };

  return (
    <>
      <Stack
        direction={'row'}
        align={'center'}
        w="100%"
        px={[1, 12]}
        alignItems={'center'}
      >
        <Link to={'/'}>
          <Stack direction={'row'} align={'center'}>
            <Icon as={BsArrowLeft} />
            <Text variant="text">Back</Text>
          </Stack>
        </Link>
        <Text variant="title">Add project</Text>
      </Stack>
      <Divider p={1} bg={'#F0F2F5'} />
      {/* form */}
      
        <Formik
          onSubmit={submitHandler}
          validate={values => {
            const errors = {};
            if (!values.projectName) {
              errors.projectName = 'Required';
            }
            if (!values.description) {
              errors.description = 'Required';
            }
            if (!values.projectManager) {
              errors.projectManager = 'Required';
            }
            if (!values.assignedTo) {
              errors.assignedTo = 'Required';
            }
            if (!values.status) {
              errors.status = 'Required';
            }
            return errors;
          }}
          initialValues={{
            projectName: '',
            description: '',
            projectManager: '',
            assignedTo: '',
            status: '',
            id: projects.length + 1,
          }}
        >
          {({ errors, isValid, touched }) => (
            <Form>
              <Stack
                spacing={3}
                w={['90vw' ,'50vw']}
                align={['flex-start']}
                py={[0, 8]}
              >
                <label htmlFor="projectName">
                  <Text>Project name</Text>
                </label>
                <Field name="projectName" id="projectName" className="input" />
                {errors.projectName && touched.projectName ? (
                  <Text color="red">{errors.projectName}</Text>
                ) : null}
                <label htmlFor="description">
                  <Text>Description</Text>
                </label>
                <Field name="description" id="description" className="input" />
                {errors.description && touched.description ? (
                  <Text color="red">{errors.description}</Text>
                ) : null}

                <label htmlFor="projectManager">
                  <Text>Project manager</Text>
                </label>
                <Field
                  as="select"
                  id="projectManager"
                  name="projectManager"
                  className="input"
                >
                  <option defaultValue>Select a person</option>
                  <option value={'John'}>John</option>
                  <option value={'Marie'}>Marie</option>
                  <option value={'Peter'}>Peter</option>
                </Field>
                {errors.projectManager && touched.projectManager ? (
                  <Text color="red">{errors.projectManager}</Text>
                ) : null}
                <label htmlFor="assignedTo">
                  <Text>Assigned to</Text>
                </label>
                <Field
                  as="select"
                  id="assignedTo"
                  name="assignedTo"
                  className="input"
                >
                  <option defaultValue>Select a person</option>
                  <option value={'John'}>John</option>
                  <option value={'Marie'}>Marie</option>
                  <option value={'Peter'}>Peter</option>
                </Field>
                {errors.assignedTo && touched.assignedTo ? (
                  <Text color="red">{errors.assignedTo}</Text>
                ) : null}
                <label htmlFor="status">
                  <Text>Status</Text>
                </label>
                <Field as="select" id="status" name="status" className="input">
                  <option defaultValue>Select status</option>
                  <option value={'Enabled'}>Enabled</option>
                  <option value={'Disabled'}>Disabled</option>
                </Field>
                {errors.status && touched.status ? (
                  <Text color="red">{errors.status}</Text>
                ) : null}

                <Button type="submit" disabled={!isValid}>
                  Create project
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      
      {/* form */}
    </>
  );
};

export default AddProjectScreen;
