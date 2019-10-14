import * as Yup from "yup";

const BasicFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, ">2")
        .max(20, "<20")
        .required("Required"),
});
export default BasicFormSchema;
