import { type FormEvent, useState } from "react";
import type { FormState } from "../types/ExampleFormTypes";
import { isValidEmail } from "../utils/validators";

function ExampleForm() {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    confirm: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.email) {
      setMessage("Email is required");
      return;
    }

    if (!isValidEmail(form.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setMessage("The password must be at least 6 characters long.");
      return;
    }

    if (form.password !== form.confirm) {
      setMessage("The passwords do not match.");
      return;
    }

    setMessage("Registration completed successfully.");
  };

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white/70 backdrop-blur-xl rounded-2xl shadow-md border border-blue-100"
      >
        <h2 className="text-2xl font-semibold text-blue-900 mb-6 text-center">
          Registration
        </h2>

        <div className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-blue-700">Email</label>
            <input
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-blue-700">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          {/* Confirm */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-blue-700">Confirm password</label>
            <input
              type="password"
              value={form.confirm}
              onChange={(e) => handleChange("confirm", e.target.value)}
              className="px-3 py-2 rounded-lg border border-blue-100 bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <button
            type="submit"
            className="mt-2 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-400 transition"
          >
            Register
          </button>

          {message && (
            <p className="text-center text-sm text-blue-700 mt-2">{message}</p>
          )}
        </div>
      </form>
    </div>
  );
}

export default ExampleForm;
