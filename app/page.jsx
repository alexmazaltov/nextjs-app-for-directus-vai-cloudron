import directus from '../lib/directus';
import { readItems } from '@directus/sdk';
import Image from 'next/image'


async function getGlobals() {
	return directus.request(readItems('global'));
} 

export default async function HomePage() {

	const global = await getGlobals();

	return (
		<center>
			<Image src={`/ngi-logo.jpeg`} alt="NEW GENERATION INSTITUTES" width={320} height={320} priority={false} />
			<h1>{global.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: global.description }}></div>
		</center>
	);
}
