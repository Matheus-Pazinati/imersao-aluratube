import { ChangeEvent, useState } from "react";

interface FormDataProps {
  title: string;
  url: string
}

export function useForm() {
  const [formData, setFormData] = useState({title: '', url: ''} as FormDataProps)
  return {
    formData,
    handleChange: (e: ChangeEvent<HTMLInputElement>) => {
      const formValue = e.target.value
      const formField = e.target.name
      setFormData((data) => {
        return {...data, [formField]: formValue}
      })
    },
    clearForm() {
      setFormData({title: '', url: ''})
    } 
  }
}