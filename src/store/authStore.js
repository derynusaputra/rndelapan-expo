import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

const useAuthStore = create(
  persist(
    (set, get) => ({
      // State
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (email, password) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock validation
          if (email === "admin@example.com" && password === "password") {
            const user = {
              id: "1",
              email: email,
              name: "Admin User",
              avatar: null,
            };

            set({
              user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });

            return { success: true };
          } else {
            set({
              isLoading: false,
              error: "Email atau password salah",
            });
            return { success: false, error: "Email atau password salah" };
          }
        } catch (error) {
          set({
            isLoading: false,
            error: "Terjadi kesalahan saat login",
          });
          return { success: false, error: "Terjadi kesalahan saat login" };
        }
      },

      register: async (name, email, password) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Mock validation
          if (email && password && name) {
            const user = {
              id: Date.now().toString(),
              email: email,
              name: name,
              avatar: null,
            };

            set({
              user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });

            return { success: true };
          } else {
            set({
              isLoading: false,
              error: "Semua field harus diisi",
            });
            return { success: false, error: "Semua field harus diisi" };
          }
        } catch (error) {
          set({
            isLoading: false,
            error: "Terjadi kesalahan saat registrasi",
          });
          return { success: false, error: "Terjadi kesalahan saat registrasi" };
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      },

      clearError: () => {
        set({ error: null });
      },

      updateProfile: (userData) => {
        const currentUser = get().user;
        if (currentUser) {
          set({
            user: { ...currentUser, ...userData },
          });
        }
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;
