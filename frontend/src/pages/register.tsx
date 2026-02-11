import React, { useState } from "react";

interface FormData {
  fullname: string;
  email: string;
  phone_number: string;
  password: string;
  password_confirm: string;
}

const CreateUser = () => {
  const [form, setForm] = useState<FormData>({
    fullname: "",
    email: "",
    phone_number: "",
    password: "",
    password_confirm: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.password != form.password_confirm) {
      alert("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/user/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.isSuccess) {
        alert(data.message || "Error creating user");
        setLoading(false);
        return;
      }

      alert("User created successfully!");
      setForm({
        fullname: "",
        email: "",
        phone_number: "",
        password: "",
        password_confirm: "",
      });
    } catch (error) {
      console.error("Error creating user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">
          👤 Create New User
        </h2>

        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />

        <input
          type="text"
          name="phone_number"
          placeholder="Phone Number"
          value={form.phone_number}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />

        <input
          type="password"
          name="password_confirm"
          placeholder="Confirm Password"
          value={form.password_confirm}
          onChange={handleChange}
          className="border rounded px-3 py-2 w-full"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600 transition"
        >
          {loading ? "Creating..." : "Create User"}
        </button>
      </form>
    </div>
  );
};

export default CreateUser;