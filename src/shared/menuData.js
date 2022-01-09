import { searchUrl } from './constants';

export default async function createMenuData() {
	let res = await fetch(searchUrl);
	let imageData = await res.json();
	if (imageData?.hits) {
		return imageData.hits.map((hit) => {
			const price = Math.ceil(Math.random() * 10) + 10;
			return {
				key: hit.id,
				name: 'name?',
				price: price,
				imgUrl: hit.largeImageURL,
				description: 'desc',
			};
		});
	}
}
