import { NextResponse } from "next/server";
import collection from './collections.json'

export async function GET(request) {
  console.log({url: request.url, request});
  return NextResponse.json(collection);
}

export async function POST(request) {
    let { title, body, message } = await request.json();

    // Remplace le " par un |&
    body = body.replace(/"/g,'|&');
    message = message.replace(/"/g,'|&');

    const template = {
      id: Date.now().toString(),
      title,
      body,
      message,
    };

    collection.push(template);
    console.log({ templateFromServer: template });

    return NextResponse.json({ template, status: 201 });
  }