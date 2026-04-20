import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api/users";

function ExampleUsersList() {
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <p className="rounded-2xl border border-blue-100 bg-white/70 px-6 py-4 text-blue-800 shadow-md backdrop-blur-xl">
          Loading users...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <p className="rounded-2xl border border-red-100 bg-white/70 px-6 py-4 text-red-600 shadow-md backdrop-blur-xl">
          {error instanceof Error ? error.message : "Something went wrong."}
        </p>
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <p className="rounded-2xl border border-blue-100 bg-white/70 px-6 py-4 text-blue-800 shadow-md backdrop-blur-xl">
          No users found.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[80vh] w-full max-w-3xl flex-col justify-center">
      <div className="rounded-3xl border border-blue-100 bg-white/70 p-8 shadow-md backdrop-blur-xl">
        <h2 className="mb-6 text-center text-2xl font-semibold text-blue-900">
          Example users list
        </h2>

        <ul className="space-y-3">
          {users.map((user) => (
            <li
              key={user.id}
              className="rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3"
            >
              <p className="font-medium text-blue-900">{user.name}</p>
              <p className="text-sm text-blue-700">{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExampleUsersList;
