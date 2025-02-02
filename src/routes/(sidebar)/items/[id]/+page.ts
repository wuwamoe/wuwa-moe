import { ItemDto } from '$lib/proto/protoc/ItemDto';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = async ({ params, fetch }) => {
  const data = await fetch(
    import.meta.env.VITE_ASSET_BASE_URL +
      `/assets/moe/data/item/${params.id}.bin`,
    { method: 'GET', headers: { 'Content-Type': 'application/protobuf' } }
  );
  if (!data.ok) {
    throw new Error('Error retrieving file');
  }
  const arrayBuffer = await data.arrayBuffer();
  const array = new Uint8Array(arrayBuffer);

  return { data: ItemDto.decode(array) };
};

export const entries: EntryGenerator = () => {
  return [{ id: '1' }];
};
