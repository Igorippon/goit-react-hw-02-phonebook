import { Formik, Field } from "formik";
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Label, StyledForm, Button, ErrorMsg } from "./ContactForm.styled";

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .min(3, 'Too Short!')
        .required('Required'),
    number: Yup.number()
        .min(5, 'Too Short!')
        .positive()
        .required('Required'),
})

export const ContactForm = ({ onAdd }) => {
    return (
        <div>
            <Formik
                initialValues={{ name: "", number: '' }}
                validationSchema={ContactSchema}
                onSubmit={(values, actions) => {
                    onAdd(values);
                    actions.resetForm()
                }
                }
            >
                <StyledForm>
                    <Label>Name
                        <Field name="name" type="text" />
                        <ErrorMsg name="name" component="div" />
                    </Label>
                    <Label>Number
                        <Field name="number" type="tel" />
                        <ErrorMsg name="number" component="div" />
                    </Label>
                    <Button type="submit">Add contact</Button>
                </StyledForm>
            </Formik>
        </div>
    );
};

ContactForm.propTypes = {
    onAdd: PropTypes.func.isRequired,
}