import { json } from '@sveltejs/kit';
import { comments } from '$lib/comments';
export function GET(req) {
	return json(
		comments.find((comment) => comment.id.toString() === req.params.id) ??
			`No comment with the id of ${req.params.id}`
	);
}

export async function PATCH(requestEvent) {
	const { params, request } = requestEvent;
	const { id } = params;
	const { text } = await request.json();
	const comment = comments.find((item) => item.id === parseInt(id));

	if (!text) {
		return json({ status: 400, message: `Bad request` });
	} else if (!comment) {
		return json({ status: 404, message: `A comment with id ${id} was not found` });
	}
	comment.text = text;
	return json(comment);
}

export async function DELETE(requestEvent) {
	const { params } = requestEvent;
	const { id } = params;

	const deletedComment = comments.find((item) => item.id === parseInt(id));

	if (deletedComment) {
		const index = comments.findIndex((item) => item.id === parseInt(id));
		comments.splice(index, 1);

		return json(deletedComment);
	}
	return json({ status: 404, message: `A comment with id ${id} was not found` });
}
