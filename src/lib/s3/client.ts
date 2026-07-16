const BASE_URL = process.env.NEXT_PUBLIC_DATA_URL!;

export async function getJson<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${BASE_URL}/${path}`, {
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      console.error(`Failed to load ${path}`);

      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
}

export async function getJsonFullLink<T>(link: string): Promise<T | null> {
  try {
    const response = await fetch(`${link}`, {
      next: {
        revalidate: 300,
      },
    });

    if (!response.ok) {
      console.error(`Failed to load ${link}`);

      return null;
    }

    return await response.json();
  } catch (error) {
    console.error(error);

    return null;
  }
}
