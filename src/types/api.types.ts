export interface AuthResponse {
  success: boolean;
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export interface SignInDto {
  email: string;
  password: string;
}

export interface SignupDto {
  email: string;
  password: string;
  name: string;
  confirmPassword?: string;
}
