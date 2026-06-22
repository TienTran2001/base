import { AuthResponse, SignInDto } from "@/types/api.types";

export const authService = {
  signIn: async (data: SignInDto): Promise<AuthResponse> => {
    return {
      success: true,
      token: "mock-token",
    };
  },
};
