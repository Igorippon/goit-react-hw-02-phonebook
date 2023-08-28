import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .required('Required'),
    number: Yup.number()
        .min(5, 'Too Short!')
        .positive('Must be positive!')
        .required('Required'),
})

export const ContactForm = ({ onAdd }) => {
    return (
        <div>
            <Formik
                initialValues={{ name: "", number: '' }}
                validationSchema={ContactSchema}
                onSubmit={values => { onAdd(values) }
                }
            >
                <Form>
                    <label>Name
                        <Field name="name" type="text" />
                        <ErrorMessage name="name" />
                    </label>
                    <label>Number
                        <Field name="number" type="tel" />
                        <ErrorMessage name="number" />
                    </label>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};