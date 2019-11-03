import json
import os
import re

def get_paras(text):
    if re.findall(r'\((.*?)\)', text.replace('=', ':')) != []:
        text = "{" + re.findall(r'\((.*?)\)', text.replace('=', ':'))[0] + "}"
        return text
    else:
        return "{}"

filename = 'level_act4d0_st07'

audios = os.listdir('C:\\Users\\Helium\\OneDrive\\dreamweaver\\heliumoctahelide.github.io\\audio')

origintxt = f'C:\\Users\\Helium\\OneDrive\\dreamweaver\\storys\\TextAsset\\{filename}.txt'

with open(origintxt, 'r', encoding='UTF-8') as f:
    lines = f.readlines()

commands = []
sc = ""
usedimg = []
usedaudio = []

for line in lines:
    originline = line
    line = line.lower()
    if '{@nickname}' in originline:
        originline = originline.replace('{@nickname}', '${nickname}')
        yinghao = '`'
    else:
        yinghao = '"'

    print(line)
    if '[dialog' in line:
        sc += 'playground.clearDialog();'
    elif '[playmusic' in line:
        value = line
        if re.findall(r'key=\"(.*?)\"', line):
            audioname = re.findall(r'key=\"(.*?)\"', line)[0][1:]
            for i in audios:
                if audioname in i:
                    value = value.replace('$'+audioname, i)
                    audioname = i
                    break
            if audioname not in usedaudio:
                usedaudio.append(audioname)
        if re.findall(r'intro=\"(.*?)\"', line):
            audioname = re.findall(r'intro=\"(.*?)\"', line)[0][1:]
            for i in audios:
                if audioname in i:
                    value = value.replace('$'+audioname, i)
                    audioname = i
                    break
            if audioname not in usedaudio:
                usedaudio.append(audioname)
        sc += f'voice.playMusic({get_paras(value)});'
    elif '[delay' in line:
        temp = re.findall(r'\(time=(.*?)\)', line)[0]
        sc += f"delay({temp});"
    elif '[name' in line:
        name = '"'+re.findall(r'name=\"(.*?)\"', line)[0]+'"'
        text = yinghao+originline[line.index(']')+1:].strip()+yinghao
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
        sc += f'voice.stopMusic({get_paras(line)});'
    elif '[camerashake' in line:
        sc += f'background.cameraShake({get_paras(line)});'
    elif '[playsound' in line:
        value = line
        if re.findall(r'key=\"(.*?)\"', line):
            audioname = re.findall(r'key=\"(.*?)\"', line)[0][1:]
            for i in audios:
                if audioname in i:
                    value = value.replace('$'+audioname, i)
                    audioname = i
                    break
            if audioname not in usedaudio:
                usedaudio.append(audioname)
        sc += f'voice.playSound({get_paras(value)});'
    elif '[showitem' in line:
        sc += f'blocker.showItem({get_paras(line)});'
    elif '[hideitem' in line:
        sc += f'blocker.hideItem({get_paras(line)});'
    elif line == '\n':
        pass
    elif line[0] == '/':
        pass
    elif line[0] != '[':
        text = yinghao+originline.strip()+yinghao
        sc += f'playground.drawDialog({{text:{text}}});'
        commands.append(sc)
        sc = ""


with open(f"story-{filename}.js", 'w', encoding='utf8') as f:
    alltext = "var story = " + json.dumps([usedimg, usedaudio, commands], sort_keys=True, indent=4,  ensure_ascii=False)+';'
    alltext = alltext.replace('\\"', "'")
    f.write(alltext)