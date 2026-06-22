import { authService } from "@/services/auth.services";
import { SignInDto } from "@/types/api.types";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";

type AuthToastMessages = {
  success?: string;
  error?: string;
};

export const useSignIn = (messages?: AuthToastMessages) => {
  return useMutation({
    mutationFn: (data: SignInDto) => authService.signIn(data),
    onSuccess: (response) => {
      if (response.token) {
        localStorage.setItem("token", response.token);
      }
    },
  });
};
