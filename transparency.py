'''
@Author: dx3906
@Date: 2020-02-03 17:23:29
@LastEditors: dx3906
@LastEditTime: 2020-02-25 13:54:36
'''
from PIL import Image
import os

dir1 = 'resources\\'
dir2 = 'resources\\newfile\\'

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

def transparent_back_for_avg6D5(img ,alphachannel):
    img = img.convert('RGBA')
    alphachannel = alphachannel.convert('RGBA')
    L, H = img.size
    #color_0 = alphachannel.getpixel((0,0))
    for h in range(H):
        for l in range(L):
            dot = (l,h)
            color_1 = alphachannel.getpixel(dot)
            if color_1[:-1] <= (127, 127, 127) and img.getpixel(dot)[:-1] <=(127, 127, 127):
                color_1 = color_1[:-1] + (0,)
                alphachannel.putpixel(dot,color_1)
    return alphachannel

for filename in os.listdir(dir1+'Texture2D\\'):
    if '[alpha]' in filename:
        continue
    if filename.lower() in os.listdir(dir1):
        print('passed ' + filename)
        continue
    print(filename)
    if '#' in filename:
        continue
    if filename in os.listdir(dir2):
        continue
    a = Image.open(dir1+'Texture2D\\'+filename)
    b = Image.open(dir1+'Texture2D\\'+filename[:-4]+'[alpha].png')
    c = transparent_back(a,b)
    c.save(dir2+filename.lower())