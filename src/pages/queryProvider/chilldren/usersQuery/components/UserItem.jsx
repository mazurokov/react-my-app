import CommonButton from "../../../../../components/CommonButton/CommonButton.jsx";

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
    <div className="flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700 shadow-sm">
      {isEditing ? (
        <>
          <input
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            value={editingName}
            onChange={(e) => onEditingNameChange(e.target.value)}
          />

          <CommonButton
            type="button"
            variant="primary"
            disabled={isSaving}
            onClick={onSave}
          >
            {isSaving ? "Saving..." : "Save"}
          </CommonButton>
        </>
      ) : (
        <>
          <span className="min-w-0 flex-1 truncate font-medium text-gray-800">
            {user?.name}
          </span>

          <CommonButton type="button" variant="outline" onClick={onEdit}>
            Edit
          </CommonButton>
        </>
      )}

      <CommonButton
        onClick={onDelete}
        disabled={isDeleting}
        type="button"
        variant="danger"
      >
        {isDeleting ? "Deleting..." : "Delete"}
      </CommonButton>
    </div>
  );
}

export default UserItem;
