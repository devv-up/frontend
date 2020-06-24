import { http } from "@/utils/request";
import { SignedInUser } from "@/store/models/user";

export const signinWith = (data: Record<string, string | number>) =>
  http.request<SignedInUser>({
    url: "user/auth/login/",
    method: "POST",
    data: data
  });
