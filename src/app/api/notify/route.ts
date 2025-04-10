import { NextResponse } from 'next/server';
import db from "../../../lib/db";

export async function POST(request: Request) {
  try {
    // Parse the request body
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error('Error parsing request body:', error);
      return NextResponse.json({ error: 'Invalid JSON in request body' }, { status: 400 });
    }

    const { email } = body;
    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Insert the email into the database
    try {
      const query = 'INSERT INTO notify_release (email) VALUES ($1)';
      const values = [email];
      await db.query(query, values);
    } catch (error) {
      console.error('Error inserting email into database:', error);
      return NextResponse.json({ error: 'Failed to save email to database' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Request received successfully!' }, { status: 200 });

  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to process the request' }, { status: 500 });
  }
}