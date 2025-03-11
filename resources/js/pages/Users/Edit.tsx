import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import React from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    user: User;
}

const Edit: React.FC<Props> = ({ user }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        Inertia.put(`/users/${user.id}`, Object.fromEntries(data));
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200 p-8">
            {/* Form Container */}
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
                {/* Header */}
                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">Edit User</h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Field */}
                    <div>
                        <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={user.name}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user name"
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={user.email}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter email"
                        />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-between">
                        <Link
                            href="/users"
                            className="rounded-lg bg-gray-300 px-6 py-2 text-gray-700 shadow-md transition duration-200 hover:bg-gray-400"
                        >
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            className="rounded-lg bg-blue-600 px-6 py-2 text-white shadow-md transition duration-200 hover:bg-blue-700"
                        >
                            Update User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;
