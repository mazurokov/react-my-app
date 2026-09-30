import CommonButton from "../../../../../components/CommonButton/CommonButton.jsx";
import CommonField from "../../../../../components/CommonField/CommonField.jsx";

function UserForm({ isPending, onSubmit, name, onNameChange }) {
  return (
    <form className="mt-4 space-y-3" onSubmit={onSubmit}>
      <CommonField
        id="userName"
        label="Name"
        type="text"
        placeholder=""
        value={name}
        onChange={(e) => onNameChange(e.target.value)}
      />

      <CommonButton type="submit" variant="success">
        {isPending ? "Creating..." : "Create user"}
      </CommonButton>
    </form>
  );
}

export default UserForm;
