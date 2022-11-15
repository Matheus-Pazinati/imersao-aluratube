import { ChangeEvent, useState } from "react";

interface FormDataProps {
  title: string;
  url: string;
  type: string;
}

export function useForm() {
  const [formData, setFormData] = useState({title: '', url: '', type: ''} as FormDataProps)
  return {
    formData,
    handleInputChange: (e: ChangeEvent<HTMLInputElement>) => {
      const formValue = e.target.value
      const formField = e.target.name
      setFormData((data) => {
        return {...data, [formField]: formValue}
      })
    },
    handleSelectChange: (e: ChangeEvent<HTMLSelectElement>) => {
      const selectValue = e.target.value
      setFormData((data) => {
        return {...data, type: selectValue}
      })
    },
    clearForm() {
      setFormData({title: '', url: '', type: ''})
    } 
  }
}