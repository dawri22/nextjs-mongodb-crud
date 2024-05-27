import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Movies from "@/models/Movie";

export async function GET(request, { params }) {
  try {
    connectDB();
    const movieFound = await Movies.findById(params.id);

    if (!movieFound)
      return NextResponse.json(
        {
          message: "Movie not found",
        },
        {
          status: 404,
        }
      );
    return NextResponse.json(movieFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
try {
  const movieDeleted = await Movies.findByIdAndDelete(params.id);

  if(!movieDeleted)
    return NextResponse.json({ 
    message: "Movie not found",
   }, {
     status: 404,
   })
   return NextResponse.json(movieDeleted);
} catch (error) {
  return NextResponse.json(error.message, {
    status: 400
  })
}
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
    console.log(data);
    const movieUpdated = await Movies.findByIdAndUpdate(params.id, data, {
      new: true,
    });

    return NextResponse.json(movieUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}
