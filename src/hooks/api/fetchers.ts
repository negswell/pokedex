export async function getFetcher(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Fetch Get Error:", error);
    throw error.message;
  }
}
