import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments';
export function GET(req) {
	return json(
		comments.find((comment) => comment.id.toString() === req.params.id) ??
			`No comment with the id of ${req.params.id}`
	);
}
