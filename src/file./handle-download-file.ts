import html2canvas from "html2canvas-pro";

const now = new Date();

export const handleDownload = async (elementRef) => {
  const element = elementRef.current;
  if (!element) return;

  const canvas = await html2canvas(element, {
    backgroundColor: "#000000",
    scale: 2,
    useCORS: true, // Permits loading cross-origin images
    allowTaint: false, // Keeps the canvas "clean" so you can call toDataURL()
    logging: true, // Inspects console warnings if things still fail
  });

  // Convert canvas data to JPEG format
  const dataUrl = canvas.toDataURL("image/png", 1.0);

  // Create programmatic download link
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `image_${now.toLocaleString()}`;
  // document.body.appendChild(link);
  link.click();
  // document.body.removeChild(link);
};

