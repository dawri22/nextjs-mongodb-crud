import { NextResponse } from "next/server";
import { connectDB } from "./../../../utils/mongoose";
import Movies from "./../../../models/Movie";

export async function GET() {
  connectDB()
  const movies = await Movies.find()
  return NextResponse.json(movies);
}

export async function POST(request) {
  try {
    const data = await request.json();
    const newMovie = new Movies(data);
    const saveMovie = await newMovie.save();

    return NextResponse.json(saveMovie);
  } catch (error) {
    return NextResponse.json(error.message, {
        status: 400
    })
  }
}
