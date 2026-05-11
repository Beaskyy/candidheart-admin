import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { CuratedMatchDto, MatchRequestDto, ActiveMatchDto } from "@/types/api";

export const useDiscoverFeed = (page = 1, pageSize = 10) => {
  return useQuery({
    queryKey: ["discover", page, pageSize],
    queryFn: async () => {
      const { data } = await apiClient.get<CuratedMatchDto[]>("/v1/discover", {
        params: { page, page_size: pageSize },
      });
      return data;
    },
  });
};

export const useAcceptDiscoverMatch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data } = await apiClient.post<{
        status: string;
        message: string;
        is_mutual_match: boolean;
      }>(`/v1/discover/matches/${id}/accept`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discover"] });
      queryClient.invalidateQueries({ queryKey: ["match-requests"] });
      queryClient.invalidateQueries({ queryKey: ["active-matches"] });
    },
  });
};

export const usePassDiscoverMatch = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data } = await apiClient.post(`/v1/discover/matches/${id}/pass`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["discover"] });
    },
  });
};

export const useMatchRequests = () => {
  return useQuery({
    queryKey: ["match-requests"],
    queryFn: async () => {
      const { data } = await apiClient.get<MatchRequestDto[]>("/v1/matches/requests");
      return data;
    },
  });
};

export const useActiveMatches = () => {
  return useQuery({
    queryKey: ["active-matches"],
    queryFn: async () => {
      const { data } = await apiClient.get<ActiveMatchDto[]>("/v1/matches/active");
      return data;
    },
  });
};

export const useWeeklyMatches = () => {
  return useQuery({
    queryKey: ["weekly-matches"],
    queryFn: async () => {
      const { data } = await apiClient.get<any[]>("/v1/matches/weekly/");
      return data;
    },
  });
};

export const useAcceptMatchRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { data } = await apiClient.post(`/v1/matches/requests/${id}/accept`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["match-requests"] });
      queryClient.invalidateQueries({ queryKey: ["active-matches"] });
    },
  });
};

export const useDeclineMatchRequest = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id, reason }: { id: string; reason?: string }) => {
      const { data } = await apiClient.post(`/v1/matches/requests/${id}/decline`, { reason });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["match-requests"] });
    },
  });
};

export const useRequestDate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (matchId: string) => {
      const { data } = await apiClient.post(`/v1/matches/${matchId}/request-date`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["active-matches"] });
    },
  });
};

export const useAcceptDate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (matchId: string) => {
      const { data } = await apiClient.post(`/v1/matches/${matchId}/accept-date`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["active-matches"] });
    },
  });
};

export const useDeclineDate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (matchId: string) => {
      const { data } = await apiClient.post(`/v1/matches/${matchId}/decline-date`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["active-matches"] });
    },
  });
};

export const useBreakUp = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (matchId: string) => {
      const { data } = await apiClient.post(`/v1/matches/${matchId}/break-up`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["active-matches"] });
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });
};
