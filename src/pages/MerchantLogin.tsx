import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { z } from "zod";
import { fakeUsers, login } from "../store/Slice/AuthSlice";

const merchantSchema = z.object({
  storeId: z.string().min(3, "Store ID is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type MerchantForm = z.infer<typeof merchantSchema>;

export default function MerchantLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state: RootState) => state.auth.user);

  const [form, setForm] = useState<MerchantForm>({ storeId: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = merchantSchema.safeParse(form);
    if (!result.success) {
      setError(result.error.issues[0].message);
      return;
    }

    const user = fakeUsers.find(
      (u) =>
        u.role === "merchant" &&
        u.storeId === form.storeId &&
        u.password === form.password
    );

    if (user) {
      dispatch(login({ role: "merchant", ...form }));
      setError("");
    } else {
      setError("Invalid store ID or password");
    }
  };

  useEffect(() => {
    if (auth?.role === "merchant") {
      navigate("/dashboard/merchant");
    }
  }, [auth, navigate]);

  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold">Welcome to Merchant</h1>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-80 space-y-4">
          {error && <p className="text-red-500">{error}</p>}

          <div>
            <input
              type="text"
              name="storeId"
              placeholder="Store ID"
              value={form.storeId}
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
            className="w-full bg-[#FAFFCA] text-black font-bold p-2 rounded hover:bg-[#FAFFCA]/80 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
