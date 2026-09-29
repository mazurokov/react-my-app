function UserItem({
  user,
  editingName,
  onEdit,
  onSave,
  onDelete,
  isSaving,
  isDeleting,
  onEditingNameChange,
  isEditing,
}) {
  return (
    <div
      key={user?.id}
      className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 shadow-sm"
    >
      {isEditing ? (
        <>
          <input
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={editingName}
            onChange={(e) => onEditingNameChange(e.target.value)}
          />

          <button disabled={isSaving} onClick={onSave}>
            {isSaving ? "Saving..." : "Save"}
          </button>
        </>
      ) : (
        <>
          <span className="min-w-0 flex-1 truncate font-medium text-gray-800">
            {user?.name}
          </span>

          <button
            onClick={() => {
              onEdit();
            }}
          >
            Edit
          </button>
        </>
      )}

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-md border border-red-200 bg-red-50 px-2.5 py-1.5 text-xs font-medium text-red-700 transition hover:bg-red-100 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isDeleting}
        onClick={() => onDelete()}
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </button>
    </div>
  );
}

export default UserItem;
