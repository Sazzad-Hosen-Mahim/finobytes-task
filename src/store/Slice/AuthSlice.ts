import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type Role = "admin" | "merchant" | "member";

interface User {
  role: Role;
  email?: string;
  storeId?: string;
  phone?: string;
  password?: string;
  token?: string;
}

interface AuthState {
  user: User | null;
}

export const fakeUsers: User[] = [
  { role: "admin", email: "admin@test.com", password: "admin123" },
  { role: "merchant", storeId: "store173", password: "merchant123" },
  { role: "member", phone: "1234567890", password: "member123" },
];

const storedUser = localStorage.getItem("authUser");

const initialState: AuthState = {
  user: storedUser ? JSON.parse(storedUser) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ role: Role } & Partial<User>>) => {
      const { role, ...credentials } = action.payload;

      const user = fakeUsers.find((u) => {
        if (u.role !== role) return false;
        return Object.entries(credentials).every(
          ([key, value]) => (u as any)[key] === value
        );
      });

      if (user) {
        const newUser: User = {
          role: user.role,
          token: `fake-token-${user.role}-${Date.now()}`,
        };

        state.user = newUser;
        localStorage.setItem("authUser", JSON.stringify(newUser));
      } else {
        state.user = null;
      }
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
