const ZH_CN = {
    "id": "zh_cn",
    "name": "简体中文",
    "values": {
        "(": "（",
        "chat_online": "ONLINE:",
        "chat_online_2": "在线：",
        "chat_player_join": "加入了游戏",
        "chat_player_quit": "已退出",
        "chat_sending": "正在前往",
        "chat_join_lobby": "入了大厅",
        "chat_final_kill": "最终击杀",
        "chat_disconnect": "断开连接",
        "chat_reconnect": "重新连接",
        "chat_game_start_1_second": "游戏将在1秒后开始",
        "chat_game_start_0_second": "游戏将在0秒后开始",
        "notification_start_title": "游戏开始",
        "notification_start_body": "",
        "notification_update_available_title": "有可用更新",
        "notification_update_available_body": "点击更新按钮打开下载界面",
        "error_api_key_not_found": "API Key未找到",
        "error_api_key_invalid": "无效的API Key",
        "error_api_error": "API错误",
        "error_log_not_found": "log文件未找到",
        "error_player_not_found": "未找到此玩家",
        "error_player_missing": "缺少玩家",
        "info_set_log_path": "请在设置中设置log路径",
        "info_api_new": "使用/api new来获取",
        "info_who": "请在游戏内输入/who",
        "hud_current_mode": "当前模式：",
        "hud_select_log_file_title": "选择latest.log文件",
        "hud_select_log_file_button_label": "选择log文件",
        "hud_main_level": "等级",
        "hud_main_players": "玩家",
        "hud_main_tag": "标签",
        "cps_second": "秒",
        "cps_test_time": "当前测试时长：",
        "cps_time_last": "剩余时间：",
        "cps_left_click": "左键点击次数：",
        "cps_right_click": "右键点击次数：",
        "cps_result_left": "你的左键点击速度为",
        "cps_result_right": "你的右键点击速度为",
        "cps_click_to_start": "点此开始测试",
        "language": "语言：",
        "guild": "公会：",
        "error_api_limit_exceeded": "已达到API请求次数限制！请等待重置。",
        "tag_developer": "开发者",
        "tag_alt": "可能为小号",
        "tag_sniper": "可能是狙击",
        "tag_potential_party": "可能为组队",
        "tag_same_guild": "同公会",
        "tag_mention_guild": "关注的公会",
        "tag_blacklist_player": "黑名单玩家",
        "tag_blacklist_guild": "黑名单公会"
    },
    "page": {
        "basic": "基础设置",
        "extra": "高级设置",
        "api_key": "Hypixel API Key :",
        "copy_api_key": "复制",
        "copied_api_key": "已复制",
        "playerNameLabel": "玩家名：",
        "searchButton": "搜索",
        "downloadSkin": "下载皮肤",
        "setting_game_type": "游戏类型：",
        "setting_log_path": "log路径：",
        "setting_change_log_path": "设置log路径",
        "setting_auto_shrink": "自动折叠：",
        "setting_notification": "游戏开始提示：",
        "language": "软件语言：",
        "language_hypixel": "Hypixel游戏内语言：",
        "cpsTestTime": "当前测试时长：10秒",
        "testCpsButton": "点此开始测试",
        "cps_reset": "重置",
        "cps_1s": "1秒",
        "cps_5s": "5秒",
        "cps_10s": "10秒",
        "cps_20s": "20秒",
        "color_key": "&nbsp; 颜色注释：",
        "bad": "菜！",
        "ok": "OK",
        "good": "还行",
        "epic": "大佬",
        "legend": "犇",
        "god": "神",
        "link_github": "&nbsp; 如果遇到任何问题，可以在Github上发起Issue（点此打开）",
        "language_tooltip": "软件语言",
        "language_tooltip_hypixel": "你在游戏内设置的语言",
        "log_tooltip": "当前客户端的日志路径",
        "api_tooltip": "从developer.hypixel.net获取",
        "game_mode_tooltip": "你当前正在玩的游戏模式",
        "done": "完成",
        "updateSession": "刷新",
        "resetSession": "重置",
        "copy_chat_suffix": "复制聊天按钮后缀",
        "copy_chat_suffix_tooltip": "用以去除复制聊天按钮的输出，比如[C]"
    },
    "mode": [
        {
            "id": "bw",
            "name": "起床战争"
        },
        {
            "id": "sw",
            "name": "空岛战争"
        },
        {
            "id": "mm",
            "name": "密室杀手"
        },
        {
            "id": "duel",
            "name": "决斗游戏"
        },
        {
            "id": "uhc",
            "name": "极限生存冠军"
        },
        {
            "id": "mw",
            "name": "超级战墙"
        },
        {
            "id": "ww",
            "name": "羊毛战争"
        },
        {
            "id": "bsg",
            "name": "闪电饥饿游戏"
        }
    ],
    "template": {
        "ov": [
            "等级：${level} | 人品：${api.karma}",
            "成就点数：${achievementPoints}",
            "完成任务：${general_quest_master} | 完成挑战：${general_challenger}",
            "语言：${userLanguage} | Rank赠送：${ranksGiven}",
            "首次登入：${firstLogin}",
            "上次登入：${lastLogin}",
            "上次登出：${lastLogout}"
        ],
        "bw": [
            "等级：${level} | 硬币：${coins}",
            "连胜：${winstreak}",
            "破坏床数：${beds_broken} | 被破坏床数：${beds_lost} | BBLR : ${bblr}",
            "胜场：${wins} | 败场：${losses} | W/L：${wl_rate}",
            "击杀：${kills} | 死亡：${deaths} | K/D：${kd_rate}",
            "最终击杀：${final_kills} | 最终死亡：${final_deaths} | FKDR：${fkdr}",
            "铁锭收集：${iron} | 金锭收集：${gold}",
            "钻石收集：${diamond} | 绿宝石收集：${emerald}"
        ],
        "sw": [
            "等级：${levelFormatted} | 灵魂：${souls}",
            "硬币：${coins} | 助攻：${assists}",
            "击杀：${kills} | 死亡：${deaths} | K/D：${kd_rate}",
            "胜场：${wins} | 败场：${losses} | W/L：${wl_rate}"
        ],
        "mm": [
            "硬币：${coins} | 金锭收集：${coins_pickedup}",
            "杀手概率：${murderer_chance}% | 侦探概率：${detective_chance}%",
            "胜场：${wins} | 胜率：${win_rate}%",
            "击杀：${kills} | 死亡：${deaths}",
            "飞刀击杀：${knife_kills} | 弓箭击杀：${bow_kills}",
            "作为杀手击杀：${kills_as_murderer} | 英雄：${was_hero}",
            "作为感染者击杀：${kills_as_infected} | 作为幸存者击杀：${kills_as_survivor}",
            "最长存活时间：${longest_time_as_survivor_seconds}s | 母体概率：${alpha_chance}%"
        ],
        "duel": [
            "硬币：${coins} | Ping偏好：${pingPreference}ms",
            "胜场：${wins} | 败场：${losses} | W/L：${wl_rate}",
            "最佳连胜：${best_winstreak} | 目前连胜：${current_winstreak}",
            "击杀：${kills} | 死亡：${deaths} | K/D：${kd_rate}"
        ],
        "uhc": [
            "分数：${score} | 硬币：${coins} | 胜场：${wins}",
            "击杀：${kills} | 死亡：${deaths} | K/D：${kd_rate}"
        ],
        "mw": [
            "硬币：${coins} | 凋零伤害：${wither_damage}",
            "职业：${chosen_class}",
            "胜场：${wins} | 败场：${losses} | W/L：${wl_rate}",
            "击杀：${kills} | 死亡：${deaths}",
            "K/D：${kd_rate} | 助攻：${assists}",
            "最终击杀：${final_kills} | 最终死亡：${final_deaths}",
            "FKDR：${fkdr} | 最终助攻：${final_assists}"
        ],
        "bb": [
            "游玩次数：${games_played} | 分数：${score} | 胜场：${wins}",
            "单人模式胜场：${wins_solo_normal} | 团队模式胜场：${wins_teams_normal}",
            "高手模式胜场：${wins_solo_pro} | 建筑猜猜乐胜场：${wins_guess_the_build}"
        ],
        "bsg": [
            "硬币：${coins} | 打开箱子数：${chests_opened}",
            "游玩次数：${games_played} | 胜场：${wins}",
            "击杀：${kills} | 死亡：${deaths} | K/D：${kd_rate}"
        ]
    },
    "titleMode": {
        "title": {
            "bw": [
                "连胜",
                "FKDR",
                "WLR",
                "最终击杀",
                "胜场"
            ],
            "sw": [
                "连胜",
                "KDR",
                "WLR",
                "击杀",
                "胜场"
            ],
            "mm": [
                "胜率",
                "击杀",
                "杀手概率",
                "侦探概率",
                "母体概率"
            ],
            "duel": [
                "连胜",
                "KDR",
                "WLR",
                "击杀",
                "胜场"
            ],
            "uhc": [
                "分数",
                "KDR",
                "WLR",
                "击杀",
                "胜场"
            ],
            "mw": [
                "FKDR",
                "WLR",
                "最终击杀",
                "胜场",
                "凋零伤害"
            ],
            "ww": [
                "KDR",
                "胜率",
                "击杀",
                "胜场",
                "羊毛放置"
            ],
            "bsg": [
                "胜率",
                "胜场",
                "KDR",
                "击杀",
                "游玩次数"
            ]
        },
        "mode": {
            "bw": [
                {
                    "id": "",
                    "name": "全局"
                },
                {
                    "id": "eight_one_",
                    "name": "单挑"
                },
                {
                    "id": "eight_two_",
                    "name": "双人"
                },
                {
                    "id": "four_three_",
                    "name": "3v3v3v3"
                },
                {
                    "id": "four_four_",
                    "name": "4v4v4v4"
                },
                {
                    "id": "two_four_",
                    "name": "4v4"
                }
            ],
            "sw": [
                {
                    "id": "",
                    "name": "全局"
                },
                {
                    "id": "_solo",
                    "name": "单人"
                },
                {
                    "id": "_solo_normal",
                    "name": "单人普通"
                },
                {
                    "id": "_solo_insane",
                    "name": "单人疯狂"
                },
                {
                    "id": "_team",
                    "name": "团队"
                },
                {
                    "id": "_team_normal",
                    "name": "团队普通"
                },
                {
                    "id": "_team_insane",
                    "name": "团队疯狂"
                },
                {
                    "id": "_lab",
                    "name": "实验室"
                }
            ],
            "mm": [
                {
                    "id": "",
                    "name": "全局"
                },
                {
                    "id": "_MURDER_CLASSIC",
                    "name": "经典"
                },
                {
                    "id": "_MURDER_DOUBLE_UP",
                    "name": "双倍"
                },
                {
                    "id": "_MURDER_ASSASSINS",
                    "name": "刺客"
                },
                {
                    "id": "_MURDER_INFECTION",
                    "name": "感染"
                }
            ],
            "duel": [
                {
                    "id": "",
                    "name": "全局"
                }
            ],
            "uhc": [
                {
                    "id": "",
                    "name": "全局"
                },
                {
                    "id": "_solo_brawl",
                    "name": "单挑"
                },
                {
                    "id": "_duo_brawl",
                    "name": "团队"
                },
                {
                    "id": "_red_vs_blue",
                    "name": "决斗"
                }
            ],
            "mw": [
                {
                    "id": "",
                    "name": "全局"
                }
            ],
            "ww": [
                {
                    "id": "",
                    "name": "全局"
                }
            ],
            "bsg": [
                {
                    "id": "",
                    "name": "All"
                }
            ]
        }
    },
    "games": [
        {
            "id": 2,
            "short": "quake",
            "name": "Quake"
        },
        {
            "id": 3,
            "short": "walls",
            "name": "Walls"
        },
        {
            "id": 4,
            "short": "paintball",
            "name": "Paintball"
        },
        {
            "id": 5,
            "short": "bsg",
            "name": "闪电饥饿游戏"
        },
        {
            "id": 6,
            "short": "tnt",
            "name": "TNT Games"
        },
        {
            "id": 7,
            "short": "vampirez",
            "name": "VampireZ"
        },
        {
            "id": 13,
            "short": "mw",
            "name": "超级战墙"
        },
        {
            "id": 14,
            "short": "arcade",
            "name": "街机游戏"
        },
        {
            "id": 17,
            "short": "arena",
            "name": "Arena"
        },
        {
            "id": 20,
            "short": "uhc",
            "name": "极限生存冠军"
        },
        {
            "id": 21,
            "short": "mcgo",
            "name": "Cops and Crims"
        },
        {
            "id": 23,
            "short": "warlord",
            "name": "Warlords"
        },
        {
            "id": 24,
            "short": "smash",
            "name": "Smash Heroes"
        },
        {
            "id": 25,
            "short": "turbo",
            "name": "Turbo Kart Racers"
        },
        {
            "id": 26,
            "short": "housing",
            "name": "Housing"
        },
        {
            "id": 51,
            "short": "sw",
            "name": "空岛战争"
        },
        {
            "id": 52,
            "short": "cw",
            "name": "Crazy Walls"
        },
        {
            "id": 54,
            "short": "suhc",
            "name": "Speed UHC"
        },
        {
            "id": 55,
            "short": "sc",
            "name": "SkyClash"
        },
        {
            "id": 56,
            "short": "classic",
            "name": "Classic Games"
        },
        {
            "id": 57,
            "short": "pt",
            "name": "Prototype"
        },
        {
            "id": 58,
            "short": "bw",
            "name": "起床战争"
        },
        {
            "id": 59,
            "short": "mm",
            "name": "密室杀手"
        },
        {
            "id": 60,
            "short": "bb",
            "name": "建筑大师"
        },
        {
            "id": 61,
            "short": "duel",
            "name": "决斗游戏"
        },
        {
            "id": 63,
            "short": "sb",
            "name": "SkyBlock"
        },
        {
            "id": 64,
            "short": "pit",
            "name": "天坑乱斗"
        },
        {
            "id": 65,
            "short": "replay",
            "name": "Replay"
        },
        {
            "id": 67,
            "short": "smp",
            "name": "SMP"
        }
    ]
}