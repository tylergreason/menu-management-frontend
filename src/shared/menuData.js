import { searchUrl } from './constants';

export default async function createMenuData() {
	let res = await fetch(searchUrl);
	let imageData = await res.json();
	if (imageData?.hits) {
		return imageData.hits.map((hit) => {
			const price = Math.ceil(Math.random() * 10) + 10;
			const tags = hit.tags.split(', ');
			const name = tags[0] ? tags[0] : 'Name';
			const imgAlt = tags
				? 'Food photo, tagged ' + hit.tags
				: 'Food photo';
			return {
				key: hit.id,
				name: name,
				price: price,
				imgUrl: hit.largeImageURL,
				description: hit.tags,
				tags: hit.tags,
				imgAlt: imgAlt,
			};
		});
	}
}
