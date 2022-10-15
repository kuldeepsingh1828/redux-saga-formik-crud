import React from 'react';
import { Formik } from 'formik';
import { addData } from '../../redux/actions/user';
import { useDispatch } from 'react-redux';

const AddUser = () => {
    let dispatch = useDispatch();
    return <div>
        <Formik

            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'is required';
                } else if (values.name.length < 3) {
                    errors.name = 'should have minimum 3 letters';
                }
                return errors;
            }}

            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    dispatch(addData(values));
                }, 400);
            }}
            initialValues={{ name: '', college: '', company: '', age: '', ph: '' }}>
            {({
                values, handleChange, handleSubmit, errors, touched
            }) => (
                <form>
                    <div>
                        <label>Name</label>
                        <input name='name' value={values.name} onChange={handleChange} />
                    </div>
                    {errors.name && touched.name && errors.name}
                    <div>
                        <label>College</label>
                        <input name='college' value={values.college} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Company</label>
                        <input name='company' value={values.company} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Age</label>
                        <input name='age' value={values.age} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input name='ph' value={values.ph} onChange={handleChange} />
                    </div>
                    <button type="submit" onClick={handleSubmit}>Add User</button>
                </form>
            )}
        </Formik>
    </div >
}

export default AddUser;