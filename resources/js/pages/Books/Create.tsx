import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import React, { useState } from 'react';

const Create: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        const data = new FormData(e.currentTarget);
        Inertia.post('/books', Object.fromEntries(data), {
            onFinish: () => setIsSubmitting(false),
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4 md:p-8">
            {/* Container */}
            <div className="mx-auto max-w-lg">
                {/* Header */}
                <h1 className="mb-8 text-center text-3xl font-extrabold text-gray-800 md:text-4xl">
                    Add <span className="text-blue-600">New Book</span>
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="mb-2 block text-sm font-medium text-gray-700">
                            Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            disabled={isSubmitting}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter book title"
                        />
                    </div>

                    {/* Author */}
                    <div>
                        <label htmlFor="author" className="mb-2 block text-sm font-medium text-gray-700">
                            Author <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            required
                            disabled={isSubmitting}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter author name"
                        />
                    </div>

                    {/* ISBN */}
                    <div>
                        <label htmlFor="isbn" className="mb-2 block text-sm font-medium text-gray-700">
                            ISBN <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="isbn"
                            name="isbn"
                            required
                            disabled={isSubmitting}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter ISBN (e.g., 978-3-16-148410-0)"
                        />
                    </div>

                    {/* Publication Year */}
                    <div>
                        <label htmlFor="publication_year" className="mb-2 block text-sm font-medium text-gray-700">
                            Publication Year <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="number"
                            id="publication_year"
                            name="publication_year"
                            required
                            min="1000"
                            max={new Date().getFullYear()}
                            disabled={isSubmitting}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder={`Enter year (e.g., ${new Date().getFullYear()})`}
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-4 pt-2">
                        <Link
                            href="/books"
                            className="inline-flex items-center rounded-full border border-gray-300 bg-white px-6 py-2.5 font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:bg-gray-100 hover:shadow-md disabled:opacity-50"
                        >
                            <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Cancel
                        </Link>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="inline-flex items-center rounded-full bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isSubmitting ? (
                                <>
                                    <svg className="mr-2 h-5 w-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        />
                                    </svg>
                                    Saving...
                                </>
                            ) : (
                                <>
                                    <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
                                        />
                                    </svg>
                                    Save Book
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;
