import * as yup from "yup";

export const validation = yup.object().shape({
    mobileNumber: yup.string().required(),
})