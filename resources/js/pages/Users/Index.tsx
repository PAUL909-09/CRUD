import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    users: User[];
}

const Index: React.FC<Props> = ({ users }) => {
    const { flash } = usePage().props as any; // Type assertion for flash messages

    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 p-8">
            {/* Header */}
            <h1 className="mb-6 text-center text-4xl font-extrabold text-gray-800">Users List</h1>

            {/* Flash Message */}
            {flash?.success && (
                <div className="mb-6 rounded-lg border-l-4 border-green-600 bg-green-100 p-4 text-green-800 shadow-md">{flash.success}</div>
            )}

            {/* Action Bar */}
            <div className="mb-6 flex justify-end">
                <Link
                    href="/users/create"
                    className="rounded-lg bg-blue-600 px-6 py-2 text-white shadow-md transition-all duration-200 hover:bg-blue-700"
                >
                    + Add User
                </Link>
            </div>

            {/* Users Table */}
            <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                <table className="w-full border-collapse bg-white text-left">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-6 py-4 font-semibold">Name</th>
                            <th className="px-6 py-4 font-semibold">Email</th>
                            <th className="px-6 py-4 text-center font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user, index) => (
                                <tr
                                    key={user.id}
                                    className={`border-t transition duration-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
                                >
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center space-x-4">
                                            <Link
                                                href={`/users/${user.id}`}
                                                className="rounded-md bg-blue-500 px-4 py-1 text-white transition duration-200 hover:bg-blue-600"
                                            >
                                                View
                                            </Link>
                                            <Link
                                                href={`/users/${user.id}/edit`}
                                                className="rounded-md bg-yellow-500 px-4 py-1 text-white transition duration-200 hover:bg-yellow-600"
                                            >
                                                Edit
                                            </Link>
                                            <form
                                                onSubmit={(e) => {
                                                    e.preventDefault();
                                                    if (confirm('Are you sure you want to delete this user?')) {
                                                        Inertia.delete(`/users/${user.id}`);
                                                    }
                                                }}
                                            >
                                                <button
                                                    type="submit"
                                                    className="rounded-md bg-red-500 px-4 py-1 text-white transition duration-200 hover:bg-red-600"
                                                >
                                                    Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                                    No users found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Index;
