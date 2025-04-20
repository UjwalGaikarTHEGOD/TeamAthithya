import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';
import Nav from './Nav';

const Detect = () => {

    const [file, setFile] = useState(null);
    const [results, setResults] = useState(null);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleImageUpload = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("pest-image", file); // "file" should match the multer field name

        try {
            const res = await axios.post("http://localhost:3000/pest", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setResults(res.data);

            console.log(res.dat)

            alert("File uploaded successfully!");

        } catch (err) {
            console.error(err);
            alert("Upload failed.");
        }
    };

    return (
        <div>
            <Nav />
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-blue-100 flex items-center justify-center p-5">
                <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl p-8 md:p-10">
                    <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
                        🪲 Upload an Image for Pest Detection
                    </h2>

                    <form
                        encType="multipart/form-data"
                        className="space-y-6"
                        onSubmit={handleImageUpload}
                    >
                        <input
                            onChange={handleChange}
                            name="pest-image"
                            type="file"
                            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-100 file:text-emerald-700 hover:file:bg-emerald-200"
                        />

                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-emerald-500 hover:bg-emerald-600 text-white text-lg rounded-md font-semibold transition duration-200 shadow-md"
                        >
                            Upload
                        </button>
                    </form>

                    {/* Displaying the fetched results */}
                    {results && (
                        <div className="mt-8 p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-lg text-gray-700 font-medium">
                            🧠 Detection Result:
                            <span className="ml-2 text-emerald-700 font-semibold">
                                {results.pestName}
                            </span>
                            <ResultCard
                                name={results.pestName}
                                confidence={results.severity}
                                threatLevel={results.threatLevel}
                                impact={results.impact}
                                solutions={results?.ecoFriendlySolutions}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Detect;
