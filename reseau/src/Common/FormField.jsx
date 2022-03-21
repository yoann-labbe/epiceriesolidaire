import React from "react";
import { useFormikContext } from "formik";
import TextField from "@material-ui/core/TextField";


export default function FormField({ name, InputProps, ...otherProps }) {
  
  const {
    setFieldTouched /*l'utilisateur a touché dans le champs*/,
    setFieldValue, //équivalent setForm (..., e.target.value...)
    values, //toutes valeurs du formulaire
    errors,
    touched, //liste toutes les champs ont été touché
  } = useFormikContext();

  return (
    <>
      <TextField
        onChange={(e) => setFieldValue(name, e.target.value)}
        value={values[name]}
        onBlur={() => setFieldTouched(name)} //onBlur detecte le moment quand on rentre et ressort d'un champs
        {...otherProps}
        InputProps={InputProps} //mettre icon
      />
      <br />
      {/* si j'ai des erreurs et les champs ont été touchés alors affiche le nom de l'erreur */}
      {errors[name] && touched[name] && <p>{errors[name]}</p>}
    </>
  );
}
