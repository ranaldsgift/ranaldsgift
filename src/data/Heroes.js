export const heroesData = [
	{
		"id": 1,
		"name": "Mercenary",
		"codeName": "es_mercenary",
		"heroName": "Mercenary",
		"health": 125,
		"passive": {
			"name": "Paced Strikes",
			"description": "Hitting 3 enemies in one swing grants 10% increased attack speed for 6 seconds."
		},
		"skill": {
			"name": "Morale Boost",
			"description": "Markus grants nearby allies 25 temporary health, and staggers nearby enemies.",
			"cooldown": "90"
		},
		"perks": [
			{
				"name": "Hitting the Sweet Spot",
				"description": "Attacks cleave through more enemies."
			},
			{
				"name": "No More Laughin' Now!",
				"description": "Increased crit chance by 5%."
			}
		],
		"talents": [
			{
				"name": "Drillmaster",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Mercenary's Pride",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Captain's Command",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "The More the Merrier!",
				"description": "Increases Power by 5.0% for every nearby enemy and stacks up to 5 times."
			},
			{
				"name": "Limb-Splitter",
				"description": "Increases cleave power by 50.0%."
			},
			{
				"name": "Helborg's Tutelage",
				"description": "Every 5 hits grant a guaranteed critical strike. Critical strikes can no longer occur randomly."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Reikland Reaper",
				"description": "Increases Power by 15.0% when Paced Strikes is active."
			},
			{
				"name": "Enhanced Training",
				"description": "Paced Strikes increases attack speed by 20.0%. Now requires hitting 4 targets with a single attack to trigger."
			},
			{
				"name": "Strike Together",
				"description": "Paced Strikes spreads to nearby allies."
			},
			{
				"name": "Stand Clear",
				"description": "Increases dodge range by 20.0%."
			},
			{
				"name": "Blade Barrier",
				"description": "Reduces damage taken by 25.0% when Paced Strikes is active."
			},
			{
				"name": "Black Market Supplies",
				"description": "Increases max ammunition by 30.0%."
			},
			{
				"name": "Walk it Off",
				"description": "Morale Boost also reduces damage taken by affected allies by 25.0% for 10 seconds."
			},
			{
				"name": "Ready for Action",
				"description": "Reduces cooldown of Morale Boost by 20.0%."
			},
			{
				"name": "On Yer Feet, Mates!",
				"description": "Morale Boost also revives knocked down allies."
			}
		]
	},
	{
		"id": 2,
		"name": "Huntsman",
		"codeName": "es_huntsman",
		"heroName": "Huntsman",
		"health": 100,
		"passive": {
			"name": "Waste Not, Want Not",
			"description": "Ranged headshots recover 1 ammunition."
		},
		"skill": {
			"name": "Hunter's Prowl",
			"description": "Markus disappears from sight for 6 seconds. When he attacks or fires a ranged weapon he gains boosted ranged attack damage and shooting his ranged weapon does not consume ammunition.",
			"cooldown": "90"
		},
		"perks": [
			{
				"name": "Poacher's Mark",
				"description": "Double effective range for ranged weapons."
			},
			{
				"name": "Call Out Weakness",
				"description": "Aura that increases critical strike chance by 5%."
			},
			{
				"name": "Deep Pockets",
				"description": "Increases ammunition capacity by 50%."
			}
		],
		"talents": [
			{
				"name": "Taste of Victory",
				"description": "Staggering enemies with a melee attack grants temporary health. Health gained based on stagger strength."
			},
			{
				"name": "Huntsman's Tally",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Taal's Bounty",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Keep it Coming",
				"description": "Every third ranged hit causes the next shot to consume no ammo."
			},
			{
				"name": "Make 'Em Bleed",
				"description": "Critical hits cause enemies to take 20.0% increased damage for a short duration. Does not stack with similar effects."
			},
			{
				"name": "One in the Eye",
				"description": "Increased headshot bonus damage by 50.0%."
			},
			{
				"name": "Bulwark",
				"description": "Enemies that you stagger take 10% more damage from melee attacks for 2 seconds.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Thrill of the Hunt",
				"description": "Ranged headshots Increase reload speed by 20.0% for 5 seconds."
			},
			{
				"name": "Makin' It Look Easy",
				"description": "After scoring a ranged headshot Markus gains 25% increased critical hit chance."
			},
			{
				"name": "Burst of Enthusiasm",
				"description": "Scoring a ranged headshot or critical strike grants 2 temporary health. Critical headshots double the effect. Effect can trigger once per attack."
			},
			{
				"name": "Shot Crafter",
				"description": "Killing a special restores 10.0% ammunition."
			},
			{
				"name": "Thick Hide",
				"description": "Killing a Special or Elite enemy reduces damage taken by 10.0%. Stacks 4 times. Taking a hit removes one stack."
			},
			{
				"name": "Longshanks",
				"description": "Increases movement speed by 10.0%."
			},
			{
				"name": "Blend In",
				"description": "Reduces the cooldown of Prowl by 30.0%."
			},
			{
				"name": "Concealed Strikes",
				"description": "Attacking while under the effect of Prowl does not break stealth."
			},
			{
				"name": "Head Down and Hidden",
				"description": "Increases the duration of Prowl to 10 seconds."
			}
		]
	},
	{
		"id": 3,
		"name": "Foot Knight",
		"codeName": "es_knight",
		"heroName": "Foot Knight",
		"health": 150,
		"passive": {
			"name": "Protective Presence",
			"description": "Aura that reduces damage taken by 15%."
		},
		"skill": {
			"name": "Valiant Charge",
			"description": "Markus charges forward, slamming into enemies and knocking them back.",
			"cooldown": "30"
		},
		"perks": [
			{
				"name": "Taal's Fortitude",
				"description": "Grants an extra Stamina shield."
			},
			{
				"name": "No Guts, No Glory",
				"description": "Reduces damage taken by 10%."
			}
		],
		"talents": [
			{
				"name": "Back Off, Ugly!",
				"description": "Staggering enemies with a melee attack grants temporary health. Health gained based on stagger strength."
			},
			{
				"name": "Bloody Unstoppable!",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Templar's Rally",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Staggering Force",
				"description": "Increases stagger power by 35.0%."
			},
			{
				"name": "Have at Thee!",
				"description": "Staggering an elite enemy increases power by 15.0% for 10 seconds."
			},
			{
				"name": "Crowd Clearer",
				"description": "Pushing an enemy increases attack speed by 15.0% for 3 seconds."
			},
			{
				"name": "Bulwark",
				"description": "Enemies that you stagger take 10% more damage from melee attacks for 2 seconds.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Rock of the Reikland",
				"description": "Protective Presence's size is doubled and also grants 20.0% block cost reduction."
			},
			{
				"name": "That's Bloody Teamwork!",
				"description": "Increases damage reduction from Protective Presence by 5.0% for each nearby ally."
			},
			{
				"name": "Comrades in Arms",
				"description": "Kruber gains 10.0% increased power. The closest ally to Kruber gains 50.0% damage reduction and 10.0% increased power. Passive aura from Protective Presence no longer affects allies."
			},
			{
				"name": "It's Hero Time",
				"description": "Resets the cooldown on Valiant Charge when an ally is incapacitated."
			},
			{
				"name": "Counter-Punch",
				"description": "Blocking an attack removes the stamina cost of pushing for 1 seconds."
			},
			{
				"name": "Inspiring Blow",
				"description": "Staggering an Elite enemy accelerates the cooldown of nearby allies by 100.0% for 0.5 seconds."
			},
			{
				"name": "Numb to Pain",
				"description": "Valiant Charge grants invulnerability for 3 seconds."
			},
			{
				"name": "Battering Ram",
				"description": "Doubles the width of Valiant Charge and allows Kruber to charge through great foes."
			},
			{
				"name": "Bull of Ostland!",
				"description": "Each enemy hit with Valiant Charge grants 3.0% attack speed for 10 seconds. Stacks up to 10 times."
			}
		]
	},
	{
		"id": 16,
		"name": "Grail Knight",
		"codeName": "es_questingknight",
		"heroName": "Grail Knight",
		"health": 150,
		"passive": {
			"name": "The Lady's Duty",
			"description": "Upon entering a mission the Lady of the Lake grants 2 random Duties for the Grail Knight and his party to complete. Upon completion of a Duty the party is granted a Benison for the rest of the mission."
		},
		"skill": {
			"name": "Blessed Blade",
			"description": "Markus equips a blessed blade and slashes down with great force, smiting any evil creature caught in its wake and dealing heavy damage.",
			"cooldown": "40"
		},
		"perks": [
			{
				"name": "Knight's Challenge",
				"description": "Deals 25% more damage to the first enemy hit."
			},
			{
				"name": "Thirst for Glory",
				"description": "Increases movement speed by 10%."
			},
			{
				"name": "Bastion of Bretonnia",
				"description": "Markus can use shields to block Warpfire Thrower attacks."
			}
		],
		"talents": [
			{
				"name": "Lady's Generosity",
				"description": "Staggering enemies with a melee attack grants temporary health. Health gained based on stagger strength."
			},
			{
				"name": "Lady's Wrath",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Gift of the Grail",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Virtue of the Ideal",
				"description": "Killing enemies increases power level by 10% for 10 seconds. Stacks up to 3 times."
			},
			{
				"name": "Virtue of Knightly Temper",
				"description": "Critical Strikes instantly slay enemies if their current health is less than 4 times the amount of damage of the Critical Strike. Half effect versus Lords and Monsters."
			},
			{
				"name": "Virtue of Heroism",
				"description": "Power Level of heavy attacks increased by 25%."
			},
			{
				"name": "Bulwark",
				"description": "Enemies that you stagger take 10% more damage from melee attacks for 2 seconds.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Virtue of Duty",
				"description": "The Lady's Favour grants an additional Quest."
			},
			{
				"name": "Virtue of Purity",
				"description": "Increases the potency of the blessings rewarded upon completing a Quest by 50%."
			},
			{
				"name": "Virtue of the Penitent",
				"description": "The Lady's Favour now grants a repeatable Quest that rewards a Potion of Strength to Markus upon completion."
			},
			{
				"name": "Virtue of Stoicism",
				"description": "50% of damage taken is regenerated as temporary health after 5 seconds."
			},
			{
				"name": "Virtue of Discipline",
				"description": "Timed blocks increase power level by 20% for 6 seconds."
			},
			{
				"name": "Virtue of the Joust",
				"description": "Increases push arc and stamina regeneration by 30%."
			},
			{
				"name": "Virtue of Audacity",
				"description": "Adds a second stab attack to Blessed Blade, dealing devastating single target damage."
			},
			{
				"name": "Virtue of the Impetuous Knight",
				"description": "Killing an enemy with Blessed Blade increases movement speed by 35% for 15 seconds."
			},
			{
				"name": "Virtue of Confidence",
				"description": "Changes Blessed Blade to a horizontal slash that cleaves through and staggers multiple enemies."
			}
		]
	},
	{
		"id": 4,
		"name": "Ranger Veteran",
		"codeName": "dr_ranger",
		"heroName": "Ranger Veteran",
		"health": 100,
		"passive": {
			"name": "Survivalist",
			"description": "Specials drop ammunition pickups on death that restore 10% of maximum ammo when picked up."
		},
		"skill": {
			"name": "Disengage",
			"description": "Bardin deploys a smoke bomb for 10 seconds that conceals him from enemies whilst he stays inside the cloud. Also gains increased ranged attack power while concealed.",
			"cooldown": "120"
		},
		"perks": [
			{
				"name": "Loaded for Battle",
				"description": "Increases ammo capacity by 50%."
			},
			{
				"name": "Fast Hands",
				"description": "Increases reload speed by 15%."
			},
			{
				"name": "Ingenious Improvisation",
				"description": "Using any Healing Supplies, Potions or Grenades has a 10% chance to not consume the item."
			}
		],
		"talents": [
			{
				"name": "Roots Running Deep",
				"description": "Staggering enemies with a melee attack grants temporary health. Health gained based on stagger strength."
			},
			{
				"name": "Ranger Reaper",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Hardy Heart",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Last Resort",
				"description": "Bardin gains a 25.0% Power increase when out of ammunition."
			},
			{
				"name": "Master of Improvisation",
				"description": "Reloading a weapon reduces the cooldown of Disengage by 2 seconds."
			},
			{
				"name": "Foe-Feller",
				"description": "Increases attack speed by 5.0%."
			},
			{
				"name": "Bulwark",
				"description": "Enemies that you stagger take 10% more damage from melee attacks for 2 seconds.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Drunken Brawler",
				"description": "Killing a Special grants 50% chance to drop a bottle of ale. Ale grants 3.0% attack speed and reduces damage taken by 4.0% for 5 minutes when consumed. Can stack 3 times."
			},
			{
				"name": "Grungni's Cunning",
				"description": "Increases ammunition restored by Survivalist caches to 30.0%."
			},
			{
				"name": "Scavenger",
				"description": "Killing a special has a 20% chance to drop a potion or bomb instead of a Survivalist cache."
			},
			{
				"name": "No Dawdling!",
				"description": "Increases movement speed by 10.0%."
			},
			{
				"name": "Exuberance",
				"description": "Bardin takes 30.0% less damage from behind. Whenever he scores a headshots, this bonus applies to all damage taken for 7 seconds."
			},
			{
				"name": "Firing Fury",
				"description": "Hitting 2 enemies with one ranged attack increases speed of Bardin's next reload by 35.0%."
			},
			{
				"name": "Exhilarating Vapours",
				"description": "Allies within Bardin's smoke gain 8.0% attack speed. They also gain 3 temporary health per second."
			},
			{
				"name": "Surprise Guest",
				"description": "Disengage's stealth does not break on moving beyond the smoke cloud."
			},
			{
				"name": "Ranger's Parting Gift",
				"description": "Activating Disengage causes the next bomb Bardin throws within the duration of the ability to not be consumed."
			}
		]
	},
	{
		"id": 5,
		"name": "Ironbreaker",
		"codeName": "dr_ironbreaker",
		"heroName": "Ironbreaker",
		"health": 150,
		"passive": {
			"name": "Gromril Armour",
			"description": "Completely absorbs one hit every 20 seconds."
		},
		"skill": {
			"name": "Impenetrable",
			"description": "Bardin taunts all nearby man-sized enemies, gains increased defence and can block any attack for the next 10 seconds.",
			"cooldown": "120"
		},
		"perks": [
			{
				"name": "Dwarf-Forged",
				"description": "Reduces damage taken by 30%."
			},
			{
				"name": "Doughty",
				"description": "Grants an extra Stamina shield."
			},
			{
				"name": "Resilient",
				"description": "Decreases stun duration after getting hit by an attack by 50%."
			}
		],
		"talents": [
			{
				"name": "Rock-Breaker",
				"description": "Staggering enemies with a melee attack grants temporary health. Health gained based on stagger strength."
			},
			{
				"name": "Grudge-Borne",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Hearthguard",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Under Pressure",
				"description": "Drake Fire damage increases from -80.0% to 120.0% and ranged attack speed reduces from 100.0% to -50.0% depending on overcharge. Removes overcharge slowdown."
			},
			{
				"name": "Blood of Grimnir",
				"description": "Each nearby ally increases power by 5.0%."
			},
			{
				"name": "Rune-Etched Shield",
				"description": "Blocking an attack increases Bardin's power (and that of nearby allies) by 2.0% for 10 seconds. Stacks 5 times."
			},
			{
				"name": "Bulwark",
				"description": "Enemies that you stagger take 10% more damage from melee attacks for 2 seconds.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Vengeance",
				"description": "Periodically generate stacks (up to 5 max) of Rising Anger every 7 seconds while Gromril is active. When Gromril is lost, gain 8.0% attack speed per stack of Rising Anger for 10 seconds."
			},
			{
				"name": "Gromril Curse",
				"description": "When Gromril Armour is removed all nearby enemies are knocked back."
			},
			{
				"name": "Tunnel Fighter",
				"description": "Reduces the cooldown of Gromril Armour to 10 seconds."
			},
			{
				"name": "Dawi Defiance",
				"description": "When Bardin's guard is broken there is a 50.0% chance to instantly restore all stamina."
			},
			{
				"name": "The Rolling Mountain",
				"description": "Killing enemies with melee attacks while on full stamina reduces the cooldown of Impenetrable by 2.0%."
			},
			{
				"name": "Miner's Rhythm",
				"description": "After landing a charged attack Bardin recovers stamina 40.0% faster for 2 seconds."
			},
			{
				"name": "Drengbarazi Oath",
				"description": "Impenetrable increases power of nearby allies by 20.0% for 10 seconds."
			},
			{
				"name": "Oi! Wazzok!",
				"description": "Impenetrable taunt now forces monsters to attack Bardin."
			},
			{
				"name": "Booming Taunt",
				"description": "Increases the radius of Impenetrable's taunt by 15.0%. Increases the duration of Impenetrable to 15 seconds."
			}
		]
	},
	{
		"id": 6,
		"name": "Slayer",
		"codeName": "dr_slayer",
		"heroName": "Slayer",
		"health": 125,
		"passive": {
			"name": "Trophy Hunter",
			"description": "Hitting an enemy grants a stacking damage buff. Increases damage by 10%, stacking 3 times. Buff lasts 2 seconds."
		},
		"skill": {
			"name": "Leap",
			"description": "Bardin leaps forward to stun a target, and gains 30% increased attack speed for 10 seconds.",
			"cooldown": "40"
		},
		"perks": [
			{
				"name": "Path of Carnage",
				"description": "Increases attack speed by 7.5%."
			},
			{
				"name": "Drengi Grit",
				"description": "Charged attacks can't be interrupted by damage."
			}
		],
		"talents": [
			{
				"name": "Doomseeker",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Slayer's Fury",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Infectious Fortitude",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "A Thousand Cuts",
				"description": "Wielding one-handed weapons in both slots increases attack speed by 10.0%. Dual weapons count as one-handed."
			},
			{
				"name": "Skull-Splitter",
				"description": "Wielding two-handed weapons in both slots increases power by 15.0%."
			},
			{
				"name": "Hack and Slash",
				"description": "Increases critical hit chance by 5%."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Impatience",
				"description": "Each stack of Trophy Hunter increases movement speed by 10.0%."
			},
			{
				"name": "High Tally",
				"description": "Increases maximum stacks of Trophy Hunter by 1."
			},
			{
				"name": "Adrenaline Surge",
				"description": "On max stacks, Trophy Hunter grants cooldown reduction for Leap."
			},
			{
				"name": "Oblivious to Pain",
				"description": "Damage taken from Elite enemies or Monsters is reduced to 10 damage or half of its original value whichever is highest."
			},
			{
				"name": "Grimnir's Focus",
				"description": "Hitting an enemy with a charged attack reduces damage taken by 40% for 5 seconds."
			},
			{
				"name": "Barge",
				"description": "Effective dodges pushes nearby small enemies out of the way."
			},
			{
				"name": "Crunch!",
				"description": "Increases stagger effect when landing on enemies using Leap by 100.0%."
			},
			{
				"name": "Dawi-Drop",
				"description": "Increases attack damage while airborne during Leap by 150.0%."
			},
			{
				"name": "No Escape",
				"description": "Leap's attack speed buff also increases movement speed by 25.0% for the duration."
			}
		]
	},
	{
		"id": 17,
		"name": "Outcast Engineer",
		"codeName": "dr_engineer",
		"heroName": "Outcast Engineer",
		"health": 100,
		"passive": {
			"name": "Build Pressure",
			"description": "Holding reload with the Steam-Assisted Crank Gun (Mk II) equipped builds Pressure. Each stack of Pressure lasts for 12 seconds and gradually restores the Ability Bar. Stacks up to 5 times."
		},
		"skill": {
			"name": "Steam-Assisted Crank Gun (Mk II)",
			"description": "Unleash the fearsome firepower of Bardin's custom creation. Shots reduce the Ability Bar. Any accumulated Pressure is lost upon firing.",
			"cooldown": "60"
		},
		"perks": [
			{
				"name": "Gunsmith",
				"description": "Increases max Ammo by 50%."
			},
			{
				"name": "Spotter",
				"description": "Increases Ranged Power of nearby allies by 10%."
			},
			{
				"name": "Utility Belt",
				"description": "Bardin can carry up to 3 Bombs (of any type) at one time. Pressing the Bomb keybind cycles between them."
			}
		],
		"talents": [
			{
				"name": "Engineer's Resolve",
				"description": "Staggering enemies with a melee attack grants temporary health. Health gained based on stagger strength."
			},
			{
				"name": "Morgrim's Enthusiasm",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Pouch of the Good Stuff",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Leading Shots",
				"description": "Every 4 Ranged Attack is a guaranteed Critical Hit."
			},
			{
				"name": "Armour Piercing Slugs",
				"description": "Non-Explosive Ranged Attacks pierce 1 additional enemies."
			},
			{
				"name": "Combined Arms",
				"description": "Melee Power is increased by 10%. Each 5 Melee kill makes Bardin's next Ranged Attack grant 15% Ranged Power for 10 seconds."
			},
			{
				"name": "Bulwark",
				"description": "Enemies that you stagger take 10% more damage from melee attacks for 2 seconds.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Full Head of Steam",
				"description": "Upon reaching 5 stacks of Pressure, Bardin gains 15.0% Power for 10 seconds."
			},
			{
				"name": "Experimental Steam Capacitors",
				"description": "Pressure stacks are no longer removed upon reaching full charge or firing the Steam-Assisted Crank Gun (Mk II)."
			},
			{
				"name": "Superior Gaskets",
				"description": "Pressure is not lost over time. Each stack of Pressure grants 2.5% Attack Speed. Max stacks reduced by 1."
			},
			{
				"name": "Ablative Armour",
				"description": "Every 5 seconds Bardin gains a stack of Damage Reduction. Stacks up to 5 times. Each stack reduces damage taken by 5%. Taking damage removes a stack."
			},
			{
				"name": "Bombardier",
				"description": "Bardin's Bombs gain the effect of both regular Bombs and Incendiary Bombs."
			},
			{
				"name": "Piston Power",
				"description": "Every 15 seconds Bardin gains a buff that grants immense Stagger to his next charged attack."
			},
			{
				"name": "Gromril-Plated Shot",
				"description": "Reduces the Steam-Assisted Crank Gun (Mk II)'s rate of fire, but increases Damage and Armour Penetration."
			},
			{
				"name": "Linked Compression Chamber",
				"description": "The Steam-Assisted Crank Gun (Mk II) starts firing at full speed, rather than taking time to ramp up."
			},
			{
				"name": "Innovative Ammo Hoppers",
				"description": "Increases Bardin's Ability Bar by 50%. Killing a Special makes the Steam-Assisted Crank Gun (Mk II) not consume the Ability Bar for the next 4 seconds."
			}
		]
	},
	{
		"id": 7,
		"name": "Waystalker",
		"codeName": "we_waywatcher",
		"heroName": "Waystalker",
		"health": 100,
		"passive": {
			"name": "Amaranthe",
			"description": "Kerillian regenerates 3 health every 10 seconds when below half health."
		},
		"skill": {
			"name": "Trueshot Volley",
			"description": "Kerillian shoots a volley of arrows that seek out enemies in her path.",
			"cooldown": "80"
		},
		"perks": [
			{
				"name": "Arrow-storm",
				"description": "Increases ammo capacity by 100%."
			},
			{
				"name": "Waywatcher's Bow",
				"description": "Double effective range for ranged weapons."
			},
			{
				"name": "Asrai Vigil",
				"description": "Ranged weapon zoom. Bound to weapon special by default."
			}
		],
		"talents": [
			{
				"name": "Weavebond",
				"description": "Melee critical strikes and headshots restore 2 temporary health. Critical headshots restores twice as much."
			},
			{
				"name": "Dryad's Thirst",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Ariel's Boon",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Blood Shot",
				"description": "After killing an enemy with a melee attack Kerillian fires an additional arrow with her next ranged attack made within 10 seconds."
			},
			{
				"name": "Serrated Shots",
				"description": "Regular arrows cause enemies to bleed for extra damage."
			},
			{
				"name": "Drakira's Alacrity",
				"description": "Ranged headshots increases attack speed by 15.0% for 5 seconds."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Assassin",
				"description": "Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Headshots and critical hits instead inflict 40% bonus damage, as do strikes against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Isha's Embrace",
				"description": "Increases Kerillian's health regenerated from Amaranthe by 50.0%."
			},
			{
				"name": "Spirit Arrows",
				"description": "Amaranthe reduces the cooldown of Trueflight Volley by 5.0% every tick. No longer restores health."
			},
			{
				"name": "Rejuvenating Locus",
				"description": "Amaranthe also affects the other members of the party."
			},
			{
				"name": "Fervent Huntress",
				"description": "Killing a special or elite enemy increases movement speed by 15.0% for 10 seconds."
			},
			{
				"name": "Ricochet",
				"description": "Kerillian's arrows now ricochet, each bouncing up to 3 times or until it hits an enemy."
			},
			{
				"name": "Asrai Focus",
				"description": "Reduces the cooldown of Trueshot Volley by 20.0%."
			},
			{
				"name": "Piercing Shot",
				"description": "Trueshot Volley fires one piercing shot dealing heavy damage. Headshot refunds 100.0% cooldown."
			},
			{
				"name": "Loaded Bow",
				"description": "Trueflight Volley fires an additional arrow."
			},
			{
				"name": "Kurnous' Reward",
				"description": "Killing a special or elite enemy with Trueflight Volley restores 30.0% ammunition."
			}
		]
	},
	{
		"id": 8,
		"name": "Handmaiden",
		"codeName": "we_maidenguard",
		"heroName": "Handmaiden",
		"health": 125,
		"passive": {
			"name": "The Dance of Seasons",
			"description": "Increased dodge distance by 15%."
		},
		"skill": {
			"name": "Dash",
			"description": "Kerillian swiftly dashes forward, moving through enemies.",
			"cooldown": "20"
		},
		"perks": [
			{
				"name": "Renewal",
				"description": "Aura that increases stamina regeneration speed by 100%."
			},
			{
				"name": "Ariel's Benison",
				"description": "Increase Kerillian's revive speed by 50%. When Kerillian revives allies, she heals them for 20 health."
			}
		],
		"talents": [
			{
				"name": "Spirit Echo",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Martial Blessing",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Eternal Blossom",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Focused Spirit",
				"description": "After not taking damage for 10 seconds, increases Kerillian's power by 15.0%. Reset upon taking damage."
			},
			{
				"name": "Oak Stance",
				"description": "Increases critical strike chance by 5.0%."
			},
			{
				"name": "Asrai Alacrity",
				"description": "Blocking an attack or pushing grants Kerillian's next two strikes 30.0% attack speed and 10.0% power."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Willow Stance",
				"description": "Dodging grants 5.0% attack speed for 6 seconds. Stacks up to 3 times."
			},
			{
				"name": "Dance of Blades",
				"description": "Dodging while blocking increases dodge range by 20%. Dodging while not blocking increase the power of Kerillian's next strike by 10%."
			},
			{
				"name": "Wraith-Walk",
				"description": "Kerillian's dodges can now pass through enemies."
			},
			{
				"name": "Heart of Oak",
				"description": "Increases max health by 15.0%."
			},
			{
				"name": "Birch Stance",
				"description": "Reduces block cost by 30.0%."
			},
			{
				"name": "Quiver of Plenty",
				"description": "Increases ammunition amount by 40.0%."
			},
			{
				"name": "Gift of Ladrielle",
				"description": "Kerillian disappears from enemy perception for 2 seconds after using Dash."
			},
			{
				"name": "Bladedancer",
				"description": "Dashing through an enemy causes them to bleed for significant damage over time."
			},
			{
				"name": "Power from Pain",
				"description": "Each enemy hit with Dash grants 5.0% critical strike chance for 15 seconds. Stacks up to 5 times."
			}
		]
	},
	{
		"id": 9,
		"name": "Shade",
		"codeName": "we_shade",
		"heroName": "Shade",
		"health": 100,
		"passive": {
			"name": "Murderous Prowess",
			"description": "Critical hit backstabs instantly slay man-sized enemies."
		},
		"skill": {
			"name": "Infiltrate",
			"description": "Kerillian becomes undetectable and can pass through enemies. Lasts for 5 seconds, or until she attacks.",
			"cooldown": "60"
		},
		"perks": [
			{
				"name": "Assassin's Blade",
				"description": "50% additional damage when attacking enemies with melee attacks from behind."
			}
		],
		"talents": [
			{
				"name": "Bleak Vigour",
				"description": "Melee critical strikes and headshots restore 2 temporary health. Critical headshots restores twice as much."
			},
			{
				"name": "Khaine's Thirst",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Blood Kin",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Cruelty",
				"description": "Increases critical strike damage bonus by 50.0%."
			},
			{
				"name": "Exploit Weakness",
				"description": "Increases damage by 20.0% to poisoned or bleeding enemies."
			},
			{
				"name": "Exquisite Huntress",
				"description": "Headshots increases headshot damage bonus by 10.0% for 5 seconds. Stacks up to 10 times."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Assassin",
				"description": "Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Headshots and critical hits instead inflict 40% bonus damage, as do strikes against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Ereth Khial's Herald",
				"description": "Assassin’s Blade is increased to 75% additional damage when attacking enemies from behind."
			},
			{
				"name": "Vanish",
				"description": "Killing an enemy with a backstab grants stealth for 3 seconds."
			},
			{
				"name": "Bloodfletcher",
				"description": "Backstabs return 1 bolt or arrow. Can trigger once every 2 seconds."
			},
			{
				"name": "Blood Drinker",
				"description": "Critical hits reduces damage taken by 20.0% for 5 seconds."
			},
			{
				"name": "Spring-Heeled Assassin",
				"description": "Critical hits increases movement speed by 20.0% for 5 seconds."
			},
			{
				"name": "Gladerunner",
				"description": "Increases movement speed by 10.0%."
			},
			{
				"name": "Cloak of Mist",
				"description": "Infiltrate cooldown is reduced by 45.0%. After leaving stealth, Kerillian gains 100% melee critical strike chance for 4 seconds, but no longer gains a damage bonus on attacking."
			},
			{
				"name": "Shadowstep",
				"description": "Infiltrate causes Kerillian to blink forward, passing through enemies."
			},
			{
				"name": "Cloak of Pain",
				"description": "Hitting an enemy while under the effect of Infiltrate does not break stealth. Second attack does not grant damage bonus. Can only trigger once."
			}
		]
	},
	{
		"id": 18,
		"name": "Sister of the Thorn",
		"codeName": "we_thornsister",
		"heroName": "Sister of the Thorn",
		"health": 125,
		"passive": {
			"name": "A Cluster of Radiants",
			"description": "Kerillian is granted Radiance (a free use of her career skill) every 60 seconds."
		},
		"skill": {
			"name": "Thornwake",
			"description": "Kerillian conjures a Thorn Wall that hinders enemy movement. The Thorn Wall lasts for 6 seconds.",
			"cooldown": "40"
		},
		"perks": [
			{
				"name": "A Murder of Spites",
				"description": "Kerillian deals up to 50% more damage to wounded targets depending on their remaining health."
			},
			{
				"name": "A Sustenance of Leechlings",
				"description": "Whenever another party member receives temporary health while at full health, Kerillian gains temporary health instead."
			},
			{
				"name": "An Attendance of Munificents",
				"description": "All healing received by the party is increased by 25%."
			}
		],
		"talents": [
			{
				"name": "Weavebond",
				"description": "Melee critical strikes and headshots restore 2 temporary health. Critical headshots restores twice as much."
			},
			{
				"name": "Martial Blessing",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Eternal Blossom",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Surge of Malice",
				"description": "While above 90% health Kerilian gains 15% Attack Speed."
			},
			{
				"name": "Atharti's Delight",
				"description": "Critical Strikes make the target Bleed."
			},
			{
				"name": "Isha's Bounty",
				"description": "Gaining health grants 5% Power for 8 seconds. Stacks up to 3 times."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Incandescence",
				"description": "Radiance can stack 2 times."
			},
			{
				"name": "Hekarti's Cruel Bargain",
				"description": "For each Elite enemy slain near Kerillian, the cooldown of Radiance decreases by 1 seconds."
			},
			{
				"name": "Radiant Inheritance",
				"description": "Consuming Radiance grants Kerillian vastly increased combat potency for 15 seconds."
			},
			{
				"name": "The Pale Queen's Choosing",
				"description": "Every 8 seconds, Kerillian's next Ranged Attack consumes no resource and restores 3 permanent health."
			},
			{
				"name": "Morai-Heg's Doomsight",
				"description": "Gain 3 guaranteed Critical Strikes each time a career skill is used."
			},
			{
				"name": "Repel",
				"description": "Pushing at full Stamina increases the strength and range of the push by 100%."
			},
			{
				"name": "Ironbark Thicket",
				"description": "Increases the Duration of the Thorn Wall to 10 seconds."
			},
			{
				"name": "Bloodrazor Thicket",
				"description": "Increases the Thorn Wall's eruption damage and makes it apply Bleed, but lower both size and duration."
			},
			{
				"name": "Blackvenom Thicket",
				"description": "When the Thorn Wall expires, poisonous thorns explode outward, causing nearby enemies to take 20% increased damage for 10 seconds."
			}
		]
	},
	{
		"id": 10,
		"name": "Witch Hunter Captain",
		"codeName": "wh_captain",
		"heroName": "Witch Hunter Captain",
		"health": 125,
		"passive": {
			"name": "Witch-Hunt",
			"description": "Tagged enemies take an additional 20% damage. Does not stack with similar effects."
		},
		"skill": {
			"name": "Animosity",
			"description": "Victor pushes back nearby enemies, and boosts nearby allies' critical hit chance by 25% for 6 seconds.",
			"cooldown": "90"
		},
		"perks": [
			{
				"name": "Eternal Guard",
				"description": "No light attack block cost from frontal attacks."
			},
			{
				"name": "Killing Shot",
				"description": "Critical hit headshots instantly slay man-sized enemies."
			}
		],
		"talents": [
			{
				"name": "Hunter's Ardour",
				"description": "Melee critical strikes and headshots restore 2 temporary health. Critical headshots restores twice as much."
			},
			{
				"name": "Walking Judgement",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Disciplinarian",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Riposte",
				"description": "Blocking just as an enemy attack is about to hit causes your next melee attack within 2 seconds to be a guaranteed critical hit."
			},
			{
				"name": "Deathknell",
				"description": "Increases headshot damage bonus by 50.0%."
			},
			{
				"name": "Flense",
				"description": "Enemies hit by melee attacks bleed for extra damage."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Assassin",
				"description": "Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Headshots and critical hits instead inflict 40% bonus damage, as do strikes against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Templar's Knowledge ",
				"description": "Witch Hunt causes enemies to take an additional 5.0% damage."
			},
			{
				"name": "Heretic Sighted",
				"description": "Tagging an enemy increases attack speed by 10.0% for 15 seconds."
			},
			{
				"name": "Wild Fervour",
				"description": "Witch-Hunt grants 5.0% increased critical hit chance to the entire party for 5 seconds when taggable enemies die."
			},
			{
				"name": "Charmed Life",
				"description": "Increases dodge range by 20.0%."
			},
			{
				"name": "Cast Away",
				"description": "Pushing an enemy increases stamina regeneration by 40.0% for 2 seconds."
			},
			{
				"name": "Always Prepared",
				"description": "Increases max ammunition by 30.0%."
			},
			{
				"name": "I Shall Judge You All!",
				"description": "Applies Witch Hunt to enemies hit by Animosity."
			},
			{
				"name": "Fervency",
				"description": "Animosity grants Victor guaranteed melee critical strikes for the duration."
			},
			{
				"name": "The Unending Hunt",
				"description": "Hitting 10 or more enemies with Animosity refunds 40.0% cooldown."
			}
		]
	},
	{
		"id": 11,
		"name": "Bounty Hunter",
		"codeName": "wh_bountyhunter",
		"heroName": "Bounty Hunter",
		"health": 100,
		"passive": {
			"name": "Blessed Shots",
			"description": "Guaranteed ranged critical hit every 10 seconds."
		},
		"skill": {
			"name": "Locked and Loaded",
			"description": "Victor fires a powerful shot that pierces enemies.",
			"cooldown": "70"
		},
		"perks": [
			{
				"name": "Ammo Pouches",
				"description": "Increases ammo capacity by 50%."
			},
			{
				"name": "Quick Release",
				"description": "Increased reload speed by 15%."
			}
		],
		"talents": [
			{
				"name": "Blood for Money",
				"description": "Melee critical strikes and headshots restore 2 temporary health. Critical headshots restores twice as much."
			},
			{
				"name": "Tithetaker",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Paymaster",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Open Wounds",
				"description": "Critical hits cause enemies to take 20.0% increased damage for a short duration. Does not stack with similar effects."
			},
			{
				"name": "Steel Crescendo",
				"description": "Upon firing his last shot, Victor gains 15.0% attack speed and 15.0% power for 15 seconds."
			},
			{
				"name": "Weight of Fire",
				"description": "Ranged weapon magazine size increases ranged power level by 1.0% for each ammunition available."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Assassin",
				"description": "Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Headshots and critical hits instead inflict 40% bonus damage, as do strikes against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Blessed Combat",
				"description": "Melee strikes make up to the next 6 ranged shots deal 15.0% more damage. Ranged hits makes up to the next 6 melee strikes deal 15.0% more damage. Melee kills reset the cooldown for Blessed Shots."
			},
			{
				"name": "Cruel Fortune",
				"description": "Reduces cooldown on Blessed Shots to 6 seconds."
			},
			{
				"name": "Prize Bounty",
				"description": "Shots affected by Blessed Shots consume no ammunition."
			},
			{
				"name": "Rile the Mob",
				"description": "Ranged critical hits grant Victor and his allies 10.0% movement speed for 10 seconds."
			},
			{
				"name": "Salvaged Ammunition",
				"description": "Killing an Elite while out of ammunition restores 20.0% of max ammunition. Melee kills reload Victor's ranged weapon."
			},
			{
				"name": "Job Well Done",
				"description": "Killing an elite or special enemy grants 1.0% damage reduction buff, stacking up to 30 times. Lasts until end of mission or death."
			},
			{
				"name": "Just Reward",
				"description": "Ranged critical hits reduces the cooldown of Locked and Loaded by 20%. Can only trigger once every 10 seconds."
			},
			{
				"name": "Double-shotted",
				"description": "Modifies Victor's sidearm to fire two powerful bullets in a straight line. Scoring a headshot with this attack reduces the cooldown of Locked and Loaded by 40%."
			},
			{
				"name": "Indiscriminate Blast",
				"description": "Modifies Victor's pistol to fire two blasts of shield-penetrating shot in a devastating cone. Each kill with the blast increases the amount of pellets in the next blast."
			}
		]
	},
	{
		"id": 12,
		"name": "Zealot",
		"codeName": "wh_zealot",
		"heroName": "Zealot",
		"health": 150,
		"passive": {
			"name": "Fiery Faith",
			"description": "Power increases by 5% for every 25 health missing."
		},
		"skill": {
			"name": "Holy Fervour",
			"description": "Victor charges forward and gains 25% increased attack speed for 5 seconds.",
			"cooldown": "60"
		},
		"perks": [
			{
				"name": "Unswerving Strikes",
				"description": "Heavy attacks can't be interrupted by damaging attacks."
			},
			{
				"name": "Heart of Iron",
				"description": "Resist death on taking lethal damage."
			}
		],
		"talents": [
			{
				"name": "Sigmar's Herald",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Repent! Repent!",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Font of Zeal",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Castigate",
				"description": "Increases attack speed by 10.0% while below 50.0% health. Double effect while below 20.0% health."
			},
			{
				"name": "Smite",
				"description": "Every 5 hits grant a guaranteed critical strike. Critical strikes can no longer occur randomly."
			},
			{
				"name": "Unbending Purpose",
				"description": "Increases power by 5.0%."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Crusade",
				"description": "Each stack of Fiery Faith also increases movement speed by 5.0%."
			},
			{
				"name": "Holy Fortitude",
				"description": "Each stack of Fiery Faith also increases healing received by 15.0%."
			},
			{
				"name": "Armour of Faith",
				"description": "Each stack of Fiery Faith also reduces damage taken by 5.0%."
			},
			{
				"name": "Devotion",
				"description": "Taking damage increases movement speed by 30.0% for 2 seconds. Getting attacked no longer slows movement speed."
			},
			{
				"name": "Redemption through Blood",
				"description": "Taking damage restores stamina to full."
			},
			{
				"name": "Calloused Without and Within",
				"description": "Damage taken reduced by 10.0%."
			},
			{
				"name": "Faith's Flurry",
				"description": "Attacks during Holy Fervour increase power by 2.0% for 5 seconds. Stacks up to 10 times."
			},
			{
				"name": "Feel Nothing",
				"description": "Health can't be reduced below 1 for the duration of Holy Fervour."
			},
			{
				"name": "Flagellant's Zeal",
				"description": "Each hit during Holy Fervour grants a stack up to 10. Each stack reduces the cooldown of Holy Fervour by 5.0% when the buff fades."
			}
		]
	},
	{
		"id": 19
	},
	{
		"id": 13,
		"name": "Battle Wizard",
		"codeName": "bw_adept",
		"heroName": "Battle Wizard",
		"health": 100,
		"passive": {
			"name": "Tranquillity",
			"description": "After not casting spells for 6 seconds, automatically ventilates Overcharge."
		},
		"skill": {
			"name": "Fire Walk",
			"description": "Sienna teleports forward, leaving a blanket of fire in her wake that lingers for 6 seconds.",
			"cooldown": "40"
		},
		"perks": [
			{
				"name": "Reckless Haste",
				"description": "Overcharge increases spell charge speed by up to 30%."
			},
			{
				"name": "Pyromantic Surge",
				"description": "Increased ranged damage by 10%."
			}
		],
		"talents": [
			{
				"name": "Confound",
				"description": "Staggering enemies with a melee attack grants temporary health. Health gained based on stagger strength."
			},
			{
				"name": "Spark Thief",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Flame-Fettled",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Volcanic Force",
				"description": "Fully charging a spell increases its power by 50.0%."
			},
			{
				"name": "Famished Flames",
				"description": "Burning damage over time is increased by 150.0%. All non-burn damage is reduced by 30.0%."
			},
			{
				"name": "Lingering Flames",
				"description": "Sienna's burning effects now last until the affected enemy dies. Burning effects do not stack."
			},
			{
				"name": "Bulwark",
				"description": "Enemies that you stagger take 10% more damage from melee attacks for 2 seconds.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Unusually Calm",
				"description": "Tranquility cooldown is reduced to 3 seconds."
			},
			{
				"name": "Rechannel",
				"description": "When Tranquillity is active, Sienna's ranged charge time is reduced by 40.0%."
			},
			{
				"name": "Centred",
				"description": "Increases the venting effect of Tranquillity by 100.0%."
			},
			{
				"name": "Soot Shield",
				"description": "Igniting an enemy reduces damage taken by 10.0% for 5 seconds. Stacks up to 3 times."
			},
			{
				"name": "Fires from Ash",
				"description": "Killing a burning enemy reduces the cooldown of Fire Walk by 3.0%."
			},
			{
				"name": "Immersive Immolation",
				"description": "Hitting 4 or more enemies with one attack grants 15.0% increased attack speed for 5 seconds."
			},
			{
				"name": "Volans' Quickening",
				"description": "Reduces the cooldown of Fire Walk by 30.0%."
			},
			{
				"name": "Kaboom!",
				"description": "Fire Walk explosion radius and burn damage increased. No longer leaves a burning trail."
			},
			{
				"name": "Burnout",
				"description": "Fire Walk can be activated a second time within 10 seconds."
			}
		]
	},
	{
		"id": 14,
		"name": "Pyromancer",
		"codeName": "bw_scholar",
		"heroName": "Pyromancer",
		"health": 100,
		"passive": {
			"name": "Critical Mass",
			"description": "Increased critical strike chance based on Overcharge level up to 30%."
		},
		"skill": {
			"name": "The Burning Head",
			"description": "Sienna unleashes a fiery projectile that seeks out foes.",
			"cooldown": "60"
		},
		"perks": [
			{
				"name": "Searing Focus",
				"description": "Increased ranged damage by 10%."
			}
		],
		"talents": [
			{
				"name": "Spark Smith",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Spirit-Binding",
				"description": "Melee killing blows restore temporary health based on the health of the slain enemy."
			},
			{
				"name": "Fiery Fortitude",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Ride the Fire Wind",
				"description": "Increases ranged power level by 1.0% every 1 seconds up to a maximum of 20 stacks. Upon reaching maximum stacks effect diminishes then starts over."
			},
			{
				"name": "Martial Study",
				"description": "Increases attack speed by 5.0%."
			},
			{
				"name": "Spirit-Casting",
				"description": "Increases critical strike chance by 10.0% while above 80.0% health."
			},
			{
				"name": "Smiter",
				"description": "The first enemy hit always counts as staggered.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Deathly Dissipation",
				"description": "Killing a special stops your spells from generating overcharge for 10 seconds."
			},
			{
				"name": "On the Precipice",
				"description": "Increases ranged power by 15% when at or above critical overcharge."
			},
			{
				"name": "One with the Flame",
				"description": "Critical Mass also increases attack speed by 2.0% per 6 overcharge and stacks up to 5 times."
			},
			{
				"name": "Soul Siphon",
				"description": "Reduces damage taken by 10.0% for 10 seconds after killing a special or elite enemy."
			},
			{
				"name": "The Volans Doctrine",
				"description": "No longer slowed from being overcharged."
			},
			{
				"name": "Fleetflame",
				"description": "Critical hits increases movement speed by 5.0% for 10 seconds. Stacks up to 3 times."
			},
			{
				"name": "Exhaust",
				"description": "The Burning Head also removes all overcharge."
			},
			{
				"name": "Bonded Flame",
				"description": "The Burning Head grants 35 temporary health when used."
			},
			{
				"name": "Blazing Echo",
				"description": "The Burning Head critical hits refund its cooldown."
			}
		]
	},
	{
		"id": 15,
		"name": "Unchained",
		"codeName": "bw_unchained",
		"heroName": "Unchained",
		"health": 150,
		"passive": {
			"name": "Blood Magic",
			"description": "50% damage taken transferred to Overcharge."
		},
		"skill": {
			"name": "Living Bomb",
			"description": "Sienna explodes, dealing damage to surrounding enemies and clearing her Overcharge.",
			"cooldown": "120"
		},
		"perks": [
			{
				"name": "Slave to Aqshy",
				"description": "No Overcharge slowdown."
			},
			{
				"name": "Unstable Strength",
				"description": "Increased melee power on high Overcharge by up to 60%."
			}
		],
		"talents": [
			{
				"name": "Soul Quench",
				"description": "Staggering enemies with a melee attack grants temporary health. Health gained based on stagger strength."
			},
			{
				"name": "Reckless Rampage",
				"description": "Damaging multiple enemies in one swing with a melee weapon grants temporary health. Max 5 enemies."
			},
			{
				"name": "Burn-Bloom",
				"description": "Healing yourself with a First Aid Kit or a Healing Draught also heals your nearby allies for 20.0% of their maximum health. Clears any wounds."
			},
			{
				"name": "Frenzied Flame",
				"description": "Increases attack speed by 15.0% while at or above high Overcharge."
			},
			{
				"name": "Outburst",
				"description": "Pushing an enemy ignites them, causing damage over time. Heavy attacks makes the next push arc 70.0% wider. "
			},
			{
				"name": "Chain Reaction",
				"description": "Burning enemies have a small chance to explode on death."
			},
			{
				"name": "Bulwark",
				"description": "Enemies that you stagger take 10% more damage from melee attacks for 2 seconds.Deal 20% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 40% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Mainstay",
				"description": "Deal 40% more damage to staggered enemies. Each hit against a staggered enemy adds another count of stagger. Bonus damage is increased to 60% against enemies afflicted by more than one stagger effect."
			},
			{
				"name": "Enhanced Power",
				"description": "Increases total Power Level by 7%. This is calculated before other buffs are applied."
			},
			{
				"name": "Dissipate",
				"description": "Block cost is reduced by 50.0% when Overcharged and blocking attacks vent Overcharge."
			},
			{
				"name": "Conduit",
				"description": "Increases rate of venting overcharge by 30.0% and reduces damage taken from venting by 50.0%."
			},
			{
				"name": "Numb to Pain",
				"description": "Reduces damage taken by 5.0% and overcharge generated by Blood Magic by 16.6% for 15 seconds after venting. Stacks 3 times."
			},
			{
				"name": "Enfeebling Flames",
				"description": "Burning enemies deal 30.0% less damage."
			},
			{
				"name": "Abandon",
				"description": "During overcharge, Sienna expends health to increase ability cooldown rate."
			},
			{
				"name": "Natural Talent",
				"description": "Reduces overcharge generated by 10.0%."
			},
			{
				"name": "Fuel for the Fire",
				"description": "Each enemy hit by Living Bomb increases power by 5.0% for 15 seconds. Stacks up to 5 times."
			},
			{
				"name": "Wildfire",
				"description": "Living Bomb grants Sienna a scorching aura that ignites nearby enemies for 10 seconds, causing damage over time. Increases the stagger power of Living Bomb."
			},
			{
				"name": "Bomb Balm",
				"description": "Living Bomb restores 30 temporary health to allies."
			}
		]
	},
	{
		"id": 20
	}
]
