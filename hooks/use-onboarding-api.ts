import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { OnboardingConfig, OnboardingStatus, OnboardingIdentity, OnboardingHealth, OnboardingHeritage, OnboardingFaith, OnboardingGoals, OnboardingDealBreakers, OnboardingPhotos, OnboardingEducation } from "@/types/api";

export const useOnboardingConfig = () => {
  return useQuery({
    queryKey: ["onboarding-config"],
    queryFn: async () => {
      const { data } = await apiClient.get<OnboardingConfig>("onboarding/config/");
      return data;
    },
  });
};

export const useOnboardingStatus = () => {
  return useQuery({
    queryKey: ["onboarding-status"],
    queryFn: async () => {
      const { data } = await apiClient.get<OnboardingStatus>("onboarding/status/");
      return data;
    },
  });
};

export const useUpdateOnboardingIdentity = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: OnboardingIdentity) => {
      const { data } = await apiClient.post("onboarding/identity/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};

export const useUpdateOnboardingHealth = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: OnboardingHealth) => {
      const { data } = await apiClient.post("onboarding/health/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};

export const useUpdateOnboardingHeritage = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: OnboardingHeritage) => {
      const { data } = await apiClient.post("onboarding/heritage/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};

export const useUpdateOnboardingFaith = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: OnboardingFaith) => {
      const { data } = await apiClient.post("onboarding/faith/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};

export const useUpdateOnboardingGoals = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: OnboardingGoals) => {
      const { data } = await apiClient.post("onboarding/goals/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};

export const useUpdateOnboardingDealBreakers = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: OnboardingDealBreakers) => {
      const { data } = await apiClient.post("onboarding/dealbreakers/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};

export const useUpdateOnboardingPhotos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: OnboardingPhotos) => {
      const { data } = await apiClient.post("onboarding/photos/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};

export const useUpdateOnboardingTerms = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { accepted_terms: boolean }) => {
      const { data } = await apiClient.post("onboarding/terms/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};

export const useOnboardingIdScan = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { face_url: string; id_type: string; document_url: string; profile_id?: string }) => {
      const { data } = await apiClient.post<{ verified: boolean; decision: string; reference_id?: string }>(
        "onboarding/id-verification/scan/",
        payload
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};

export const useUpdateOnboardingEducation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: OnboardingEducation) => {
      const { data } = await apiClient.post("onboarding/education/", payload);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["onboarding-status"] });
    },
  });
};
