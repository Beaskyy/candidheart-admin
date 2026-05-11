import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api-client";
import { ConversationDto, MessageDto, PagedResponse } from "@/types/api";

export const useConversations = () => {
  return useQuery({
    queryKey: ["conversations"],
    queryFn: async () => {
      const { data } = await apiClient.get<ConversationDto[]>("chat/conversations/");
      return data;
    },
  });
};

export const useCreateConversation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (otherUserId: string) => {
      const { data } = await apiClient.post<ConversationDto>("chat/conversations/", {
        other_user_id: otherUserId,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });
};

export const useMessages = (conversationId: string, page = 1) => {
  return useQuery({
    queryKey: ["messages", conversationId, page],
    queryFn: async () => {
      const { data } = await apiClient.get<PagedResponse<MessageDto>>(
        `/chat/conversations/${conversationId}/messages/`,
        { params: { page } }
      );
      return data;
    },
    enabled: !!conversationId,
  });
};

export const useSendMessage = (conversationId: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { content: string; reply_to?: string | null }) => {
      const { data } = await apiClient.post<MessageDto>(
        `/chat/conversations/${conversationId}/messages/`,
        payload
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["messages", conversationId] });
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });
};

export const useSyncMessages = (status: "pending" | "delivered" | "read", page = 1) => {
  return useQuery({
    queryKey: ["sync-messages", status, page],
    queryFn: async () => {
      const { data } = await apiClient.get<PagedResponse<MessageDto>>("chat/messages/", {
        params: { status, page },
      });
      return data;
    },
  });
};

export const useUpdateMessageStatus = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (payload: { message_id: string; status: "delivered" | "read" }) => {
      const { data } = await apiClient.post("chat/messages/status/", payload);
      return data;
    },
    onSuccess: (_, variables) => {
      // Potentially invalidate messages or conversations depending on context
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });
};

export const useRegisterDevice = () => {
  return useMutation({
    mutationFn: async (fcmToken: string) => {
      const { data } = await apiClient.post("devices/register/", { fcm_token: fcmToken });
      return data;
    },
  });
};
