function UserItem({
  user,
  editingUserId,
  editingName,
  setEditingUserId,
  setEditingName,
  updateMutation,
  deleteMutation,
}) {
  const isUpdatingThisUser =
    updateMutation?.isPending && updateMutation?.variables?.id === user?.id;

  return (
    <div
      key={user?.id}
      className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 shadow-sm"
    >
      {editingUserId === user?.id ? (
        <>
          <input
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={editingName}
            onChange={(e) => setEditingName(e.target.value)}
          />

          <button
            disabled={isUpdatingThisUser}
            onClick={() =>
              updateMutation.mutate(
                {
                  id: user?.id,
                  name: editingName,
                },
                {
                  onSuccess: () => {
                    setEditingUserId(null);
                    setEditingName("");
                  },
                },
              )
            }
          >
            {isUpdatingThisUser ? "Saving..." : "Save"}
          </button>
        </>
      ) : (
        <>
          <span className="min-w-0 flex-1 truncate font-medium text-gray-800">
            {user?.name}
          </span>

          <button
            onClick={() => {
              setEditingUserId(user?.id);
              setEditingName(user?.name);
            }}
          >
            Edit
          </button>
        </>
      )}

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={
          deleteMutation?.isPending && deleteMutation?.variables === user.id
        }
        onClick={() => deleteMutation.mutate(user.id)}
      >
        {deleteMutation?.isPending && deleteMutation?.variables === user.id
          ? "Deleting..."
          : "Delete"}
      </button>
    </div>
  );
}

export default UserItem;
