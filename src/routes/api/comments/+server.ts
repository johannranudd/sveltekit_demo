import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments';

export function GET() {
	return json(comments);
}

export async function POST(requestEvenet) {
	const { request } = requestEvenet;
	const { comment } = await request.json();
	const newComment = { id: comments.length + 1, comment };
	return json(newComment, { status: 201 });
}
