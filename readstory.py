import json
import os
import re

story_variables = {
  "axia_name" : "小小小天使",
  "bg_width" : 0.5,
  "bg_height" : 1.5,

  "avatar_sys" : "system_100_mys",
  "avatar_doberm" : "char_130_doberm",
  "avatar_jesica" : "char_235_jesica",
  "avatar_amiya" : "char_002_amiya",
  "avatar_closure" : "npc_007_closure",
  "avatar_adnach" : "char_211_adnach",
  "avatar_ansel" : "char_212_ansel",
  "avatar_w" : "npc_113_cqbw",
  "avatar_fang" : "char_123_fang",
  "avatar_beagle" : "char_122_beagle",
  "avatar_hibisc" : "char_120_hibisc",
  "avatar_lava" : "char_121_lava",
  "avatar_melan" : "char_208_melan",
  "avatar_ace" : "npc_007_ace",
  "avatar_nearl" : "char_148_nearl",
  "avatar_grani" : "char_220_grani",
  "avatar_npchunt" : "npc_012_hunter",
  "avatar_krol" : "npc_012_krol",
  "avatar_skadi" : "char_263_skadi",

   "f_tut_black" : 0.6,
  "f_lower_dialog_pos_x": -568,
  "f_lower_dialog_pos_y": -217,

  "f_delay_single_frame": 0.02,
  "f_delay_start_battle_btn": 0.8,
  "f_delay_scroll_stage_on_map": 0.8,
  "f_delay_focus_building_broom": 0.02,

  "ill_amiya_normal" : "char_002_amiya_1",

  "babel_intro" : "Sound_Beta_2/Music/beta1_180603/m_dia_babel_intro",
  "babel_loop" : "Sound_Beta_2/Music/beta1_180603/m_dia_babel_loop",

  "ekg_loop" : "Sound_Beta_2/Dialog/d_avg_ekg_loop",

  "radio" : "Sound_Beta_2/Dialog/d_avg_radio",
  "phone" : "Sound_Beta_2/Dialog/d_avg_phone",
  "slideshow" : "Sound_Beta_2/Dialog/d_avg_slideshow",
  "opendoor" : "Sound_Beta_2/Dialog/d_avg_dooropen",
  "d_gen_walk_n" : "Sound_Beta_2/AVG/d_gen_walk_n",
  "d_gen_explo_n" : "Sound_Beta_2/AVG/d_gen_explo_n",
  "d_gen_thunders_amb" : "Sound_Beta_2/AVG/d_gen_thunders_amb",
  "d_sp_chixiaobadao" : "Sound_Beta_2/AVG/d_sp_chixiaobadao",
  "d_gen_signalbomb" : "Sound_Beta_2/AVG/d_gen_signalbomb",
  "d_gen_surfacefrozen" : "Sound_Beta_2/AVG/d_gen_surfacefrozen",

  "d_gen_soldiersrun" : "Sound_Beta_2/AVG/d_gen_soldiersrun",

  "d_sp_ballista" : "Sound_Beta_2/AVG/d_sp_ballista",
  "d_gen_dooropen" : "Sound_Beta_2/AVG/d_gen_dooropen",
  "d_gen_doorclose" : "Sound_Beta_2/AVG/d_gen_doorclose",
  "d_sp_amiyakilling" : "Sound_Beta_2/AVG/d_sp_amiyakilling",
  "d_gen_transmissionget" : "Sound_Beta_2/AVG/d_gen_transmissionget",
  "d_gen_heartbeat" : "Sound_Beta_2/AVG/d_gen_heartbeat",
  "p_imp_arrow_h": "Sound_Beta_2/Player/p_imp/p_imp_arrow_h",


  "beach" : "Sound_Beta_2/AVG/d_amb_beach",
  "doorclosequite" : "Sound_Beta_2/AVG/d_gen_doorclosequite",
  "doorknockquite" : "Sound_Beta_2/AVG/d_gen_doorknockquite",
  "dooropenquite" : "Sound_Beta_2/AVG/d_gen_dooropenquite",
  "fireworks" : "Sound_Beta_2/AVG/d_gen_fireworks",
  "leaveshake" : "Sound_Beta_2/AVG/d_gen_leaveshake",
  "phonevibration" : "Sound_Beta_2/AVG/d_gen_phonevibration",
  "runsand" : "Sound_Beta_2/AVG/d_gen_runsand",
  "smallearthquake" : "Sound_Beta_2/AVG/d_gen_smallearthquake",
  "livecrowd" : "Sound_Beta_2/AVG/d_gen_livecrowd",
  "blizzard" : "Sound_Beta_2/AVG/d_amb_blizzard",
  "pistol" : "Sound_Beta_2/AVG/d_gen_pistol",

  "e_imp_sword_h" : "Sound_Beta_2/Enemy/e_imp/e_imp_sword_h",

  "e_skill_skulsrshot" : "Sound_Beta_2/Enemy/e_skill/e_skill_skulsrshot",
  "e_skill_skulsrexplo" : "Sound_Beta_2/Enemy/e_skill/e_skill_skulsrexplo",
  "e_skill_skulsrsword" : "Sound_Beta_2/Enemy/e_skill/e_skill_skulsrsword",

  "p_skill_chimera":"Sound_Beta_2/Player/p_skill/p_skill_chimera",
  "p_skill_spiritexplo":"Sound_Beta_2/Player/p_skill/p_skill_spiritexplo",

  "b_char_defboost":"Sound_Beta_2/Battle/b_char/b_char_defboost",

  "tokenset" : "Sound_Beta_2/Battle/b_char/b_char_tokenset",
  "getcast" : "Sound_Beta_2/Battle/b_char/b_char_getcast",
  "flashback" : "Sound_Beta_2/General/g_ui/g_ui_stagepush",
  "e_atk_arrow_h" : "Sound_Beta_2/Enemy/e_atk/e_atk_arrow_h",
  "e_atk_blunt_n" : "Sound_Beta_2/Enemy/e_atk/e_atk_blunt_n",
  "e_atk_magic_n" : "Sound_Beta_2/Enemy/e_atk/e_atk_magic_n",
  "e_atk_saw_n_1" : "Sound_Beta_2/Enemy/e_atk/e_atk_saw_n_1",
  "e_atk_saw_n_2" : "Sound_Beta_2/Enemy/e_atk/e_atk_saw_n_2",
  "b_char_rockexplo" : "Sound_Beta_2/Battle/b_char/b_char_rockexplo",
  "p_imp_amiyamag_h" : "Sound_Beta_2/Player/p_imp/p_imp_amiyamag_h",
  "char_emp" :"Sound_Beta_2/Battle/b_char/b_char_emp",


  "p_imp_axe_h" : "Sound_Beta_2/Player/p_imp/p_imp_axe_h",
  "p_imp_grenade_n" : "Sound_Beta_2/Player/p_imp/p_imp_grenade_n",
  "p_imp_amiyamag_h" : "Sound_Beta_2/Player/p_imp/p_imp_amiyamag_h",
  "p_imp_whip_h" : "Sound_Beta_2/Player/p_imp/p_imp_whip_h",
  "p_imp_blunt_h" : "Sound_Beta_2/Player/p_imp/p_imp_blunt_h",
  "p_imp_sword_n" : "Sound_Beta_2/Player/p_imp/p_imp_sword_n",
  "p_imp_tekken_h" : "Sound_Beta_2/Player/p_imp/p_imp_tekken_h",
  "p_imp_naginata_elc" : "Sound_Beta_2/Player/p_imp/p_imp_naginata_elc",
  


  "p_atk_smg_h" : "Sound_Beta_2/Player/p_atk/p_atk_smg_h",


  "mist_loop" : "Sound_Beta_2/Music/beta1_180603/m_dia_mist_loop",
  "mist_intro" : "Sound_Beta_2/Music/beta1_180603/m_dia_mist_intro",

  "calamity_intro" : "Sound_Beta_2/Music/beta2_180603/m_dia_calamity_intro",
  "calamity_loop" : "Sound_Beta_2/Music/beta2_180603/m_dia_calamity_loop",

  "escape_intro" : "Sound_Beta_2/Music/beta2_180603/m_dia_escape_intro",
  "escape_loop" : "Sound_Beta_2/Music/beta2_180603/m_dia_escape_loop",
  "escapebattle_intro" : "Sound_Beta_2/Music/beta2_180603/m_bat_escapebattle_intro",
  "escapebattle_loop" : "Sound_Beta_2/Music/beta2_180603/m_bat_escapebattle_loop",

  "m_bat_game02_intro" : "Sound_Beta_2/Music/beta3_181101/m_bat_game02_intro",
  "m_bat_game02_loop" : "Sound_Beta_2/Music/beta3_181101/m_bat_game02_loop",

  "normalbattle_intro" : "Sound_Beta_2/Music/beta2_180603/m_bat_normalbattle_intro",
  "normalbattle_loop" : "Sound_Beta_2/Music/beta2_180603/m_bat_normalbattle_loop",
  "normal01_intro" : "Sound_Beta_2/Music/beta1_180603/m_bat_normal01_intro",
  "normal01_loop" : "Sound_Beta_2/Music/beta1_180603/m_bat_normal01_loop",
  "normal02_intro" : "Sound_Beta_2/Music/beta1_180603/m_bat_normal02_intro",
  "normal02_loop" : "Sound_Beta_2/Music/beta1_180603/m_bat_normal02_loop",
  "normal03_intro" : "Sound_Beta_2/Music/beta2_180603/m_bat_normal03_intro",
  "normal03_loop" : "Sound_Beta_2/Music/beta2_180603/m_bat_normal03_loop",
  "m_bat_epic_intro" : "Sound_Beta_2/Music/beta1_180603/m_bat_epic_intro",
  "m_bat_epic_loop" : "Sound_Beta_2/Music/beta1_180603/m_bat_epic_loop",
  "longmenbat_intro" : "Sound_Beta_2/Music/beta3_181101/m_bat_longmenbat_intro",
  "longmenbat_loop" : "Sound_Beta_2/Music/beta3_181101/m_bat_longmenbat_loop",
  "farce_intro" : "Sound_Beta_2/Music/a001/m_dia_farce_intro",
  "farce_loop" : "Sound_Beta_2/Music/a001/m_dia_farce_loop",

  "chernormal_intro" : "Sound_Beta_2/Music/beta2_180603/m_bat_qiecheng_intro",
  "chernormal_loop" : "Sound_Beta_2/Music/beta2_180603/m_bat_qiecheng_loop",
  "cherimp_intro" : "Sound_Beta_2/Music/beta2_180603/m_bat_qiechengimp_intro",
  "cherimp_loop" : "Sound_Beta_2/Music/beta2_180603/m_bat_qiechengimp_loop",

  "epic_intro" : "Sound_Beta_2/Music/beta1_180603/m_bat_epic_intro",
  "epic_loop" : "Sound_Beta_2/Music/beta1_180603/m_bat_epic_loop",
  "indust_intro" : "Sound_Beta_2/Music/beta1_180603/m_bat_indust_intro",
  "indust_loop" : "Sound_Beta_2/Music/beta1_180603/m_bat_indust_loop",

  "darkness01_intro" : "Sound_Beta_2/Music/beta1_180603/m_dia_darkness01_intro",
  "darkness01_loop" : "Sound_Beta_2/Music/beta1_180603/m_dia_darkness01_loop",
  "darkness02_intro" : "Sound_Beta_2/Music/beta1_180603/m_dia_darkness02_intro",
  "darkness02_loop" : "Sound_Beta_2/Music/beta1_180603/m_dia_darkness02_loop",

  "frostnova_intro" : "Sound_Beta_2/Music/beta2_180603/m_bat_frostnova_intro",
  "frostnova_loop" : "Sound_Beta_2/Music/beta2_180603/m_bat_frostnova_loop",

  "void_intro" : "Sound_Beta_2/Music/beta1_180603/m_sys_void_intro",
  "void_loop" : "Sound_Beta_2/Music/beta1_180603/m_sys_void_loop",
  "tech_intro" : "Sound_Beta_2/Music/beta2_180603/m_sys_tech_intro",
  "tech_loop" : "Sound_Beta_2/Music/beta2_180603/m_sys_tech_loop",
  "lab_intro" : "Sound_Beta_2/Music/beta3_181101/m_sys_lab_intro",
  "lab_loop" : "Sound_Beta_2/Music/beta3_181101/m_sys_lab_loop",

  "m_sys_science_intro" : "Sound_Beta_2/Music/beta3_181101/m_sys_science_intro",
  "m_sys_science_loop" : "Sound_Beta_2/Music/beta3_181101/m_sys_science_loop",
  "m_dia_street_intro" : "Sound_Beta_2/Music/beta3_181101/m_dia_street_intro",
  "m_dia_street_loop" : "Sound_Beta_2/Music/beta3_181101/m_dia_street_loop",

  "victory_intro" : "Sound_Beta_2/Music/beta1_180603/m_bat_victory_intro",
  "victory_loop" : "Sound_Beta_2/Music/beta1_180603/m_bat_victory_loop",
  "loading_intro" : "Sound_Beta_2/Music/beta1_180603/m_sys_loading_intro",
  "loading_loop" : "Sound_Beta_2/Music/beta1_180603/m_sys_loading_loop",
  "failed_intro" : "Sound_Beta_2/Music/beta1_180603/m_bat_failed_intro",
  "failed_loop" : "Sound_Beta_2/Music/beta1_180603/m_bat_failed_loop",


  "fesedm_intro" : "Sound_Beta_2/Music/obt/m_bat_fesedm_intro",
  "fesedm_loop" : "Sound_Beta_2/Music/obt/m_bat_fesedm_loop",
  "fesmetal_intro" : "Sound_Beta_2/Music/obt/m_bat_fesmetal_intro",
  "fesmetal_loop" : "Sound_Beta_2/Music/obt/m_bat_fesmetal_loop",
  "fesready_intro" : "Sound_Beta_2/Music/obt/m_sys_fesready_intro",
  "fesready_loop" : "Sound_Beta_2/Music/obt/m_sys_fesready_loop",
  "volcano_intro" : "Sound_Beta_2/Music/obt/m_bat_volcano_intro",
  "volcano_loop" : "Sound_Beta_2/Music/obt/m_bat_volcano_loop",

  "emperor_intro" : "Sound_Beta_2/Music/obt/m_sys_emperor_intro",
  "emperor_loop" : "Sound_Beta_2/Music/obt/m_sys_emperor_loop",


  "nightoflongmen_intro" : "Sound_Beta_2/Music/beta2_180603/m_dia_nightoflongmen_intro",
  "nightoflongmen_loop" : "Sound_Beta_2/Music/beta2_180603/m_dia_nightoflongmen_loop",
  "newhope01_intro" : "Sound_Beta_2/Music/beta3_181101/m_dia_newhope01_intro",
  "newhope01_loop" : "Sound_Beta_2/Music/beta3_181101/m_dia_newhope01_loop",

  "path_intro" : "Sound_Beta_2/Music/a001/m_dia_path_intro",
  "path_loop" : "Sound_Beta_2/Music/a001/m_dia_path_loop"

}

