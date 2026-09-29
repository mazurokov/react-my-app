import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteUser,
  fetchUsers,
  updateUser,
  createUser,
} from "../../../services/usersApi.js";

function useUsers() {
  const queryClient = useQueryClient();
  const invalidateQueries = () => {
    queryClient.invalidateQueries({
      queryKey: ["users"],
    });
  };

  const { data, isPending, isFetching, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5_000,
    gcTime: 10_000,
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,
    onSuccess: invalidateQueries,
  });

  const createMutation = useMutation({
    mutationFn: createUser,
    onSuccess: invalidateQueries,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,

    onSuccess: invalidateQueries,
  });

  return {
    users: data ?? [],
    isPending,
    isFetching,
    error,
    refetch,
    createMutation,
    deleteMutation,
    updateMutation,
  };
}
export default useUsers;
