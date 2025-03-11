import { Link } from '@inertiajs/react';
import React from 'react';

interface Book {
    id: number;
    title: string;
    author: string;
    isbn: string;
    publication_year: number;
}

interface Props {
    book: Book;
}

const Show: React.FC<Props> = ({ book }) => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4 md:p-8">
            {/* Container */}
            <div className="mx-auto max-w-3xl">
                {/* Header Section */}
                <div className="mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-3xl font-extrabold text-gray-800 md:text-4xl">
                        <span className="text-blue-600">{book.title}</span>
                    </h1>
                    <Link
                        href="/books"
                        className="inline-flex items-center rounded-full bg-white px-6 py-2 font-semibold text-gray-700 shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg"
                    >
                        <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Library
                    </Link>
                </div>

                {/* Book Details Card */}
                <div className="rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                    <div className="grid gap-6 sm:grid-cols-2">
                        {/* Book Icon */}
                        <div className="hidden items-center justify-center sm:flex">
                            <svg className="h-24 w-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                        </div>

                        {/* Details */}
                        <div className="space-y-4">
                            <div className="flex items-center border-b border-gray-200 pb-4">
                                <span className="w-1/3 font-medium text-gray-700">Author</span>
                                <span className="text-gray-900">{book.author}</span>
                            </div>
                            <div className="flex items-center border-b border-gray-200 pb-4">
                                <span className="w-1/3 font-medium text-gray-700">ISBN</span>
                                <span className="text-gray-900">{book.isbn}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-1/3 font-medium text-gray-700">Year</span>
                                <span className="text-gray-900">{book.publication_year}</span>
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-6 flex justify-end space-x-4">
                        <Link
                            href={`/books/${book.id}/edit`}
                            className="inline-flex items-center rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-green-700 hover:shadow-lg"
                        >
                            <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                            Edit Book
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Show;
