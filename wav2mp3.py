'''
@Author: dx3906
@Date: 2020-04-21 13:17:26
@LastEditors: dx3906
@LastEditTime: 2020-04-21 13:40:23
'''

import os

dir1 = 'audio/AudioClip/'
dir2 = 'audio/'

for filename in os.listdir(dir1):
    wav = filename
    mp3 = filename[:-3]+'mp3'
    if mp3 in os.listdir(dir2):
        print(f"===========")
        print(f"===========")
        print(f"===========")
        print(f"PASSED {wav}")
        print(f"===========")
        print(f"===========")
        print(f"===========")
        continue
    os.system(f"ffmpeg -i {dir1+wav} -vn -ar 44100 -ac 2 -b:a 192k {dir2+mp3}")
    print(f"ffmpeg {wav}")