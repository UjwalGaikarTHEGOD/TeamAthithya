import React from "react";

function Dashboard() {
    return (
        <div className="p-6 bg-gray-900 min-h-screen w-screen grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white">
            {/* Live Detection */}
            <div className="bg-gray-800 rounded-2xl shadow-md p-4 col-span-1">
                <h2 className="text-xl font-semibold mb-4">Live Detection</h2>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Grasshopper_in_the_grass.jpg/640px-Grasshopper_in_the_grass.jpg"
                    alt="Grasshopper"
                    className="w-full h-48 object-cover rounded-lg mb-2"
                />
                <div className="text-center text-white bg-gray-700 px-3 py-1 rounded-md inline-block">Grasshopper</div>
            </div>

            {/* Pest Detection Summary */}
            <div className="bg-gray-800 rounded-2xl shadow-md p-4 col-span-1">
                <h2 className="text-xl font-semibold mb-4">Pest Detection Summary</h2>
                <ul className="space-y-2">
                    <li className="flex justify-between"><span>🐜 Ants</span><span>—</span></li>
                    <li className="flex justify-between"><span>🦗 Grasshoppers</span><span>—</span></li>
                    <li className="flex justify-between"><span>🪰 Flies</span><span>23</span></li>
                    <li className="flex justify-between"><span>🪳 Cockroach</span><span>5</span></li>
                </ul>
            </div>

            {/* Detection Trends */}
            <div className="bg-gray-800 rounded-2xl shadow-md p-4 col-span-1">
                <h2 className="text-xl font-semibold mb-4">Detection Trends</h2>
                <img
                    src="https://via.placeholder.com/300x150.png?text=Detection+Trends"
                    alt="Detection Trends Graph"
                    className="w-full h-36 object-contain"
                />
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-800 rounded-2xl shadow-md p-4 col-span-1">
                <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
                <ul className="space-y-2">
                    <li>11:32 AM - Grasshopper detected</li>
                    <li>10:50 AM - Ants detected</li>
                    <li>8:15 AM - Ants detected</li>
                </ul>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-2xl shadow-md p-4 col-span-1">
                <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
                <div className="flex space-x-4">
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-500">Report Pest</button>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Download Data</button>
                    <a href="./detect">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Detect pest</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;