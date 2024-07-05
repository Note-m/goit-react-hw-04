import { Formik, Form, Field } from "formik";

const SearchBar = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ topic: "" }}
      onSubmit={(values, actions) => {
        onSubmit(values.topic);
        actions.resetForm();
      }}
    >
      <Form action="">
        <Field
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
