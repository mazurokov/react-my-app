import {useMutation, useQuery} from "@tanstack/react-query";
import {deleteUser, fetchUsers} from "../../../services/usersApi.js";


function useUsers() {
  const { data, isPending, isFetching, error, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 5_000,
    gcTime: 10_000,
  });

  const updateMutation = useMutation({
    mutationFn: updateUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });

      setEditingUserId(null);
      setEditingName("");
    },
  });

  const createMutation = useMutation({
    mutationFn: createUser,

    onSuccess: () => {
      setName("");

      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteUser,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["users"],
      });
    },
  });

  return {
    data,
    isPending,
    createMutation,
    deleteMutation,
    updateMutation,
  };
}