import { AuthResponse, SignInDto } from "@/types/api.types";

export const authService = {
  signIn: async (data: SignInDto): Promise<AuthResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    return {
      success: true,
      token: "mock-token",
      user: {
        name: "tien",
        email: "[EMAIL_ADDRESS]",
      },
    };
  },
};
