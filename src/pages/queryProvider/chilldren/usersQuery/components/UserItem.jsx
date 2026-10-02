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
    <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-zinc-950/30 px-3 py-2 text-sm text-zinc-200 shadow-sm">
      {isEditing ? (
        <>
          <input
            className="w-full rounded-xl border border-white/10 bg-zinc-950/60 px-3 py-2 text-sm text-white outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/20"
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
          <span className="min-w-0 flex-1 truncate font-medium text-white">
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
