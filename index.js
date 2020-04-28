import cookie from 'cookie';

addEventListener('fetch', event => {
	event.respondWith(onFetch(event));
});

async function onFetch (event) {
	const request = event.request;
	const cookiesHeader = request.headers.get('Cookie');
	const cookies = cookie.parse(cookiesHeader);
	return new Response('Hello workers', {
		status: 200
	});
}