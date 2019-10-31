from PIL import Image
import os

dir1 = 'C:\\Users\\Helium\\OneDrive\\dreamweaver\\character\\'
dir2 = 'C:\\Users\\Helium\\OneDrive\\dreamweaver\\characters\\'

def transparent_back(img ,alphachannel):
    img = img.convert('RGBA')
    alphachannel = alphachannel.convert('RGBA')
    L, H = img.size
    #color_0 = alphachannel.getpixel((0,0))
    for h in range(H):
        for l in range(L):
            dot = (l,h)
            color_1 = alphachannel.getpixel(dot)
            if color_1[:-1] <= (127, 127, 127):
                color_1 = color_1[:-1] + (0,)
                img.putpixel(dot,color_1)
    return img

for filename in os.listdir(dir1+'Sprite\\'):
    print(filename)
    if '#' in filename:
        continue
    if filename in os.listdir(dir2):
        continue
    a = Image.open(dir1+'Sprite\\'+filename)
    b = Image.open(dir1+'Texture2D\\'+filename[:-4]+'[alpha].png')
    c = transparent_back(a,b)
    c.save(dir2+filename)