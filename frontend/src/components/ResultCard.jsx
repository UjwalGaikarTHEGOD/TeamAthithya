import React from 'react';


function ResultCard({ name, confidence, threatLevel, impact, solutions }) {
    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-6 my-4 border border-green-300">
            <h2 className="text-2xl font-bold text-green-700 mb-2">{name}</h2>
            <p className="text-gray-600 mb-1">
                <strong>Prediction Confidence:</strong> {confidence}
            </p>
            <p className="text-gray-600 mb-1">
                <strong>Threat Level:</strong> <span className="text-red-600">{threatLevel}</span>
            </p>
            <p className="text-gray-600 mb-3">
                <strong>Impact on Crop:</strong> {impact}
            </p>
            <div className="bg-green-50 p-4 rounded-xl">
                <h3 className="text-lg font-semibold text-green-800 mb-1">🌿 Eco-Friendly Solutions</h3>
                <ul className="list-disc list-inside text-sm text-gray-700">
                    {
                        solutions.map((element)=> {
                            return <li>
                                <div>{element}</div>
                            </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}

export default ResultCard;