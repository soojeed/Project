import React, { useState } from 'react'

interface FormData {email: string; password: string; }



const login = () => {
  const [form, setForm] = useState<FormData>({
  email: "",
  password: ""
  });

  const [loading, setLoading] = useState(false);
 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent) =>{
    e.preventDefault();

    setLoading(true);

    try{
      const res = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(form),

       

      });
       const data = await res.json();

       if(!data.isSuccess){
        alert(data.message || "Validtion Error!");
        setLoading(false);
        return;
       }

    }
catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="login bg-amber-600">login</div>
  )
}

export default login