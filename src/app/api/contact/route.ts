import { NextResponse } from 'next/server';
import connectDB from '../../utils/mongodb';
import Contact from '../../models/Contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Connect to MongoDB
    await connectDB();
    
    // Create a new contact entry
    const contact = await Contact.create(body);
    
    return NextResponse.json(
      { success: true, message: 'Message sent successfully', data: contact },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error('Error in contact API:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Something went wrong';
    const errorDetails = error instanceof Error ? error : 'Unknown error';
    
    return NextResponse.json(
      { 
        success: false, 
        message: errorMessage,
        error: errorDetails
      },
      { status: 500 }
    );
  }
} 