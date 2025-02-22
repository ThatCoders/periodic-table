/* Code written by Shangzhen Yang https://github.com/shangzhenyang/periodic-table */
const elements = [{
	"symbol": "H",
	"name": "Hydrogen",
	"name_chs": "氢",
	"name_cht": "氫",
	"mass": 1.008
}, {
	"symbol": "He",
	"name": "Helium",
	"name_chs": "氦",
	"name_cht": "氦",
	"mass": 4.003
}, {
	"symbol": "Li",
	"name": "Lithium",
	"name_chs": "锂",
	"name_cht": "鋰",
	"mass": 6.941
}, {
	"symbol": "Be",
	"name": "Beryllium",
	"name_chs": "铍",
	"name_cht": "鈹",
	"mass": 9.012
}, {
	"symbol": "B",
	"name": "Boron",
	"name_chs": "硼",
	"name_cht": "硼",
	"mass": 10.811
}, {
	"symbol": "C",
	"name": "Carbon",
	"name_chs": "碳",
	"name_cht": "碳",
	"mass": 12.011
}, {
	"symbol": "N",
	"name": "Nitrogen",
	"name_chs": "氮",
	"name_cht": "氮",
	"mass": 14.007
}, {
	"symbol": "O",
	"name": "Oxygen",
	"name_chs": "氧",
	"name_cht": "氧",
	"mass": 15.999
}, {
	"symbol": "F",
	"name": "Fluorine",
	"name_chs": "氟",
	"name_cht": "氟",
	"mass": 18.998
}, {
	"symbol": "Ne",
	"name": "Neon",
	"name_chs": "氖",
	"name_cht": "氖",
	"mass": 20.180
}, {
	"symbol": "Na",
	"name": "Sodium",
	"name_chs": "钠",
	"name_cht": "鈉",
	"mass": 22.990
}, {
	"symbol": "Mg",
	"name": "Magnesium",
	"name_chs": "镁",
	"name_cht": "鎂",
	"mass": 24.305
}, {
	"symbol": "Al",
	"name": "Aluminum",
	"name_chs": "铝",
	"name_cht": "鋁",
	"mass": 26.982
}, {
	"symbol": "Si",
	"name": "Silicon",
	"name_chs": "硅",
	"name_cht": "矽",
	"mass": 28.086
}, {
	"symbol": "P",
	"name": "Phosphorus",
	"name_chs": "磷",
	"name_cht": "磷",
	"mass": 30.974
}, {
	"symbol": "S",
	"name": "Sulfur",
	"name_chs": "硫",
	"name_cht": "硫",
	"mass": 32.066
}, {
	"symbol": "Cl",
	"name": "Chlorine",
	"name_chs": "氯",
	"name_cht": "氯",
	"mass": 35.453
}, {
	"symbol": "Ar",
	"name": "Argon",
	"name_chs": "氩",
	"name_cht": "氬",
	"mass": 39.948
}, {
	"symbol": "K",
	"name": "Potassium",
	"name_chs": "钾",
	"name_cht": "鉀",
	"mass": 39.098
}, {
	"symbol": "Ca",
	"name": "Calcium",
	"name_chs": "钙",
	"name_cht": "鈣",
	"mass": 40.078
}, {
	"symbol": "Sc",
	"name": "Scandium",
	"name_chs": "钪",
	"name_cht": "鈧",
	"mass": 44.956
}, {
	"symbol": "Ti",
	"name": "Titanium",
	"name_chs": "钛",
	"name_cht": "鈦",
	"mass": 47.867
}, {
	"symbol": "V",
	"name": "Vanadium",
	"name_chs": "钒",
	"name_cht": "釩",
	"mass": 50.942
}, {
	"symbol": "Cr",
	"name": "Chromium",
	"name_chs": "铬",
	"name_cht": "鉻",
	"mass": 51.996
}, {
	"symbol": "Mn",
	"name": "Manganese",
	"name_chs": "锰",
	"name_cht": "錳",
	"mass": 54.938
}, {
	"symbol": "Fe",
	"name": "Iron",
	"name_chs": "铁",
	"name_cht": "鐵",
	"mass": 55.845
}, {
	"symbol": "Co",
	"name": "Cobalt",
	"name_chs": "钴",
	"name_cht": "鈷",
	"mass": 58.933
}, {
	"symbol": "Ni",
	"name": "Nickel",
	"name_chs": "镍",
	"name_cht": "鎳",
	"mass": 58.693
}, {
	"symbol": "Cu",
	"name": "Copper",
	"name_chs": "铜",
	"name_cht": "銅",
	"mass": 63.546
}, {
	"symbol": "Zn",
	"name": "Zinc",
	"name_chs": "锌",
	"name_cht": "鋅",
	"mass": 65.38
}, {
	"symbol": "Ga",
	"name": "Gallium",
	"name_chs": "镓",
	"name_cht": "鎵",
	"mass": 69.723
}, {
	"symbol": "Ge",
	"name": "Germanium",
	"name_chs": "锗",
	"name_cht": "鍺",
	"mass": 72.630
}, {
	"symbol": "As",
	"name": "Arsenic",
	"name_chs": "砷",
	"name_cht": "砷",
	"mass": 74.922
}, {
	"symbol": "Se",
	"name": "Selenium",
	"name_chs": "硒",
	"name_cht": "硒",
	"mass": 78.971
}, {
	"symbol": "Br",
	"name": "Bromine",
	"name_chs": "溴",
	"name_cht": "溴",
	"mass": 79.904
}, {
	"symbol": "Kr",
	"name": "Krypton",
	"name_chs": "氪",
	"name_cht": "氪",
	"mass": 83.798
}, {
	"symbol": "Rb",
	"name": "Rubidium",
	"name_chs": "铷",
	"name_cht": "銣",
	"mass": 85.468
}, {
	"symbol": "Sr",
	"name": "Strontium",
	"name_chs": "锶",
	"name_cht": "鍶",
	"mass": 87.62
}, {
	"symbol": "Y",
	"name": "Yttrium",
	"name_chs": "钇",
	"name_cht": "釔",
	"mass": 88.906
}, {
	"symbol": "Zr",
	"name": "Zirconium",
	"name_chs": "锆",
	"name_cht": "鋯",
	"mass": 91.224
}, {
	"symbol": "Nb",
	"name": "Niobium",
	"name_chs": "铌",
	"name_cht": "鈮",
	"mass": 92.906
}, {
	"symbol": "Mo",
	"name": "Molybdenum",
	"name_chs": "钼",
	"name_cht": "鉬",
	"mass": 95.95
}, {
	"symbol": "Tc",
	"name": "Technetium",
	"name_chs": "锝",
	"name_cht": "鎝",
	"mass": 98
}, {
	"symbol": "Ru",
	"name": "Ruthenium",
	"name_chs": "钌",
	"name_cht": "釕",
	"mass": 101.07
}, {
	"symbol": "Rh",
	"name": "Rhodium",
	"name_chs": "铑",
	"name_cht": "銠",
	"mass": 102.906
}, {
	"symbol": "Pd",
	"name": "Palladium",
	"name_chs": "钯",
	"name_cht": "鈀",
	"mass": 106.42
}, {
	"symbol": "Ag",
	"name": "Silver",
	"name_chs": "银",
	"name_cht": "銀",
	"mass": 107.868
}, {
	"symbol": "Cd",
	"name": "Cadmium",
	"name_chs": "镉",
	"name_cht": "鎘",
	"mass": 112.411
}, {
	"symbol": "In",
	"name": "Indium",
	"name_chs": "铟",
	"name_cht": "銦",
	"mass": 114.818
}, {
	"symbol": "Sn",
	"name": "Tin",
	"name_chs": "锡",
	"name_cht": "錫",
	"mass": 118.710
}, {
	"symbol": "Sb",
	"name": "Antimony",
	"name_chs": "锑",
	"name_cht": "銻",
	"mass": 121.760
}, {
	"symbol": "Te",
	"name": "Tellurium",
	"name_chs": "碲",
	"name_cht": "碲",
	"mass": 127.60
}, {
	"symbol": "I",
	"name": "Iodine",
	"name_chs": "碘",
	"name_cht": "碘",
	"mass": 126.904
}, {
	"symbol": "Xe",
	"name": "Xenon",
	"name_chs": "氙",
	"name_cht": "氙",
	"mass": 131.29
}, {
	"symbol": "Cs",
	"name": "Caesium",
	"name_chs": "铯",
	"name_cht": "銫",
	"mass": 132.905
}, {
	"symbol": "Ba",
	"name": "Barium",
	"name_chs": "钡",
	"name_cht": "鋇",
	"mass": 137.327
}, {
	"symbol": "La",
	"name": "Lanthanum",
	"name_chs": "镧",
	"name_cht": "鑭",
	"mass": 138.906
}, {
	"symbol": "Ce",
	"name": "Cerium",
	"name_chs": "铈",
	"name_cht": "鈰",
	"mass": 140.116
}, {
	"symbol": "Pr",
	"name": "Praseodymium",
	"name_chs": "镨",
	"name_cht": "鐠",
	"mass": 140.908
}, {
	"symbol": "Nd",
	"name": "Neodymium",
	"name_chs": "钕",
	"name_cht": "釹",
	"mass": 144.24
}, {
	"symbol": "Pm",
	"name": "Promethium",
	"name_chs": "钷",
	"name_cht": "鉕",
	"mass": 145
}, {
	"symbol": "Sm",
	"name": "Samarium",
	"name_chs": "钐",
	"name_cht": "釤",
	"mass": 150.36
}, {
	"symbol": "Eu",
	"name": "Europium",
	"name_chs": "铕",
	"name_cht": "銪",
	"mass": 151.964
}, {
	"symbol": "Gd",
	"name": "Gadolinium",
	"name_chs": "钆",
	"name_cht": "釓",
	"mass": 157.25
}, {
	"symbol": "Tb",
	"name": "Terbium",
	"name_chs": "铽",
	"name_cht": "鋱",
	"mass": 158.925
}, {
	"symbol": "Dy",
	"name": "Dysprosium",
	"name_chs": "镝",
	"name_cht": "鏑",
	"mass": 162.50
}, {
	"symbol": "Ho",
	"name": "Holmium",
	"name_chs": "钬",
	"name_cht": "鈥",
	"mass": 164.930
}, {
	"symbol": "Er",
	"name": "Erbium",
	"name_chs": "铒",
	"name_cht": "鉺",
	"mass": 167.26
}, {
	"symbol": "Tm",
	"name": "Thulium",
	"name_chs": "铥",
	"name_cht": "銩",
	"mass": 168.934
}, {
	"symbol": "Yb",
	"name": "Ytterbium",
	"name_chs": "镱",
	"name_cht": "鐿",
	"mass": 173.05
}, {
	"symbol": "Lu",
	"name": "Lutetium",
	"name_chs": "镥",
	"name_cht": "鎦",
	"mass": 174.967
}, {
	"symbol": "Hf",
	"name": "Hafnium",
	"name_chs": "铪",
	"name_cht": "鉿",
	"mass": 178.49
}, {
	"symbol": "Ta",
	"name": "Tantalum",
	"name_chs": "钽",
	"name_cht": "鉭",
	"mass": 180.948
}, {
	"symbol": "W",
	"name": "Tungsten",
	"name_chs": "钨",
	"name_cht": "鎢",
	"mass": 183.84
}, {
	"symbol": "Re",
	"name": "Rhenium",
	"name_chs": "铼",
	"name_cht": "錸",
	"mass": 186.207
}, {
	"symbol": "Os",
	"name": "Osmium",
	"name_chs": "锇",
	"name_cht": "鋨",
	"mass": 190.23
}, {
	"symbol": "Ir",
	"name": "Iridium",
	"name_chs": "铱",
	"name_cht": "銥",
	"mass": 192.217
}, {
	"symbol": "Pt",
	"name": "Platinum",
	"name_chs": "铂",
	"name_cht": "鉑",
	"mass": 195.078
}, {
	"symbol": "Au",
	"name": "Gold",
	"name_chs": "金",
	"name_cht": "金",
	"mass": 196.967
}, {
	"symbol": "Hg",
	"name": "Mercury",
	"name_chs": "汞",
	"name_cht": "汞",
	"mass": 200.59
}, {
	"symbol": "Tl",
	"name": "Thallium",
	"name_chs": "铊",
	"name_cht": "鉈",
	"mass": 204.383
}, {
	"symbol": "Pb",
	"name": "Lead",
	"name_chs": "铅",
	"name_cht": "鉛",
	"mass": 207.2
}, {
	"symbol": "Bi",
	"name": "Bismuth",
	"name_chs": "铋",
	"name_cht": "鉍",
	"mass": 208.980
}, {
	"symbol": "Po",
	"name": "Polonium",
	"name_chs": "钋",
	"name_cht": "釙",
	"mass": 209
}, {
	"symbol": "At",
	"name": "Astatine",
	"name_chs": "砹",
	"name_cht": "砈",
	"mass": 210
}, {
	"symbol": "Rn",
	"name": "Radon",
	"name_chs": "氡",
	"name_cht": "氡",
	"mass": 222
}, {
	"symbol": "Fr",
	"name": "Francium",
	"name_chs": "钫",
	"name_cht": "鍅",
	"mass": 223
}, {
	"symbol": "Ra",
	"name": "Radium",
	"name_chs": "镭",
	"name_cht": "鐳",
	"mass": 226
}, {
	"symbol": "Ac",
	"name": "Actinium",
	"name_chs": "锕",
	"name_cht": "錒",
	"mass": 227
}, {
	"symbol": "Th",
	"name": "Thorium",
	"name_chs": "钍",
	"name_cht": "釷",
	"mass": 232.038
}, {
	"symbol": "Pa",
	"name": "Protactinium",
	"name_chs": "镤",
	"name_cht": "鏷",
	"mass": 231.036
}, {
	"symbol": "U",
	"name": "Uranium",
	"name_chs": "铀",
	"name_cht": "鈾",
	"mass": 238.029
}, {
	"symbol": "Np",
	"name": "Neptunium",
	"name_chs": "镎",
	"name_cht": "錼",
	"mass": 237
}, {
	"symbol": "Pu",
	"name": "Plutonium",
	"name_chs": "钚",
	"name_cht": "鈽",
	"mass": 244
}, {
	"symbol": "Am",
	"name": "Americium",
	"name_chs": "镅",
	"name_cht": "鋂",
	"mass": 243
}, {
	"symbol": "Cm",
	"name": "Curium",
	"name_chs": "锔",
	"name_cht": "鋦",
	"mass": 247
}, {
	"symbol": "Bk",
	"name": "Berkelium",
	"name_chs": "锫",
	"name_cht": "鉳",
	"mass": 247
}, {
	"symbol": "Cf",
	"name": "Californium",
	"name_chs": "锎",
	"name_cht": "鉲",
	"mass": 251
}, {
	"symbol": "Es",
	"name": "Einsteinium",
	"name_chs": "锿",
	"name_cht": "鑀",
	"mass": 252
}, {
	"symbol": "Fm",
	"name": "Fermium",
	"name_chs": "镄",
	"name_cht": "鐨",
	"mass": 257
}, {
	"symbol": "Md",
	"name": "Mendelevium",
	"name_chs": "钔",
	"name_cht": "鍆",
	"mass": 258
}, {
	"symbol": "No",
	"name": "Nobelium",
	"name_chs": "锘",
	"name_cht": "鍩",
	"mass": 259
}, {
	"symbol": "Lr",
	"name": "Lawrencium",
	"name_chs": "铹",
	"name_cht": "鐒",
	"mass": 266
}, {
	"symbol": "Rf",
	"name": "Rutherfordium",
	"name_chs": "𬬻",
	"name_cht": "鑪",
	"mass": 267
}, {
	"symbol": "Db",
	"name": "Dubnium",
	"name_chs": "𬭊",
	"name_cht": "𨧀",
	"mass": 268
}, {
	"symbol": "Sg",
	"name": "Seaborgium",
	"name_chs": "𬭳",
	"name_cht": "𨭎",
	"mass": 269
}, {
	"symbol": "Bh",
	"name": "Bohrium",
	"name_chs": "𬭛",
	"name_cht": "𨨏",
	"mass": 270
}, {
	"symbol": "Hs",
	"name": "Hassium",
	"name_chs": "𬭶",
	"name_cht": "𨭆",
	"mass": 277
}, {
	"symbol": "Mt",
	"name": "Meitnerium",
	"name_chs": "鿏",
	"name_cht": "䥑",
	"mass": 278
}, {
	"symbol": "Ds",
	"name": "Darmstadtium",
	"name_chs": "𫟼",
	"name_cht": "鐽",
	"mass": 281
}, {
	"symbol": "Rg",
	"name": "Roentgenium",
	"name_chs": "𬬭",
	"name_cht": "錀",
	"mass": 282
}, {
	"symbol": "Cn",
	"name": "Copernicium",
	"name_chs": "鎶",
	"name_cht": "鎶",
	"mass": 285
}, {
	"symbol": "Nh",
	"name": "Nihonium",
	"name_chs": "鉨",
	"name_cht": "鉨",
	"mass": 286
}, {
	"symbol": "Fl",
	"name": "Flerovium",
	"name_chs": "𫓧",
	"name_cht": "鈇",
	"mass": 289
}, {
	"symbol": "Mc",
	"name": "Moscovium",
	"name_chs": "镆",
	"name_cht": "鏌",
	"mass": 290
}, {
	"symbol": "Lv",
	"name": "Livermorium",
	"name_chs": "鉝",
	"name_cht": "鉝",
	"mass": 293
}, {
	"symbol": "Ts",
	"name": "Tennessine",
	"name_chs": "Tennessine",
	"name_cht": "Tennessine",
	"mass": 294
}, {
	"symbol": "Og",
	"name": "Oganesson",
	"name_chs": "Oganesson",
	"name_cht": "Oganesson",
	"mass": 294
}]
function createList(ul) {
	if (ul == null) {
		const existingUl = document.getElementsByTagName("ul")
		if (existingUl.length > 0) {
			ul = existingUl[0]
		} else {
			const newUl = document.createElement("ul")
			document.body.appendChild(newUl)
			ul = newUl
		}
	}
	for (let i = 0; i < elements.length; i++) {
		const newLi = document.createElement("li")
		newLi.setAttribute("class", "periodic-table")
		newLi.id = elements[i].name
		if (/^(yue|zh)(-cn|-hans(-[a-z]+)?)?$/i.test(navigator.language)) {
			newLi.innerText = "原子序数：" + (i + 1)
				+ "\n符号：" + elements[i].symbol
				+ "\n名称：" + elements[i].name_chs
				+ "\n相对原子质量：" + elements[i].mass
		} else if (navigator.language.indexOf("zh") != -1) {
			newLi.innerText = "原子序數：" + (i + 1)
				+ "\n符號：" + elements[i].symbol
				+ "\n名稱：" + elements[i].name_cht
				+ "\n相對原子質量：" + elements[i].mass
		} else {
			newLi.innerText = "Atomic number: " + (i + 1)
				+ "\nSymbol: " + elements[i].symbol
				+ "\nName: " + elements[i].name
				+ "\nAtomic mass: " + elements[i].mass
		}
		newLi.onclick = function () {
			try {
				elementClicked(getElement(this.id))
			} catch (e) {
				console.log(e.message)
			}
		}
		ul.appendChild(newLi)
	}
}
function getElement(searchTerm) {
	searchTerm = searchTerm.toLowerCase().trim()
	let mole = 1
	for (let i = 0; i < elements.length; i++) {
		if (searchTerm.substr(0, 4) == "mono") {
			mole = 1
			searchTerm = searchTerm.replace("mono", "")
		} else if (searchTerm.substr(0, 2) == "di") {
			mole = 2
			searchTerm = searchTerm.replace("di", "")
		} else if (searchTerm.substr(0, 3) == "tri") {
			mole = 3
			searchTerm = searchTerm.replace("tri", "")
		} else if (searchTerm.substr(0, 5) == "tetra") {
			mole = 4
			searchTerm = searchTerm.replace("tetra", "")
		} else if (searchTerm.substr(0, 5) == "penta") {
			mole = 5
			searchTerm = searchTerm.replace("penta", "")
		} else if (searchTerm.substr(0, 4) == "hexa") {
			mole = 6
			searchTerm = searchTerm.replace("hexa", "")
		} else if (searchTerm.substr(0, 5) == "hepta") {
			mole = 7
			searchTerm = searchTerm.replace("hepta", "")
		} else if (searchTerm.substr(0, 4) == "octa") {
			mole = 8
			searchTerm = searchTerm.replace("octa", "")
		} else if (searchTerm.substr(0, 4) == "nona") {
			mole = 9
			searchTerm = searchTerm.replace("nona", "")
		} else if (searchTerm.substr(0, 4) == "deca") {
			mole = 10
			searchTerm = searchTerm.replace("deca", "")
		} else if (searchTerm.substr(0, 6) == "undeca") {
			mole = 11
			searchTerm = searchTerm.replace("undeca", "")
		} else if (searchTerm.substr(0, 6) == "dodeca") {
			mole = 12
			searchTerm = searchTerm.replace("dodeca", "")
		} else if (searchTerm.substr(0, 1) == "一") {
			mole = 1
			searchTerm = searchTerm.replace("一", "")
		} else if (searchTerm.substr(0, 1) == "二") {
			mole = 2
			searchTerm = searchTerm.replace("二", "")
		} else if (searchTerm.substr(0, 1) == "三") {
			mole = 3
			searchTerm = searchTerm.replace("三", "")
		} else if (searchTerm.substr(0, 1) == "四") {
			mole = 4
			searchTerm = searchTerm.replace("四", "")
		} else if (searchTerm.substr(0, 1) == "五") {
			mole = 5
			searchTerm = searchTerm.replace("五", "")
		} else if (searchTerm.substr(0, 1) == "六") {
			mole = 6
			searchTerm = searchTerm.replace("六", "")
		} else if (searchTerm.substr(0, 1) == "七") {
			mole = 7
			searchTerm = searchTerm.replace("七", "")
		} else if (searchTerm.substr(0, 1) == "八") {
			mole = 8
			searchTerm = searchTerm.replace("八", "")
		} else if (searchTerm.substr(0, 1) == "九") {
			mole = 9
			searchTerm = searchTerm.replace("九", "")
		} else if (searchTerm.substr(0, 1) == "十") {
			mole = 10
			searchTerm = searchTerm.replace("十", "")
		}
		const numRegExp = new RegExp("[0-9]+")
		if (numRegExp.test(searchTerm)) {
			const num = parseInt(numRegExp.exec(searchTerm)[0])
			if (num != searchTerm) {
				mole = num
				searchTerm = searchTerm.replace(mole, "")
			}
		}
		if (
			searchTerm.length <= 2 && elements[i].symbol.toLowerCase() == searchTerm ||
			searchTerm.length > 2 && elements[i].name.toLowerCase().includes(searchTerm) ||
			elements[i].name_chs == searchTerm ||
			elements[i].name_cht == searchTerm ||
			i + 1 == searchTerm ||
			Math.round(elements[i].mass) == Math.round(searchTerm)
		) {
			return {
				mass: elements[i].mass * mole,
				mole: mole,
				name: elements[i].name,
				name_chs: elements[i].name_chs,
				name_cht: elements[i].name_cht,
				number: i + 1,
				symbol: elements[i].symbol
			}
		}
	}
}
function getCompound(searchTerm, multipler = 1) {
	const record = []
	if (searchTerm) {
		searchTerm = searchTerm
			.replaceAll("（", "(")
			.replaceAll("）", ")")
			.trim()
		if (searchTerm.split("(").length > 2) {
			return {
				error: "tooManyParentheses",
				message: "Only one pair of parentheses is allowed."
			}
		}
		if (searchTerm.includes("(")) {
			let inParenthesis = /\(.*\)/.exec(searchTerm)
			if (inParenthesis && inParenthesis[0]) {
				inParenthesis = inParenthesis[0].substring(1, inParenthesis[0].length - 1)
			}
			let parenthesisNum = /\)\d+/.exec(searchTerm)
			if (parenthesisNum && parenthesisNum[0]) {
				parenthesisNum = parenthesisNum[0].substring(1)
			} else {
				parenthesisNum = 1
			}
			const expanded = getCompound(inParenthesis, parenthesisNum)
			if (expanded) {
				searchTerm = searchTerm.replace(/\(.*\)\d+/, expanded.symbol)
			}
		}
		const letters = searchTerm.split("")
		const uppercaseRegExp = new RegExp("[A-Z]+")
		if (searchTerm.indexOf(" ") != -1 || uppercaseRegExp.test(searchTerm)) {
			let elementName = ""
			let tempRecord = []
			for (let i = 0; i < letters.length; i++) {
				elementName += letters[i]
				const result = getElement(elementName.toLowerCase())
				if (result) {
					tempRecord.push([{
						symbol: result.symbol,
						mole: result.mole * multipler,
						mass: result.mass * multipler
					}])
				}
				if (letters[i] == " " || uppercaseRegExp.test(letters[i + 1])) {
					record.push(tempRecord[tempRecord.length - 1])
					tempRecord = []
					elementName = ""
				}
			}
			record.push(tempRecord[tempRecord.length - 1])
		} else if (searchTerm.indexOf("化") != -1) {
			const characters = searchTerm.split("化")
			result = getElement(characters[1])
			if (result) {
				record.push([{
					symbol: result.symbol,
					mole: result.mole,
					mass: result.mass
				}])
			}
			result = getElement(characters[0])
			if (result) {
				record.push([{
					symbol: result.symbol,
					mole: result.mole,
					mass: result.mass
				}])
			}
		} else {
			const result = getElement(searchTerm)
			if (!result) {
				const zhRegExp = /[\u4e00-\u9fa5]+/
				if (zhRegExp.test(searchTerm)) {
					return {
						error: "incorrectFormat",
						message: "Please follow the format of \"几啥化几啥\"."
					}
				} else {
					return {
						error: "notFount",
						message: "The queried compound was not found."
					}
				}
			}
			return result
		}
		let mass = 0
		let symbol = ""
		for (let i = 0; i < record.length; i++) {
			if (record[i]) {
				symbol += record[i][0].symbol
				if (record[i][0].mole > 1) {
					symbol += record[i][0].mole
				}
				mass += record[i][0].mass
			}
		}
		return {
			mass: mass,
			symbol: symbol
		}
	}
}
