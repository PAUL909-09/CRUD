// import { Inertia } from '@inertiajs/inertia';
// import { Link } from '@inertiajs/react';
// import React from 'react';

// interface Book {
//     id: number;
//     title: string;
//     author: string;
//     isbn: string;
//     publication_year: number;
// }

// interface Props {
//     book: Book;
// }

// const Edit: React.FC<Props> = ({ book }) => {
//     const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         const data = new FormData(e.currentTarget);
//         Inertia.put(`/books/${book.id}`, Object.fromEntries(data));
//     };

//     return (
//         <div>
//             <h1>Edit Book</h1>
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Title:</label>
//                     <input type="text" name="title" defaultValue={book.title} required />
//                 </div>
//                 <div>
//                     <label>Author:</label>
//                     <input type="text" name="author" defaultValue={book.author} required />
//                 </div>
//                 <div>
//                     <label>ISBN:</label>
//                     <input type="text" name="isbn" defaultValue={book.isbn} required />
//                 </div>
//                 <div>
//                     <label>Publication Year:</label>
//                     <input type="number" name="publication_year" defaultValue={book.publication_year} required />
//                 </div>
//                 <button type="submit">Update</button>
//             </form>
//             <Link href="/books">Back</Link>
//         </div>
//     );
// };

// export default Edit;
import { Inertia } from '@inertiajs/inertia';
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

const Edit: React.FC<Props> = ({ book }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        Inertia.put(`/books/${book.id}`, Object.fromEntries(data));
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 p-6">
            {/* Container */}
            <div className="w-full max-w-lg">
                {/* Header */}
                <h1 className="font-poppins mb-8 text-center text-3xl font-bold text-gray-800 md:text-4xl">Edit Book</h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-gray-100 bg-white p-8 shadow-lg">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="mb-1 block text-sm font-medium text-gray-700">
                            Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            name="title"
                            defaultValue={book.title}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 transition duration-150 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter book title"
                        />
                    </div>

                    {/* Author */}
                    <div>
                        <label htmlFor="author" className="mb-1 block text-sm font-medium text-gray-700">
                            Author
                        </label>
                        <input
                            type="text"
                            id="author"
                            name="author"
                            defaultValue={book.author}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 transition duration-150 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter author name"
                        />
                    </div>

                    {/* ISBN */}
                    <div>
                        <label htmlFor="isbn" className="mb-1 block text-sm font-medium text-gray-700">
                            ISBN
                        </label>
                        <input
                            type="text"
                            id="isbn"
                            name="isbn"
                            defaultValue={book.isbn}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 transition duration-150 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter ISBN"
                        />
                    </div>

                    {/* Publication Year */}
                    <div>
                        <label htmlFor="publication_year" className="mb-1 block text-sm font-medium text-gray-700">
                            Publication Year
                        </label>
                        <input
                            type="number"
                            id="publication_year"
                            name="publication_year"
                            defaultValue={book.publication_year}
                            required
                            className="w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 placeholder-gray-400 transition duration-150 focus:border-transparent focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter publication year"
                        />
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-end space-x-4">
                        <Link
                            href="/books"
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