import { formatFileSize } from "../utils/file-size-converter"

interface File {

}

export async function convertImageToFile (
  fileUrl : string, 
  name = "image-file"
) : File {
    try {
      // 1. Fetch the image from the bundled path
      const response = await fetch(fileUrl);
      
      // 2. Convert the response to a Blob
      const blob = await response.blob();
      
      // 3. Create a File object from the Blob
      const file = new File(
        [blob], name, 
        { type: blob.type }
      );
      
      const previewUrl = URL.createObjectURL(file)

      const data = {
        name: file.name,
        size: formatFileSize(file.size),
        lastModified: new Date(file.lastModified),
        type: file.type,
        previewUrl: URL.createObjectURL(file) 
      };

      return data;
      
    } catch (error) {
      console.error('Error converting image:', error);
    }
  };


/**
 * Safely revokes a blob URL if it exists.
 */
export const revokeImagePreview = (url: string | undefined | null) => {
  if (url && url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  }
};

/**
 * using revokes with useEffect
 * // Inside your cleanup hook
  useEffect(() => {
    return () => {
      revokeImagePreview(imageMetadata?.previewUrl);
    };
  }, [imageMetadata]);
 */