def get_paras(text):
    if re.findall(r'\((.*?)\)', text.replace('=', ':')) != []:
        text = "{" + re.findall(r'\((.*?)\)', text.replace('=', ':'))[0] + "}"
        return text
    else:
        return "{}"

filename = 'level_act4d0_st05'

audios = os.listdir('C:\\Users\\Helium\\OneDrive\\dreamweaver\\heliumoctahelide.github.io\\audio')

origintxt = f'C:\\Users\\Helium\\OneDrive\\dreamweaver\\storys\\TextAsset\\{filename}.txt'

for filename in os.listdir("C:\\Users\\Helium\\OneDrive\\dreamweaver\\heliumoctahelide.github.io\\storys\\TextAsset"):
    print(filename)
    with open('C:\\Users\\Helium\\OneDrive\\dreamweaver\\heliumoctahelide.github.io\\storys\\TextAsset\\'+filename, 'r', encoding='UTF-8') as f:
        lines = f.readlines()

    commands = []
    sc = ""
    usedimg = []
    usedaudio = []
    case = 0
    for line in lines[1:]:
        originline = line
        line = line.lower()
        #print(line)
        if '{@nickname}' in originline:
            originline = originline.replace('{@nickname}', '${nickname}')
            yinghao = '`'
        else:
            yinghao = '"'

        #print('>>'+line+"<<")
        if '[dialog' in line:
            sc += 'playground.clearDialog();'
        elif '[playmusic' in line:
            value = line
            if re.findall(r'key=\"(.*?)\"', line):
                originaudioname = re.findall(r'key=\"(.*?)\"', line)[0][1:]
                audioname = story_variables.get(originaudioname) if originaudioname in story_variables else originaudioname
                audioname = audioname[audioname.rfind('/')+1:]
                #print('"$'+originaudioname+'"', '"'+audioname+'"')
                value = value.replace('"$'+originaudioname+'"', '"'+audioname+'"')
                if audioname not in usedaudio:
                    usedaudio.append(audioname)
            if re.findall(r'intro=\"(.*?)\"', line):
                originaudioname = re.findall(r'intro=\"(.*?)\"', line)[0][1:]
                audioname = story_variables.get(originaudioname) if originaudioname in story_variables else originaudioname
                audioname = audioname[audioname.rfind('/')+1:]
                #print('"$'+originaudioname+'"', '"'+audioname+'"')
                value = value.replace('"$'+originaudioname+'"', '"'+audioname+'"')
                if audioname not in usedaudio:
                    usedaudio.append(audioname)
            sc += f'voice.playMusic({get_paras(value)});'
            #print(value)
        elif '[delay' in line:
            if '[delay]' in line:
                continue
            if len(re.findall(r'\(time=(.*?)\)', line)) > 0:
                temp = re.findall(r'\(time=(.*?)\)', line)[0]
            else:
                temp = re.findall(r'=(.*?)]', line)[0]
            sc += f"delay({temp});"
        elif '[name' in line:
            name = '"'+re.findall(r'name=\"(.*?)\"', originline)[0]+'"'
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
            temp = get_paras(line)
            if re.findall(r'name=\"(.*?)\"', line):
                oldimgname = re.findall(r'name=\"(.*?)\"', line)[0]
                if oldimgname.count('_') == 3:
                    imgname = oldimgname if '#' not in oldimgname else oldimgname[:-3] + oldimgname[-1]
                else:
                    imgname = oldimgname.replace("#","_")
                if imgname not in usedimg:
                    usedimg.append(imgname)
                temp=temp.replace(oldimgname, imgname)
            if re.findall(r'name2=\"(.*?)\"', line):
                oldimgname2 = re.findall(r'name2=\"(.*?)\"', line)[0]
                if oldimgname2.count('_') == 3:
                    imgname2 = oldimgname2 if '#' not in oldimgname2 else oldimgname2[:-3] + oldimgname2[-1]
                else:
                    imgname2 = oldimgname2.replace("#","_")
                if imgname2 not in usedimg:
                    usedimg.append(imgname2)
                temp=temp.replace(oldimgname2, imgname2)
            sc += f'playground.drawCharacter({temp});'
        elif '[stopmusic' in line:
            sc += f'voice.stopMusic({get_paras(line)});'
        elif '[camerashake' in line:
            sc += f'background.cameraShake({get_paras(line)});'
        elif '[playsound' in line:
            value = line
            if re.findall(r'key=\"(.*?)\"', line):
                originaudioname = re.findall(r'key=\"(.*?)\"', line)[0][1:]
                audioname = story_variables.get(originaudioname) if originaudioname in story_variables else originaudioname
                audioname = audioname[audioname.rfind('/')+1:]
                value = value.replace('"$'+originaudioname+'"', '"'+audioname+'"')
                if audioname not in usedaudio:
                    usedaudio.append(audioname)
            sc += f'voice.playSound({get_paras(value)});'
        elif '[showitem' in line:
            if re.findall(r'image=\"(.*?)\"', line):
                imgname = re.findall(r'image=\"(.*?)\"', line)[0]
                if imgname not in usedimg:
                    usedimg.append(imgname)
            sc += f'blocker.showItem({get_paras(line)});'
        elif '[hideitem' in line:
            sc += f'blocker.hideItem({get_paras(line)});'
        elif '[decision' in line:
            options = re.findall(r'options=\"(.*?)\"', line)[0].split(';')
            sc += f'playground.Decision({{options:[{options}]}});'
            commands.append(sc)
            sc = ""
        elif '[predicate' in line:
            if '[predicate]' in line:
                sc += f'predicate = ["1", "2", "3"];'
                commands.append(sc)
                sc = ""
            else:
                case = re.findall(r'references=\"(.*?)\"', line)[0].split(';')
                sc += f'predicate = {case};'
                commands.append(sc)
                sc = ""
        elif '[cameraeffect' in line:
            sc += f'background.cameraEffect({get_paras(line)});'
        elif '[stopsound' in line:
            sc += f'voice.stopSound({get_paras(line)});'
        elif line == '\n' or line == ' \n':
            #print("跳过空行")
            continue
        elif line[0] == '/':
            continue
        elif line[0] != '[':
            text = yinghao+originline.strip()+yinghao
            sc += f'playground.drawDialog({{text:{text}}});'
            commands.append(sc)
            sc = ""
        else:
            print("未识别的行："+ line[:-1])


    with open(f"stories\\story-{filename[:-4]}.js", 'w', encoding='utf8') as f:
        alltext = "var story = " + json.dumps([usedimg, usedaudio, commands], sort_keys=True, indent=4,  ensure_ascii=False)+';'
        alltext = alltext.replace('\\"', "'")
        f.write(alltext)