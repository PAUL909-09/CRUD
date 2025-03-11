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

const Show: React.FC<Props> = ({ user }) => {
    return (
        <div className="mx-auto min-h-screen max-w-screen bg-blue-200 p-6">
            {/* Header */}
            <h1 className="text-black-800 mb-6 text-3xl font-bold">User ID: {user.id}</h1>

            {/* User Details Card */}
            <div className="space-y-1 rounded-lg bg-white p-6 shadow-md">
                <div className="flex items-center">
                    <span className="w-1/3 text-sm font-medium text-gray-700">Name:</span>
                    <span className="text-gray-900">{user.name}</span>
                </div>
                <div className="flex items-center">
                    <span className="w-1/3 text-sm font-medium text-gray-700">Email:</span>
                    <span className="text-gray-900">{user.email}</span>
                </div>
            </div>

            {/* Back Button */}
            <div className="mt-6">
                <Link
                    href="/users"
                    className="bg-white-200 inline-block rounded-lg px-6 py-2 font-semibold text-gray-700 shadow transition duration-200 hover:bg-gray-300"
                >
                    Back
                </Link>
            </div>
        </div>
    );
};

export default Show;
