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
    const { flash } = usePage().props as any;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4 md:p-8">
            {/* Container */}
            <div className="mx-auto max-w-7xl">
                {/* Header Section */}
                <div className="mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
                    <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
                        <span className="text-blue-600">Users</span> List
                    </h1>
                    <Link
                        href="/users/create"
                        className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:shadow-xl"
                    >
                        <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                        Add New User
                    </Link>
                </div>

                {/* Flash Message */}
                {flash?.success && (
                    <div className="mb-6 flex items-center rounded-lg bg-green-100 p-4 text-green-800 shadow-md">
                        <svg className="mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{flash.success}</span>
                    </div>
                )}

                {/* Users Table/Card Grid */}
                <div className="overflow-hidden rounded-xl shadow-lg">
                    {/* Desktop Table View */}
                    <div className="hidden md:block">
                        <table className="w-full bg-white">
                            <thead className="bg-gray-800 text-white">
                                <tr>
                                    <th className="px-6 py-4 text-left font-semibold">Name</th>
                                    <th className="px-6 py-4 text-left font-semibold">Email</th>
                                    <th className="px-6 py-4 text-left font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {users.length > 0 ? (
                                    users.map((user) => (
                                        <tr key={user.id} className="transition-colors hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-900">{user.name}</td>
                                            <td className="px-6 py-4 text-gray-700">{user.email}</td>
                                            <td className="px-6 py-4">
                                                <div className="flex space-x-4">
                                                    <Link href={`/users/${user.id}`} className="text-blue-600 transition-colors hover:text-blue-800">
                                                        View
                                                    </Link>
                                                    <Link
                                                        href={`/users/${user.id}/edit`}
                                                        className="text-green-600 transition-colors hover:text-green-800"
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
                                                        className="inline"
                                                    >
                                                        <button type="submit" className="text-red-600 transition-colors hover:text-red-800">
                                                            Delete
                                                        </button>
                                                    </form>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="px-6 py-12 text-center text-gray-500">
                                            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                />
                                            </svg>
                                            <p className="mt-2">No users found</p>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="space-y-4 p-4 md:hidden">
                        {users.length > 0 ? (
                            users.map((user) => (
                                <div key={user.id} className="rounded-lg bg-white p-4 shadow-md">
                                    <h3 className="text-lg font-semibold text-gray-900">{user.name}</h3>
                                    <p className="text-gray-600">{user.email}</p>
                                    <div className="mt-3 flex space-x-4">
                                        <Link href={`/users/${user.id}`} className="text-blue-600 hover:text-blue-800">
                                            View
                                        </Link>
                                        <Link href={`/users/${user.id}/edit`} className="text-green-600 hover:text-green-800">
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
                                            <button type="submit" className="text-red-600 hover:text-red-800">
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="py-8 text-center text-gray-500">
                                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                    />
                                </svg>
                                <p className="mt-2">No users found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
