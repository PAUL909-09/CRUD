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
    const { flash } = usePage().props as any; // Type assertion for flash (adjust if needed)

    return (
        <div className="mx-auto min-h-screen max-w-screen bg-blue-50 p-6">
            {/* Header */}
            <h1 className="text-brown-800 mb-6 text-center text-6xl font-bold">Users List</h1>

            {/* Flash Message */}
            {flash?.success && <div className="mb-4 rounded border-l-4 border-green-500 bg-green-100 p-4 text-green-700">{flash.success}</div>}

            {/* Add New User Button */}
            <div className="mb-6">
                <Link
                    href="/users/create"
                    className="inline-block rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow transition duration-200 hover:bg-blue-700"
                >
                    Add User
                </Link>
            </div>

            {/* Users Table */}
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="w-full border border-gray-200 bg-white text-left">
                    <thead className="bg-gray-100 text-gray-600">
                        <tr>
                            <th className="px-6 py-3 font-semibold">Name</th>
                            <th className="px-6 py-3 font-semibold">Email</th>
                            <th className="px-6 py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length > 0 ? (
                            users.map((user) => (
                                <tr key={user.id} className="border-t hover:bg-gray-50">
                                    <td className="px-6 py-4">{user.name}</td>
                                    <td className="px-6 py-4">{user.email}</td>
                                    <td className="flex space-x-2 px-6 py-4">
                                        <Link href={`/users/${user.id}`} className="font-medium text-blue-500 hover:text-blue-700">
                                            View
                                        </Link>
                                        <Link href={`/users/${user.id}/edit`} className="font-medium text-yellow-500 hover:text-green-700">
                                            Edit
                                        </Link>
                                        <form
                                            onSubmit={(e) => {
                                                e.preventDefault();
                                                if (confirm('Are you sure you want to delete this user?')) {
                                                    Inertia.delete(`/users/${user.id}`);
                                                }
                                            }}
                                            className="inline"
                                        >
                                            <button type="submit" className="font-medium text-red-500 hover:text-red-700">
                                                Delete
                                            </button>
                                        </form>
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
