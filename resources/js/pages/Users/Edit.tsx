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
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
            {/* Container */}
            <div className="w-full max-w-lg">
                {/* Header */}
                <h1 className="mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">Edit User</h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
                    {/* Name */}
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
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter user name"
                        />
                    </div>

                    {/* Email */}
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
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter email"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-4">
                        <Link
                            href="/users"
                            className="inline-flex items-center rounded-lg bg-gray-200 px-6 py-2 font-semibold text-gray-700 shadow transition duration-200 hover:bg-gray-300"
                        >
                            Back
                        </Link>
                        <button
                            type="submit"
                            className="inline-flex items-center rounded-lg bg-blue-600 px-6 py-2 font-semibold text-white shadow transition duration-200 hover:bg-blue-700"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Edit;
