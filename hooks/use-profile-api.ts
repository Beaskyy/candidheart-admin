import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { UserDto } from "@/types/api";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile-me"],
    queryFn: async () => {
      const { data } = await apiClient.get<UserDto>("profile/me/");
      return data;
    },
  });
};

export const useUpdateProfileBasic = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.put("api/profile/basic/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-me"] });
    },
  });
};

export const useUpdateProfileBackground = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.put("api/profile/background/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-me"] });
    },
  });
};

export const useUpdateProfileFaith = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.put("api/profile/faith/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-me"] });
    },
  });
};

export const useUpdateProfileGoals = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.put("api/profile/goals/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-me"] });
    },
  });
};

export const useUpdateProfileLanguages = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { language_ids: string[] }) => {
      const { data } = await apiClient.put("api/profile/languages/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-me"] });
    },
  });
};

export const useUpdateProfileLocation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: any) => {
      const { data } = await apiClient.put("api/profile/location/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-me"] });
    },
  });
};

export const useUpdateProfileOnboardingStage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (onboardingStage: string) => {
      const { data } = await apiClient.patch("api/profile/onboarding-stage/", { onboarding_stage: onboardingStage });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-me"] });
    },
  });
};

export const useProfilePhotos = () => {
  return useQuery({
    queryKey: ["profile-photos"],
    queryFn: async () => {
      const { data } = await apiClient.get<any[]>("api/profile/photos/");
      return data;
    },
  });
};

export const useAddProfilePhoto = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { image_url: string; is_headshot: boolean }) => {
      const { data } = await apiClient.post("api/profile/photos/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-photos"] });
      queryClient.invalidateQueries({ queryKey: ["profile-me"] });
    },
  });
};

export const useDeleteProfilePhoto = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (photoId: string) => {
      await apiClient.delete(`/api/profile/photos/${photoId}/`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile-photos"] });
      queryClient.invalidateQueries({ queryKey: ["profile-me"] });
    },
  });
};

export const useAcceptAgreement = () => {
  return useMutation({
    mutationFn: async (agreementType: string) => {
      const { data } = await apiClient.post("api/agreements/accept/", { agreement_type: agreementType });
      return data;
    },
  });
};
