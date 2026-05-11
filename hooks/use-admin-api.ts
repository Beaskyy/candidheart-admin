import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { 
  AdminPagedResponse, 
  AdminUserListItem, 
  AdminUserDetail, 
  AdminTransaction, 
  AdminMatch, 
  AdminAnalyticsOverview, 
  AdminAnalyticsTrends 
} from "@/types/api";

export const useAdminUsers = (params: any) => {
  return useQuery({
    queryKey: ["admin-users", params],
    queryFn: async () => {
      const { data } = await apiClient.get<AdminPagedResponse<AdminUserListItem>>("/v1/admin/users/", { params });
      return data;
    },
  });
};

export const useAdminUserDetail = (userId: string) => {
  return useQuery({
    queryKey: ["admin-user", userId],
    queryFn: async () => {
      const { data } = await apiClient.get<AdminUserDetail>(`/v1/admin/users/${userId}/`);
      return data;
    },
    enabled: !!userId,
  });
};

export const useUpdateIdVerification = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ userId, id_verified, decision_reason }: { userId: string, id_verified: boolean, decision_reason?: string }) => {
      const { data } = await apiClient.patch(`/v1/admin/users/${userId}/id-verification/`, {
        id_verified,
        decision_reason,
      });
      return data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ["admin-user", variables.userId] });
      queryClient.invalidateQueries({ queryKey: ["admin-users"] });
      queryClient.invalidateQueries({ queryKey: ["admin-analytics-overview"] });
    },
  });
};

export const useAdminTransactions = (params: any) => {
  return useQuery({
    queryKey: ["admin-transactions", params],
    queryFn: async () => {
      const { data } = await apiClient.get<AdminPagedResponse<AdminTransaction>>("/v1/admin/transactions/", { params });
      return data;
    },
  });
};

export const useAdminMatches = (params: any) => {
  return useQuery({
    queryKey: ["admin-matches", params],
    queryFn: async () => {
      const { data } = await apiClient.get<AdminPagedResponse<AdminMatch>>("/v1/admin/matches/", { params });
      return data;
    },
  });
};

export const useAdminAnalyticsOverview = () => {
  return useQuery({
    queryKey: ["admin-analytics-overview"],
    queryFn: async () => {
      const { data } = await apiClient.get<AdminAnalyticsOverview>("/v1/admin/analytics/overview/");
      return data;
    },
  });
};

export const useAdminAnalyticsTrends = (params: { start_date?: string, end_date?: string }) => {
  return useQuery({
    queryKey: ["admin-analytics-trends", params],
    queryFn: async () => {
      const { data } = await apiClient.get<AdminAnalyticsTrends>("/v1/admin/analytics/trends/", { params });
      return data;
    },
  });
};
