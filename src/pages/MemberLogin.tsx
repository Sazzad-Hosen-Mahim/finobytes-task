import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { z } from "zod";
import { login } from "../store/Slice/AuthSlice";
import { fakeUsers } from "../store/Slice/AuthSlice"; // import fakeUsers

const memberSchema = z.object({
  phone: z.string().regex(/^\d{10,15}$/, "Enter a valid phone number"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type MemberForm = z.infer<typeof memberSchema>;

export default function MemberLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth.user);

  const [form, setForm] = useState<MemberForm>({ phone: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = memberSchema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    // Check fake users before dispatch
    const user = fakeUsers.find(
      (u) =>
        u.role === "member" &&
        u.phone === form.phone &&
        u.password === form.password
    );

    if (user) {
      dispatch(login({ role: "member", ...form }));
      setError("");
    } else {
      setError("Invalid phone number or password");
    }
  };

  useEffect(() => {
    if (auth?.role === "member") {
      navigate("/dashboard/member");
    }
  }, [auth, navigate]);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to Member</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-80 space-y-4">
          {error && <p className="text-red-500">{error}</p>}

          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FAFFCA] text-black font-bold p-2 rounded hover:bg-[#FAFFCA]/80 transition cursor-pointer"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
