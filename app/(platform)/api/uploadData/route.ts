// Assuming this code is within a file in the Next.js API routes folder, e.g., pages/api/uploadData.ts
// Import the necessary modules and the uploadData function

import { NextResponse } from "next/server";
import fs from 'fs';
import path from 'path';
import { uploadData } from "@/actions/upload-data";

export async function POST() {
    try {
        // Specify the path to your JSON file
        const dataFilePath = path.resolve('data', 'south-korea.json');
        
        // Read the JSON data from the file
        const jsonData = JSON.parse(fs.readFileSync(dataFilePath, 'utf-8'));
        
        // Pass the JSON data to your uploadData function
        const result = await uploadData(); // Use the JSON data as an argument
        
        return new NextResponse(JSON.stringify({ message: result }), { status: 200 });
    } catch (error) {
        console.error("Failed to upload data:", error);
        return new NextResponse(JSON.stringify({ message: "Failed to upload data" }), { status: 500 });
    }
}



