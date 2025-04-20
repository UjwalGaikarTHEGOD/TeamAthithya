import React, { useState } from 'react';
import axios from 'axios';
import ResultCard from './ResultCard';

const Detect = () => {

    const [file, setFile] = useState(null);
    const [results , setResults] = useState(null);

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
            
            console.log(res.data)

            alert("File uploaded successfully!");

        } catch (err) {
            console.error(err);
            alert("Upload failed.");
        }
    };

    return (
        <div className='w-screen'>
            <div className="max-w-1/2 mx-auto p-6 text-center bg-blue-200 rounded">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">🪲 Upload an Image for Pest Detection</h2>

                <form encType="multipart/form-data" className="space-y-6" onSubmit={handleImageUpload}>
                    <input
                        onChange={handleChange}
                        name='pest-image'
                        type="file"
                        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-emerald-100 file:text-emerald-700 hover:file:bg-emerald-200"
                    />

                    <button
                        type="submit"
                        className="w-full py-2 px-4 rounded-md text-white font-semibold transition"
                    >
                        upload
                    </button>
                </form>


                {/* displaying the fetched results */}
                {(results) ? (
                    <div className="mt-6 text-lg font-medium text-gray-800">
                        🧠 Detection Result: <span className="text-emerald-600"></span>
                        <ResultCard name={results.pestName} confidence={results.severity} threatLevel={results.threatLevel} impact={results.impact} solutions={results?.ecoFriendlySolutions}/>
                    </div>
                ):null
                }
            </div>
        </div>
    );
};

export default Detect;
