export const fetchImages = async (): Promise<string[]> => {
  try {
    const response = await fetch('https://eclypse-jnvt.onrender.com/api/images');
    const data = await response.json();
    if (data.data && Array.isArray(data.data)) {
      return data.data;
    }
    return [];
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};