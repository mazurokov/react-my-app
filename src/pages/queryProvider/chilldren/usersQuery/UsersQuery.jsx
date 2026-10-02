import { useState } from "react";
import useUsers from "@pages/queryProvider/hooks/useUsers";
import UserItem from "@pages/queryProvider/chilldren/usersQuery/components/UserItem.jsx";
import UserForm from "@pages/queryProvider/chilldren/usersQuery/components/UserForm.jsx";
import Notice from "@components/Notice/Notice.jsx";
import CommonButton from "@components/CommonButton/CommonButton.jsx";

function UsersQuery() {
  const {
    users,
    isPending,
    isFetching,
    error,
    refetch,
    createMutation,
    deleteMutation,
    updateMutation,
  } = useUsers();

  const [name, setName] = useState("");

  const [editingUserId, setEditingUserId] = useState(null);
  const [editingName, setEditingName] = useState("");

  return (
    <div className="mx-auto max-w-2xl space-y-6 p-6">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        {isPending && <Notice type="info">Loading...</Notice>}

        {isFetching && <Notice type="info">Refreshing users...</Notice>}

        {error && <Notice type="error">Error: {error.message}</Notice>}

        <div className="space-y-2">
          {users.map((user) => (
            <UserItem
              key={user.id}
              user={user}
              isEditing={editingUserId === user.id}
              editingName={editingName}
              onEditingNameChange={setEditingName}
              onEdit={() => {
                setEditingUserId(user.id);
                setEditingName(user.name);
              }}
              onSave={() => {
                updateMutation.mutate(
                  {
                    id: user.id,
                    name: editingName,
                  },
                  {
                    onSuccess: () => {
                      setEditingUserId(null);
                      setEditingName("");
                    },
                  },
                );
              }}
              onDelete={() => deleteMutation.mutate(user.id)}
              isSaving={
                updateMutation.isPending &&
                updateMutation.variables?.id === user.id
              }
              isDeleting={
                deleteMutation.isPending && deleteMutation.variables === user.id
              }
            />
          ))}
        </div>

        {deleteMutation.isError && (
          <Notice type="error">Error: {deleteMutation.error.message}</Notice>
        )}

        <CommonButton
          onClick={refetch}
          disabled={isFetching}
          type="button"
          variant="primary"
          className="mt-4"
        >
          {isFetching ? "Refreshing..." : "Refresh"}
        </CommonButton>
      </div>

      <div className="rounded-3xl border border-white/10 bg-zinc-950/30 p-5 shadow-2xl shadow-violet-500/10 backdrop-blur-xl">
        <UserForm
          name={name}
          onNameChange={setName}
          isPending={createMutation.isPending}
          onSubmit={(e) => {
            e.preventDefault();

            createMutation.mutate(
              {
                name,
              },
              {
                onSuccess: () => {
                  setName("");
                },
              },
            );
          }}
        />
      </div>

      {createMutation.isError && (
        <Notice type="error">Error: {createMutation.error.message}</Notice>
      )}

      {createMutation.isSuccess && <Notice type="success">User created!</Notice>}
    </div>
  );
}

export default UsersQuery;
