export interface AuthResponse {
  success: boolean;
  token: string;
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
