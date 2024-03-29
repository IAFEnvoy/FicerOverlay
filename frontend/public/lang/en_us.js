const EN_US = {
    "id": "en_us",
    "name": "English",
    "values": {
        "(": "(",
        "chat_online": "ONLINE:",
        "chat_online_2": "ONLINE:",
        "chat_player_join": " has joined",
        "chat_player_quit": " has quit",
        "chat_sending": "Sending you",
        "chat_join_lobby": " the lobby!",
        "chat_final_kill": "FINAL KILL",
        "chat_disconnect": "disconnected",
        "chat_reconnect": "reconnected",
        "chat_game_start_1_second": "The game starts in 1 second!",
        "chat_game_start_0_second": "The game starts in 0 second!",
        "notification_start_title": "Game Started!",
        "notification_start_body": "Your Hypixel game has started!",
        "notification_update_available_title": "Update Available!",
        "notification_update_available_body": "Click the update button to get.",
        "error_api_key_not_found": "API Key Not Found",
        "error_api_key_invalid": "Invalid API Key",
        "error_api_error": "API Error",
        "error_log_not_found": "Log File Not Found",
        "error_player_not_found": "Player Not Found!",
        "error_player_missing": "Missing players",
        "info_set_log_path": "Set Log Path In Settings",
        "info_api_new": "Type /api new To Get",
        "info_who": "Please type /who",
        "hud_current_mode": "Current Mode : ",
        "hud_select_log_file_title": "Select latest.log file",
        "hud_select_log_file_button_label": "Select log file",
        "hud_main_level": "Lvl",
        "hud_main_players": "Players",
        "hud_main_tag": "Tag",
        "cps_second": "s",
        "cps_test_time": "Test Time : ",
        "cps_time_last": "Time Last : ",
        "cps_left_click": "Left Click : ",
        "cps_right_click": "Right Click : ",
        "cps_result_left": "Your left button clicking speed is ",
        "cps_result_right": "Your right button clicking speed is ",
        "cps_click_to_start": "Click to Start",
        "language": "Language : ",
        "guild": "Guild : ",
        "error_api_limit_exceeded": "API Limit Exceeded! Please wait for reset.",
        "tag_developer": "The Developer",
        "tag_alt": "Potential Alt",
        "tag_sniper": "Potential Sniper",
        "tag_potential_party": "Potential Party",
        "tag_same_guild": "Same Guild",
        "tag_mention_guild": "Mentioned Guild",
        "tag_blacklist_player": "Blacklisted Player",
        "tag_blacklist_guild": "Blacklisted Guild"
    },
    "page": {
        "basic": "Basic Settings",
        "extra": "Advanced Settings",
        "api_key": "Hypixel API Key :",
        "copy_api_key": "Copy",
        "copied_api_key": "Copied!",
        "playerNameLabel": "Player Name :",
        "searchButton": "Go!",
        "downloadSkin": "Download Skin",
        "setting_game_type": "Game Type :",
        "setting_log_path": "Log Path :",
        "setting_change_log_path": "Set Log Path",
        "setting_auto_shrink": "Auto Shrink :",
        "setting_notification": "Game Start Notification :",
        "language": "Software Language:",
        "language_hypixel": "Hypixel In-Game Language:",
        "cpsTestTime": "Test Time : 10s",
        "testCpsButton": "Click to Start",
        "cps_reset": "Reset",
        "cps_1s": "1s",
        "cps_5s": "5s",
        "cps_10s": "10s",
        "cps_20s": "20s",
        "color_key": "&nbsp; Stats Color Key :",
        "bad": "BAD",
        "ok": "OK",
        "good": "GOOD",
        "epic": "EPIC",
        "legend": "LEGEND",
        "god": "GOD",
        "link_github": "&nbsp; If you meet any problems or ideas, tell me on my Github! (Click here to open)",
        "language_tooltip": "The language you set for software",
        "language_tooltip_hypixel": "The language you set in game",
        "log_tooltip": "The log path your current client used.",
        "api_tooltip": "Get the API key from developer.hypixel.net",
        "game_mode_tooltip": "The game you currently playing",
        "done": "Done",
        "updateSession": "Update Now",
        "resetSession": "Reset Session",
        "copy_chat_suffix": "Copy Chat Suffix",
        "copy_chat_suffix_tooltip": "Exclude copy chat button in log. Example: [C]"
    },
    "mode": [
        {
            "id": "bw",
            "name": "Bed War"
        },
        {
            "id": "sw",
            "name": "Sky War"
        },
        {
            "id": "mm",
            "name": "Murder Mystery"
        },
        {
            "id": "duel",
            "name": "Duel"
        },
        {
            "id": "uhc",
            "name": "UHC Champion"
        },
        {
            "id": "mw",
            "name": "Mega Wall"
        },
        {
            "id": "ww",
            "name": "Wool War"
        },
        {
            "id": "bsg",
            "name": "Blitz Survive Game"
        }
    ],
    "template": {
        "ov": [
            "Level : ${level}",
            "Karma : ${karma}",
            "Achievement Point :  ${achievementPoints}",
            "Complete Quest : ${general_quest_master}",
            "Complete Challenge : ${general_challenger}",
            "Language : ${userLanguage}",
            "Rank Gifted : ${ranksGiven}",
            "First Login : ${firstLogin}",
            "Last Login &nbsp;: ${lastLogin}",
            "Last Logout : ${lastLogout}"
        ],
        "bw": [
            "Level : ${level} | Coins : ${coins}",
            "Winstreak : ${winstreak}",
            "Bed Destroy : ${beds_broken} | Bed Lost : ${beds_lost} | BBLR : ${bblr}",
            "Win : ${wins} | Loss : ${losses} | W/L : ${wl_rate}",
            "Kill : ${kills} | Death : ${deaths} | K/D : ${kd_rate}",
            "Final Kill : ${final_kills} | Final Death : ${final_deaths} | FKDR : ${fkdr}",
            "Iron : ${iron} | Gold : ${gold}",
            "Diamond : ${diamond} | Emerald : ${emerald}"
        ],
        "sw": [
            "Level : ${levelFormatted} | Soul : ${souls}",
            "Coins : ${coins} | Assists : ${assists}",
            "Kills : ${kills} | Deaths : ${deaths} | K/D : ${kd_rate}",
            "Wins : ${wins} | Losses : ${losses} | W/L : ${wl_rate}"
        ],
        "mm": [
            "Coins : ${coins} | Gold Collected : ${coins_pickedup}",
            "Murder Chance : ${murderer_chance}%",
            "Detective Chance : ${detective_chance}%",
            "Wins : ${wins} | Win Rate : ${win_rate}%",
            "Kills : ${kills} | Deaths : ${deaths}",
            "Knife Kills : ${knife_kills} | Bow Kills : ${bow_kills}",
            "Kills As Murderer : ${kills_as_murderer} | Heroes : ${was_hero}",
            "Kills As Infected : ${kills_as_infected}",
            "Kills As Survivor : ${kills_as_survivor}",
            "Longest Time Survive : ${longest_time_as_survivor_seconds}s",
            "Alpha Chance : ${alpha_chance}%"
        ],
        "duel": [
            "Coins : ${coins} | Ping Preference : ${ping}ms",
            "Wins : ${wins} | Losses : ${losses} | W/L : ${wl_rate}",
            "Best Winstreak : ${best_winstreak} | Current Winstreak : ${current_winstreak}",
            "Kills : ${kills} | Deaths : ${deaths} | K/D : ${kd_rate}"
        ],
        "uhc": [
            "Score : ${score} | Coins : ${coins} | Wins : ${wins}",
            "Kills : ${kills} | Deaths : ${deaths} | K/D : ${kd_rate}"
        ],
        "mw": [
            "Coins : ${coins} | Wither Damage : ${wither_damage}",
            "Chosen Class : ${chosen_class}",
            "Wins : ${wins} | Losses : ${losses} | W/L : ${wl_rate}",
            "Kills : ${kills} | Deaths : ${deaths}",
            "K/D : ${kd_rate} | Assists : ${assists}",
            "Final kills : ${final_kills} | Final deaths : ${final_deaths}",
            "FKDR : ${fkdr} | Final Assists : ${final_assists}"
        ],
        "bb": [
            "Game played : ${games_played} | Score : ${score} | Wins : ${wins}",
            "Solo-Normal wins : ${wins_solo_normal} | Team-Normal wins : ${wins_teams_normal}",
            "Solo-Pro wins : ${wins_solo_pro} | Guess the build wins : ${wins_guess_the_build}"
        ],
        "bsg": [
            "Coins : ${coins} | Chests Opened : ${chests_opened}",
            "Games Played : ${games_played} | Wins : ${wins}",
            "Kills : ${kills} | Deaths : ${deaths} | K/D : ${kd_rate}"
        ]
    },
    "titleMode": {
        "title": {
            "bw": [
                "WS",
                "FKDR",
                "WLR",
                "Finals",
                "Wins"
            ],
            "sw": [
                "WS",
                "KDR",
                "WLR",
                "Kills",
                "Wins"
            ],
            "mm": [
                "WR",
                "Kills",
                "MC",
                "DC",
                "AC"
            ],
            "duel": [
                "WS",
                "KDR",
                "WLR",
                "Kills",
                "Wins"
            ],
            "uhc": [
                "Score",
                "KDR",
                "WLR",
                "Kills",
                "Wins"
            ],
            "mw": [
                "FKDR",
                "WLR",
                "Finals",
                "Wins",
                "WDamage"
            ],
            "ww": [
                "KDR",
                "WR",
                "Kills",
                "Wins",
                "WPlaced"
            ],
            "bsg": [
                "WR",
                "Wins",
                "KDR",
                "Kills",
                "Times"
            ]
        },
        "mode": {
            "bw": [
                {
                    "id": "",
                    "name": "All"
                },
                {
                    "id": "eight_one_",
                    "name": "Solo"
                },
                {
                    "id": "eight_two_",
                    "name": "Double"
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
                    "name": "All"
                },
                {
                    "id": "_solo",
                    "name": "Solo"
                },
                {
                    "id": "_solo_normal",
                    "name": "Solo Normal"
                },
                {
                    "id": "_solo_insane",
                    "name": "Solo Insane"
                },
                {
                    "id": "_team",
                    "name": "Team"
                },
                {
                    "id": "_team_normal",
                    "name": "Team Normal"
                },
                {
                    "id": "_team_insane",
                    "name": "Team Insane"
                },
                {
                    "id": "_lab",
                    "name": "Laboratory"
                }
            ],
            "mm": [
                {
                    "id": "",
                    "name": "All"
                },
                {
                    "id": "_MURDER_CLASSIC",
                    "name": "Classic"
                },
                {
                    "id": "_MURDER_DOUBLE_UP",
                    "name": "Double Up!"
                },
                {
                    "id": "_MURDER_ASSASSINS",
                    "name": "Assassins"
                },
                {
                    "id": "_MURDER_INFECTION",
                    "name": "Infection"
                }
            ],
            "duel": [
                {
                    "id": "",
                    "name": "All"
                }
            ],
            "uhc": [
                {
                    "id": "",
                    "name": "All"
                },
                {
                    "id": "_solo_brawl",
                    "name": "Solo"
                },
                {
                    "id": "_duo_brawl",
                    "name": "Team"
                },
                {
                    "id": "_red_vs_blue",
                    "name": "Duel"
                }
            ],
            "mw": [
                {
                    "id": "",
                    "name": "All"
                }
            ],
            "ww": [
                {
                    "id": "",
                    "name": "All"
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
            "name": "Blitz Survival Games"
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
            "name": "Mega Walls"
        },
        {
            "id": 14,
            "short": "arcade",
            "name": "Arcade"
        },
        {
            "id": 17,
            "short": "arena",
            "name": "Arena"
        },
        {
            "id": 20,
            "short": "uhc",
            "name": "UHC Champions"
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
            "name": "SkyWars"
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
            "name": "Bed Wars"
        },
        {
            "id": 59,
            "short": "mm",
            "name": "Murder Mystery"
        },
        {
            "id": 60,
            "short": "bb",
            "name": "Build Battle"
        },
        {
            "id": 61,
            "short": "duel",
            "name": "Duels"
        },
        {
            "id": 63,
            "short": "sb",
            "name": "SkyBlock"
        },
        {
            "id": 64,
            "short": "pit",
            "name": "The Pit"
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