import json
import os
import re

def get_paras(text):
    if re.findall(r'\((.*?)\)', text.replace('=', ':')) != []:
        text = "{" + re.findall(r'\((.*?)\)', text.replace('=', ':'))[0] + "}"
        return text
    else:
        return "{}"

origintxt = 'C:\\Users\\Helium\\OneDrive\\dreamweaver\\storys\\TextAsset\\level_a001_01_BEG.txt'

with open(origintxt, 'r', encoding='UTF-8') as f:
    lines = f.readlines()

commands = []
sc = ""
usedimg = []

for line in lines:
    line = line.lower()
    print(line)
    if '[dialog' in line:
        sc += 'playground.clearDialog();'
    elif '[playmusic' in line:
        sc += f'audio.playMusic({get_paras(line)});'
    elif '[delay' in line:
        temp = re.findall(r'\(time=(.*?)\)', line)[0]
        sc += f"delay({temp});"
    elif '[name' in line:
        name = '"'+re.findall(r'name=\"(.*?)\"', line)[0]+'"'
        text = '"'+line[line.index(']')+1:].strip()+'"'
        sc += f'playground.drawDialog({{name:{name},text:{text}}});'
        commands.append(sc)
        sc = ""
    elif '[blocker' in line:
        sc += f'blocker.blocker({get_paras(line)});'
    elif '[image(' in line or '[image]' in line:
        if re.findall(r'image=\"(.*?)\"', line):
            imgname = re.findall(r'image=\"(.*?)\"', line)[0]
            if imgname not in usedimg:
                usedimg.append(imgname)
        sc += f'playground.drawImage({get_paras(line)});'
    elif '[imagetween' in line:
        sc += f'playground.imageTween({get_paras(line)});'
    elif '[background' in line:
        if re.findall(r'image=\"(.*?)\"', line):
            imgname = re.findall(r'image=\"(.*?)\"', line)[0]
            if imgname not in usedimg:
                usedimg.append(imgname)
        sc += f'background.showImage({get_paras(line)});'
    elif '[character' in line:
        if re.findall(r'name=\"(.*?)\"', line):
            imgname = re.findall(r'name=\"(.*?)\"', line)[0].replace("#","_")
            if imgname not in usedimg:
                usedimg.append(imgname)
        if re.findall(r'name2=\"(.*?)\"', line):
            imgname = re.findall(r'name2=\"(.*?)\"', line)[0].replace("#","_")
            if imgname not in usedimg:
                usedimg.append(imgname)
        sc += f'playground.drawCharacter({get_paras(line).replace("#","_")});'
    elif '[stopmusic' in line:
        sc += f'audio.stopMusic({get_paras(line)});'
    elif '[camerashake' in line:
        sc += f'background.cameraShake({get_paras(line)});'
    elif '[playsound' in line:
        sc += f'audio.playSound({get_paras(line)});'
    elif '[showitem' in line:
        sc += f'blocker.showItem({get_paras(line)});'
    elif '[hideitem' in line:
        sc += f'blocker.hideItem({get_paras(line)});'

with open("story1.js", 'w', encoding='utf8') as f:
    alltext = "var story = " + json.dumps([usedimg, commands], sort_keys=True, indent=4,  ensure_ascii=False)+';'
    alltext = alltext.replace('\\"', "'")
    f.write(alltext)