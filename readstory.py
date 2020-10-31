import json
import os
import re

# 新的操作：musicvolume，出现于act13中
# character显示多个人物时其中之一可以为空，这需要修改浏览器中的逻辑；目前先暂时改掉

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
  "avatar_angel" : "char_103_angel",
  "avatar_moeshd" : "char_201_moeshd",
  "avatar_mousek" : "npc_111_mousek",
  "avatar_emperor" : "npc_105_emperor",
  "avatar_huang" : "char_017_huang",
  "avatar_swllow" : "char_367_swllow",
  "avatar_frstar" : "char_1505_frstar",
  "avatar_kroos" : "char_124_kroos",
  "avatar_flower" : "char_181_flower",
  "avatar_hoederer" : "npc_047_hoederer",
  "avatar_ines" : "npc_052_ines",
  "avatar_12fce" : "char_009_12fce",
  "avatar_kalts" : "npc_003_kalts",
  "avatar_red" : "char_144_red",
  "avatar_snakek" : "char_150_snakek",
  "avatar_folnic" : "char_345_folnic",
  "avatar_lisa" : "char_358_lisa",
  "avatar_cerber" : "char_2013_cerber",
  "avatar_ccheal" : "char_187_ccheal",
  "avatar_utage" : "char_337_utage",
  "avatar_tomimi" : "char_411_tomimi",
  "avatar_scave" : "char_149_scave",
  "avatar_mm" : "char_133_mm",
  "avatar_frostl" : "char_193_frostl",
  "avatar_wyvern" : "char_240_wyvern",
  "avatar_sophia" : "char_265_sophia",

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

	"drift" : "Sound_Beta_2/AVG/d_gen_drift",
  "sheildimpact" : "Sound_Beta_2/AVG/d_gen_sheildimpact",
  "bottlebroken" : "Sound_Beta_2/AVG/d_gen_bottlebroken",
  "sportscarstart" : "Sound_Beta_2/AVG/d_gen_sportscarstart",
  "motorbikestart" : "Sound_Beta_2/AVG/d_gen_motorbikestart",
  "rungeneral" : "Sound_Beta_2/AVG/d_gen_rungeneral",
  "knifegore" : "Sound_Beta_2/AVG/d_gen_knifegore",
  "fightgeneral" : "Sound_Beta_2/AVG/d_gen_fightgeneral",
  "transmission" : "Sound_Beta_2/AVG/d_gen_transmission",




  
  "e_skill_bslimeexplo_n" : "Sound_Beta_2/Enemy/e_skill/e_skill_bslimeexplo_n",
  "e_skill_skulsrshot" : "Sound_Beta_2/Enemy/e_skill/e_skill_skulsrshot",
  "e_skill_skulsrexplo" : "Sound_Beta_2/Enemy/e_skill/e_skill_skulsrexplo",
  "e_skill_skulsrsword" : "Sound_Beta_2/Enemy/e_skill/e_skill_skulsrsword",
  "e_skill_driftsand" : "Sound_Beta_2/Enemy/e_skill/e_skill_driftsand",
  "e_skill_demonkatk" : "Sound_Beta_2/Enemy/e_skill/e_skill_demonkatk",


  "p_skill_chimera":"Sound_Beta_2/Player/p_skill/p_skill_chimera",
  "p_skill_blacktimewand_shot":"Sound_Beta_2/Player/p_skill/p_skill_blacktimewand_shot",
  "p_skill_blacktimewand":"Sound_Beta_2/Player/p_skill/p_skill_blacktimewand",

  "p_skill_spiritexplo":"Sound_Beta_2/Player/p_skill/p_skill_spiritexplo",

  "b_char_defboost":"Sound_Beta_2/Battle/b_char/b_char_defboost",

  "tokenset" : "Sound_Beta_2/Battle/b_char/b_char_tokenset",
  "getcast" : "Sound_Beta_2/Battle/b_char/b_char_getcast",

  
  "e_atk_magmasnail_n" : "Sound_Beta_2/Enemy/e_atk/e_atk_magmasnail_n",

  "e_atk_bigaxe_d" : "Sound_Beta_2/Enemy/e_atk/e_atk_bigaxe_d",
  "e_atk_bales_n" : "Sound_Beta_2/Enemy/e_atk/e_atk_bales_n",
  "e_atk_arrow_h" : "Sound_Beta_2/Enemy/e_atk/e_atk_arrow_h",
  "e_atk_blunt_n" : "Sound_Beta_2/Enemy/e_atk/e_atk_blunt_n",
  "e_atk_magic_n" : "Sound_Beta_2/Enemy/e_atk/e_atk_magic_n",
  "e_atk_magic_m" : "Sound_Beta_2/Enemy/e_atk/e_atk_magic_m",
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
  "p_atk_elecball_n" : "Sound_Beta_2/Player/p_atk/p_atk_elecball_n",
  

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
  "bar_intro" : "Sound_Beta_2/Music/act5d0/m_avg_longmenbar_intro",
  "bar_loop" : "Sound_Beta_2/Music/act5d0/m_avg_longmenbar_loop",
  "darkalley_intro" : "Sound_Beta_2/Music/act5d0/m_avg_longmendarkalley_intro",
  "darkalley_loop" : "Sound_Beta_2/Music/act5d0/m_avg_longmendarkalley_loop",
  "marketplace_intro" : "Sound_Beta_2/Music/act5d0/m_avg_longmenmarketplace_intro",
  "marketplace_loop" : "Sound_Beta_2/Music/act5d0/m_avg_longmenmarketplace_loop",
  "storyendjp_intro" : "Sound_Beta_2/Music/act5d0/m_avg_storyendjp_intro",
  "storyendjp_loop" : "Sound_Beta_2/Music/act5d0/m_avg_storyendjp_loop",
  "chasing_intro" : "Sound_Beta_2/Music/act5d0/m_bat_chasing_intro",
  "chasing_loop" : "Sound_Beta_2/Music/act5d0/m_bat_chasing_loop",
  "gorgeousdebut_intro" : "Sound_Beta_2/Music/act5d0/m_bat_gorgeousdebut_intro",
  "gorgeousdebut_loop" : "Sound_Beta_2/Music/act5d0/m_bat_gorgeousdebut_loop",
  "kingmouse_intro" : "Sound_Beta_2/Music/act5d0/m_bat_kingmouse_intro",
  "kingmouse_loop" : "Sound_Beta_2/Music/act5d0/m_bat_kingmouse_loop",
  "penguinlogistics_intro" : "Sound_Beta_2/Music/act5d0/m_sys_penguinlogistics_intro",
  "penguinlogistics_loop" : "Sound_Beta_2/Music/act5d0/m_sys_penguinlogistics_loop",
  "speedoflight_intro" : "Sound_Beta_2/Music/act5d0/m_avg_speedoflight_intro",
  "speedoflight_loop" : "Sound_Beta_2/Music/act5d0/m_avg_speedoflight_loop",

  "longmenbatimp_intro" : "Sound_Beta_2/Music/beta3_181101/m_bat_longmenbatimp_intro",
  "longmenbatimp_loop" : "Sound_Beta_2/Music/beta3_181101/m_bat_longmenbatimp_loop",
  "longmenoffice_intro" : "Sound_Beta_2/Music/beta3_181101/m_bat_longmenoffice_intro",
  "longmenoffice_loop" : "Sound_Beta_2/Music/beta3_181101/m_bat_longmenoffice_loop",
 
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


  "frostnovadie_intro" : "Sound_Beta_2/Music/static/m_avg/m_avg_frostnovadie_intro",
  "frostnovadie_loop" : "Sound_Beta_2/Music/static/m_avg/m_avg_frostnovadie_loop",
  "loneliness_intro" : "Sound_Beta_2/Music/static/m_avg/m_avg_loneliness_intro",
  "loneliness_loop" : "Sound_Beta_2/Music/static/m_avg/m_avg_loneliness_loop",
  "frostnovaevolution_intro" : "Sound_Beta_2/Music/static/m_bat/m_bat_frostnovaevolution_intro",
  "frostnovaevolution_loop" : "Sound_Beta_2/Music/static/m_bat/m_bat_frostnovaevolution_loop",
  "snowmonster_intro" : "Sound_Beta_2/Music/static/m_bat/m_bat_snowmonster_intro",
  "snowmonster_loop" : "Sound_Beta_2/Music/static/m_bat/m_bat_snowmonster_loop",


  "w_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_w_intro",
  "w_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_w_loop",
  "relax_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_relax_intro",
  "relax_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_relax_loop",
  "nervous_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_nervous_intro",
  "nervous_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_nervous_loop",
  "exciting_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_exciting02_intro",
  "exciting_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_exciting02_loop",
  "sjoyasorrow_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_sjoyasorrow_intro",
  "sjoyasorrow_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_sjoyasorrow_loop",
  "drift_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_drift_intro",
  "drift_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_drift_loop",

  "patriot_intro" : "Sound_Beta_2/Music/act9d2d0/m_avg_patriot_intro",
  "patriot_loop" : "Sound_Beta_2/Music/act9d2d0/m_avg_patriot_loop",

  "dignified_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_dignified_intro",
  "dignified_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_dignified_loop",
  "distressed_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_distressed_intro",
  "distressed_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_distressed_loop",
  "warm_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_warm_intro",
  "warm_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_warm_loop",
  "frontline_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_frontline_intro",
  "frontline_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_frontline_loop",
  "holiday_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_holiday_intro",
  "holiday_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_holiday_loop",
  "plot_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_plot_intro",
  "plot_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_plot_loop",
  "batmeeting_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_batmeeting_intro",
  "batmeeting_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_batmeeting_loop",

  "exterminate_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_exterminate_intro",
  "exterminate_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_exterminate_loop",
  "katzdale_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_katzdale_intro",
  "katzdale_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_katzdale_loop",
  "sacrifice_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_sacrifice_intro",
  "sacrifice_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_sacrifice_loop",
  "stranger_intro" : "Sound_Beta_2/Music/act9d0d0/m_avg_stranger_intro",
  "stranger_loop" : "Sound_Beta_2/Music/act9d0d0/m_avg_stranger_loop",
  "sys_w_intro" : "Sound_Beta_2/Music/act9d0d0/m_sys_w_intro",
  "sys_w_loop" : "Sound_Beta_2/Music/act9d0d0/m_sys_w_loop",

  "chernobog_intro" : "Sound_Beta_2/Music/act9d2d0/m_bat_chernobog_intro",
  "chernobog_loop" : "Sound_Beta_2/Music/act9d2d0/m_bat_chernobog_loop",
  "kaltsitteam_intro" : "Sound_Beta_2/Music/act9d2d0/m_bat_kaltsitteam_intro",
  "kaltsitteam_loop" : "Sound_Beta_2/Music/act9d2d0/m_bat_kaltsitteam_loop",
  "bat_patriot_intro" : "Sound_Beta_2/Music/act9d2d0/m_bat_patriot_intro",
  "bat_patriot_loop" : "Sound_Beta_2/Music/act9d2d0/m_bat_patriot_loop",
  "bat_patriotextra_intro" : "Sound_Beta_2/Music/act9d2d1/m_bat_patriotextra_intro",
  "bat_patriotextra_loop" : "Sound_Beta_2/Music/act9d2d1/m_bat_patriotextra_loop",

  "bat_ausband_intro" : "Sound_Beta_2/Music/act12d0d0/m_bat_ausband_intro",
  "bat_ausband_loop" : "Sound_Beta_2/Music/act12d0d0/m_bat_ausband_loop",
  "bat_freezeassshou_intro" : "Sound_Beta_2/Music/act12d0d0/m_bat_freezeassshou_intro",
  "bat_freezeassshou_loop" : "Sound_Beta_2/Music/act12d0d0/m_bat_freezeassshou_loop",

  "bat_Imfookingback_intro" : "Sound_Beta_2/Music/act12d0d0/m_bat_Imfookingback_intro",
  "bat_Imfookingback_loop" : "Sound_Beta_2/Music/act12d0d0/m_bat_Imfookingback_loop",

  "bat_ironguy_intro" : "Sound_Beta_2/Music/act12d0d0/m_bat_ironguy_intro",
  "bat_ironguy_loop" : "Sound_Beta_2/Music/act12d0d0/m_bat_ironguy_loop",
  "dontmaketrouble_intro" : "Sound_Beta_2/Music/act12d0d0/m_sys_dontmaketrouble_intro",
  "dontmaketrouble_loop" : "Sound_Beta_2/Music/act12d0d0/m_sys_dontmaketrouble_loop",



  "path_intro" : "Sound_Beta_2/Music/a001/m_dia_path_intro",
  "path_loop" : "Sound_Beta_2/Music/a001/m_dia_path_loop",


  "g_card_10cardsrelease" : "Sound_Beta_2/General/g_ui/g_card_10cardsrelease",
  "flashback" : "Sound_Beta_2/General/g_ui/g_ui_stagepush",
  "flashback2" : "Sound_Beta_2/General/g_ui/g_ui_stagepull",
  "e_imp_sword_h" : "Sound_Beta_2/Enemy/e_imp/e_imp_sword_h",
  "e_imp_katar_n" : "Sound_Beta_2/Enemy/e_imp/e_imp_katar_n",
  "e_imp_lasersaber_n" : "Sound_Beta_2/Enemy/e_imp/e_imp_lasersaber_n",
  "tactfulboost" : "Sound_Beta_2/Battle/b_char/b_char_tactfulboost",
  "firemagic_explosion" : "Sound_Beta_2/Beta1LeaveOver/mixed_firemagic_explosion",
  "icespread" : "Sound_Beta_2/Ambience/a_bat/a_bat_icespread",
  "packagedrop" : "Sound_Beta_2/General/g_ui/g_ui_packagedrop",
  "reinforcement" : "Sound_Beta_2/Enemy/e_imp/e_imp_reinforcement",
  "rglk0suspective_intro" : "Sound_Beta_2/Music/act12d6d0/m_sys_rglk0suspective_intro",
  "rglk0suspective_loop" : "Sound_Beta_2/Music/act12d6d0/m_sys_rglk0suspective_loop"
}

