import { ItemListDto } from '$lib/proto/protoc/ItemMinDto';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
  const data = await fetch(
    import.meta.env.VITE_ASSET_BASE_URL +
      `/assets/moe/data/item/list.bin`,
    { method: 'GET', headers: { 'Content-Type': 'application/protobuf' } }
  );
  if (!data.ok) {
    throw new Error('Error retrieving file')
  }
  const arrayBuffer = await data.arrayBuffer();
  const array = new Uint8Array(arrayBuffer);

  return { data: ItemListDto.decode(array) };
};
