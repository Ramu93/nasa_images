import { get } from "../lib/get";
import { Result } from "../pages/Results/result.interface";
import { UrlBuilder } from "./UrlBuilder";

export async function search(searchKey: string): Promise<Result[]> {
  let data: Result[] = [];
  const url: string = new UrlBuilder()
    .path("/search")
    .param("q", searchKey)
    .build();

  try {
    const response = await get(url);
    data = response.collection?.items?.map((item: any) => ({
      title: item.data?.[0].title,
      description: item.data?.[0].description,
      image: item.links?.[0].href,
      nasa_id: item.data?.[0].nasa_id,
    }));
  } catch (error) {
    console.error(error);
  }

  return data;
}

export async function getMetadata(nasaId: string): Promise<any> {
  const url = new UrlBuilder().path(`metadata/${nasaId}`).noParams().build();

  try {
    const response = await get(url);
    return response;
  } catch (error) {
    console.error(error);
  }

  return [];
}
