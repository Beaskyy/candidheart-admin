import { useMutation, useQuery } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { AuthResponse } from "@/types/api";

export const useSignup = () => {
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.post<AuthResponse>("/v1/auth/signup/", payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", data.access_token);
      }
      return data;
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.post<AuthResponse>("/v1/auth/login/", payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", data.access_token);
      }
      return data;
    },
  });
};

export const useSendOtp = () => {
  return useMutation({
    mutationFn: async (payload: { phone_number: string }) => {
      const { data } = await apiClient.post("/v1/auth/send-otp", payload);
      return data;
    },
  });
};

export const useVerifyOtp = () => {
  return useMutation({
    mutationFn: async (payload: { phone_number: string; otp_code: string }) => {
      const { data } = await apiClient.post<AuthResponse>("/v1/auth/verify-otp", payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", data.access_token);
      }
      return data;
    },
  });
};

export const useSocialSignIn = () => {
  return useMutation({
    mutationFn: async (payload: { provider: string; id_token: string; device_version?: string; device_type?: string }) => {
      const { data } = await apiClient.post<AuthResponse>("/v1/auth/social", payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", data.access_token);
      }
      return data;
    },
  });
};

export const useCheckPhone = () => {
  return useMutation({
    mutationFn: async (payload: { phone_number: string }) => {
      const { data } = await apiClient.post<{ exists: boolean }>("/v1/auth/phone/check/", payload);
      return data;
    },
  });
};

export const useEmailVerifySend = () => {
  return useMutation({
    mutationFn: async () => {
      const { data } = await apiClient.post("/v1/auth/email/verify/send/");
      return data;
    },
  });
};

export const useEmailVerifyConfirm = (token: string) => {
  return useQuery({
    queryKey: ["email-verify", token],
    queryFn: async () => {
      const { data } = await apiClient.get(`/v1/auth/email/verify/`, { params: { token } });
      return data;
    },
    enabled: !!token,
  });
};

export const useTempToken = () => {
  return useMutation({
    mutationFn: async () => {
      const { data } = await apiClient.post<{ access: string }>("/v1/auth/temp-token/");
      return data;
    },
  });
};

export const useRestoreToken = () => {
  return useMutation({
    mutationFn: async (tempToken: string) => {
      const { data } = await apiClient.post<{ access: string }>(
        "/v1/auth/temp-token/restore/",
        {},
        {
          headers: { Authorization: `Bearer ${tempToken}` },
        }
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("access_token", data.access);
      }
      return data;
    },
  });
};

export const usePresignUpload = () => {
  return useMutation({
    mutationFn: async (payload: { content_type: string; filename?: string }) => {
      const { data } = await apiClient.post<{ upload_url: string; key: string; public_url: string }>(
        "/v1/auth/upload/presign/",
        payload
      );
      return data;
    },
  });
};
