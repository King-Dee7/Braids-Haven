import sys
try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

def remove_bg(in_path, out_path):
    img = Image.open(in_path).convert('RGBA')
    width, height = img.size
    pixels = img.load()
    
    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            diff = (255 - r) + (255 - g) + (255 - b)
            
            if diff < 20:
                pixels[x, y] = (255, 255, 255, 0)
            elif diff < 150:
                # Anti-alias blending
                alpha = int((diff / 150.0) * 255)
                # Keep original color but map alpha
                pixels[x, y] = (r, g, b, alpha)
            else:
                pixels[x, y] = (r, g, b, 255)
                
    # Center crop the image if there's too much whitespace
    # Actually, we can just find the bounding box of non-transparent pixels
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)

    img.save(out_path, "PNG")

if __name__ == "__main__":
    remove_bg(
        # Variation 2 which is the abstract monogram
        r"C:\Users\abena\.gemini\antigravity\brain\5b866156-bb39-40bf-bc94-dc281dc57262\braids_haven_logo_var2_1773802308969.png",
        r"c:\Users\abena\OneDrive\Documents\braids haven\public\logo.png"
    )
