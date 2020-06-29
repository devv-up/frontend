import { http } from "@/utils/request";
import { SignedInUser } from "@/store/models/user";

export const signinWith = (data: Record<string, string | number>) =>
  http.request<SignedInUser>({
    url: "user/auth/login/",
    method: "POST",
    data: data,
    withCredentials: true
  });

export const signupWith = (data: Record<string, string | number>) =>
  http.request({
    url: "user/auth/registration/",
    method: "POST",
    data: data
  });
