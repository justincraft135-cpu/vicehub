/* Tracker lists. REAL data built from the game's own 100% checklist and confirmed
 * launch-week sources (PowerPyx / GTABase in-game checklists), 2026-11-18.
 * Each item: { id: "unique-id", name: "Shown name", note: "Optional hint", area: "Optional region" }
 * Never reuse or change an id once it's live, because visitors' saved progress uses it.
 */
var TRACKERS = [
 {
  "id": "checklist100",
  "title": "100% Checklist",
  "intro": "The game's own 100% checklist (Progress &gt; Stats &gt; 100% Completion) has 35 requirements in three groups: Story &amp; Tasks 45%, Exploration &amp; Activities 45%, Discovery 10%. Every confirmed requirement is listed below. Nothing is missable — everything counts even before you finish the story, and the rest can be done in free-roam afterwards. Completing it earns the 'A Long Road' trophy.",
  "items": [
   {
    "id": "finish-story",
    "name": "Finish the story",
    "note": "Complete the main storyline — prologue plus five chapters.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "optional-tasks",
    "name": "Optional Tasks",
    "note": "Complete 100 Optional Tasks.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "gang-ops",
    "name": "Gang Operations",
    "note": "Complete all 39.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "bank-jobs",
    "name": "Bank Jobs",
    "note": "Complete all 22.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "payday-jobs",
    "name": "Payday Loan Jobs",
    "note": "Complete all 7.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "smash-grabs",
    "name": "Smash 'N' Grabs",
    "note": "Complete 34 of 35.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "stick-ups",
    "name": "Stick Ups",
    "note": "Complete 50 of 91.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "vaults",
    "name": "Bank Vaults",
    "note": "Hit all 8 vaults. Follow the armored security van — afterwards the fence Yasmani sells security-van tips for $10,000.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "fence-narcotics",
    "name": "Fence narcotics",
    "note": "Fence $100,000 worth of narcotics.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "fence-jewelry",
    "name": "Fence jewelry",
    "note": "Fence $100,000 worth of jewelry.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "fence-bills",
    "name": "Fence marked bills",
    "note": "Fence $250,000 worth of marked bills.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "fence-vehicles",
    "name": "Fence vehicles",
    "note": "Fence $200,000 worth of vehicles.",
    "area": "Story & Tasks (45%)"
   },
   {
    "id": "card-sets",
    "name": "Collectible Card sets",
    "note": "Complete 15 of 18 sets — 480 unique cards in total.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "flamingos",
    "name": "Cocaine Flamingos",
    "note": "Destroy 100 of 125.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "kenton-sets",
    "name": "Kenton Sets (underwater)",
    "note": "Complete 5 of 7 sets — 33 Underwater Discoveries in total.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "magazines",
    "name": "Magazines, Books & Comics",
    "note": "Collect 30 of 34 (27 magazines + 7 Book Swaps).",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "waink-locations",
    "name": "WAiNK Locations",
    "note": "Scan 100 landmarks and sculptures with the WAiNK phone app.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "meditation",
    "name": "Meditation Spots",
    "note": "Use 15 of 18.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "hoops",
    "name": "Basketball Hoops",
    "note": "Play 90 of 100 hoops.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "stunts",
    "name": "Stunts",
    "note": "Complete 300 of 397 — stunt jumps, under-the-bridges, knife flights and base jumps.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "challenges",
    "name": "Challenges",
    "note": "Complete 70 of 80.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "ranges",
    "name": "Shooting Ranges",
    "note": "Gold medals in all 42 events.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "drone-trials",
    "name": "Drone Time Trials",
    "note": "Complete all 42 — 14 locations, 3 trials each.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "races",
    "name": "Races",
    "note": "Win 30 of 40 unique races.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "race-challenges",
    "name": "Race Challenges",
    "note": "Gold medals in 10 of 13.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "hunting",
    "name": "Hunting Quests",
    "note": "Complete all 15 of Bret's hunting quests.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "pool",
    "name": "Pool",
    "note": "Defeat 5 of 7 opponents.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "mini-golf",
    "name": "Mini Golf",
    "note": "Play 2 of 3 courses.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "video-games",
    "name": "Video Games",
    "note": "Play all 4 playable video games.",
    "area": "Exploration & Activities (45%)"
   },
   {
    "id": "vehicle-scans",
    "name": "Vehicle scans",
    "note": "Scan 200 of 277 base-model vehicles with the WAiNK app.",
    "area": "Discovery (10%)"
   },
   {
    "id": "weapons-held",
    "name": "Weapons held",
    "note": "Hold 50 of 66 standard-issue weapons.",
    "area": "Discovery (10%)"
   },
   {
    "id": "animals-studied",
    "name": "Animals studied",
    "note": "Study 100 of 255 animals through binoculars — hunting not required.",
    "area": "Discovery (10%)"
   }
  ]
 },
 {
  "id": "missions",
  "title": "Story Missions",
  "intro": "93 main story missions across a prologue and five chapters — counts from the game's own Story recap. Mission names are being added as they're confirmed. Free switching between Jason and Lucia unlocks in Chapter 2 (the mission 'Coffee Break'), and the 100% checklist is one shared list for both. New for the series: there is no mission replay and no Gold Medal system.",
  "items": [
   {
    "id": "prologue",
    "name": "Prologue",
    "note": "Lucia's opening. Some counts fold the prologue into Chapter 1.",
    "area": "Prologue"
   },
   {
    "id": "c1-m1",
    "name": "Mission 1",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m2",
    "name": "Mission 2",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m3",
    "name": "Mission 3",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m4",
    "name": "Mission 4",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m5",
    "name": "Mission 5",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m6",
    "name": "Mission 6",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m7",
    "name": "Mission 7",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m8",
    "name": "Mission 8",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m9",
    "name": "Mission 9",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m10",
    "name": "Mission 10",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m11",
    "name": "Mission 11",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m12",
    "name": "Mission 12",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m13",
    "name": "Mission 13",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m14",
    "name": "Mission 14",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m15",
    "name": "Mission 15",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m16",
    "name": "Mission 16",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m17",
    "name": "Mission 17",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m18",
    "name": "Mission 18",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m19",
    "name": "Mission 19",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m20",
    "name": "Mission 20",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m21",
    "name": "Mission 21",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c1-m22",
    "name": "Mission 22",
    "area": "Chapter 1: Just Like Paradise"
   },
   {
    "id": "c2-m1",
    "name": "Mission 1",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m2",
    "name": "Mission 2",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m3",
    "name": "Mission 3",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m4",
    "name": "Mission 4",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m5",
    "name": "Mission 5",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m6",
    "name": "Mission 6",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m7",
    "name": "Mission 7",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m8",
    "name": "Mission 8",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m9",
    "name": "Mission 9",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m10",
    "name": "Mission 10",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m11",
    "name": "Mission 11",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m12",
    "name": "Mission 12",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c2-m13",
    "name": "Mission 13",
    "area": "Chapter 2: Paradise Lost"
   },
   {
    "id": "c3-m1",
    "name": "Mission 1",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m2",
    "name": "Mission 2",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m3",
    "name": "Mission 3",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m4",
    "name": "Mission 4",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m5",
    "name": "Mission 5",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m6",
    "name": "Mission 6",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m7",
    "name": "Mission 7",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m8",
    "name": "Mission 8",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m9",
    "name": "Mission 9",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m10",
    "name": "Mission 10",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m11",
    "name": "Mission 11",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m12",
    "name": "Mission 12",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m13",
    "name": "Mission 13",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m14",
    "name": "Mission 14",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m15",
    "name": "Mission 15",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m16",
    "name": "Mission 16",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m17",
    "name": "Mission 17",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m18",
    "name": "Mission 18",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m19",
    "name": "Mission 19",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m20",
    "name": "Mission 20",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m21",
    "name": "Mission 21",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m22",
    "name": "Mission 22",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m23",
    "name": "Mission 23",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m24",
    "name": "Mission 24",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m25",
    "name": "Mission 25",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c3-m26",
    "name": "Mission 26",
    "area": "Chapter 3: Tits Ass Drug Money"
   },
   {
    "id": "c4-m1",
    "name": "Mission 1",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m2",
    "name": "Mission 2",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m3",
    "name": "Mission 3",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m4",
    "name": "Mission 4",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m5",
    "name": "Mission 5",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m6",
    "name": "Mission 6",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m7",
    "name": "Mission 7",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m8",
    "name": "Mission 8",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m9",
    "name": "Mission 9",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m10",
    "name": "Mission 10",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m11",
    "name": "Mission 11",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m12",
    "name": "Mission 12",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m13",
    "name": "Mission 13",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m14",
    "name": "Mission 14",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m15",
    "name": "Mission 15",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m16",
    "name": "Mission 16",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m17",
    "name": "Mission 17",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m18",
    "name": "Mission 18",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m19",
    "name": "Mission 19",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m20",
    "name": "Mission 20",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m21",
    "name": "Mission 21",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m22",
    "name": "Mission 22",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m23",
    "name": "Mission 23",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m24",
    "name": "Mission 24",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c4-m25",
    "name": "Mission 25",
    "area": "Chapter 4: Vice City, Baby"
   },
   {
    "id": "c5-m1",
    "name": "Mission 1",
    "area": "Chapter 5: Top of the World, Ma"
   },
   {
    "id": "c5-m2",
    "name": "Mission 2",
    "area": "Chapter 5: Top of the World, Ma"
   },
   {
    "id": "c5-m3",
    "name": "Mission 3",
    "area": "Chapter 5: Top of the World, Ma"
   },
   {
    "id": "c5-m4",
    "name": "Mission 4",
    "area": "Chapter 5: Top of the World, Ma"
   },
   {
    "id": "c5-m5",
    "name": "Mission 5",
    "area": "Chapter 5: Top of the World, Ma"
   },
   {
    "id": "c5-m6",
    "name": "Mission 6",
    "area": "Chapter 5: Top of the World, Ma"
   },
   {
    "id": "c5-m7",
    "name": "Mission 7",
    "area": "Chapter 5: Top of the World, Ma"
   }
  ]
 },
 {
  "id": "locations",
  "title": "Locations",
  "intro": "Regions of Leonida shown by Rockstar before launch.",
  "items": [
   {
    "id": "vice-city",
    "name": "Vice City",
    "note": "The neon-lit city at the heart of Leonida."
   },
   {
    "id": "leonida-keys",
    "name": "Leonida Keys",
    "note": "A chain of islands and beaches."
   },
   {
    "id": "grassrivers",
    "name": "Grassrivers",
    "note": "Wetlands and swamp, home to plenty of wildlife."
   },
   {
    "id": "port-gellhorn",
    "name": "Port Gellhorn",
    "note": "A run-down port town."
   },
   {
    "id": "ambrosia",
    "name": "Ambrosia",
    "note": "Farmland and industry inland."
   },
   {
    "id": "mount-kalaga",
    "name": "Mount Kalaga National Park",
    "note": "Forests, trails and backcountry."
   }
  ]
 },
 {
  "id": "collectibles",
  "title": "Collectible Cards",
  "intro": "480 unique cards in 18 sets of 18–36 cards. Complete 15 full sets for 100%; completing 3 sets earns the 'Don't Touch My Deck' trophy. Tick a set off when it's complete.",
  "items": [
   {
    "id": "set-1",
    "name": "Card Set #1"
   },
   {
    "id": "set-2",
    "name": "Card Set #2"
   },
   {
    "id": "set-3",
    "name": "Card Set #3"
   },
   {
    "id": "set-4",
    "name": "Card Set #4"
   },
   {
    "id": "set-5",
    "name": "Card Set #5"
   },
   {
    "id": "set-6",
    "name": "Card Set #6"
   },
   {
    "id": "set-7",
    "name": "Card Set #7"
   },
   {
    "id": "set-8",
    "name": "Card Set #8"
   },
   {
    "id": "set-9",
    "name": "Card Set #9"
   },
   {
    "id": "set-10",
    "name": "Card Set #10"
   },
   {
    "id": "set-11",
    "name": "Card Set #11"
   },
   {
    "id": "set-12",
    "name": "Card Set #12"
   },
   {
    "id": "set-13",
    "name": "Card Set #13"
   },
   {
    "id": "set-14",
    "name": "Card Set #14"
   },
   {
    "id": "set-15",
    "name": "Card Set #15"
   },
   {
    "id": "set-16",
    "name": "Card Set #16"
   },
   {
    "id": "set-17",
    "name": "Card Set #17"
   },
   {
    "id": "set-18",
    "name": "Card Set #18"
   }
  ]
 },
 {
  "id": "flamingos",
  "title": "Cocaine Flamingos",
  "intro": "Destroy the flamingos hidden around Leonida as you find them. 100 of 125 needed for 100%.",
  "items": [
   {
    "id": "flamingo-1",
    "name": "Flamingo #1"
   },
   {
    "id": "flamingo-2",
    "name": "Flamingo #2"
   },
   {
    "id": "flamingo-3",
    "name": "Flamingo #3"
   },
   {
    "id": "flamingo-4",
    "name": "Flamingo #4"
   },
   {
    "id": "flamingo-5",
    "name": "Flamingo #5"
   },
   {
    "id": "flamingo-6",
    "name": "Flamingo #6"
   },
   {
    "id": "flamingo-7",
    "name": "Flamingo #7"
   },
   {
    "id": "flamingo-8",
    "name": "Flamingo #8"
   },
   {
    "id": "flamingo-9",
    "name": "Flamingo #9"
   },
   {
    "id": "flamingo-10",
    "name": "Flamingo #10"
   },
   {
    "id": "flamingo-11",
    "name": "Flamingo #11"
   },
   {
    "id": "flamingo-12",
    "name": "Flamingo #12"
   },
   {
    "id": "flamingo-13",
    "name": "Flamingo #13"
   },
   {
    "id": "flamingo-14",
    "name": "Flamingo #14"
   },
   {
    "id": "flamingo-15",
    "name": "Flamingo #15"
   },
   {
    "id": "flamingo-16",
    "name": "Flamingo #16"
   },
   {
    "id": "flamingo-17",
    "name": "Flamingo #17"
   },
   {
    "id": "flamingo-18",
    "name": "Flamingo #18"
   },
   {
    "id": "flamingo-19",
    "name": "Flamingo #19"
   },
   {
    "id": "flamingo-20",
    "name": "Flamingo #20"
   },
   {
    "id": "flamingo-21",
    "name": "Flamingo #21"
   },
   {
    "id": "flamingo-22",
    "name": "Flamingo #22"
   },
   {
    "id": "flamingo-23",
    "name": "Flamingo #23"
   },
   {
    "id": "flamingo-24",
    "name": "Flamingo #24"
   },
   {
    "id": "flamingo-25",
    "name": "Flamingo #25"
   },
   {
    "id": "flamingo-26",
    "name": "Flamingo #26"
   },
   {
    "id": "flamingo-27",
    "name": "Flamingo #27"
   },
   {
    "id": "flamingo-28",
    "name": "Flamingo #28"
   },
   {
    "id": "flamingo-29",
    "name": "Flamingo #29"
   },
   {
    "id": "flamingo-30",
    "name": "Flamingo #30"
   },
   {
    "id": "flamingo-31",
    "name": "Flamingo #31"
   },
   {
    "id": "flamingo-32",
    "name": "Flamingo #32"
   },
   {
    "id": "flamingo-33",
    "name": "Flamingo #33"
   },
   {
    "id": "flamingo-34",
    "name": "Flamingo #34"
   },
   {
    "id": "flamingo-35",
    "name": "Flamingo #35"
   },
   {
    "id": "flamingo-36",
    "name": "Flamingo #36"
   },
   {
    "id": "flamingo-37",
    "name": "Flamingo #37"
   },
   {
    "id": "flamingo-38",
    "name": "Flamingo #38"
   },
   {
    "id": "flamingo-39",
    "name": "Flamingo #39"
   },
   {
    "id": "flamingo-40",
    "name": "Flamingo #40"
   },
   {
    "id": "flamingo-41",
    "name": "Flamingo #41"
   },
   {
    "id": "flamingo-42",
    "name": "Flamingo #42"
   },
   {
    "id": "flamingo-43",
    "name": "Flamingo #43"
   },
   {
    "id": "flamingo-44",
    "name": "Flamingo #44"
   },
   {
    "id": "flamingo-45",
    "name": "Flamingo #45"
   },
   {
    "id": "flamingo-46",
    "name": "Flamingo #46"
   },
   {
    "id": "flamingo-47",
    "name": "Flamingo #47"
   },
   {
    "id": "flamingo-48",
    "name": "Flamingo #48"
   },
   {
    "id": "flamingo-49",
    "name": "Flamingo #49"
   },
   {
    "id": "flamingo-50",
    "name": "Flamingo #50"
   },
   {
    "id": "flamingo-51",
    "name": "Flamingo #51"
   },
   {
    "id": "flamingo-52",
    "name": "Flamingo #52"
   },
   {
    "id": "flamingo-53",
    "name": "Flamingo #53"
   },
   {
    "id": "flamingo-54",
    "name": "Flamingo #54"
   },
   {
    "id": "flamingo-55",
    "name": "Flamingo #55"
   },
   {
    "id": "flamingo-56",
    "name": "Flamingo #56"
   },
   {
    "id": "flamingo-57",
    "name": "Flamingo #57"
   },
   {
    "id": "flamingo-58",
    "name": "Flamingo #58"
   },
   {
    "id": "flamingo-59",
    "name": "Flamingo #59"
   },
   {
    "id": "flamingo-60",
    "name": "Flamingo #60"
   },
   {
    "id": "flamingo-61",
    "name": "Flamingo #61"
   },
   {
    "id": "flamingo-62",
    "name": "Flamingo #62"
   },
   {
    "id": "flamingo-63",
    "name": "Flamingo #63"
   },
   {
    "id": "flamingo-64",
    "name": "Flamingo #64"
   },
   {
    "id": "flamingo-65",
    "name": "Flamingo #65"
   },
   {
    "id": "flamingo-66",
    "name": "Flamingo #66"
   },
   {
    "id": "flamingo-67",
    "name": "Flamingo #67"
   },
   {
    "id": "flamingo-68",
    "name": "Flamingo #68"
   },
   {
    "id": "flamingo-69",
    "name": "Flamingo #69"
   },
   {
    "id": "flamingo-70",
    "name": "Flamingo #70"
   },
   {
    "id": "flamingo-71",
    "name": "Flamingo #71"
   },
   {
    "id": "flamingo-72",
    "name": "Flamingo #72"
   },
   {
    "id": "flamingo-73",
    "name": "Flamingo #73"
   },
   {
    "id": "flamingo-74",
    "name": "Flamingo #74"
   },
   {
    "id": "flamingo-75",
    "name": "Flamingo #75"
   },
   {
    "id": "flamingo-76",
    "name": "Flamingo #76"
   },
   {
    "id": "flamingo-77",
    "name": "Flamingo #77"
   },
   {
    "id": "flamingo-78",
    "name": "Flamingo #78"
   },
   {
    "id": "flamingo-79",
    "name": "Flamingo #79"
   },
   {
    "id": "flamingo-80",
    "name": "Flamingo #80"
   },
   {
    "id": "flamingo-81",
    "name": "Flamingo #81"
   },
   {
    "id": "flamingo-82",
    "name": "Flamingo #82"
   },
   {
    "id": "flamingo-83",
    "name": "Flamingo #83"
   },
   {
    "id": "flamingo-84",
    "name": "Flamingo #84"
   },
   {
    "id": "flamingo-85",
    "name": "Flamingo #85"
   },
   {
    "id": "flamingo-86",
    "name": "Flamingo #86"
   },
   {
    "id": "flamingo-87",
    "name": "Flamingo #87"
   },
   {
    "id": "flamingo-88",
    "name": "Flamingo #88"
   },
   {
    "id": "flamingo-89",
    "name": "Flamingo #89"
   },
   {
    "id": "flamingo-90",
    "name": "Flamingo #90"
   },
   {
    "id": "flamingo-91",
    "name": "Flamingo #91"
   },
   {
    "id": "flamingo-92",
    "name": "Flamingo #92"
   },
   {
    "id": "flamingo-93",
    "name": "Flamingo #93"
   },
   {
    "id": "flamingo-94",
    "name": "Flamingo #94"
   },
   {
    "id": "flamingo-95",
    "name": "Flamingo #95"
   },
   {
    "id": "flamingo-96",
    "name": "Flamingo #96"
   },
   {
    "id": "flamingo-97",
    "name": "Flamingo #97"
   },
   {
    "id": "flamingo-98",
    "name": "Flamingo #98"
   },
   {
    "id": "flamingo-99",
    "name": "Flamingo #99"
   },
   {
    "id": "flamingo-100",
    "name": "Flamingo #100"
   },
   {
    "id": "flamingo-101",
    "name": "Flamingo #101"
   },
   {
    "id": "flamingo-102",
    "name": "Flamingo #102"
   },
   {
    "id": "flamingo-103",
    "name": "Flamingo #103"
   },
   {
    "id": "flamingo-104",
    "name": "Flamingo #104"
   },
   {
    "id": "flamingo-105",
    "name": "Flamingo #105"
   },
   {
    "id": "flamingo-106",
    "name": "Flamingo #106"
   },
   {
    "id": "flamingo-107",
    "name": "Flamingo #107"
   },
   {
    "id": "flamingo-108",
    "name": "Flamingo #108"
   },
   {
    "id": "flamingo-109",
    "name": "Flamingo #109"
   },
   {
    "id": "flamingo-110",
    "name": "Flamingo #110"
   },
   {
    "id": "flamingo-111",
    "name": "Flamingo #111"
   },
   {
    "id": "flamingo-112",
    "name": "Flamingo #112"
   },
   {
    "id": "flamingo-113",
    "name": "Flamingo #113"
   },
   {
    "id": "flamingo-114",
    "name": "Flamingo #114"
   },
   {
    "id": "flamingo-115",
    "name": "Flamingo #115"
   },
   {
    "id": "flamingo-116",
    "name": "Flamingo #116"
   },
   {
    "id": "flamingo-117",
    "name": "Flamingo #117"
   },
   {
    "id": "flamingo-118",
    "name": "Flamingo #118"
   },
   {
    "id": "flamingo-119",
    "name": "Flamingo #119"
   },
   {
    "id": "flamingo-120",
    "name": "Flamingo #120"
   },
   {
    "id": "flamingo-121",
    "name": "Flamingo #121"
   },
   {
    "id": "flamingo-122",
    "name": "Flamingo #122"
   },
   {
    "id": "flamingo-123",
    "name": "Flamingo #123"
   },
   {
    "id": "flamingo-124",
    "name": "Flamingo #124"
   },
   {
    "id": "flamingo-125",
    "name": "Flamingo #125"
   }
  ]
 },
 {
  "id": "underwater",
  "title": "Underwater Discoveries",
  "intro": "Sunken shipwrecks and underwater finds, tied to Kenton's treasure-diving questline. They group into 7 Kenton Sets — 5 complete sets are needed for 100%.",
  "items": [
   {
    "id": "discovery-1",
    "name": "Discovery #1"
   },
   {
    "id": "discovery-2",
    "name": "Discovery #2"
   },
   {
    "id": "discovery-3",
    "name": "Discovery #3"
   },
   {
    "id": "discovery-4",
    "name": "Discovery #4"
   },
   {
    "id": "discovery-5",
    "name": "Discovery #5"
   },
   {
    "id": "discovery-6",
    "name": "Discovery #6"
   },
   {
    "id": "discovery-7",
    "name": "Discovery #7"
   },
   {
    "id": "discovery-8",
    "name": "Discovery #8"
   },
   {
    "id": "discovery-9",
    "name": "Discovery #9"
   },
   {
    "id": "discovery-10",
    "name": "Discovery #10"
   },
   {
    "id": "discovery-11",
    "name": "Discovery #11"
   },
   {
    "id": "discovery-12",
    "name": "Discovery #12"
   },
   {
    "id": "discovery-13",
    "name": "Discovery #13"
   },
   {
    "id": "discovery-14",
    "name": "Discovery #14"
   },
   {
    "id": "discovery-15",
    "name": "Discovery #15"
   },
   {
    "id": "discovery-16",
    "name": "Discovery #16"
   },
   {
    "id": "discovery-17",
    "name": "Discovery #17"
   },
   {
    "id": "discovery-18",
    "name": "Discovery #18"
   },
   {
    "id": "discovery-19",
    "name": "Discovery #19"
   },
   {
    "id": "discovery-20",
    "name": "Discovery #20"
   },
   {
    "id": "discovery-21",
    "name": "Discovery #21"
   },
   {
    "id": "discovery-22",
    "name": "Discovery #22"
   },
   {
    "id": "discovery-23",
    "name": "Discovery #23"
   },
   {
    "id": "discovery-24",
    "name": "Discovery #24"
   },
   {
    "id": "discovery-25",
    "name": "Discovery #25"
   },
   {
    "id": "discovery-26",
    "name": "Discovery #26"
   },
   {
    "id": "discovery-27",
    "name": "Discovery #27"
   },
   {
    "id": "discovery-28",
    "name": "Discovery #28"
   },
   {
    "id": "discovery-29",
    "name": "Discovery #29"
   },
   {
    "id": "discovery-30",
    "name": "Discovery #30"
   },
   {
    "id": "discovery-31",
    "name": "Discovery #31"
   },
   {
    "id": "discovery-32",
    "name": "Discovery #32"
   },
   {
    "id": "discovery-33",
    "name": "Discovery #33"
   }
  ]
 },
 {
  "id": "magazines",
  "title": "Magazines, Books & Comics",
  "intro": "27 magazines and 7 Book Swaps around Leonida. 30 of 34 needed for 100%.",
  "items": [
   {
    "id": "magazine-1",
    "name": "Magazine #1"
   },
   {
    "id": "magazine-2",
    "name": "Magazine #2"
   },
   {
    "id": "magazine-3",
    "name": "Magazine #3"
   },
   {
    "id": "magazine-4",
    "name": "Magazine #4"
   },
   {
    "id": "magazine-5",
    "name": "Magazine #5"
   },
   {
    "id": "magazine-6",
    "name": "Magazine #6"
   },
   {
    "id": "magazine-7",
    "name": "Magazine #7"
   },
   {
    "id": "magazine-8",
    "name": "Magazine #8"
   },
   {
    "id": "magazine-9",
    "name": "Magazine #9"
   },
   {
    "id": "magazine-10",
    "name": "Magazine #10"
   },
   {
    "id": "magazine-11",
    "name": "Magazine #11"
   },
   {
    "id": "magazine-12",
    "name": "Magazine #12"
   },
   {
    "id": "magazine-13",
    "name": "Magazine #13"
   },
   {
    "id": "magazine-14",
    "name": "Magazine #14"
   },
   {
    "id": "magazine-15",
    "name": "Magazine #15"
   },
   {
    "id": "magazine-16",
    "name": "Magazine #16"
   },
   {
    "id": "magazine-17",
    "name": "Magazine #17"
   },
   {
    "id": "magazine-18",
    "name": "Magazine #18"
   },
   {
    "id": "magazine-19",
    "name": "Magazine #19"
   },
   {
    "id": "magazine-20",
    "name": "Magazine #20"
   },
   {
    "id": "magazine-21",
    "name": "Magazine #21"
   },
   {
    "id": "magazine-22",
    "name": "Magazine #22"
   },
   {
    "id": "magazine-23",
    "name": "Magazine #23"
   },
   {
    "id": "magazine-24",
    "name": "Magazine #24"
   },
   {
    "id": "magazine-25",
    "name": "Magazine #25"
   },
   {
    "id": "magazine-26",
    "name": "Magazine #26"
   },
   {
    "id": "magazine-27",
    "name": "Magazine #27"
   },
   {
    "id": "bookswap-1",
    "name": "Book Swap #1"
   },
   {
    "id": "bookswap-2",
    "name": "Book Swap #2"
   },
   {
    "id": "bookswap-3",
    "name": "Book Swap #3"
   },
   {
    "id": "bookswap-4",
    "name": "Book Swap #4"
   },
   {
    "id": "bookswap-5",
    "name": "Book Swap #5"
   },
   {
    "id": "bookswap-6",
    "name": "Book Swap #6"
   },
   {
    "id": "bookswap-7",
    "name": "Book Swap #7"
   }
  ]
 },
 {
  "id": "waink",
  "title": "WAiNK Locations",
  "intro": "Landmarks and sculptures scanned with the WAiNK phone app. Scan 100 for 100% — the game's full total is higher and is still being mapped, so this list covers the 100 you need.",
  "items": [
   {
    "id": "waink-1",
    "name": "Location #1"
   },
   {
    "id": "waink-2",
    "name": "Location #2"
   },
   {
    "id": "waink-3",
    "name": "Location #3"
   },
   {
    "id": "waink-4",
    "name": "Location #4"
   },
   {
    "id": "waink-5",
    "name": "Location #5"
   },
   {
    "id": "waink-6",
    "name": "Location #6"
   },
   {
    "id": "waink-7",
    "name": "Location #7"
   },
   {
    "id": "waink-8",
    "name": "Location #8"
   },
   {
    "id": "waink-9",
    "name": "Location #9"
   },
   {
    "id": "waink-10",
    "name": "Location #10"
   },
   {
    "id": "waink-11",
    "name": "Location #11"
   },
   {
    "id": "waink-12",
    "name": "Location #12"
   },
   {
    "id": "waink-13",
    "name": "Location #13"
   },
   {
    "id": "waink-14",
    "name": "Location #14"
   },
   {
    "id": "waink-15",
    "name": "Location #15"
   },
   {
    "id": "waink-16",
    "name": "Location #16"
   },
   {
    "id": "waink-17",
    "name": "Location #17"
   },
   {
    "id": "waink-18",
    "name": "Location #18"
   },
   {
    "id": "waink-19",
    "name": "Location #19"
   },
   {
    "id": "waink-20",
    "name": "Location #20"
   },
   {
    "id": "waink-21",
    "name": "Location #21"
   },
   {
    "id": "waink-22",
    "name": "Location #22"
   },
   {
    "id": "waink-23",
    "name": "Location #23"
   },
   {
    "id": "waink-24",
    "name": "Location #24"
   },
   {
    "id": "waink-25",
    "name": "Location #25"
   },
   {
    "id": "waink-26",
    "name": "Location #26"
   },
   {
    "id": "waink-27",
    "name": "Location #27"
   },
   {
    "id": "waink-28",
    "name": "Location #28"
   },
   {
    "id": "waink-29",
    "name": "Location #29"
   },
   {
    "id": "waink-30",
    "name": "Location #30"
   },
   {
    "id": "waink-31",
    "name": "Location #31"
   },
   {
    "id": "waink-32",
    "name": "Location #32"
   },
   {
    "id": "waink-33",
    "name": "Location #33"
   },
   {
    "id": "waink-34",
    "name": "Location #34"
   },
   {
    "id": "waink-35",
    "name": "Location #35"
   },
   {
    "id": "waink-36",
    "name": "Location #36"
   },
   {
    "id": "waink-37",
    "name": "Location #37"
   },
   {
    "id": "waink-38",
    "name": "Location #38"
   },
   {
    "id": "waink-39",
    "name": "Location #39"
   },
   {
    "id": "waink-40",
    "name": "Location #40"
   },
   {
    "id": "waink-41",
    "name": "Location #41"
   },
   {
    "id": "waink-42",
    "name": "Location #42"
   },
   {
    "id": "waink-43",
    "name": "Location #43"
   },
   {
    "id": "waink-44",
    "name": "Location #44"
   },
   {
    "id": "waink-45",
    "name": "Location #45"
   },
   {
    "id": "waink-46",
    "name": "Location #46"
   },
   {
    "id": "waink-47",
    "name": "Location #47"
   },
   {
    "id": "waink-48",
    "name": "Location #48"
   },
   {
    "id": "waink-49",
    "name": "Location #49"
   },
   {
    "id": "waink-50",
    "name": "Location #50"
   },
   {
    "id": "waink-51",
    "name": "Location #51"
   },
   {
    "id": "waink-52",
    "name": "Location #52"
   },
   {
    "id": "waink-53",
    "name": "Location #53"
   },
   {
    "id": "waink-54",
    "name": "Location #54"
   },
   {
    "id": "waink-55",
    "name": "Location #55"
   },
   {
    "id": "waink-56",
    "name": "Location #56"
   },
   {
    "id": "waink-57",
    "name": "Location #57"
   },
   {
    "id": "waink-58",
    "name": "Location #58"
   },
   {
    "id": "waink-59",
    "name": "Location #59"
   },
   {
    "id": "waink-60",
    "name": "Location #60"
   },
   {
    "id": "waink-61",
    "name": "Location #61"
   },
   {
    "id": "waink-62",
    "name": "Location #62"
   },
   {
    "id": "waink-63",
    "name": "Location #63"
   },
   {
    "id": "waink-64",
    "name": "Location #64"
   },
   {
    "id": "waink-65",
    "name": "Location #65"
   },
   {
    "id": "waink-66",
    "name": "Location #66"
   },
   {
    "id": "waink-67",
    "name": "Location #67"
   },
   {
    "id": "waink-68",
    "name": "Location #68"
   },
   {
    "id": "waink-69",
    "name": "Location #69"
   },
   {
    "id": "waink-70",
    "name": "Location #70"
   },
   {
    "id": "waink-71",
    "name": "Location #71"
   },
   {
    "id": "waink-72",
    "name": "Location #72"
   },
   {
    "id": "waink-73",
    "name": "Location #73"
   },
   {
    "id": "waink-74",
    "name": "Location #74"
   },
   {
    "id": "waink-75",
    "name": "Location #75"
   },
   {
    "id": "waink-76",
    "name": "Location #76"
   },
   {
    "id": "waink-77",
    "name": "Location #77"
   },
   {
    "id": "waink-78",
    "name": "Location #78"
   },
   {
    "id": "waink-79",
    "name": "Location #79"
   },
   {
    "id": "waink-80",
    "name": "Location #80"
   },
   {
    "id": "waink-81",
    "name": "Location #81"
   },
   {
    "id": "waink-82",
    "name": "Location #82"
   },
   {
    "id": "waink-83",
    "name": "Location #83"
   },
   {
    "id": "waink-84",
    "name": "Location #84"
   },
   {
    "id": "waink-85",
    "name": "Location #85"
   },
   {
    "id": "waink-86",
    "name": "Location #86"
   },
   {
    "id": "waink-87",
    "name": "Location #87"
   },
   {
    "id": "waink-88",
    "name": "Location #88"
   },
   {
    "id": "waink-89",
    "name": "Location #89"
   },
   {
    "id": "waink-90",
    "name": "Location #90"
   },
   {
    "id": "waink-91",
    "name": "Location #91"
   },
   {
    "id": "waink-92",
    "name": "Location #92"
   },
   {
    "id": "waink-93",
    "name": "Location #93"
   },
   {
    "id": "waink-94",
    "name": "Location #94"
   },
   {
    "id": "waink-95",
    "name": "Location #95"
   },
   {
    "id": "waink-96",
    "name": "Location #96"
   },
   {
    "id": "waink-97",
    "name": "Location #97"
   },
   {
    "id": "waink-98",
    "name": "Location #98"
   },
   {
    "id": "waink-99",
    "name": "Location #99"
   },
   {
    "id": "waink-100",
    "name": "Location #100"
   }
  ]
 },
 {
  "id": "meditation",
  "title": "Meditation Spots",
  "intro": "Quiet spots around Leonida. Use 15 of 18 for 100%.",
  "items": [
   {
    "id": "meditation-1",
    "name": "Meditation Spot #1"
   },
   {
    "id": "meditation-2",
    "name": "Meditation Spot #2"
   },
   {
    "id": "meditation-3",
    "name": "Meditation Spot #3"
   },
   {
    "id": "meditation-4",
    "name": "Meditation Spot #4"
   },
   {
    "id": "meditation-5",
    "name": "Meditation Spot #5"
   },
   {
    "id": "meditation-6",
    "name": "Meditation Spot #6"
   },
   {
    "id": "meditation-7",
    "name": "Meditation Spot #7"
   },
   {
    "id": "meditation-8",
    "name": "Meditation Spot #8"
   },
   {
    "id": "meditation-9",
    "name": "Meditation Spot #9"
   },
   {
    "id": "meditation-10",
    "name": "Meditation Spot #10"
   },
   {
    "id": "meditation-11",
    "name": "Meditation Spot #11"
   },
   {
    "id": "meditation-12",
    "name": "Meditation Spot #12"
   },
   {
    "id": "meditation-13",
    "name": "Meditation Spot #13"
   },
   {
    "id": "meditation-14",
    "name": "Meditation Spot #14"
   },
   {
    "id": "meditation-15",
    "name": "Meditation Spot #15"
   },
   {
    "id": "meditation-16",
    "name": "Meditation Spot #16"
   },
   {
    "id": "meditation-17",
    "name": "Meditation Spot #17"
   },
   {
    "id": "meditation-18",
    "name": "Meditation Spot #18"
   }
  ]
 },
 {
  "id": "hoops",
  "title": "Basketball Hoops",
  "intro": "Hoops courts around Leonida. Play 90 of 100 for 100%.",
  "items": [
   {
    "id": "hoop-1",
    "name": "Hoop #1"
   },
   {
    "id": "hoop-2",
    "name": "Hoop #2"
   },
   {
    "id": "hoop-3",
    "name": "Hoop #3"
   },
   {
    "id": "hoop-4",
    "name": "Hoop #4"
   },
   {
    "id": "hoop-5",
    "name": "Hoop #5"
   },
   {
    "id": "hoop-6",
    "name": "Hoop #6"
   },
   {
    "id": "hoop-7",
    "name": "Hoop #7"
   },
   {
    "id": "hoop-8",
    "name": "Hoop #8"
   },
   {
    "id": "hoop-9",
    "name": "Hoop #9"
   },
   {
    "id": "hoop-10",
    "name": "Hoop #10"
   },
   {
    "id": "hoop-11",
    "name": "Hoop #11"
   },
   {
    "id": "hoop-12",
    "name": "Hoop #12"
   },
   {
    "id": "hoop-13",
    "name": "Hoop #13"
   },
   {
    "id": "hoop-14",
    "name": "Hoop #14"
   },
   {
    "id": "hoop-15",
    "name": "Hoop #15"
   },
   {
    "id": "hoop-16",
    "name": "Hoop #16"
   },
   {
    "id": "hoop-17",
    "name": "Hoop #17"
   },
   {
    "id": "hoop-18",
    "name": "Hoop #18"
   },
   {
    "id": "hoop-19",
    "name": "Hoop #19"
   },
   {
    "id": "hoop-20",
    "name": "Hoop #20"
   },
   {
    "id": "hoop-21",
    "name": "Hoop #21"
   },
   {
    "id": "hoop-22",
    "name": "Hoop #22"
   },
   {
    "id": "hoop-23",
    "name": "Hoop #23"
   },
   {
    "id": "hoop-24",
    "name": "Hoop #24"
   },
   {
    "id": "hoop-25",
    "name": "Hoop #25"
   },
   {
    "id": "hoop-26",
    "name": "Hoop #26"
   },
   {
    "id": "hoop-27",
    "name": "Hoop #27"
   },
   {
    "id": "hoop-28",
    "name": "Hoop #28"
   },
   {
    "id": "hoop-29",
    "name": "Hoop #29"
   },
   {
    "id": "hoop-30",
    "name": "Hoop #30"
   },
   {
    "id": "hoop-31",
    "name": "Hoop #31"
   },
   {
    "id": "hoop-32",
    "name": "Hoop #32"
   },
   {
    "id": "hoop-33",
    "name": "Hoop #33"
   },
   {
    "id": "hoop-34",
    "name": "Hoop #34"
   },
   {
    "id": "hoop-35",
    "name": "Hoop #35"
   },
   {
    "id": "hoop-36",
    "name": "Hoop #36"
   },
   {
    "id": "hoop-37",
    "name": "Hoop #37"
   },
   {
    "id": "hoop-38",
    "name": "Hoop #38"
   },
   {
    "id": "hoop-39",
    "name": "Hoop #39"
   },
   {
    "id": "hoop-40",
    "name": "Hoop #40"
   },
   {
    "id": "hoop-41",
    "name": "Hoop #41"
   },
   {
    "id": "hoop-42",
    "name": "Hoop #42"
   },
   {
    "id": "hoop-43",
    "name": "Hoop #43"
   },
   {
    "id": "hoop-44",
    "name": "Hoop #44"
   },
   {
    "id": "hoop-45",
    "name": "Hoop #45"
   },
   {
    "id": "hoop-46",
    "name": "Hoop #46"
   },
   {
    "id": "hoop-47",
    "name": "Hoop #47"
   },
   {
    "id": "hoop-48",
    "name": "Hoop #48"
   },
   {
    "id": "hoop-49",
    "name": "Hoop #49"
   },
   {
    "id": "hoop-50",
    "name": "Hoop #50"
   },
   {
    "id": "hoop-51",
    "name": "Hoop #51"
   },
   {
    "id": "hoop-52",
    "name": "Hoop #52"
   },
   {
    "id": "hoop-53",
    "name": "Hoop #53"
   },
   {
    "id": "hoop-54",
    "name": "Hoop #54"
   },
   {
    "id": "hoop-55",
    "name": "Hoop #55"
   },
   {
    "id": "hoop-56",
    "name": "Hoop #56"
   },
   {
    "id": "hoop-57",
    "name": "Hoop #57"
   },
   {
    "id": "hoop-58",
    "name": "Hoop #58"
   },
   {
    "id": "hoop-59",
    "name": "Hoop #59"
   },
   {
    "id": "hoop-60",
    "name": "Hoop #60"
   },
   {
    "id": "hoop-61",
    "name": "Hoop #61"
   },
   {
    "id": "hoop-62",
    "name": "Hoop #62"
   },
   {
    "id": "hoop-63",
    "name": "Hoop #63"
   },
   {
    "id": "hoop-64",
    "name": "Hoop #64"
   },
   {
    "id": "hoop-65",
    "name": "Hoop #65"
   },
   {
    "id": "hoop-66",
    "name": "Hoop #66"
   },
   {
    "id": "hoop-67",
    "name": "Hoop #67"
   },
   {
    "id": "hoop-68",
    "name": "Hoop #68"
   },
   {
    "id": "hoop-69",
    "name": "Hoop #69"
   },
   {
    "id": "hoop-70",
    "name": "Hoop #70"
   },
   {
    "id": "hoop-71",
    "name": "Hoop #71"
   },
   {
    "id": "hoop-72",
    "name": "Hoop #72"
   },
   {
    "id": "hoop-73",
    "name": "Hoop #73"
   },
   {
    "id": "hoop-74",
    "name": "Hoop #74"
   },
   {
    "id": "hoop-75",
    "name": "Hoop #75"
   },
   {
    "id": "hoop-76",
    "name": "Hoop #76"
   },
   {
    "id": "hoop-77",
    "name": "Hoop #77"
   },
   {
    "id": "hoop-78",
    "name": "Hoop #78"
   },
   {
    "id": "hoop-79",
    "name": "Hoop #79"
   },
   {
    "id": "hoop-80",
    "name": "Hoop #80"
   },
   {
    "id": "hoop-81",
    "name": "Hoop #81"
   },
   {
    "id": "hoop-82",
    "name": "Hoop #82"
   },
   {
    "id": "hoop-83",
    "name": "Hoop #83"
   },
   {
    "id": "hoop-84",
    "name": "Hoop #84"
   },
   {
    "id": "hoop-85",
    "name": "Hoop #85"
   },
   {
    "id": "hoop-86",
    "name": "Hoop #86"
   },
   {
    "id": "hoop-87",
    "name": "Hoop #87"
   },
   {
    "id": "hoop-88",
    "name": "Hoop #88"
   },
   {
    "id": "hoop-89",
    "name": "Hoop #89"
   },
   {
    "id": "hoop-90",
    "name": "Hoop #90"
   },
   {
    "id": "hoop-91",
    "name": "Hoop #91"
   },
   {
    "id": "hoop-92",
    "name": "Hoop #92"
   },
   {
    "id": "hoop-93",
    "name": "Hoop #93"
   },
   {
    "id": "hoop-94",
    "name": "Hoop #94"
   },
   {
    "id": "hoop-95",
    "name": "Hoop #95"
   },
   {
    "id": "hoop-96",
    "name": "Hoop #96"
   },
   {
    "id": "hoop-97",
    "name": "Hoop #97"
   },
   {
    "id": "hoop-98",
    "name": "Hoop #98"
   },
   {
    "id": "hoop-99",
    "name": "Hoop #99"
   },
   {
    "id": "hoop-100",
    "name": "Hoop #100"
   }
  ]
 },
 {
  "id": "stunts",
  "title": "Stunts",
  "intro": "397 stunts in total: 130 Stunt Jumps, 202 Under the Bridges, 40 Knife Flights and 25 Base Jumps. Complete 300 for 100%.",
  "items": [
   {
    "id": "jump-1",
    "name": "Stunt Jump #1"
   },
   {
    "id": "jump-2",
    "name": "Stunt Jump #2"
   },
   {
    "id": "jump-3",
    "name": "Stunt Jump #3"
   },
   {
    "id": "jump-4",
    "name": "Stunt Jump #4"
   },
   {
    "id": "jump-5",
    "name": "Stunt Jump #5"
   },
   {
    "id": "jump-6",
    "name": "Stunt Jump #6"
   },
   {
    "id": "jump-7",
    "name": "Stunt Jump #7"
   },
   {
    "id": "jump-8",
    "name": "Stunt Jump #8"
   },
   {
    "id": "jump-9",
    "name": "Stunt Jump #9"
   },
   {
    "id": "jump-10",
    "name": "Stunt Jump #10"
   },
   {
    "id": "jump-11",
    "name": "Stunt Jump #11"
   },
   {
    "id": "jump-12",
    "name": "Stunt Jump #12"
   },
   {
    "id": "jump-13",
    "name": "Stunt Jump #13"
   },
   {
    "id": "jump-14",
    "name": "Stunt Jump #14"
   },
   {
    "id": "jump-15",
    "name": "Stunt Jump #15"
   },
   {
    "id": "jump-16",
    "name": "Stunt Jump #16"
   },
   {
    "id": "jump-17",
    "name": "Stunt Jump #17"
   },
   {
    "id": "jump-18",
    "name": "Stunt Jump #18"
   },
   {
    "id": "jump-19",
    "name": "Stunt Jump #19"
   },
   {
    "id": "jump-20",
    "name": "Stunt Jump #20"
   },
   {
    "id": "jump-21",
    "name": "Stunt Jump #21"
   },
   {
    "id": "jump-22",
    "name": "Stunt Jump #22"
   },
   {
    "id": "jump-23",
    "name": "Stunt Jump #23"
   },
   {
    "id": "jump-24",
    "name": "Stunt Jump #24"
   },
   {
    "id": "jump-25",
    "name": "Stunt Jump #25"
   },
   {
    "id": "jump-26",
    "name": "Stunt Jump #26"
   },
   {
    "id": "jump-27",
    "name": "Stunt Jump #27"
   },
   {
    "id": "jump-28",
    "name": "Stunt Jump #28"
   },
   {
    "id": "jump-29",
    "name": "Stunt Jump #29"
   },
   {
    "id": "jump-30",
    "name": "Stunt Jump #30"
   },
   {
    "id": "jump-31",
    "name": "Stunt Jump #31"
   },
   {
    "id": "jump-32",
    "name": "Stunt Jump #32"
   },
   {
    "id": "jump-33",
    "name": "Stunt Jump #33"
   },
   {
    "id": "jump-34",
    "name": "Stunt Jump #34"
   },
   {
    "id": "jump-35",
    "name": "Stunt Jump #35"
   },
   {
    "id": "jump-36",
    "name": "Stunt Jump #36"
   },
   {
    "id": "jump-37",
    "name": "Stunt Jump #37"
   },
   {
    "id": "jump-38",
    "name": "Stunt Jump #38"
   },
   {
    "id": "jump-39",
    "name": "Stunt Jump #39"
   },
   {
    "id": "jump-40",
    "name": "Stunt Jump #40"
   },
   {
    "id": "jump-41",
    "name": "Stunt Jump #41"
   },
   {
    "id": "jump-42",
    "name": "Stunt Jump #42"
   },
   {
    "id": "jump-43",
    "name": "Stunt Jump #43"
   },
   {
    "id": "jump-44",
    "name": "Stunt Jump #44"
   },
   {
    "id": "jump-45",
    "name": "Stunt Jump #45"
   },
   {
    "id": "jump-46",
    "name": "Stunt Jump #46"
   },
   {
    "id": "jump-47",
    "name": "Stunt Jump #47"
   },
   {
    "id": "jump-48",
    "name": "Stunt Jump #48"
   },
   {
    "id": "jump-49",
    "name": "Stunt Jump #49"
   },
   {
    "id": "jump-50",
    "name": "Stunt Jump #50"
   },
   {
    "id": "jump-51",
    "name": "Stunt Jump #51"
   },
   {
    "id": "jump-52",
    "name": "Stunt Jump #52"
   },
   {
    "id": "jump-53",
    "name": "Stunt Jump #53"
   },
   {
    "id": "jump-54",
    "name": "Stunt Jump #54"
   },
   {
    "id": "jump-55",
    "name": "Stunt Jump #55"
   },
   {
    "id": "jump-56",
    "name": "Stunt Jump #56"
   },
   {
    "id": "jump-57",
    "name": "Stunt Jump #57"
   },
   {
    "id": "jump-58",
    "name": "Stunt Jump #58"
   },
   {
    "id": "jump-59",
    "name": "Stunt Jump #59"
   },
   {
    "id": "jump-60",
    "name": "Stunt Jump #60"
   },
   {
    "id": "jump-61",
    "name": "Stunt Jump #61"
   },
   {
    "id": "jump-62",
    "name": "Stunt Jump #62"
   },
   {
    "id": "jump-63",
    "name": "Stunt Jump #63"
   },
   {
    "id": "jump-64",
    "name": "Stunt Jump #64"
   },
   {
    "id": "jump-65",
    "name": "Stunt Jump #65"
   },
   {
    "id": "jump-66",
    "name": "Stunt Jump #66"
   },
   {
    "id": "jump-67",
    "name": "Stunt Jump #67"
   },
   {
    "id": "jump-68",
    "name": "Stunt Jump #68"
   },
   {
    "id": "jump-69",
    "name": "Stunt Jump #69"
   },
   {
    "id": "jump-70",
    "name": "Stunt Jump #70"
   },
   {
    "id": "jump-71",
    "name": "Stunt Jump #71"
   },
   {
    "id": "jump-72",
    "name": "Stunt Jump #72"
   },
   {
    "id": "jump-73",
    "name": "Stunt Jump #73"
   },
   {
    "id": "jump-74",
    "name": "Stunt Jump #74"
   },
   {
    "id": "jump-75",
    "name": "Stunt Jump #75"
   },
   {
    "id": "jump-76",
    "name": "Stunt Jump #76"
   },
   {
    "id": "jump-77",
    "name": "Stunt Jump #77"
   },
   {
    "id": "jump-78",
    "name": "Stunt Jump #78"
   },
   {
    "id": "jump-79",
    "name": "Stunt Jump #79"
   },
   {
    "id": "jump-80",
    "name": "Stunt Jump #80"
   },
   {
    "id": "jump-81",
    "name": "Stunt Jump #81"
   },
   {
    "id": "jump-82",
    "name": "Stunt Jump #82"
   },
   {
    "id": "jump-83",
    "name": "Stunt Jump #83"
   },
   {
    "id": "jump-84",
    "name": "Stunt Jump #84"
   },
   {
    "id": "jump-85",
    "name": "Stunt Jump #85"
   },
   {
    "id": "jump-86",
    "name": "Stunt Jump #86"
   },
   {
    "id": "jump-87",
    "name": "Stunt Jump #87"
   },
   {
    "id": "jump-88",
    "name": "Stunt Jump #88"
   },
   {
    "id": "jump-89",
    "name": "Stunt Jump #89"
   },
   {
    "id": "jump-90",
    "name": "Stunt Jump #90"
   },
   {
    "id": "jump-91",
    "name": "Stunt Jump #91"
   },
   {
    "id": "jump-92",
    "name": "Stunt Jump #92"
   },
   {
    "id": "jump-93",
    "name": "Stunt Jump #93"
   },
   {
    "id": "jump-94",
    "name": "Stunt Jump #94"
   },
   {
    "id": "jump-95",
    "name": "Stunt Jump #95"
   },
   {
    "id": "jump-96",
    "name": "Stunt Jump #96"
   },
   {
    "id": "jump-97",
    "name": "Stunt Jump #97"
   },
   {
    "id": "jump-98",
    "name": "Stunt Jump #98"
   },
   {
    "id": "jump-99",
    "name": "Stunt Jump #99"
   },
   {
    "id": "jump-100",
    "name": "Stunt Jump #100"
   },
   {
    "id": "jump-101",
    "name": "Stunt Jump #101"
   },
   {
    "id": "jump-102",
    "name": "Stunt Jump #102"
   },
   {
    "id": "jump-103",
    "name": "Stunt Jump #103"
   },
   {
    "id": "jump-104",
    "name": "Stunt Jump #104"
   },
   {
    "id": "jump-105",
    "name": "Stunt Jump #105"
   },
   {
    "id": "jump-106",
    "name": "Stunt Jump #106"
   },
   {
    "id": "jump-107",
    "name": "Stunt Jump #107"
   },
   {
    "id": "jump-108",
    "name": "Stunt Jump #108"
   },
   {
    "id": "jump-109",
    "name": "Stunt Jump #109"
   },
   {
    "id": "jump-110",
    "name": "Stunt Jump #110"
   },
   {
    "id": "jump-111",
    "name": "Stunt Jump #111"
   },
   {
    "id": "jump-112",
    "name": "Stunt Jump #112"
   },
   {
    "id": "jump-113",
    "name": "Stunt Jump #113"
   },
   {
    "id": "jump-114",
    "name": "Stunt Jump #114"
   },
   {
    "id": "jump-115",
    "name": "Stunt Jump #115"
   },
   {
    "id": "jump-116",
    "name": "Stunt Jump #116"
   },
   {
    "id": "jump-117",
    "name": "Stunt Jump #117"
   },
   {
    "id": "jump-118",
    "name": "Stunt Jump #118"
   },
   {
    "id": "jump-119",
    "name": "Stunt Jump #119"
   },
   {
    "id": "jump-120",
    "name": "Stunt Jump #120"
   },
   {
    "id": "jump-121",
    "name": "Stunt Jump #121"
   },
   {
    "id": "jump-122",
    "name": "Stunt Jump #122"
   },
   {
    "id": "jump-123",
    "name": "Stunt Jump #123"
   },
   {
    "id": "jump-124",
    "name": "Stunt Jump #124"
   },
   {
    "id": "jump-125",
    "name": "Stunt Jump #125"
   },
   {
    "id": "jump-126",
    "name": "Stunt Jump #126"
   },
   {
    "id": "jump-127",
    "name": "Stunt Jump #127"
   },
   {
    "id": "jump-128",
    "name": "Stunt Jump #128"
   },
   {
    "id": "jump-129",
    "name": "Stunt Jump #129"
   },
   {
    "id": "jump-130",
    "name": "Stunt Jump #130"
   },
   {
    "id": "bridge-1",
    "name": "Under the Bridge #1"
   },
   {
    "id": "bridge-2",
    "name": "Under the Bridge #2"
   },
   {
    "id": "bridge-3",
    "name": "Under the Bridge #3"
   },
   {
    "id": "bridge-4",
    "name": "Under the Bridge #4"
   },
   {
    "id": "bridge-5",
    "name": "Under the Bridge #5"
   },
   {
    "id": "bridge-6",
    "name": "Under the Bridge #6"
   },
   {
    "id": "bridge-7",
    "name": "Under the Bridge #7"
   },
   {
    "id": "bridge-8",
    "name": "Under the Bridge #8"
   },
   {
    "id": "bridge-9",
    "name": "Under the Bridge #9"
   },
   {
    "id": "bridge-10",
    "name": "Under the Bridge #10"
   },
   {
    "id": "bridge-11",
    "name": "Under the Bridge #11"
   },
   {
    "id": "bridge-12",
    "name": "Under the Bridge #12"
   },
   {
    "id": "bridge-13",
    "name": "Under the Bridge #13"
   },
   {
    "id": "bridge-14",
    "name": "Under the Bridge #14"
   },
   {
    "id": "bridge-15",
    "name": "Under the Bridge #15"
   },
   {
    "id": "bridge-16",
    "name": "Under the Bridge #16"
   },
   {
    "id": "bridge-17",
    "name": "Under the Bridge #17"
   },
   {
    "id": "bridge-18",
    "name": "Under the Bridge #18"
   },
   {
    "id": "bridge-19",
    "name": "Under the Bridge #19"
   },
   {
    "id": "bridge-20",
    "name": "Under the Bridge #20"
   },
   {
    "id": "bridge-21",
    "name": "Under the Bridge #21"
   },
   {
    "id": "bridge-22",
    "name": "Under the Bridge #22"
   },
   {
    "id": "bridge-23",
    "name": "Under the Bridge #23"
   },
   {
    "id": "bridge-24",
    "name": "Under the Bridge #24"
   },
   {
    "id": "bridge-25",
    "name": "Under the Bridge #25"
   },
   {
    "id": "bridge-26",
    "name": "Under the Bridge #26"
   },
   {
    "id": "bridge-27",
    "name": "Under the Bridge #27"
   },
   {
    "id": "bridge-28",
    "name": "Under the Bridge #28"
   },
   {
    "id": "bridge-29",
    "name": "Under the Bridge #29"
   },
   {
    "id": "bridge-30",
    "name": "Under the Bridge #30"
   },
   {
    "id": "bridge-31",
    "name": "Under the Bridge #31"
   },
   {
    "id": "bridge-32",
    "name": "Under the Bridge #32"
   },
   {
    "id": "bridge-33",
    "name": "Under the Bridge #33"
   },
   {
    "id": "bridge-34",
    "name": "Under the Bridge #34"
   },
   {
    "id": "bridge-35",
    "name": "Under the Bridge #35"
   },
   {
    "id": "bridge-36",
    "name": "Under the Bridge #36"
   },
   {
    "id": "bridge-37",
    "name": "Under the Bridge #37"
   },
   {
    "id": "bridge-38",
    "name": "Under the Bridge #38"
   },
   {
    "id": "bridge-39",
    "name": "Under the Bridge #39"
   },
   {
    "id": "bridge-40",
    "name": "Under the Bridge #40"
   },
   {
    "id": "bridge-41",
    "name": "Under the Bridge #41"
   },
   {
    "id": "bridge-42",
    "name": "Under the Bridge #42"
   },
   {
    "id": "bridge-43",
    "name": "Under the Bridge #43"
   },
   {
    "id": "bridge-44",
    "name": "Under the Bridge #44"
   },
   {
    "id": "bridge-45",
    "name": "Under the Bridge #45"
   },
   {
    "id": "bridge-46",
    "name": "Under the Bridge #46"
   },
   {
    "id": "bridge-47",
    "name": "Under the Bridge #47"
   },
   {
    "id": "bridge-48",
    "name": "Under the Bridge #48"
   },
   {
    "id": "bridge-49",
    "name": "Under the Bridge #49"
   },
   {
    "id": "bridge-50",
    "name": "Under the Bridge #50"
   },
   {
    "id": "bridge-51",
    "name": "Under the Bridge #51"
   },
   {
    "id": "bridge-52",
    "name": "Under the Bridge #52"
   },
   {
    "id": "bridge-53",
    "name": "Under the Bridge #53"
   },
   {
    "id": "bridge-54",
    "name": "Under the Bridge #54"
   },
   {
    "id": "bridge-55",
    "name": "Under the Bridge #55"
   },
   {
    "id": "bridge-56",
    "name": "Under the Bridge #56"
   },
   {
    "id": "bridge-57",
    "name": "Under the Bridge #57"
   },
   {
    "id": "bridge-58",
    "name": "Under the Bridge #58"
   },
   {
    "id": "bridge-59",
    "name": "Under the Bridge #59"
   },
   {
    "id": "bridge-60",
    "name": "Under the Bridge #60"
   },
   {
    "id": "bridge-61",
    "name": "Under the Bridge #61"
   },
   {
    "id": "bridge-62",
    "name": "Under the Bridge #62"
   },
   {
    "id": "bridge-63",
    "name": "Under the Bridge #63"
   },
   {
    "id": "bridge-64",
    "name": "Under the Bridge #64"
   },
   {
    "id": "bridge-65",
    "name": "Under the Bridge #65"
   },
   {
    "id": "bridge-66",
    "name": "Under the Bridge #66"
   },
   {
    "id": "bridge-67",
    "name": "Under the Bridge #67"
   },
   {
    "id": "bridge-68",
    "name": "Under the Bridge #68"
   },
   {
    "id": "bridge-69",
    "name": "Under the Bridge #69"
   },
   {
    "id": "bridge-70",
    "name": "Under the Bridge #70"
   },
   {
    "id": "bridge-71",
    "name": "Under the Bridge #71"
   },
   {
    "id": "bridge-72",
    "name": "Under the Bridge #72"
   },
   {
    "id": "bridge-73",
    "name": "Under the Bridge #73"
   },
   {
    "id": "bridge-74",
    "name": "Under the Bridge #74"
   },
   {
    "id": "bridge-75",
    "name": "Under the Bridge #75"
   },
   {
    "id": "bridge-76",
    "name": "Under the Bridge #76"
   },
   {
    "id": "bridge-77",
    "name": "Under the Bridge #77"
   },
   {
    "id": "bridge-78",
    "name": "Under the Bridge #78"
   },
   {
    "id": "bridge-79",
    "name": "Under the Bridge #79"
   },
   {
    "id": "bridge-80",
    "name": "Under the Bridge #80"
   },
   {
    "id": "bridge-81",
    "name": "Under the Bridge #81"
   },
   {
    "id": "bridge-82",
    "name": "Under the Bridge #82"
   },
   {
    "id": "bridge-83",
    "name": "Under the Bridge #83"
   },
   {
    "id": "bridge-84",
    "name": "Under the Bridge #84"
   },
   {
    "id": "bridge-85",
    "name": "Under the Bridge #85"
   },
   {
    "id": "bridge-86",
    "name": "Under the Bridge #86"
   },
   {
    "id": "bridge-87",
    "name": "Under the Bridge #87"
   },
   {
    "id": "bridge-88",
    "name": "Under the Bridge #88"
   },
   {
    "id": "bridge-89",
    "name": "Under the Bridge #89"
   },
   {
    "id": "bridge-90",
    "name": "Under the Bridge #90"
   },
   {
    "id": "bridge-91",
    "name": "Under the Bridge #91"
   },
   {
    "id": "bridge-92",
    "name": "Under the Bridge #92"
   },
   {
    "id": "bridge-93",
    "name": "Under the Bridge #93"
   },
   {
    "id": "bridge-94",
    "name": "Under the Bridge #94"
   },
   {
    "id": "bridge-95",
    "name": "Under the Bridge #95"
   },
   {
    "id": "bridge-96",
    "name": "Under the Bridge #96"
   },
   {
    "id": "bridge-97",
    "name": "Under the Bridge #97"
   },
   {
    "id": "bridge-98",
    "name": "Under the Bridge #98"
   },
   {
    "id": "bridge-99",
    "name": "Under the Bridge #99"
   },
   {
    "id": "bridge-100",
    "name": "Under the Bridge #100"
   },
   {
    "id": "bridge-101",
    "name": "Under the Bridge #101"
   },
   {
    "id": "bridge-102",
    "name": "Under the Bridge #102"
   },
   {
    "id": "bridge-103",
    "name": "Under the Bridge #103"
   },
   {
    "id": "bridge-104",
    "name": "Under the Bridge #104"
   },
   {
    "id": "bridge-105",
    "name": "Under the Bridge #105"
   },
   {
    "id": "bridge-106",
    "name": "Under the Bridge #106"
   },
   {
    "id": "bridge-107",
    "name": "Under the Bridge #107"
   },
   {
    "id": "bridge-108",
    "name": "Under the Bridge #108"
   },
   {
    "id": "bridge-109",
    "name": "Under the Bridge #109"
   },
   {
    "id": "bridge-110",
    "name": "Under the Bridge #110"
   },
   {
    "id": "bridge-111",
    "name": "Under the Bridge #111"
   },
   {
    "id": "bridge-112",
    "name": "Under the Bridge #112"
   },
   {
    "id": "bridge-113",
    "name": "Under the Bridge #113"
   },
   {
    "id": "bridge-114",
    "name": "Under the Bridge #114"
   },
   {
    "id": "bridge-115",
    "name": "Under the Bridge #115"
   },
   {
    "id": "bridge-116",
    "name": "Under the Bridge #116"
   },
   {
    "id": "bridge-117",
    "name": "Under the Bridge #117"
   },
   {
    "id": "bridge-118",
    "name": "Under the Bridge #118"
   },
   {
    "id": "bridge-119",
    "name": "Under the Bridge #119"
   },
   {
    "id": "bridge-120",
    "name": "Under the Bridge #120"
   },
   {
    "id": "bridge-121",
    "name": "Under the Bridge #121"
   },
   {
    "id": "bridge-122",
    "name": "Under the Bridge #122"
   },
   {
    "id": "bridge-123",
    "name": "Under the Bridge #123"
   },
   {
    "id": "bridge-124",
    "name": "Under the Bridge #124"
   },
   {
    "id": "bridge-125",
    "name": "Under the Bridge #125"
   },
   {
    "id": "bridge-126",
    "name": "Under the Bridge #126"
   },
   {
    "id": "bridge-127",
    "name": "Under the Bridge #127"
   },
   {
    "id": "bridge-128",
    "name": "Under the Bridge #128"
   },
   {
    "id": "bridge-129",
    "name": "Under the Bridge #129"
   },
   {
    "id": "bridge-130",
    "name": "Under the Bridge #130"
   },
   {
    "id": "bridge-131",
    "name": "Under the Bridge #131"
   },
   {
    "id": "bridge-132",
    "name": "Under the Bridge #132"
   },
   {
    "id": "bridge-133",
    "name": "Under the Bridge #133"
   },
   {
    "id": "bridge-134",
    "name": "Under the Bridge #134"
   },
   {
    "id": "bridge-135",
    "name": "Under the Bridge #135"
   },
   {
    "id": "bridge-136",
    "name": "Under the Bridge #136"
   },
   {
    "id": "bridge-137",
    "name": "Under the Bridge #137"
   },
   {
    "id": "bridge-138",
    "name": "Under the Bridge #138"
   },
   {
    "id": "bridge-139",
    "name": "Under the Bridge #139"
   },
   {
    "id": "bridge-140",
    "name": "Under the Bridge #140"
   },
   {
    "id": "bridge-141",
    "name": "Under the Bridge #141"
   },
   {
    "id": "bridge-142",
    "name": "Under the Bridge #142"
   },
   {
    "id": "bridge-143",
    "name": "Under the Bridge #143"
   },
   {
    "id": "bridge-144",
    "name": "Under the Bridge #144"
   },
   {
    "id": "bridge-145",
    "name": "Under the Bridge #145"
   },
   {
    "id": "bridge-146",
    "name": "Under the Bridge #146"
   },
   {
    "id": "bridge-147",
    "name": "Under the Bridge #147"
   },
   {
    "id": "bridge-148",
    "name": "Under the Bridge #148"
   },
   {
    "id": "bridge-149",
    "name": "Under the Bridge #149"
   },
   {
    "id": "bridge-150",
    "name": "Under the Bridge #150"
   },
   {
    "id": "bridge-151",
    "name": "Under the Bridge #151"
   },
   {
    "id": "bridge-152",
    "name": "Under the Bridge #152"
   },
   {
    "id": "bridge-153",
    "name": "Under the Bridge #153"
   },
   {
    "id": "bridge-154",
    "name": "Under the Bridge #154"
   },
   {
    "id": "bridge-155",
    "name": "Under the Bridge #155"
   },
   {
    "id": "bridge-156",
    "name": "Under the Bridge #156"
   },
   {
    "id": "bridge-157",
    "name": "Under the Bridge #157"
   },
   {
    "id": "bridge-158",
    "name": "Under the Bridge #158"
   },
   {
    "id": "bridge-159",
    "name": "Under the Bridge #159"
   },
   {
    "id": "bridge-160",
    "name": "Under the Bridge #160"
   },
   {
    "id": "bridge-161",
    "name": "Under the Bridge #161"
   },
   {
    "id": "bridge-162",
    "name": "Under the Bridge #162"
   },
   {
    "id": "bridge-163",
    "name": "Under the Bridge #163"
   },
   {
    "id": "bridge-164",
    "name": "Under the Bridge #164"
   },
   {
    "id": "bridge-165",
    "name": "Under the Bridge #165"
   },
   {
    "id": "bridge-166",
    "name": "Under the Bridge #166"
   },
   {
    "id": "bridge-167",
    "name": "Under the Bridge #167"
   },
   {
    "id": "bridge-168",
    "name": "Under the Bridge #168"
   },
   {
    "id": "bridge-169",
    "name": "Under the Bridge #169"
   },
   {
    "id": "bridge-170",
    "name": "Under the Bridge #170"
   },
   {
    "id": "bridge-171",
    "name": "Under the Bridge #171"
   },
   {
    "id": "bridge-172",
    "name": "Under the Bridge #172"
   },
   {
    "id": "bridge-173",
    "name": "Under the Bridge #173"
   },
   {
    "id": "bridge-174",
    "name": "Under the Bridge #174"
   },
   {
    "id": "bridge-175",
    "name": "Under the Bridge #175"
   },
   {
    "id": "bridge-176",
    "name": "Under the Bridge #176"
   },
   {
    "id": "bridge-177",
    "name": "Under the Bridge #177"
   },
   {
    "id": "bridge-178",
    "name": "Under the Bridge #178"
   },
   {
    "id": "bridge-179",
    "name": "Under the Bridge #179"
   },
   {
    "id": "bridge-180",
    "name": "Under the Bridge #180"
   },
   {
    "id": "bridge-181",
    "name": "Under the Bridge #181"
   },
   {
    "id": "bridge-182",
    "name": "Under the Bridge #182"
   },
   {
    "id": "bridge-183",
    "name": "Under the Bridge #183"
   },
   {
    "id": "bridge-184",
    "name": "Under the Bridge #184"
   },
   {
    "id": "bridge-185",
    "name": "Under the Bridge #185"
   },
   {
    "id": "bridge-186",
    "name": "Under the Bridge #186"
   },
   {
    "id": "bridge-187",
    "name": "Under the Bridge #187"
   },
   {
    "id": "bridge-188",
    "name": "Under the Bridge #188"
   },
   {
    "id": "bridge-189",
    "name": "Under the Bridge #189"
   },
   {
    "id": "bridge-190",
    "name": "Under the Bridge #190"
   },
   {
    "id": "bridge-191",
    "name": "Under the Bridge #191"
   },
   {
    "id": "bridge-192",
    "name": "Under the Bridge #192"
   },
   {
    "id": "bridge-193",
    "name": "Under the Bridge #193"
   },
   {
    "id": "bridge-194",
    "name": "Under the Bridge #194"
   },
   {
    "id": "bridge-195",
    "name": "Under the Bridge #195"
   },
   {
    "id": "bridge-196",
    "name": "Under the Bridge #196"
   },
   {
    "id": "bridge-197",
    "name": "Under the Bridge #197"
   },
   {
    "id": "bridge-198",
    "name": "Under the Bridge #198"
   },
   {
    "id": "bridge-199",
    "name": "Under the Bridge #199"
   },
   {
    "id": "bridge-200",
    "name": "Under the Bridge #200"
   },
   {
    "id": "bridge-201",
    "name": "Under the Bridge #201"
   },
   {
    "id": "bridge-202",
    "name": "Under the Bridge #202"
   },
   {
    "id": "knife-1",
    "name": "Knife Flight #1"
   },
   {
    "id": "knife-2",
    "name": "Knife Flight #2"
   },
   {
    "id": "knife-3",
    "name": "Knife Flight #3"
   },
   {
    "id": "knife-4",
    "name": "Knife Flight #4"
   },
   {
    "id": "knife-5",
    "name": "Knife Flight #5"
   },
   {
    "id": "knife-6",
    "name": "Knife Flight #6"
   },
   {
    "id": "knife-7",
    "name": "Knife Flight #7"
   },
   {
    "id": "knife-8",
    "name": "Knife Flight #8"
   },
   {
    "id": "knife-9",
    "name": "Knife Flight #9"
   },
   {
    "id": "knife-10",
    "name": "Knife Flight #10"
   },
   {
    "id": "knife-11",
    "name": "Knife Flight #11"
   },
   {
    "id": "knife-12",
    "name": "Knife Flight #12"
   },
   {
    "id": "knife-13",
    "name": "Knife Flight #13"
   },
   {
    "id": "knife-14",
    "name": "Knife Flight #14"
   },
   {
    "id": "knife-15",
    "name": "Knife Flight #15"
   },
   {
    "id": "knife-16",
    "name": "Knife Flight #16"
   },
   {
    "id": "knife-17",
    "name": "Knife Flight #17"
   },
   {
    "id": "knife-18",
    "name": "Knife Flight #18"
   },
   {
    "id": "knife-19",
    "name": "Knife Flight #19"
   },
   {
    "id": "knife-20",
    "name": "Knife Flight #20"
   },
   {
    "id": "knife-21",
    "name": "Knife Flight #21"
   },
   {
    "id": "knife-22",
    "name": "Knife Flight #22"
   },
   {
    "id": "knife-23",
    "name": "Knife Flight #23"
   },
   {
    "id": "knife-24",
    "name": "Knife Flight #24"
   },
   {
    "id": "knife-25",
    "name": "Knife Flight #25"
   },
   {
    "id": "knife-26",
    "name": "Knife Flight #26"
   },
   {
    "id": "knife-27",
    "name": "Knife Flight #27"
   },
   {
    "id": "knife-28",
    "name": "Knife Flight #28"
   },
   {
    "id": "knife-29",
    "name": "Knife Flight #29"
   },
   {
    "id": "knife-30",
    "name": "Knife Flight #30"
   },
   {
    "id": "knife-31",
    "name": "Knife Flight #31"
   },
   {
    "id": "knife-32",
    "name": "Knife Flight #32"
   },
   {
    "id": "knife-33",
    "name": "Knife Flight #33"
   },
   {
    "id": "knife-34",
    "name": "Knife Flight #34"
   },
   {
    "id": "knife-35",
    "name": "Knife Flight #35"
   },
   {
    "id": "knife-36",
    "name": "Knife Flight #36"
   },
   {
    "id": "knife-37",
    "name": "Knife Flight #37"
   },
   {
    "id": "knife-38",
    "name": "Knife Flight #38"
   },
   {
    "id": "knife-39",
    "name": "Knife Flight #39"
   },
   {
    "id": "knife-40",
    "name": "Knife Flight #40"
   },
   {
    "id": "basejump-1",
    "name": "Base Jump #1"
   },
   {
    "id": "basejump-2",
    "name": "Base Jump #2"
   },
   {
    "id": "basejump-3",
    "name": "Base Jump #3"
   },
   {
    "id": "basejump-4",
    "name": "Base Jump #4"
   },
   {
    "id": "basejump-5",
    "name": "Base Jump #5"
   },
   {
    "id": "basejump-6",
    "name": "Base Jump #6"
   },
   {
    "id": "basejump-7",
    "name": "Base Jump #7"
   },
   {
    "id": "basejump-8",
    "name": "Base Jump #8"
   },
   {
    "id": "basejump-9",
    "name": "Base Jump #9"
   },
   {
    "id": "basejump-10",
    "name": "Base Jump #10"
   },
   {
    "id": "basejump-11",
    "name": "Base Jump #11"
   },
   {
    "id": "basejump-12",
    "name": "Base Jump #12"
   },
   {
    "id": "basejump-13",
    "name": "Base Jump #13"
   },
   {
    "id": "basejump-14",
    "name": "Base Jump #14"
   },
   {
    "id": "basejump-15",
    "name": "Base Jump #15"
   },
   {
    "id": "basejump-16",
    "name": "Base Jump #16"
   },
   {
    "id": "basejump-17",
    "name": "Base Jump #17"
   },
   {
    "id": "basejump-18",
    "name": "Base Jump #18"
   },
   {
    "id": "basejump-19",
    "name": "Base Jump #19"
   },
   {
    "id": "basejump-20",
    "name": "Base Jump #20"
   },
   {
    "id": "basejump-21",
    "name": "Base Jump #21"
   },
   {
    "id": "basejump-22",
    "name": "Base Jump #22"
   },
   {
    "id": "basejump-23",
    "name": "Base Jump #23"
   },
   {
    "id": "basejump-24",
    "name": "Base Jump #24"
   },
   {
    "id": "basejump-25",
    "name": "Base Jump #25"
   }
  ]
 },
 {
  "id": "jobs",
  "title": "Jobs & Tasks",
  "intro": "The repeatable work of Leonida. The 100% targets: all 39 Gang Operations, all 22 Bank Jobs, all 7 Payday Loan Jobs, 34 of 35 Smash 'N' Grabs, 50 of 91 Stick Ups, all 8 Bank Vaults, and 100 Optional Tasks. Gang Operations respawn over time if you miss a key valuable.",
  "items": [
   {
    "id": "gangop-1",
    "name": "Gang Operation #1"
   },
   {
    "id": "gangop-2",
    "name": "Gang Operation #2"
   },
   {
    "id": "gangop-3",
    "name": "Gang Operation #3"
   },
   {
    "id": "gangop-4",
    "name": "Gang Operation #4"
   },
   {
    "id": "gangop-5",
    "name": "Gang Operation #5"
   },
   {
    "id": "gangop-6",
    "name": "Gang Operation #6"
   },
   {
    "id": "gangop-7",
    "name": "Gang Operation #7"
   },
   {
    "id": "gangop-8",
    "name": "Gang Operation #8"
   },
   {
    "id": "gangop-9",
    "name": "Gang Operation #9"
   },
   {
    "id": "gangop-10",
    "name": "Gang Operation #10"
   },
   {
    "id": "gangop-11",
    "name": "Gang Operation #11"
   },
   {
    "id": "gangop-12",
    "name": "Gang Operation #12"
   },
   {
    "id": "gangop-13",
    "name": "Gang Operation #13"
   },
   {
    "id": "gangop-14",
    "name": "Gang Operation #14"
   },
   {
    "id": "gangop-15",
    "name": "Gang Operation #15"
   },
   {
    "id": "gangop-16",
    "name": "Gang Operation #16"
   },
   {
    "id": "gangop-17",
    "name": "Gang Operation #17"
   },
   {
    "id": "gangop-18",
    "name": "Gang Operation #18"
   },
   {
    "id": "gangop-19",
    "name": "Gang Operation #19"
   },
   {
    "id": "gangop-20",
    "name": "Gang Operation #20"
   },
   {
    "id": "gangop-21",
    "name": "Gang Operation #21"
   },
   {
    "id": "gangop-22",
    "name": "Gang Operation #22"
   },
   {
    "id": "gangop-23",
    "name": "Gang Operation #23"
   },
   {
    "id": "gangop-24",
    "name": "Gang Operation #24"
   },
   {
    "id": "gangop-25",
    "name": "Gang Operation #25"
   },
   {
    "id": "gangop-26",
    "name": "Gang Operation #26"
   },
   {
    "id": "gangop-27",
    "name": "Gang Operation #27"
   },
   {
    "id": "gangop-28",
    "name": "Gang Operation #28"
   },
   {
    "id": "gangop-29",
    "name": "Gang Operation #29"
   },
   {
    "id": "gangop-30",
    "name": "Gang Operation #30"
   },
   {
    "id": "gangop-31",
    "name": "Gang Operation #31"
   },
   {
    "id": "gangop-32",
    "name": "Gang Operation #32"
   },
   {
    "id": "gangop-33",
    "name": "Gang Operation #33"
   },
   {
    "id": "gangop-34",
    "name": "Gang Operation #34"
   },
   {
    "id": "gangop-35",
    "name": "Gang Operation #35"
   },
   {
    "id": "gangop-36",
    "name": "Gang Operation #36"
   },
   {
    "id": "gangop-37",
    "name": "Gang Operation #37"
   },
   {
    "id": "gangop-38",
    "name": "Gang Operation #38"
   },
   {
    "id": "gangop-39",
    "name": "Gang Operation #39"
   },
   {
    "id": "bankjob-1",
    "name": "Bank Job #1"
   },
   {
    "id": "bankjob-2",
    "name": "Bank Job #2"
   },
   {
    "id": "bankjob-3",
    "name": "Bank Job #3"
   },
   {
    "id": "bankjob-4",
    "name": "Bank Job #4"
   },
   {
    "id": "bankjob-5",
    "name": "Bank Job #5"
   },
   {
    "id": "bankjob-6",
    "name": "Bank Job #6"
   },
   {
    "id": "bankjob-7",
    "name": "Bank Job #7"
   },
   {
    "id": "bankjob-8",
    "name": "Bank Job #8"
   },
   {
    "id": "bankjob-9",
    "name": "Bank Job #9"
   },
   {
    "id": "bankjob-10",
    "name": "Bank Job #10"
   },
   {
    "id": "bankjob-11",
    "name": "Bank Job #11"
   },
   {
    "id": "bankjob-12",
    "name": "Bank Job #12"
   },
   {
    "id": "bankjob-13",
    "name": "Bank Job #13"
   },
   {
    "id": "bankjob-14",
    "name": "Bank Job #14"
   },
   {
    "id": "bankjob-15",
    "name": "Bank Job #15"
   },
   {
    "id": "bankjob-16",
    "name": "Bank Job #16"
   },
   {
    "id": "bankjob-17",
    "name": "Bank Job #17"
   },
   {
    "id": "bankjob-18",
    "name": "Bank Job #18"
   },
   {
    "id": "bankjob-19",
    "name": "Bank Job #19"
   },
   {
    "id": "bankjob-20",
    "name": "Bank Job #20"
   },
   {
    "id": "bankjob-21",
    "name": "Bank Job #21"
   },
   {
    "id": "bankjob-22",
    "name": "Bank Job #22"
   },
   {
    "id": "stickup-1",
    "name": "Stick Up #1"
   },
   {
    "id": "stickup-2",
    "name": "Stick Up #2"
   },
   {
    "id": "stickup-3",
    "name": "Stick Up #3"
   },
   {
    "id": "stickup-4",
    "name": "Stick Up #4"
   },
   {
    "id": "stickup-5",
    "name": "Stick Up #5"
   },
   {
    "id": "stickup-6",
    "name": "Stick Up #6"
   },
   {
    "id": "stickup-7",
    "name": "Stick Up #7"
   },
   {
    "id": "stickup-8",
    "name": "Stick Up #8"
   },
   {
    "id": "stickup-9",
    "name": "Stick Up #9"
   },
   {
    "id": "stickup-10",
    "name": "Stick Up #10"
   },
   {
    "id": "stickup-11",
    "name": "Stick Up #11"
   },
   {
    "id": "stickup-12",
    "name": "Stick Up #12"
   },
   {
    "id": "stickup-13",
    "name": "Stick Up #13"
   },
   {
    "id": "stickup-14",
    "name": "Stick Up #14"
   },
   {
    "id": "stickup-15",
    "name": "Stick Up #15"
   },
   {
    "id": "stickup-16",
    "name": "Stick Up #16"
   },
   {
    "id": "stickup-17",
    "name": "Stick Up #17"
   },
   {
    "id": "stickup-18",
    "name": "Stick Up #18"
   },
   {
    "id": "stickup-19",
    "name": "Stick Up #19"
   },
   {
    "id": "stickup-20",
    "name": "Stick Up #20"
   },
   {
    "id": "stickup-21",
    "name": "Stick Up #21"
   },
   {
    "id": "stickup-22",
    "name": "Stick Up #22"
   },
   {
    "id": "stickup-23",
    "name": "Stick Up #23"
   },
   {
    "id": "stickup-24",
    "name": "Stick Up #24"
   },
   {
    "id": "stickup-25",
    "name": "Stick Up #25"
   },
   {
    "id": "stickup-26",
    "name": "Stick Up #26"
   },
   {
    "id": "stickup-27",
    "name": "Stick Up #27"
   },
   {
    "id": "stickup-28",
    "name": "Stick Up #28"
   },
   {
    "id": "stickup-29",
    "name": "Stick Up #29"
   },
   {
    "id": "stickup-30",
    "name": "Stick Up #30"
   },
   {
    "id": "stickup-31",
    "name": "Stick Up #31"
   },
   {
    "id": "stickup-32",
    "name": "Stick Up #32"
   },
   {
    "id": "stickup-33",
    "name": "Stick Up #33"
   },
   {
    "id": "stickup-34",
    "name": "Stick Up #34"
   },
   {
    "id": "stickup-35",
    "name": "Stick Up #35"
   },
   {
    "id": "stickup-36",
    "name": "Stick Up #36"
   },
   {
    "id": "stickup-37",
    "name": "Stick Up #37"
   },
   {
    "id": "stickup-38",
    "name": "Stick Up #38"
   },
   {
    "id": "stickup-39",
    "name": "Stick Up #39"
   },
   {
    "id": "stickup-40",
    "name": "Stick Up #40"
   },
   {
    "id": "stickup-41",
    "name": "Stick Up #41"
   },
   {
    "id": "stickup-42",
    "name": "Stick Up #42"
   },
   {
    "id": "stickup-43",
    "name": "Stick Up #43"
   },
   {
    "id": "stickup-44",
    "name": "Stick Up #44"
   },
   {
    "id": "stickup-45",
    "name": "Stick Up #45"
   },
   {
    "id": "stickup-46",
    "name": "Stick Up #46"
   },
   {
    "id": "stickup-47",
    "name": "Stick Up #47"
   },
   {
    "id": "stickup-48",
    "name": "Stick Up #48"
   },
   {
    "id": "stickup-49",
    "name": "Stick Up #49"
   },
   {
    "id": "stickup-50",
    "name": "Stick Up #50"
   },
   {
    "id": "stickup-51",
    "name": "Stick Up #51"
   },
   {
    "id": "stickup-52",
    "name": "Stick Up #52"
   },
   {
    "id": "stickup-53",
    "name": "Stick Up #53"
   },
   {
    "id": "stickup-54",
    "name": "Stick Up #54"
   },
   {
    "id": "stickup-55",
    "name": "Stick Up #55"
   },
   {
    "id": "stickup-56",
    "name": "Stick Up #56"
   },
   {
    "id": "stickup-57",
    "name": "Stick Up #57"
   },
   {
    "id": "stickup-58",
    "name": "Stick Up #58"
   },
   {
    "id": "stickup-59",
    "name": "Stick Up #59"
   },
   {
    "id": "stickup-60",
    "name": "Stick Up #60"
   },
   {
    "id": "stickup-61",
    "name": "Stick Up #61"
   },
   {
    "id": "stickup-62",
    "name": "Stick Up #62"
   },
   {
    "id": "stickup-63",
    "name": "Stick Up #63"
   },
   {
    "id": "stickup-64",
    "name": "Stick Up #64"
   },
   {
    "id": "stickup-65",
    "name": "Stick Up #65"
   },
   {
    "id": "stickup-66",
    "name": "Stick Up #66"
   },
   {
    "id": "stickup-67",
    "name": "Stick Up #67"
   },
   {
    "id": "stickup-68",
    "name": "Stick Up #68"
   },
   {
    "id": "stickup-69",
    "name": "Stick Up #69"
   },
   {
    "id": "stickup-70",
    "name": "Stick Up #70"
   },
   {
    "id": "stickup-71",
    "name": "Stick Up #71"
   },
   {
    "id": "stickup-72",
    "name": "Stick Up #72"
   },
   {
    "id": "stickup-73",
    "name": "Stick Up #73"
   },
   {
    "id": "stickup-74",
    "name": "Stick Up #74"
   },
   {
    "id": "stickup-75",
    "name": "Stick Up #75"
   },
   {
    "id": "stickup-76",
    "name": "Stick Up #76"
   },
   {
    "id": "stickup-77",
    "name": "Stick Up #77"
   },
   {
    "id": "stickup-78",
    "name": "Stick Up #78"
   },
   {
    "id": "stickup-79",
    "name": "Stick Up #79"
   },
   {
    "id": "stickup-80",
    "name": "Stick Up #80"
   },
   {
    "id": "stickup-81",
    "name": "Stick Up #81"
   },
   {
    "id": "stickup-82",
    "name": "Stick Up #82"
   },
   {
    "id": "stickup-83",
    "name": "Stick Up #83"
   },
   {
    "id": "stickup-84",
    "name": "Stick Up #84"
   },
   {
    "id": "stickup-85",
    "name": "Stick Up #85"
   },
   {
    "id": "stickup-86",
    "name": "Stick Up #86"
   },
   {
    "id": "stickup-87",
    "name": "Stick Up #87"
   },
   {
    "id": "stickup-88",
    "name": "Stick Up #88"
   },
   {
    "id": "stickup-89",
    "name": "Stick Up #89"
   },
   {
    "id": "stickup-90",
    "name": "Stick Up #90"
   },
   {
    "id": "stickup-91",
    "name": "Stick Up #91"
   },
   {
    "id": "smashgrab-1",
    "name": "Smash 'N' Grab #1"
   },
   {
    "id": "smashgrab-2",
    "name": "Smash 'N' Grab #2"
   },
   {
    "id": "smashgrab-3",
    "name": "Smash 'N' Grab #3"
   },
   {
    "id": "smashgrab-4",
    "name": "Smash 'N' Grab #4"
   },
   {
    "id": "smashgrab-5",
    "name": "Smash 'N' Grab #5"
   },
   {
    "id": "smashgrab-6",
    "name": "Smash 'N' Grab #6"
   },
   {
    "id": "smashgrab-7",
    "name": "Smash 'N' Grab #7"
   },
   {
    "id": "smashgrab-8",
    "name": "Smash 'N' Grab #8"
   },
   {
    "id": "smashgrab-9",
    "name": "Smash 'N' Grab #9"
   },
   {
    "id": "smashgrab-10",
    "name": "Smash 'N' Grab #10"
   },
   {
    "id": "smashgrab-11",
    "name": "Smash 'N' Grab #11"
   },
   {
    "id": "smashgrab-12",
    "name": "Smash 'N' Grab #12"
   },
   {
    "id": "smashgrab-13",
    "name": "Smash 'N' Grab #13"
   },
   {
    "id": "smashgrab-14",
    "name": "Smash 'N' Grab #14"
   },
   {
    "id": "smashgrab-15",
    "name": "Smash 'N' Grab #15"
   },
   {
    "id": "smashgrab-16",
    "name": "Smash 'N' Grab #16"
   },
   {
    "id": "smashgrab-17",
    "name": "Smash 'N' Grab #17"
   },
   {
    "id": "smashgrab-18",
    "name": "Smash 'N' Grab #18"
   },
   {
    "id": "smashgrab-19",
    "name": "Smash 'N' Grab #19"
   },
   {
    "id": "smashgrab-20",
    "name": "Smash 'N' Grab #20"
   },
   {
    "id": "smashgrab-21",
    "name": "Smash 'N' Grab #21"
   },
   {
    "id": "smashgrab-22",
    "name": "Smash 'N' Grab #22"
   },
   {
    "id": "smashgrab-23",
    "name": "Smash 'N' Grab #23"
   },
   {
    "id": "smashgrab-24",
    "name": "Smash 'N' Grab #24"
   },
   {
    "id": "smashgrab-25",
    "name": "Smash 'N' Grab #25"
   },
   {
    "id": "smashgrab-26",
    "name": "Smash 'N' Grab #26"
   },
   {
    "id": "smashgrab-27",
    "name": "Smash 'N' Grab #27"
   },
   {
    "id": "smashgrab-28",
    "name": "Smash 'N' Grab #28"
   },
   {
    "id": "smashgrab-29",
    "name": "Smash 'N' Grab #29"
   },
   {
    "id": "smashgrab-30",
    "name": "Smash 'N' Grab #30"
   },
   {
    "id": "smashgrab-31",
    "name": "Smash 'N' Grab #31"
   },
   {
    "id": "smashgrab-32",
    "name": "Smash 'N' Grab #32"
   },
   {
    "id": "smashgrab-33",
    "name": "Smash 'N' Grab #33"
   },
   {
    "id": "smashgrab-34",
    "name": "Smash 'N' Grab #34"
   },
   {
    "id": "smashgrab-35",
    "name": "Smash 'N' Grab #35"
   },
   {
    "id": "payday-1",
    "name": "Payday Loan Job #1"
   },
   {
    "id": "payday-2",
    "name": "Payday Loan Job #2"
   },
   {
    "id": "payday-3",
    "name": "Payday Loan Job #3"
   },
   {
    "id": "payday-4",
    "name": "Payday Loan Job #4"
   },
   {
    "id": "payday-5",
    "name": "Payday Loan Job #5"
   },
   {
    "id": "payday-6",
    "name": "Payday Loan Job #6"
   },
   {
    "id": "payday-7",
    "name": "Payday Loan Job #7"
   },
   {
    "id": "vault-1",
    "name": "Bank Vault #1"
   },
   {
    "id": "vault-2",
    "name": "Bank Vault #2"
   },
   {
    "id": "vault-3",
    "name": "Bank Vault #3"
   },
   {
    "id": "vault-4",
    "name": "Bank Vault #4"
   },
   {
    "id": "vault-5",
    "name": "Bank Vault #5"
   },
   {
    "id": "vault-6",
    "name": "Bank Vault #6"
   },
   {
    "id": "vault-7",
    "name": "Bank Vault #7"
   },
   {
    "id": "vault-8",
    "name": "Bank Vault #8"
   },
   {
    "id": "optask-1",
    "name": "Optional Task #1"
   },
   {
    "id": "optask-2",
    "name": "Optional Task #2"
   },
   {
    "id": "optask-3",
    "name": "Optional Task #3"
   },
   {
    "id": "optask-4",
    "name": "Optional Task #4"
   },
   {
    "id": "optask-5",
    "name": "Optional Task #5"
   },
   {
    "id": "optask-6",
    "name": "Optional Task #6"
   },
   {
    "id": "optask-7",
    "name": "Optional Task #7"
   },
   {
    "id": "optask-8",
    "name": "Optional Task #8"
   },
   {
    "id": "optask-9",
    "name": "Optional Task #9"
   },
   {
    "id": "optask-10",
    "name": "Optional Task #10"
   },
   {
    "id": "optask-11",
    "name": "Optional Task #11"
   },
   {
    "id": "optask-12",
    "name": "Optional Task #12"
   },
   {
    "id": "optask-13",
    "name": "Optional Task #13"
   },
   {
    "id": "optask-14",
    "name": "Optional Task #14"
   },
   {
    "id": "optask-15",
    "name": "Optional Task #15"
   },
   {
    "id": "optask-16",
    "name": "Optional Task #16"
   },
   {
    "id": "optask-17",
    "name": "Optional Task #17"
   },
   {
    "id": "optask-18",
    "name": "Optional Task #18"
   },
   {
    "id": "optask-19",
    "name": "Optional Task #19"
   },
   {
    "id": "optask-20",
    "name": "Optional Task #20"
   },
   {
    "id": "optask-21",
    "name": "Optional Task #21"
   },
   {
    "id": "optask-22",
    "name": "Optional Task #22"
   },
   {
    "id": "optask-23",
    "name": "Optional Task #23"
   },
   {
    "id": "optask-24",
    "name": "Optional Task #24"
   },
   {
    "id": "optask-25",
    "name": "Optional Task #25"
   },
   {
    "id": "optask-26",
    "name": "Optional Task #26"
   },
   {
    "id": "optask-27",
    "name": "Optional Task #27"
   },
   {
    "id": "optask-28",
    "name": "Optional Task #28"
   },
   {
    "id": "optask-29",
    "name": "Optional Task #29"
   },
   {
    "id": "optask-30",
    "name": "Optional Task #30"
   },
   {
    "id": "optask-31",
    "name": "Optional Task #31"
   },
   {
    "id": "optask-32",
    "name": "Optional Task #32"
   },
   {
    "id": "optask-33",
    "name": "Optional Task #33"
   },
   {
    "id": "optask-34",
    "name": "Optional Task #34"
   },
   {
    "id": "optask-35",
    "name": "Optional Task #35"
   },
   {
    "id": "optask-36",
    "name": "Optional Task #36"
   },
   {
    "id": "optask-37",
    "name": "Optional Task #37"
   },
   {
    "id": "optask-38",
    "name": "Optional Task #38"
   },
   {
    "id": "optask-39",
    "name": "Optional Task #39"
   },
   {
    "id": "optask-40",
    "name": "Optional Task #40"
   },
   {
    "id": "optask-41",
    "name": "Optional Task #41"
   },
   {
    "id": "optask-42",
    "name": "Optional Task #42"
   },
   {
    "id": "optask-43",
    "name": "Optional Task #43"
   },
   {
    "id": "optask-44",
    "name": "Optional Task #44"
   },
   {
    "id": "optask-45",
    "name": "Optional Task #45"
   },
   {
    "id": "optask-46",
    "name": "Optional Task #46"
   },
   {
    "id": "optask-47",
    "name": "Optional Task #47"
   },
   {
    "id": "optask-48",
    "name": "Optional Task #48"
   },
   {
    "id": "optask-49",
    "name": "Optional Task #49"
   },
   {
    "id": "optask-50",
    "name": "Optional Task #50"
   },
   {
    "id": "optask-51",
    "name": "Optional Task #51"
   },
   {
    "id": "optask-52",
    "name": "Optional Task #52"
   },
   {
    "id": "optask-53",
    "name": "Optional Task #53"
   },
   {
    "id": "optask-54",
    "name": "Optional Task #54"
   },
   {
    "id": "optask-55",
    "name": "Optional Task #55"
   },
   {
    "id": "optask-56",
    "name": "Optional Task #56"
   },
   {
    "id": "optask-57",
    "name": "Optional Task #57"
   },
   {
    "id": "optask-58",
    "name": "Optional Task #58"
   },
   {
    "id": "optask-59",
    "name": "Optional Task #59"
   },
   {
    "id": "optask-60",
    "name": "Optional Task #60"
   },
   {
    "id": "optask-61",
    "name": "Optional Task #61"
   },
   {
    "id": "optask-62",
    "name": "Optional Task #62"
   },
   {
    "id": "optask-63",
    "name": "Optional Task #63"
   },
   {
    "id": "optask-64",
    "name": "Optional Task #64"
   },
   {
    "id": "optask-65",
    "name": "Optional Task #65"
   },
   {
    "id": "optask-66",
    "name": "Optional Task #66"
   },
   {
    "id": "optask-67",
    "name": "Optional Task #67"
   },
   {
    "id": "optask-68",
    "name": "Optional Task #68"
   },
   {
    "id": "optask-69",
    "name": "Optional Task #69"
   },
   {
    "id": "optask-70",
    "name": "Optional Task #70"
   },
   {
    "id": "optask-71",
    "name": "Optional Task #71"
   },
   {
    "id": "optask-72",
    "name": "Optional Task #72"
   },
   {
    "id": "optask-73",
    "name": "Optional Task #73"
   },
   {
    "id": "optask-74",
    "name": "Optional Task #74"
   },
   {
    "id": "optask-75",
    "name": "Optional Task #75"
   },
   {
    "id": "optask-76",
    "name": "Optional Task #76"
   },
   {
    "id": "optask-77",
    "name": "Optional Task #77"
   },
   {
    "id": "optask-78",
    "name": "Optional Task #78"
   },
   {
    "id": "optask-79",
    "name": "Optional Task #79"
   },
   {
    "id": "optask-80",
    "name": "Optional Task #80"
   },
   {
    "id": "optask-81",
    "name": "Optional Task #81"
   },
   {
    "id": "optask-82",
    "name": "Optional Task #82"
   },
   {
    "id": "optask-83",
    "name": "Optional Task #83"
   },
   {
    "id": "optask-84",
    "name": "Optional Task #84"
   },
   {
    "id": "optask-85",
    "name": "Optional Task #85"
   },
   {
    "id": "optask-86",
    "name": "Optional Task #86"
   },
   {
    "id": "optask-87",
    "name": "Optional Task #87"
   },
   {
    "id": "optask-88",
    "name": "Optional Task #88"
   },
   {
    "id": "optask-89",
    "name": "Optional Task #89"
   },
   {
    "id": "optask-90",
    "name": "Optional Task #90"
   },
   {
    "id": "optask-91",
    "name": "Optional Task #91"
   },
   {
    "id": "optask-92",
    "name": "Optional Task #92"
   },
   {
    "id": "optask-93",
    "name": "Optional Task #93"
   },
   {
    "id": "optask-94",
    "name": "Optional Task #94"
   },
   {
    "id": "optask-95",
    "name": "Optional Task #95"
   },
   {
    "id": "optask-96",
    "name": "Optional Task #96"
   },
   {
    "id": "optask-97",
    "name": "Optional Task #97"
   },
   {
    "id": "optask-98",
    "name": "Optional Task #98"
   },
   {
    "id": "optask-99",
    "name": "Optional Task #99"
   },
   {
    "id": "optask-100",
    "name": "Optional Task #100"
   }
  ]
 },
 {
  "id": "activities",
  "title": "Activities & Challenges",
  "intro": "The 100% targets: gold medals in all 42 Shooting Range events (ranges include Griffin Shooting Range and Rodgers Ranch), all 42 Drone Trials (14 locations × 3), wins in 30 of 40 Races, golds in 10 of 13 Race Challenges, all 15 of Bret's Hunting Quests, 70 of 80 Challenges, beat 5 of 7 Pool Opponents, play 2 of 3 Mini Golf courses, and play all 4 Video Games. Fishing challenges with Cal count inside Optional Tasks.",
  "items": [
   {
    "id": "range-1",
    "name": "Range Event #1"
   },
   {
    "id": "range-2",
    "name": "Range Event #2"
   },
   {
    "id": "range-3",
    "name": "Range Event #3"
   },
   {
    "id": "range-4",
    "name": "Range Event #4"
   },
   {
    "id": "range-5",
    "name": "Range Event #5"
   },
   {
    "id": "range-6",
    "name": "Range Event #6"
   },
   {
    "id": "range-7",
    "name": "Range Event #7"
   },
   {
    "id": "range-8",
    "name": "Range Event #8"
   },
   {
    "id": "range-9",
    "name": "Range Event #9"
   },
   {
    "id": "range-10",
    "name": "Range Event #10"
   },
   {
    "id": "range-11",
    "name": "Range Event #11"
   },
   {
    "id": "range-12",
    "name": "Range Event #12"
   },
   {
    "id": "range-13",
    "name": "Range Event #13"
   },
   {
    "id": "range-14",
    "name": "Range Event #14"
   },
   {
    "id": "range-15",
    "name": "Range Event #15"
   },
   {
    "id": "range-16",
    "name": "Range Event #16"
   },
   {
    "id": "range-17",
    "name": "Range Event #17"
   },
   {
    "id": "range-18",
    "name": "Range Event #18"
   },
   {
    "id": "range-19",
    "name": "Range Event #19"
   },
   {
    "id": "range-20",
    "name": "Range Event #20"
   },
   {
    "id": "range-21",
    "name": "Range Event #21"
   },
   {
    "id": "range-22",
    "name": "Range Event #22"
   },
   {
    "id": "range-23",
    "name": "Range Event #23"
   },
   {
    "id": "range-24",
    "name": "Range Event #24"
   },
   {
    "id": "range-25",
    "name": "Range Event #25"
   },
   {
    "id": "range-26",
    "name": "Range Event #26"
   },
   {
    "id": "range-27",
    "name": "Range Event #27"
   },
   {
    "id": "range-28",
    "name": "Range Event #28"
   },
   {
    "id": "range-29",
    "name": "Range Event #29"
   },
   {
    "id": "range-30",
    "name": "Range Event #30"
   },
   {
    "id": "range-31",
    "name": "Range Event #31"
   },
   {
    "id": "range-32",
    "name": "Range Event #32"
   },
   {
    "id": "range-33",
    "name": "Range Event #33"
   },
   {
    "id": "range-34",
    "name": "Range Event #34"
   },
   {
    "id": "range-35",
    "name": "Range Event #35"
   },
   {
    "id": "range-36",
    "name": "Range Event #36"
   },
   {
    "id": "range-37",
    "name": "Range Event #37"
   },
   {
    "id": "range-38",
    "name": "Range Event #38"
   },
   {
    "id": "range-39",
    "name": "Range Event #39"
   },
   {
    "id": "range-40",
    "name": "Range Event #40"
   },
   {
    "id": "range-41",
    "name": "Range Event #41"
   },
   {
    "id": "range-42",
    "name": "Range Event #42"
   },
   {
    "id": "drone-1",
    "name": "Drone Trial #1"
   },
   {
    "id": "drone-2",
    "name": "Drone Trial #2"
   },
   {
    "id": "drone-3",
    "name": "Drone Trial #3"
   },
   {
    "id": "drone-4",
    "name": "Drone Trial #4"
   },
   {
    "id": "drone-5",
    "name": "Drone Trial #5"
   },
   {
    "id": "drone-6",
    "name": "Drone Trial #6"
   },
   {
    "id": "drone-7",
    "name": "Drone Trial #7"
   },
   {
    "id": "drone-8",
    "name": "Drone Trial #8"
   },
   {
    "id": "drone-9",
    "name": "Drone Trial #9"
   },
   {
    "id": "drone-10",
    "name": "Drone Trial #10"
   },
   {
    "id": "drone-11",
    "name": "Drone Trial #11"
   },
   {
    "id": "drone-12",
    "name": "Drone Trial #12"
   },
   {
    "id": "drone-13",
    "name": "Drone Trial #13"
   },
   {
    "id": "drone-14",
    "name": "Drone Trial #14"
   },
   {
    "id": "drone-15",
    "name": "Drone Trial #15"
   },
   {
    "id": "drone-16",
    "name": "Drone Trial #16"
   },
   {
    "id": "drone-17",
    "name": "Drone Trial #17"
   },
   {
    "id": "drone-18",
    "name": "Drone Trial #18"
   },
   {
    "id": "drone-19",
    "name": "Drone Trial #19"
   },
   {
    "id": "drone-20",
    "name": "Drone Trial #20"
   },
   {
    "id": "drone-21",
    "name": "Drone Trial #21"
   },
   {
    "id": "drone-22",
    "name": "Drone Trial #22"
   },
   {
    "id": "drone-23",
    "name": "Drone Trial #23"
   },
   {
    "id": "drone-24",
    "name": "Drone Trial #24"
   },
   {
    "id": "drone-25",
    "name": "Drone Trial #25"
   },
   {
    "id": "drone-26",
    "name": "Drone Trial #26"
   },
   {
    "id": "drone-27",
    "name": "Drone Trial #27"
   },
   {
    "id": "drone-28",
    "name": "Drone Trial #28"
   },
   {
    "id": "drone-29",
    "name": "Drone Trial #29"
   },
   {
    "id": "drone-30",
    "name": "Drone Trial #30"
   },
   {
    "id": "drone-31",
    "name": "Drone Trial #31"
   },
   {
    "id": "drone-32",
    "name": "Drone Trial #32"
   },
   {
    "id": "drone-33",
    "name": "Drone Trial #33"
   },
   {
    "id": "drone-34",
    "name": "Drone Trial #34"
   },
   {
    "id": "drone-35",
    "name": "Drone Trial #35"
   },
   {
    "id": "drone-36",
    "name": "Drone Trial #36"
   },
   {
    "id": "drone-37",
    "name": "Drone Trial #37"
   },
   {
    "id": "drone-38",
    "name": "Drone Trial #38"
   },
   {
    "id": "drone-39",
    "name": "Drone Trial #39"
   },
   {
    "id": "drone-40",
    "name": "Drone Trial #40"
   },
   {
    "id": "drone-41",
    "name": "Drone Trial #41"
   },
   {
    "id": "drone-42",
    "name": "Drone Trial #42"
   },
   {
    "id": "race-1",
    "name": "Race #1"
   },
   {
    "id": "race-2",
    "name": "Race #2"
   },
   {
    "id": "race-3",
    "name": "Race #3"
   },
   {
    "id": "race-4",
    "name": "Race #4"
   },
   {
    "id": "race-5",
    "name": "Race #5"
   },
   {
    "id": "race-6",
    "name": "Race #6"
   },
   {
    "id": "race-7",
    "name": "Race #7"
   },
   {
    "id": "race-8",
    "name": "Race #8"
   },
   {
    "id": "race-9",
    "name": "Race #9"
   },
   {
    "id": "race-10",
    "name": "Race #10"
   },
   {
    "id": "race-11",
    "name": "Race #11"
   },
   {
    "id": "race-12",
    "name": "Race #12"
   },
   {
    "id": "race-13",
    "name": "Race #13"
   },
   {
    "id": "race-14",
    "name": "Race #14"
   },
   {
    "id": "race-15",
    "name": "Race #15"
   },
   {
    "id": "race-16",
    "name": "Race #16"
   },
   {
    "id": "race-17",
    "name": "Race #17"
   },
   {
    "id": "race-18",
    "name": "Race #18"
   },
   {
    "id": "race-19",
    "name": "Race #19"
   },
   {
    "id": "race-20",
    "name": "Race #20"
   },
   {
    "id": "race-21",
    "name": "Race #21"
   },
   {
    "id": "race-22",
    "name": "Race #22"
   },
   {
    "id": "race-23",
    "name": "Race #23"
   },
   {
    "id": "race-24",
    "name": "Race #24"
   },
   {
    "id": "race-25",
    "name": "Race #25"
   },
   {
    "id": "race-26",
    "name": "Race #26"
   },
   {
    "id": "race-27",
    "name": "Race #27"
   },
   {
    "id": "race-28",
    "name": "Race #28"
   },
   {
    "id": "race-29",
    "name": "Race #29"
   },
   {
    "id": "race-30",
    "name": "Race #30"
   },
   {
    "id": "race-31",
    "name": "Race #31"
   },
   {
    "id": "race-32",
    "name": "Race #32"
   },
   {
    "id": "race-33",
    "name": "Race #33"
   },
   {
    "id": "race-34",
    "name": "Race #34"
   },
   {
    "id": "race-35",
    "name": "Race #35"
   },
   {
    "id": "race-36",
    "name": "Race #36"
   },
   {
    "id": "race-37",
    "name": "Race #37"
   },
   {
    "id": "race-38",
    "name": "Race #38"
   },
   {
    "id": "race-39",
    "name": "Race #39"
   },
   {
    "id": "race-40",
    "name": "Race #40"
   },
   {
    "id": "racechal-1",
    "name": "Race Challenge #1"
   },
   {
    "id": "racechal-2",
    "name": "Race Challenge #2"
   },
   {
    "id": "racechal-3",
    "name": "Race Challenge #3"
   },
   {
    "id": "racechal-4",
    "name": "Race Challenge #4"
   },
   {
    "id": "racechal-5",
    "name": "Race Challenge #5"
   },
   {
    "id": "racechal-6",
    "name": "Race Challenge #6"
   },
   {
    "id": "racechal-7",
    "name": "Race Challenge #7"
   },
   {
    "id": "racechal-8",
    "name": "Race Challenge #8"
   },
   {
    "id": "racechal-9",
    "name": "Race Challenge #9"
   },
   {
    "id": "racechal-10",
    "name": "Race Challenge #10"
   },
   {
    "id": "racechal-11",
    "name": "Race Challenge #11"
   },
   {
    "id": "racechal-12",
    "name": "Race Challenge #12"
   },
   {
    "id": "racechal-13",
    "name": "Race Challenge #13"
   },
   {
    "id": "hunt-1",
    "name": "Hunting Quest #1"
   },
   {
    "id": "hunt-2",
    "name": "Hunting Quest #2"
   },
   {
    "id": "hunt-3",
    "name": "Hunting Quest #3"
   },
   {
    "id": "hunt-4",
    "name": "Hunting Quest #4"
   },
   {
    "id": "hunt-5",
    "name": "Hunting Quest #5"
   },
   {
    "id": "hunt-6",
    "name": "Hunting Quest #6"
   },
   {
    "id": "hunt-7",
    "name": "Hunting Quest #7"
   },
   {
    "id": "hunt-8",
    "name": "Hunting Quest #8"
   },
   {
    "id": "hunt-9",
    "name": "Hunting Quest #9"
   },
   {
    "id": "hunt-10",
    "name": "Hunting Quest #10"
   },
   {
    "id": "hunt-11",
    "name": "Hunting Quest #11"
   },
   {
    "id": "hunt-12",
    "name": "Hunting Quest #12"
   },
   {
    "id": "hunt-13",
    "name": "Hunting Quest #13"
   },
   {
    "id": "hunt-14",
    "name": "Hunting Quest #14"
   },
   {
    "id": "hunt-15",
    "name": "Hunting Quest #15"
   },
   {
    "id": "challenge-1",
    "name": "Challenge #1"
   },
   {
    "id": "challenge-2",
    "name": "Challenge #2"
   },
   {
    "id": "challenge-3",
    "name": "Challenge #3"
   },
   {
    "id": "challenge-4",
    "name": "Challenge #4"
   },
   {
    "id": "challenge-5",
    "name": "Challenge #5"
   },
   {
    "id": "challenge-6",
    "name": "Challenge #6"
   },
   {
    "id": "challenge-7",
    "name": "Challenge #7"
   },
   {
    "id": "challenge-8",
    "name": "Challenge #8"
   },
   {
    "id": "challenge-9",
    "name": "Challenge #9"
   },
   {
    "id": "challenge-10",
    "name": "Challenge #10"
   },
   {
    "id": "challenge-11",
    "name": "Challenge #11"
   },
   {
    "id": "challenge-12",
    "name": "Challenge #12"
   },
   {
    "id": "challenge-13",
    "name": "Challenge #13"
   },
   {
    "id": "challenge-14",
    "name": "Challenge #14"
   },
   {
    "id": "challenge-15",
    "name": "Challenge #15"
   },
   {
    "id": "challenge-16",
    "name": "Challenge #16"
   },
   {
    "id": "challenge-17",
    "name": "Challenge #17"
   },
   {
    "id": "challenge-18",
    "name": "Challenge #18"
   },
   {
    "id": "challenge-19",
    "name": "Challenge #19"
   },
   {
    "id": "challenge-20",
    "name": "Challenge #20"
   },
   {
    "id": "challenge-21",
    "name": "Challenge #21"
   },
   {
    "id": "challenge-22",
    "name": "Challenge #22"
   },
   {
    "id": "challenge-23",
    "name": "Challenge #23"
   },
   {
    "id": "challenge-24",
    "name": "Challenge #24"
   },
   {
    "id": "challenge-25",
    "name": "Challenge #25"
   },
   {
    "id": "challenge-26",
    "name": "Challenge #26"
   },
   {
    "id": "challenge-27",
    "name": "Challenge #27"
   },
   {
    "id": "challenge-28",
    "name": "Challenge #28"
   },
   {
    "id": "challenge-29",
    "name": "Challenge #29"
   },
   {
    "id": "challenge-30",
    "name": "Challenge #30"
   },
   {
    "id": "challenge-31",
    "name": "Challenge #31"
   },
   {
    "id": "challenge-32",
    "name": "Challenge #32"
   },
   {
    "id": "challenge-33",
    "name": "Challenge #33"
   },
   {
    "id": "challenge-34",
    "name": "Challenge #34"
   },
   {
    "id": "challenge-35",
    "name": "Challenge #35"
   },
   {
    "id": "challenge-36",
    "name": "Challenge #36"
   },
   {
    "id": "challenge-37",
    "name": "Challenge #37"
   },
   {
    "id": "challenge-38",
    "name": "Challenge #38"
   },
   {
    "id": "challenge-39",
    "name": "Challenge #39"
   },
   {
    "id": "challenge-40",
    "name": "Challenge #40"
   },
   {
    "id": "challenge-41",
    "name": "Challenge #41"
   },
   {
    "id": "challenge-42",
    "name": "Challenge #42"
   },
   {
    "id": "challenge-43",
    "name": "Challenge #43"
   },
   {
    "id": "challenge-44",
    "name": "Challenge #44"
   },
   {
    "id": "challenge-45",
    "name": "Challenge #45"
   },
   {
    "id": "challenge-46",
    "name": "Challenge #46"
   },
   {
    "id": "challenge-47",
    "name": "Challenge #47"
   },
   {
    "id": "challenge-48",
    "name": "Challenge #48"
   },
   {
    "id": "challenge-49",
    "name": "Challenge #49"
   },
   {
    "id": "challenge-50",
    "name": "Challenge #50"
   },
   {
    "id": "challenge-51",
    "name": "Challenge #51"
   },
   {
    "id": "challenge-52",
    "name": "Challenge #52"
   },
   {
    "id": "challenge-53",
    "name": "Challenge #53"
   },
   {
    "id": "challenge-54",
    "name": "Challenge #54"
   },
   {
    "id": "challenge-55",
    "name": "Challenge #55"
   },
   {
    "id": "challenge-56",
    "name": "Challenge #56"
   },
   {
    "id": "challenge-57",
    "name": "Challenge #57"
   },
   {
    "id": "challenge-58",
    "name": "Challenge #58"
   },
   {
    "id": "challenge-59",
    "name": "Challenge #59"
   },
   {
    "id": "challenge-60",
    "name": "Challenge #60"
   },
   {
    "id": "challenge-61",
    "name": "Challenge #61"
   },
   {
    "id": "challenge-62",
    "name": "Challenge #62"
   },
   {
    "id": "challenge-63",
    "name": "Challenge #63"
   },
   {
    "id": "challenge-64",
    "name": "Challenge #64"
   },
   {
    "id": "challenge-65",
    "name": "Challenge #65"
   },
   {
    "id": "challenge-66",
    "name": "Challenge #66"
   },
   {
    "id": "challenge-67",
    "name": "Challenge #67"
   },
   {
    "id": "challenge-68",
    "name": "Challenge #68"
   },
   {
    "id": "challenge-69",
    "name": "Challenge #69"
   },
   {
    "id": "challenge-70",
    "name": "Challenge #70"
   },
   {
    "id": "challenge-71",
    "name": "Challenge #71"
   },
   {
    "id": "challenge-72",
    "name": "Challenge #72"
   },
   {
    "id": "challenge-73",
    "name": "Challenge #73"
   },
   {
    "id": "challenge-74",
    "name": "Challenge #74"
   },
   {
    "id": "challenge-75",
    "name": "Challenge #75"
   },
   {
    "id": "challenge-76",
    "name": "Challenge #76"
   },
   {
    "id": "challenge-77",
    "name": "Challenge #77"
   },
   {
    "id": "challenge-78",
    "name": "Challenge #78"
   },
   {
    "id": "challenge-79",
    "name": "Challenge #79"
   },
   {
    "id": "challenge-80",
    "name": "Challenge #80"
   },
   {
    "id": "pool-1",
    "name": "Pool Opponent #1"
   },
   {
    "id": "pool-2",
    "name": "Pool Opponent #2"
   },
   {
    "id": "pool-3",
    "name": "Pool Opponent #3"
   },
   {
    "id": "pool-4",
    "name": "Pool Opponent #4"
   },
   {
    "id": "pool-5",
    "name": "Pool Opponent #5"
   },
   {
    "id": "pool-6",
    "name": "Pool Opponent #6"
   },
   {
    "id": "pool-7",
    "name": "Pool Opponent #7"
   },
   {
    "id": "golf-1",
    "name": "Mini Golf Course #1"
   },
   {
    "id": "golf-2",
    "name": "Mini Golf Course #2"
   },
   {
    "id": "golf-3",
    "name": "Mini Golf Course #3"
   },
   {
    "id": "game-1",
    "name": "Video Game #1"
   },
   {
    "id": "game-2",
    "name": "Video Game #2"
   },
   {
    "id": "game-3",
    "name": "Video Game #3"
   },
   {
    "id": "game-4",
    "name": "Video Game #4"
   }
  ]
 },
 {
  "id": "vehicles",
  "title": "Vehicle Catalogue",
  "intro": "557 vehicles in the game: 277 base models plus 280 standout variants. Scan base models with the WAiNK app — 200 scans needed for 100%. Vehicle names are being added as they're confirmed; until then, tick them off by number as you scan.",
  "items": [
   {
    "id": "vehicle-1",
    "name": "Vehicle #1"
   },
   {
    "id": "vehicle-2",
    "name": "Vehicle #2"
   },
   {
    "id": "vehicle-3",
    "name": "Vehicle #3"
   },
   {
    "id": "vehicle-4",
    "name": "Vehicle #4"
   },
   {
    "id": "vehicle-5",
    "name": "Vehicle #5"
   },
   {
    "id": "vehicle-6",
    "name": "Vehicle #6"
   },
   {
    "id": "vehicle-7",
    "name": "Vehicle #7"
   },
   {
    "id": "vehicle-8",
    "name": "Vehicle #8"
   },
   {
    "id": "vehicle-9",
    "name": "Vehicle #9"
   },
   {
    "id": "vehicle-10",
    "name": "Vehicle #10"
   },
   {
    "id": "vehicle-11",
    "name": "Vehicle #11"
   },
   {
    "id": "vehicle-12",
    "name": "Vehicle #12"
   },
   {
    "id": "vehicle-13",
    "name": "Vehicle #13"
   },
   {
    "id": "vehicle-14",
    "name": "Vehicle #14"
   },
   {
    "id": "vehicle-15",
    "name": "Vehicle #15"
   },
   {
    "id": "vehicle-16",
    "name": "Vehicle #16"
   },
   {
    "id": "vehicle-17",
    "name": "Vehicle #17"
   },
   {
    "id": "vehicle-18",
    "name": "Vehicle #18"
   },
   {
    "id": "vehicle-19",
    "name": "Vehicle #19"
   },
   {
    "id": "vehicle-20",
    "name": "Vehicle #20"
   },
   {
    "id": "vehicle-21",
    "name": "Vehicle #21"
   },
   {
    "id": "vehicle-22",
    "name": "Vehicle #22"
   },
   {
    "id": "vehicle-23",
    "name": "Vehicle #23"
   },
   {
    "id": "vehicle-24",
    "name": "Vehicle #24"
   },
   {
    "id": "vehicle-25",
    "name": "Vehicle #25"
   },
   {
    "id": "vehicle-26",
    "name": "Vehicle #26"
   },
   {
    "id": "vehicle-27",
    "name": "Vehicle #27"
   },
   {
    "id": "vehicle-28",
    "name": "Vehicle #28"
   },
   {
    "id": "vehicle-29",
    "name": "Vehicle #29"
   },
   {
    "id": "vehicle-30",
    "name": "Vehicle #30"
   },
   {
    "id": "vehicle-31",
    "name": "Vehicle #31"
   },
   {
    "id": "vehicle-32",
    "name": "Vehicle #32"
   },
   {
    "id": "vehicle-33",
    "name": "Vehicle #33"
   },
   {
    "id": "vehicle-34",
    "name": "Vehicle #34"
   },
   {
    "id": "vehicle-35",
    "name": "Vehicle #35"
   },
   {
    "id": "vehicle-36",
    "name": "Vehicle #36"
   },
   {
    "id": "vehicle-37",
    "name": "Vehicle #37"
   },
   {
    "id": "vehicle-38",
    "name": "Vehicle #38"
   },
   {
    "id": "vehicle-39",
    "name": "Vehicle #39"
   },
   {
    "id": "vehicle-40",
    "name": "Vehicle #40"
   },
   {
    "id": "vehicle-41",
    "name": "Vehicle #41"
   },
   {
    "id": "vehicle-42",
    "name": "Vehicle #42"
   },
   {
    "id": "vehicle-43",
    "name": "Vehicle #43"
   },
   {
    "id": "vehicle-44",
    "name": "Vehicle #44"
   },
   {
    "id": "vehicle-45",
    "name": "Vehicle #45"
   },
   {
    "id": "vehicle-46",
    "name": "Vehicle #46"
   },
   {
    "id": "vehicle-47",
    "name": "Vehicle #47"
   },
   {
    "id": "vehicle-48",
    "name": "Vehicle #48"
   },
   {
    "id": "vehicle-49",
    "name": "Vehicle #49"
   },
   {
    "id": "vehicle-50",
    "name": "Vehicle #50"
   },
   {
    "id": "vehicle-51",
    "name": "Vehicle #51"
   },
   {
    "id": "vehicle-52",
    "name": "Vehicle #52"
   },
   {
    "id": "vehicle-53",
    "name": "Vehicle #53"
   },
   {
    "id": "vehicle-54",
    "name": "Vehicle #54"
   },
   {
    "id": "vehicle-55",
    "name": "Vehicle #55"
   },
   {
    "id": "vehicle-56",
    "name": "Vehicle #56"
   },
   {
    "id": "vehicle-57",
    "name": "Vehicle #57"
   },
   {
    "id": "vehicle-58",
    "name": "Vehicle #58"
   },
   {
    "id": "vehicle-59",
    "name": "Vehicle #59"
   },
   {
    "id": "vehicle-60",
    "name": "Vehicle #60"
   },
   {
    "id": "vehicle-61",
    "name": "Vehicle #61"
   },
   {
    "id": "vehicle-62",
    "name": "Vehicle #62"
   },
   {
    "id": "vehicle-63",
    "name": "Vehicle #63"
   },
   {
    "id": "vehicle-64",
    "name": "Vehicle #64"
   },
   {
    "id": "vehicle-65",
    "name": "Vehicle #65"
   },
   {
    "id": "vehicle-66",
    "name": "Vehicle #66"
   },
   {
    "id": "vehicle-67",
    "name": "Vehicle #67"
   },
   {
    "id": "vehicle-68",
    "name": "Vehicle #68"
   },
   {
    "id": "vehicle-69",
    "name": "Vehicle #69"
   },
   {
    "id": "vehicle-70",
    "name": "Vehicle #70"
   },
   {
    "id": "vehicle-71",
    "name": "Vehicle #71"
   },
   {
    "id": "vehicle-72",
    "name": "Vehicle #72"
   },
   {
    "id": "vehicle-73",
    "name": "Vehicle #73"
   },
   {
    "id": "vehicle-74",
    "name": "Vehicle #74"
   },
   {
    "id": "vehicle-75",
    "name": "Vehicle #75"
   },
   {
    "id": "vehicle-76",
    "name": "Vehicle #76"
   },
   {
    "id": "vehicle-77",
    "name": "Vehicle #77"
   },
   {
    "id": "vehicle-78",
    "name": "Vehicle #78"
   },
   {
    "id": "vehicle-79",
    "name": "Vehicle #79"
   },
   {
    "id": "vehicle-80",
    "name": "Vehicle #80"
   },
   {
    "id": "vehicle-81",
    "name": "Vehicle #81"
   },
   {
    "id": "vehicle-82",
    "name": "Vehicle #82"
   },
   {
    "id": "vehicle-83",
    "name": "Vehicle #83"
   },
   {
    "id": "vehicle-84",
    "name": "Vehicle #84"
   },
   {
    "id": "vehicle-85",
    "name": "Vehicle #85"
   },
   {
    "id": "vehicle-86",
    "name": "Vehicle #86"
   },
   {
    "id": "vehicle-87",
    "name": "Vehicle #87"
   },
   {
    "id": "vehicle-88",
    "name": "Vehicle #88"
   },
   {
    "id": "vehicle-89",
    "name": "Vehicle #89"
   },
   {
    "id": "vehicle-90",
    "name": "Vehicle #90"
   },
   {
    "id": "vehicle-91",
    "name": "Vehicle #91"
   },
   {
    "id": "vehicle-92",
    "name": "Vehicle #92"
   },
   {
    "id": "vehicle-93",
    "name": "Vehicle #93"
   },
   {
    "id": "vehicle-94",
    "name": "Vehicle #94"
   },
   {
    "id": "vehicle-95",
    "name": "Vehicle #95"
   },
   {
    "id": "vehicle-96",
    "name": "Vehicle #96"
   },
   {
    "id": "vehicle-97",
    "name": "Vehicle #97"
   },
   {
    "id": "vehicle-98",
    "name": "Vehicle #98"
   },
   {
    "id": "vehicle-99",
    "name": "Vehicle #99"
   },
   {
    "id": "vehicle-100",
    "name": "Vehicle #100"
   },
   {
    "id": "vehicle-101",
    "name": "Vehicle #101"
   },
   {
    "id": "vehicle-102",
    "name": "Vehicle #102"
   },
   {
    "id": "vehicle-103",
    "name": "Vehicle #103"
   },
   {
    "id": "vehicle-104",
    "name": "Vehicle #104"
   },
   {
    "id": "vehicle-105",
    "name": "Vehicle #105"
   },
   {
    "id": "vehicle-106",
    "name": "Vehicle #106"
   },
   {
    "id": "vehicle-107",
    "name": "Vehicle #107"
   },
   {
    "id": "vehicle-108",
    "name": "Vehicle #108"
   },
   {
    "id": "vehicle-109",
    "name": "Vehicle #109"
   },
   {
    "id": "vehicle-110",
    "name": "Vehicle #110"
   },
   {
    "id": "vehicle-111",
    "name": "Vehicle #111"
   },
   {
    "id": "vehicle-112",
    "name": "Vehicle #112"
   },
   {
    "id": "vehicle-113",
    "name": "Vehicle #113"
   },
   {
    "id": "vehicle-114",
    "name": "Vehicle #114"
   },
   {
    "id": "vehicle-115",
    "name": "Vehicle #115"
   },
   {
    "id": "vehicle-116",
    "name": "Vehicle #116"
   },
   {
    "id": "vehicle-117",
    "name": "Vehicle #117"
   },
   {
    "id": "vehicle-118",
    "name": "Vehicle #118"
   },
   {
    "id": "vehicle-119",
    "name": "Vehicle #119"
   },
   {
    "id": "vehicle-120",
    "name": "Vehicle #120"
   },
   {
    "id": "vehicle-121",
    "name": "Vehicle #121"
   },
   {
    "id": "vehicle-122",
    "name": "Vehicle #122"
   },
   {
    "id": "vehicle-123",
    "name": "Vehicle #123"
   },
   {
    "id": "vehicle-124",
    "name": "Vehicle #124"
   },
   {
    "id": "vehicle-125",
    "name": "Vehicle #125"
   },
   {
    "id": "vehicle-126",
    "name": "Vehicle #126"
   },
   {
    "id": "vehicle-127",
    "name": "Vehicle #127"
   },
   {
    "id": "vehicle-128",
    "name": "Vehicle #128"
   },
   {
    "id": "vehicle-129",
    "name": "Vehicle #129"
   },
   {
    "id": "vehicle-130",
    "name": "Vehicle #130"
   },
   {
    "id": "vehicle-131",
    "name": "Vehicle #131"
   },
   {
    "id": "vehicle-132",
    "name": "Vehicle #132"
   },
   {
    "id": "vehicle-133",
    "name": "Vehicle #133"
   },
   {
    "id": "vehicle-134",
    "name": "Vehicle #134"
   },
   {
    "id": "vehicle-135",
    "name": "Vehicle #135"
   },
   {
    "id": "vehicle-136",
    "name": "Vehicle #136"
   },
   {
    "id": "vehicle-137",
    "name": "Vehicle #137"
   },
   {
    "id": "vehicle-138",
    "name": "Vehicle #138"
   },
   {
    "id": "vehicle-139",
    "name": "Vehicle #139"
   },
   {
    "id": "vehicle-140",
    "name": "Vehicle #140"
   },
   {
    "id": "vehicle-141",
    "name": "Vehicle #141"
   },
   {
    "id": "vehicle-142",
    "name": "Vehicle #142"
   },
   {
    "id": "vehicle-143",
    "name": "Vehicle #143"
   },
   {
    "id": "vehicle-144",
    "name": "Vehicle #144"
   },
   {
    "id": "vehicle-145",
    "name": "Vehicle #145"
   },
   {
    "id": "vehicle-146",
    "name": "Vehicle #146"
   },
   {
    "id": "vehicle-147",
    "name": "Vehicle #147"
   },
   {
    "id": "vehicle-148",
    "name": "Vehicle #148"
   },
   {
    "id": "vehicle-149",
    "name": "Vehicle #149"
   },
   {
    "id": "vehicle-150",
    "name": "Vehicle #150"
   },
   {
    "id": "vehicle-151",
    "name": "Vehicle #151"
   },
   {
    "id": "vehicle-152",
    "name": "Vehicle #152"
   },
   {
    "id": "vehicle-153",
    "name": "Vehicle #153"
   },
   {
    "id": "vehicle-154",
    "name": "Vehicle #154"
   },
   {
    "id": "vehicle-155",
    "name": "Vehicle #155"
   },
   {
    "id": "vehicle-156",
    "name": "Vehicle #156"
   },
   {
    "id": "vehicle-157",
    "name": "Vehicle #157"
   },
   {
    "id": "vehicle-158",
    "name": "Vehicle #158"
   },
   {
    "id": "vehicle-159",
    "name": "Vehicle #159"
   },
   {
    "id": "vehicle-160",
    "name": "Vehicle #160"
   },
   {
    "id": "vehicle-161",
    "name": "Vehicle #161"
   },
   {
    "id": "vehicle-162",
    "name": "Vehicle #162"
   },
   {
    "id": "vehicle-163",
    "name": "Vehicle #163"
   },
   {
    "id": "vehicle-164",
    "name": "Vehicle #164"
   },
   {
    "id": "vehicle-165",
    "name": "Vehicle #165"
   },
   {
    "id": "vehicle-166",
    "name": "Vehicle #166"
   },
   {
    "id": "vehicle-167",
    "name": "Vehicle #167"
   },
   {
    "id": "vehicle-168",
    "name": "Vehicle #168"
   },
   {
    "id": "vehicle-169",
    "name": "Vehicle #169"
   },
   {
    "id": "vehicle-170",
    "name": "Vehicle #170"
   },
   {
    "id": "vehicle-171",
    "name": "Vehicle #171"
   },
   {
    "id": "vehicle-172",
    "name": "Vehicle #172"
   },
   {
    "id": "vehicle-173",
    "name": "Vehicle #173"
   },
   {
    "id": "vehicle-174",
    "name": "Vehicle #174"
   },
   {
    "id": "vehicle-175",
    "name": "Vehicle #175"
   },
   {
    "id": "vehicle-176",
    "name": "Vehicle #176"
   },
   {
    "id": "vehicle-177",
    "name": "Vehicle #177"
   },
   {
    "id": "vehicle-178",
    "name": "Vehicle #178"
   },
   {
    "id": "vehicle-179",
    "name": "Vehicle #179"
   },
   {
    "id": "vehicle-180",
    "name": "Vehicle #180"
   },
   {
    "id": "vehicle-181",
    "name": "Vehicle #181"
   },
   {
    "id": "vehicle-182",
    "name": "Vehicle #182"
   },
   {
    "id": "vehicle-183",
    "name": "Vehicle #183"
   },
   {
    "id": "vehicle-184",
    "name": "Vehicle #184"
   },
   {
    "id": "vehicle-185",
    "name": "Vehicle #185"
   },
   {
    "id": "vehicle-186",
    "name": "Vehicle #186"
   },
   {
    "id": "vehicle-187",
    "name": "Vehicle #187"
   },
   {
    "id": "vehicle-188",
    "name": "Vehicle #188"
   },
   {
    "id": "vehicle-189",
    "name": "Vehicle #189"
   },
   {
    "id": "vehicle-190",
    "name": "Vehicle #190"
   },
   {
    "id": "vehicle-191",
    "name": "Vehicle #191"
   },
   {
    "id": "vehicle-192",
    "name": "Vehicle #192"
   },
   {
    "id": "vehicle-193",
    "name": "Vehicle #193"
   },
   {
    "id": "vehicle-194",
    "name": "Vehicle #194"
   },
   {
    "id": "vehicle-195",
    "name": "Vehicle #195"
   },
   {
    "id": "vehicle-196",
    "name": "Vehicle #196"
   },
   {
    "id": "vehicle-197",
    "name": "Vehicle #197"
   },
   {
    "id": "vehicle-198",
    "name": "Vehicle #198"
   },
   {
    "id": "vehicle-199",
    "name": "Vehicle #199"
   },
   {
    "id": "vehicle-200",
    "name": "Vehicle #200"
   },
   {
    "id": "vehicle-201",
    "name": "Vehicle #201"
   },
   {
    "id": "vehicle-202",
    "name": "Vehicle #202"
   },
   {
    "id": "vehicle-203",
    "name": "Vehicle #203"
   },
   {
    "id": "vehicle-204",
    "name": "Vehicle #204"
   },
   {
    "id": "vehicle-205",
    "name": "Vehicle #205"
   },
   {
    "id": "vehicle-206",
    "name": "Vehicle #206"
   },
   {
    "id": "vehicle-207",
    "name": "Vehicle #207"
   },
   {
    "id": "vehicle-208",
    "name": "Vehicle #208"
   },
   {
    "id": "vehicle-209",
    "name": "Vehicle #209"
   },
   {
    "id": "vehicle-210",
    "name": "Vehicle #210"
   },
   {
    "id": "vehicle-211",
    "name": "Vehicle #211"
   },
   {
    "id": "vehicle-212",
    "name": "Vehicle #212"
   },
   {
    "id": "vehicle-213",
    "name": "Vehicle #213"
   },
   {
    "id": "vehicle-214",
    "name": "Vehicle #214"
   },
   {
    "id": "vehicle-215",
    "name": "Vehicle #215"
   },
   {
    "id": "vehicle-216",
    "name": "Vehicle #216"
   },
   {
    "id": "vehicle-217",
    "name": "Vehicle #217"
   },
   {
    "id": "vehicle-218",
    "name": "Vehicle #218"
   },
   {
    "id": "vehicle-219",
    "name": "Vehicle #219"
   },
   {
    "id": "vehicle-220",
    "name": "Vehicle #220"
   },
   {
    "id": "vehicle-221",
    "name": "Vehicle #221"
   },
   {
    "id": "vehicle-222",
    "name": "Vehicle #222"
   },
   {
    "id": "vehicle-223",
    "name": "Vehicle #223"
   },
   {
    "id": "vehicle-224",
    "name": "Vehicle #224"
   },
   {
    "id": "vehicle-225",
    "name": "Vehicle #225"
   },
   {
    "id": "vehicle-226",
    "name": "Vehicle #226"
   },
   {
    "id": "vehicle-227",
    "name": "Vehicle #227"
   },
   {
    "id": "vehicle-228",
    "name": "Vehicle #228"
   },
   {
    "id": "vehicle-229",
    "name": "Vehicle #229"
   },
   {
    "id": "vehicle-230",
    "name": "Vehicle #230"
   },
   {
    "id": "vehicle-231",
    "name": "Vehicle #231"
   },
   {
    "id": "vehicle-232",
    "name": "Vehicle #232"
   },
   {
    "id": "vehicle-233",
    "name": "Vehicle #233"
   },
   {
    "id": "vehicle-234",
    "name": "Vehicle #234"
   },
   {
    "id": "vehicle-235",
    "name": "Vehicle #235"
   },
   {
    "id": "vehicle-236",
    "name": "Vehicle #236"
   },
   {
    "id": "vehicle-237",
    "name": "Vehicle #237"
   },
   {
    "id": "vehicle-238",
    "name": "Vehicle #238"
   },
   {
    "id": "vehicle-239",
    "name": "Vehicle #239"
   },
   {
    "id": "vehicle-240",
    "name": "Vehicle #240"
   },
   {
    "id": "vehicle-241",
    "name": "Vehicle #241"
   },
   {
    "id": "vehicle-242",
    "name": "Vehicle #242"
   },
   {
    "id": "vehicle-243",
    "name": "Vehicle #243"
   },
   {
    "id": "vehicle-244",
    "name": "Vehicle #244"
   },
   {
    "id": "vehicle-245",
    "name": "Vehicle #245"
   },
   {
    "id": "vehicle-246",
    "name": "Vehicle #246"
   },
   {
    "id": "vehicle-247",
    "name": "Vehicle #247"
   },
   {
    "id": "vehicle-248",
    "name": "Vehicle #248"
   },
   {
    "id": "vehicle-249",
    "name": "Vehicle #249"
   },
   {
    "id": "vehicle-250",
    "name": "Vehicle #250"
   },
   {
    "id": "vehicle-251",
    "name": "Vehicle #251"
   },
   {
    "id": "vehicle-252",
    "name": "Vehicle #252"
   },
   {
    "id": "vehicle-253",
    "name": "Vehicle #253"
   },
   {
    "id": "vehicle-254",
    "name": "Vehicle #254"
   },
   {
    "id": "vehicle-255",
    "name": "Vehicle #255"
   },
   {
    "id": "vehicle-256",
    "name": "Vehicle #256"
   },
   {
    "id": "vehicle-257",
    "name": "Vehicle #257"
   },
   {
    "id": "vehicle-258",
    "name": "Vehicle #258"
   },
   {
    "id": "vehicle-259",
    "name": "Vehicle #259"
   },
   {
    "id": "vehicle-260",
    "name": "Vehicle #260"
   },
   {
    "id": "vehicle-261",
    "name": "Vehicle #261"
   },
   {
    "id": "vehicle-262",
    "name": "Vehicle #262"
   },
   {
    "id": "vehicle-263",
    "name": "Vehicle #263"
   },
   {
    "id": "vehicle-264",
    "name": "Vehicle #264"
   },
   {
    "id": "vehicle-265",
    "name": "Vehicle #265"
   },
   {
    "id": "vehicle-266",
    "name": "Vehicle #266"
   },
   {
    "id": "vehicle-267",
    "name": "Vehicle #267"
   },
   {
    "id": "vehicle-268",
    "name": "Vehicle #268"
   },
   {
    "id": "vehicle-269",
    "name": "Vehicle #269"
   },
   {
    "id": "vehicle-270",
    "name": "Vehicle #270"
   },
   {
    "id": "vehicle-271",
    "name": "Vehicle #271"
   },
   {
    "id": "vehicle-272",
    "name": "Vehicle #272"
   },
   {
    "id": "vehicle-273",
    "name": "Vehicle #273"
   },
   {
    "id": "vehicle-274",
    "name": "Vehicle #274"
   },
   {
    "id": "vehicle-275",
    "name": "Vehicle #275"
   },
   {
    "id": "vehicle-276",
    "name": "Vehicle #276"
   },
   {
    "id": "vehicle-277",
    "name": "Vehicle #277"
   }
  ]
 },
 {
  "id": "animals",
  "title": "Animals",
  "intro": "255 animal species to study through binoculars — hunting is not required for the catalogue. Study 100 for 100%. Species names are being added as they're confirmed.",
  "items": [
   {
    "id": "animal-1",
    "name": "Animal #1"
   },
   {
    "id": "animal-2",
    "name": "Animal #2"
   },
   {
    "id": "animal-3",
    "name": "Animal #3"
   },
   {
    "id": "animal-4",
    "name": "Animal #4"
   },
   {
    "id": "animal-5",
    "name": "Animal #5"
   },
   {
    "id": "animal-6",
    "name": "Animal #6"
   },
   {
    "id": "animal-7",
    "name": "Animal #7"
   },
   {
    "id": "animal-8",
    "name": "Animal #8"
   },
   {
    "id": "animal-9",
    "name": "Animal #9"
   },
   {
    "id": "animal-10",
    "name": "Animal #10"
   },
   {
    "id": "animal-11",
    "name": "Animal #11"
   },
   {
    "id": "animal-12",
    "name": "Animal #12"
   },
   {
    "id": "animal-13",
    "name": "Animal #13"
   },
   {
    "id": "animal-14",
    "name": "Animal #14"
   },
   {
    "id": "animal-15",
    "name": "Animal #15"
   },
   {
    "id": "animal-16",
    "name": "Animal #16"
   },
   {
    "id": "animal-17",
    "name": "Animal #17"
   },
   {
    "id": "animal-18",
    "name": "Animal #18"
   },
   {
    "id": "animal-19",
    "name": "Animal #19"
   },
   {
    "id": "animal-20",
    "name": "Animal #20"
   },
   {
    "id": "animal-21",
    "name": "Animal #21"
   },
   {
    "id": "animal-22",
    "name": "Animal #22"
   },
   {
    "id": "animal-23",
    "name": "Animal #23"
   },
   {
    "id": "animal-24",
    "name": "Animal #24"
   },
   {
    "id": "animal-25",
    "name": "Animal #25"
   },
   {
    "id": "animal-26",
    "name": "Animal #26"
   },
   {
    "id": "animal-27",
    "name": "Animal #27"
   },
   {
    "id": "animal-28",
    "name": "Animal #28"
   },
   {
    "id": "animal-29",
    "name": "Animal #29"
   },
   {
    "id": "animal-30",
    "name": "Animal #30"
   },
   {
    "id": "animal-31",
    "name": "Animal #31"
   },
   {
    "id": "animal-32",
    "name": "Animal #32"
   },
   {
    "id": "animal-33",
    "name": "Animal #33"
   },
   {
    "id": "animal-34",
    "name": "Animal #34"
   },
   {
    "id": "animal-35",
    "name": "Animal #35"
   },
   {
    "id": "animal-36",
    "name": "Animal #36"
   },
   {
    "id": "animal-37",
    "name": "Animal #37"
   },
   {
    "id": "animal-38",
    "name": "Animal #38"
   },
   {
    "id": "animal-39",
    "name": "Animal #39"
   },
   {
    "id": "animal-40",
    "name": "Animal #40"
   },
   {
    "id": "animal-41",
    "name": "Animal #41"
   },
   {
    "id": "animal-42",
    "name": "Animal #42"
   },
   {
    "id": "animal-43",
    "name": "Animal #43"
   },
   {
    "id": "animal-44",
    "name": "Animal #44"
   },
   {
    "id": "animal-45",
    "name": "Animal #45"
   },
   {
    "id": "animal-46",
    "name": "Animal #46"
   },
   {
    "id": "animal-47",
    "name": "Animal #47"
   },
   {
    "id": "animal-48",
    "name": "Animal #48"
   },
   {
    "id": "animal-49",
    "name": "Animal #49"
   },
   {
    "id": "animal-50",
    "name": "Animal #50"
   },
   {
    "id": "animal-51",
    "name": "Animal #51"
   },
   {
    "id": "animal-52",
    "name": "Animal #52"
   },
   {
    "id": "animal-53",
    "name": "Animal #53"
   },
   {
    "id": "animal-54",
    "name": "Animal #54"
   },
   {
    "id": "animal-55",
    "name": "Animal #55"
   },
   {
    "id": "animal-56",
    "name": "Animal #56"
   },
   {
    "id": "animal-57",
    "name": "Animal #57"
   },
   {
    "id": "animal-58",
    "name": "Animal #58"
   },
   {
    "id": "animal-59",
    "name": "Animal #59"
   },
   {
    "id": "animal-60",
    "name": "Animal #60"
   },
   {
    "id": "animal-61",
    "name": "Animal #61"
   },
   {
    "id": "animal-62",
    "name": "Animal #62"
   },
   {
    "id": "animal-63",
    "name": "Animal #63"
   },
   {
    "id": "animal-64",
    "name": "Animal #64"
   },
   {
    "id": "animal-65",
    "name": "Animal #65"
   },
   {
    "id": "animal-66",
    "name": "Animal #66"
   },
   {
    "id": "animal-67",
    "name": "Animal #67"
   },
   {
    "id": "animal-68",
    "name": "Animal #68"
   },
   {
    "id": "animal-69",
    "name": "Animal #69"
   },
   {
    "id": "animal-70",
    "name": "Animal #70"
   },
   {
    "id": "animal-71",
    "name": "Animal #71"
   },
   {
    "id": "animal-72",
    "name": "Animal #72"
   },
   {
    "id": "animal-73",
    "name": "Animal #73"
   },
   {
    "id": "animal-74",
    "name": "Animal #74"
   },
   {
    "id": "animal-75",
    "name": "Animal #75"
   },
   {
    "id": "animal-76",
    "name": "Animal #76"
   },
   {
    "id": "animal-77",
    "name": "Animal #77"
   },
   {
    "id": "animal-78",
    "name": "Animal #78"
   },
   {
    "id": "animal-79",
    "name": "Animal #79"
   },
   {
    "id": "animal-80",
    "name": "Animal #80"
   },
   {
    "id": "animal-81",
    "name": "Animal #81"
   },
   {
    "id": "animal-82",
    "name": "Animal #82"
   },
   {
    "id": "animal-83",
    "name": "Animal #83"
   },
   {
    "id": "animal-84",
    "name": "Animal #84"
   },
   {
    "id": "animal-85",
    "name": "Animal #85"
   },
   {
    "id": "animal-86",
    "name": "Animal #86"
   },
   {
    "id": "animal-87",
    "name": "Animal #87"
   },
   {
    "id": "animal-88",
    "name": "Animal #88"
   },
   {
    "id": "animal-89",
    "name": "Animal #89"
   },
   {
    "id": "animal-90",
    "name": "Animal #90"
   },
   {
    "id": "animal-91",
    "name": "Animal #91"
   },
   {
    "id": "animal-92",
    "name": "Animal #92"
   },
   {
    "id": "animal-93",
    "name": "Animal #93"
   },
   {
    "id": "animal-94",
    "name": "Animal #94"
   },
   {
    "id": "animal-95",
    "name": "Animal #95"
   },
   {
    "id": "animal-96",
    "name": "Animal #96"
   },
   {
    "id": "animal-97",
    "name": "Animal #97"
   },
   {
    "id": "animal-98",
    "name": "Animal #98"
   },
   {
    "id": "animal-99",
    "name": "Animal #99"
   },
   {
    "id": "animal-100",
    "name": "Animal #100"
   },
   {
    "id": "animal-101",
    "name": "Animal #101"
   },
   {
    "id": "animal-102",
    "name": "Animal #102"
   },
   {
    "id": "animal-103",
    "name": "Animal #103"
   },
   {
    "id": "animal-104",
    "name": "Animal #104"
   },
   {
    "id": "animal-105",
    "name": "Animal #105"
   },
   {
    "id": "animal-106",
    "name": "Animal #106"
   },
   {
    "id": "animal-107",
    "name": "Animal #107"
   },
   {
    "id": "animal-108",
    "name": "Animal #108"
   },
   {
    "id": "animal-109",
    "name": "Animal #109"
   },
   {
    "id": "animal-110",
    "name": "Animal #110"
   },
   {
    "id": "animal-111",
    "name": "Animal #111"
   },
   {
    "id": "animal-112",
    "name": "Animal #112"
   },
   {
    "id": "animal-113",
    "name": "Animal #113"
   },
   {
    "id": "animal-114",
    "name": "Animal #114"
   },
   {
    "id": "animal-115",
    "name": "Animal #115"
   },
   {
    "id": "animal-116",
    "name": "Animal #116"
   },
   {
    "id": "animal-117",
    "name": "Animal #117"
   },
   {
    "id": "animal-118",
    "name": "Animal #118"
   },
   {
    "id": "animal-119",
    "name": "Animal #119"
   },
   {
    "id": "animal-120",
    "name": "Animal #120"
   },
   {
    "id": "animal-121",
    "name": "Animal #121"
   },
   {
    "id": "animal-122",
    "name": "Animal #122"
   },
   {
    "id": "animal-123",
    "name": "Animal #123"
   },
   {
    "id": "animal-124",
    "name": "Animal #124"
   },
   {
    "id": "animal-125",
    "name": "Animal #125"
   },
   {
    "id": "animal-126",
    "name": "Animal #126"
   },
   {
    "id": "animal-127",
    "name": "Animal #127"
   },
   {
    "id": "animal-128",
    "name": "Animal #128"
   },
   {
    "id": "animal-129",
    "name": "Animal #129"
   },
   {
    "id": "animal-130",
    "name": "Animal #130"
   },
   {
    "id": "animal-131",
    "name": "Animal #131"
   },
   {
    "id": "animal-132",
    "name": "Animal #132"
   },
   {
    "id": "animal-133",
    "name": "Animal #133"
   },
   {
    "id": "animal-134",
    "name": "Animal #134"
   },
   {
    "id": "animal-135",
    "name": "Animal #135"
   },
   {
    "id": "animal-136",
    "name": "Animal #136"
   },
   {
    "id": "animal-137",
    "name": "Animal #137"
   },
   {
    "id": "animal-138",
    "name": "Animal #138"
   },
   {
    "id": "animal-139",
    "name": "Animal #139"
   },
   {
    "id": "animal-140",
    "name": "Animal #140"
   },
   {
    "id": "animal-141",
    "name": "Animal #141"
   },
   {
    "id": "animal-142",
    "name": "Animal #142"
   },
   {
    "id": "animal-143",
    "name": "Animal #143"
   },
   {
    "id": "animal-144",
    "name": "Animal #144"
   },
   {
    "id": "animal-145",
    "name": "Animal #145"
   },
   {
    "id": "animal-146",
    "name": "Animal #146"
   },
   {
    "id": "animal-147",
    "name": "Animal #147"
   },
   {
    "id": "animal-148",
    "name": "Animal #148"
   },
   {
    "id": "animal-149",
    "name": "Animal #149"
   },
   {
    "id": "animal-150",
    "name": "Animal #150"
   },
   {
    "id": "animal-151",
    "name": "Animal #151"
   },
   {
    "id": "animal-152",
    "name": "Animal #152"
   },
   {
    "id": "animal-153",
    "name": "Animal #153"
   },
   {
    "id": "animal-154",
    "name": "Animal #154"
   },
   {
    "id": "animal-155",
    "name": "Animal #155"
   },
   {
    "id": "animal-156",
    "name": "Animal #156"
   },
   {
    "id": "animal-157",
    "name": "Animal #157"
   },
   {
    "id": "animal-158",
    "name": "Animal #158"
   },
   {
    "id": "animal-159",
    "name": "Animal #159"
   },
   {
    "id": "animal-160",
    "name": "Animal #160"
   },
   {
    "id": "animal-161",
    "name": "Animal #161"
   },
   {
    "id": "animal-162",
    "name": "Animal #162"
   },
   {
    "id": "animal-163",
    "name": "Animal #163"
   },
   {
    "id": "animal-164",
    "name": "Animal #164"
   },
   {
    "id": "animal-165",
    "name": "Animal #165"
   },
   {
    "id": "animal-166",
    "name": "Animal #166"
   },
   {
    "id": "animal-167",
    "name": "Animal #167"
   },
   {
    "id": "animal-168",
    "name": "Animal #168"
   },
   {
    "id": "animal-169",
    "name": "Animal #169"
   },
   {
    "id": "animal-170",
    "name": "Animal #170"
   },
   {
    "id": "animal-171",
    "name": "Animal #171"
   },
   {
    "id": "animal-172",
    "name": "Animal #172"
   },
   {
    "id": "animal-173",
    "name": "Animal #173"
   },
   {
    "id": "animal-174",
    "name": "Animal #174"
   },
   {
    "id": "animal-175",
    "name": "Animal #175"
   },
   {
    "id": "animal-176",
    "name": "Animal #176"
   },
   {
    "id": "animal-177",
    "name": "Animal #177"
   },
   {
    "id": "animal-178",
    "name": "Animal #178"
   },
   {
    "id": "animal-179",
    "name": "Animal #179"
   },
   {
    "id": "animal-180",
    "name": "Animal #180"
   },
   {
    "id": "animal-181",
    "name": "Animal #181"
   },
   {
    "id": "animal-182",
    "name": "Animal #182"
   },
   {
    "id": "animal-183",
    "name": "Animal #183"
   },
   {
    "id": "animal-184",
    "name": "Animal #184"
   },
   {
    "id": "animal-185",
    "name": "Animal #185"
   },
   {
    "id": "animal-186",
    "name": "Animal #186"
   },
   {
    "id": "animal-187",
    "name": "Animal #187"
   },
   {
    "id": "animal-188",
    "name": "Animal #188"
   },
   {
    "id": "animal-189",
    "name": "Animal #189"
   },
   {
    "id": "animal-190",
    "name": "Animal #190"
   },
   {
    "id": "animal-191",
    "name": "Animal #191"
   },
   {
    "id": "animal-192",
    "name": "Animal #192"
   },
   {
    "id": "animal-193",
    "name": "Animal #193"
   },
   {
    "id": "animal-194",
    "name": "Animal #194"
   },
   {
    "id": "animal-195",
    "name": "Animal #195"
   },
   {
    "id": "animal-196",
    "name": "Animal #196"
   },
   {
    "id": "animal-197",
    "name": "Animal #197"
   },
   {
    "id": "animal-198",
    "name": "Animal #198"
   },
   {
    "id": "animal-199",
    "name": "Animal #199"
   },
   {
    "id": "animal-200",
    "name": "Animal #200"
   },
   {
    "id": "animal-201",
    "name": "Animal #201"
   },
   {
    "id": "animal-202",
    "name": "Animal #202"
   },
   {
    "id": "animal-203",
    "name": "Animal #203"
   },
   {
    "id": "animal-204",
    "name": "Animal #204"
   },
   {
    "id": "animal-205",
    "name": "Animal #205"
   },
   {
    "id": "animal-206",
    "name": "Animal #206"
   },
   {
    "id": "animal-207",
    "name": "Animal #207"
   },
   {
    "id": "animal-208",
    "name": "Animal #208"
   },
   {
    "id": "animal-209",
    "name": "Animal #209"
   },
   {
    "id": "animal-210",
    "name": "Animal #210"
   },
   {
    "id": "animal-211",
    "name": "Animal #211"
   },
   {
    "id": "animal-212",
    "name": "Animal #212"
   },
   {
    "id": "animal-213",
    "name": "Animal #213"
   },
   {
    "id": "animal-214",
    "name": "Animal #214"
   },
   {
    "id": "animal-215",
    "name": "Animal #215"
   },
   {
    "id": "animal-216",
    "name": "Animal #216"
   },
   {
    "id": "animal-217",
    "name": "Animal #217"
   },
   {
    "id": "animal-218",
    "name": "Animal #218"
   },
   {
    "id": "animal-219",
    "name": "Animal #219"
   },
   {
    "id": "animal-220",
    "name": "Animal #220"
   },
   {
    "id": "animal-221",
    "name": "Animal #221"
   },
   {
    "id": "animal-222",
    "name": "Animal #222"
   },
   {
    "id": "animal-223",
    "name": "Animal #223"
   },
   {
    "id": "animal-224",
    "name": "Animal #224"
   },
   {
    "id": "animal-225",
    "name": "Animal #225"
   },
   {
    "id": "animal-226",
    "name": "Animal #226"
   },
   {
    "id": "animal-227",
    "name": "Animal #227"
   },
   {
    "id": "animal-228",
    "name": "Animal #228"
   },
   {
    "id": "animal-229",
    "name": "Animal #229"
   },
   {
    "id": "animal-230",
    "name": "Animal #230"
   },
   {
    "id": "animal-231",
    "name": "Animal #231"
   },
   {
    "id": "animal-232",
    "name": "Animal #232"
   },
   {
    "id": "animal-233",
    "name": "Animal #233"
   },
   {
    "id": "animal-234",
    "name": "Animal #234"
   },
   {
    "id": "animal-235",
    "name": "Animal #235"
   },
   {
    "id": "animal-236",
    "name": "Animal #236"
   },
   {
    "id": "animal-237",
    "name": "Animal #237"
   },
   {
    "id": "animal-238",
    "name": "Animal #238"
   },
   {
    "id": "animal-239",
    "name": "Animal #239"
   },
   {
    "id": "animal-240",
    "name": "Animal #240"
   },
   {
    "id": "animal-241",
    "name": "Animal #241"
   },
   {
    "id": "animal-242",
    "name": "Animal #242"
   },
   {
    "id": "animal-243",
    "name": "Animal #243"
   },
   {
    "id": "animal-244",
    "name": "Animal #244"
   },
   {
    "id": "animal-245",
    "name": "Animal #245"
   },
   {
    "id": "animal-246",
    "name": "Animal #246"
   },
   {
    "id": "animal-247",
    "name": "Animal #247"
   },
   {
    "id": "animal-248",
    "name": "Animal #248"
   },
   {
    "id": "animal-249",
    "name": "Animal #249"
   },
   {
    "id": "animal-250",
    "name": "Animal #250"
   },
   {
    "id": "animal-251",
    "name": "Animal #251"
   },
   {
    "id": "animal-252",
    "name": "Animal #252"
   },
   {
    "id": "animal-253",
    "name": "Animal #253"
   },
   {
    "id": "animal-254",
    "name": "Animal #254"
   },
   {
    "id": "animal-255",
    "name": "Animal #255"
   }
  ]
 },
 {
  "id": "weapons",
  "title": "Weapons",
  "intro": "196 weapons in the game including variants; the 100% checklist counts the 66 standard-issue weapons — hold 50 of them. Weapon names are being added as they're confirmed.",
  "items": [
   {
    "id": "weapon-1",
    "name": "Weapon #1"
   },
   {
    "id": "weapon-2",
    "name": "Weapon #2"
   },
   {
    "id": "weapon-3",
    "name": "Weapon #3"
   },
   {
    "id": "weapon-4",
    "name": "Weapon #4"
   },
   {
    "id": "weapon-5",
    "name": "Weapon #5"
   },
   {
    "id": "weapon-6",
    "name": "Weapon #6"
   },
   {
    "id": "weapon-7",
    "name": "Weapon #7"
   },
   {
    "id": "weapon-8",
    "name": "Weapon #8"
   },
   {
    "id": "weapon-9",
    "name": "Weapon #9"
   },
   {
    "id": "weapon-10",
    "name": "Weapon #10"
   },
   {
    "id": "weapon-11",
    "name": "Weapon #11"
   },
   {
    "id": "weapon-12",
    "name": "Weapon #12"
   },
   {
    "id": "weapon-13",
    "name": "Weapon #13"
   },
   {
    "id": "weapon-14",
    "name": "Weapon #14"
   },
   {
    "id": "weapon-15",
    "name": "Weapon #15"
   },
   {
    "id": "weapon-16",
    "name": "Weapon #16"
   },
   {
    "id": "weapon-17",
    "name": "Weapon #17"
   },
   {
    "id": "weapon-18",
    "name": "Weapon #18"
   },
   {
    "id": "weapon-19",
    "name": "Weapon #19"
   },
   {
    "id": "weapon-20",
    "name": "Weapon #20"
   },
   {
    "id": "weapon-21",
    "name": "Weapon #21"
   },
   {
    "id": "weapon-22",
    "name": "Weapon #22"
   },
   {
    "id": "weapon-23",
    "name": "Weapon #23"
   },
   {
    "id": "weapon-24",
    "name": "Weapon #24"
   },
   {
    "id": "weapon-25",
    "name": "Weapon #25"
   },
   {
    "id": "weapon-26",
    "name": "Weapon #26"
   },
   {
    "id": "weapon-27",
    "name": "Weapon #27"
   },
   {
    "id": "weapon-28",
    "name": "Weapon #28"
   },
   {
    "id": "weapon-29",
    "name": "Weapon #29"
   },
   {
    "id": "weapon-30",
    "name": "Weapon #30"
   },
   {
    "id": "weapon-31",
    "name": "Weapon #31"
   },
   {
    "id": "weapon-32",
    "name": "Weapon #32"
   },
   {
    "id": "weapon-33",
    "name": "Weapon #33"
   },
   {
    "id": "weapon-34",
    "name": "Weapon #34"
   },
   {
    "id": "weapon-35",
    "name": "Weapon #35"
   },
   {
    "id": "weapon-36",
    "name": "Weapon #36"
   },
   {
    "id": "weapon-37",
    "name": "Weapon #37"
   },
   {
    "id": "weapon-38",
    "name": "Weapon #38"
   },
   {
    "id": "weapon-39",
    "name": "Weapon #39"
   },
   {
    "id": "weapon-40",
    "name": "Weapon #40"
   },
   {
    "id": "weapon-41",
    "name": "Weapon #41"
   },
   {
    "id": "weapon-42",
    "name": "Weapon #42"
   },
   {
    "id": "weapon-43",
    "name": "Weapon #43"
   },
   {
    "id": "weapon-44",
    "name": "Weapon #44"
   },
   {
    "id": "weapon-45",
    "name": "Weapon #45"
   },
   {
    "id": "weapon-46",
    "name": "Weapon #46"
   },
   {
    "id": "weapon-47",
    "name": "Weapon #47"
   },
   {
    "id": "weapon-48",
    "name": "Weapon #48"
   },
   {
    "id": "weapon-49",
    "name": "Weapon #49"
   },
   {
    "id": "weapon-50",
    "name": "Weapon #50"
   },
   {
    "id": "weapon-51",
    "name": "Weapon #51"
   },
   {
    "id": "weapon-52",
    "name": "Weapon #52"
   },
   {
    "id": "weapon-53",
    "name": "Weapon #53"
   },
   {
    "id": "weapon-54",
    "name": "Weapon #54"
   },
   {
    "id": "weapon-55",
    "name": "Weapon #55"
   },
   {
    "id": "weapon-56",
    "name": "Weapon #56"
   },
   {
    "id": "weapon-57",
    "name": "Weapon #57"
   },
   {
    "id": "weapon-58",
    "name": "Weapon #58"
   },
   {
    "id": "weapon-59",
    "name": "Weapon #59"
   },
   {
    "id": "weapon-60",
    "name": "Weapon #60"
   },
   {
    "id": "weapon-61",
    "name": "Weapon #61"
   },
   {
    "id": "weapon-62",
    "name": "Weapon #62"
   },
   {
    "id": "weapon-63",
    "name": "Weapon #63"
   },
   {
    "id": "weapon-64",
    "name": "Weapon #64"
   },
   {
    "id": "weapon-65",
    "name": "Weapon #65"
   },
   {
    "id": "weapon-66",
    "name": "Weapon #66"
   }
  ]
 }
];
