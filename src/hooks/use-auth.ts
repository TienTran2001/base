import { authService } from "@/services/auth.services";
import { SignInDto } from "@/types/api.types";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type AuthToastMessages = {
  success?: string;
  error?: string;
};

export const useSignIn = (messages?: AuthToastMessages) => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: SignInDto) => authService.signIn(data),
    onSuccess: (response) => {
      console.log("useSignIn response: ", response);
      if (response.token) {
        localStorage.setItem("token", response.token);
      }

      queryClient.setQueryData(["auth", "user"], response);

      queryClient.invalidateQueries({
        queryKey: ["auth", "user"],
      });

      toast.success(messages?.success || "Login successfully");

      router.push("/");
    },
    onError: (error: any) => {
      const message =
        error.response?.data?.message ?? error.message ?? "Sign in failed";
      toast.error(message);
    },
  });
};