def get_paras(text):
    if re.findall(r'\((.*?)\)', text.replace('=', ':')) != []:
        text = "{" + re.findall(r'\((.*?)\)', text.replace('=', ':'))[0] + "}"
        return text
    else:
        return "{}"

filename = 'level_act4d0_st05'

audios = os.listdir('audio')

for filename in os.listdir("storys\\TextAsset"):
    print(filename)
    with open('storys\\TextAsset\\'+filename, 'r', encoding='UTF-8') as f:
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
                oldimgname = re.findall(r'name=\"(.*?)\"', line)[0].strip().lower()
                #if oldimgname.count('_') == 3: 
                #if oldimgname[-1].isdigit():
                if "#" in oldimgname:
                    imgname = oldimgname[:-3] + oldimgname[-1] if oldimgname[-3].isdigit() and oldimgname[-4] == "_" else oldimgname.replace("#","_")
                    #imgname = oldimgname if '#' not in oldimgname else oldimgname[:-3] + oldimgname[-1]
                else:
                    imgname = oldimgname if oldimgname[-1].isdigit() else oldimgname + "_1"
                if imgname not in usedimg:
                    usedimg.append(imgname)
                temp=temp.replace(oldimgname, imgname)
            if re.findall(r'name2=\"(.*?)\"', line):
                oldimgname2 = re.findall(r'name2=\"(.*?)\"', line)[0].strip().lower()
                #if oldimgname2.count('_') == 3:
                #if oldimgname2[-1].isdigit():
                if "#" in oldimgname2:
                    imgname2 = oldimgname2[:-3] + oldimgname2[-1] if oldimgname2[-3].isdigit() and oldimgname2[-4] == "_" else oldimgname2.replace("#","_")
                    #imgname = oldimgname if '#' not in oldimgname else oldimgname[:-3] + oldimgname[-1]
                else:
                    imgname2 = oldimgname2 if oldimgname2[-1].isdigit() else oldimgname2 + "_1"
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
            options = re.findall(r'options=\"(.*?)\"', originline)[0].split(';')
            values = re.findall(r'values=\"(.*?)\"', originline)[0].split(';')
            options.insert(0, values)
            sc += f'playground.Decision({{options:{options}}});'
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
    commands.append(sc)

    with open(f"stories\\story-{filename[:-4]}.js", 'w', encoding='utf8') as f:
        alltext = "var story = " + json.dumps([usedimg, usedaudio, commands], sort_keys=True, indent=4,  ensure_ascii=False)+';'
        alltext = alltext.replace('\\"', "'")
        f.write(alltext)