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

       alert("User Login Successfully!");
        setForm({
          email: "",
          password: ""
        });
    }
catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="login-container flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit}   className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4">
        
        <input
         
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  )
}

export default login