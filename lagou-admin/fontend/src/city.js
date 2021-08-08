const cityLists = [
  {
    value: '620000',
    value1: '甘肃省',
    label: '甘肃省',
    children: [
      {
        value: '620100',
        value1: '兰州市',
        label: '兰州市',
        children: [
          {
            value: '620102',
            value1: '城关区',
            label: '城关区'
          },
          {
            value: '620103',
            value1: '七里河区',
            label: '七里河区'
          },
          {
            value: '620104',
            value1: '西固区',
            label: '西固区'
          },
          {
            value: '620105',
            value1: '安宁区',
            label: '安宁区'
          },
          {
            value: '620111',
            value1: '红古区',
            label: '红古区'
          },
          {
            value: '620121',
            value1: '永登县',
            label: '永登县'
          },
          {
            value: '620122',
            value1: '皋兰县',
            label: '皋兰县'
          },
          {
            value: '620123',
            value1: '榆中县',
            label: '榆中县'
          }
        ]
      },
      {
        value: '620200',
        value1: '嘉峪关市',
        label: '嘉峪关市',
        children: [
          {
            value1: '市辖区',
            value: '620200',
            label: '市辖区'
          }
        ]
      },
      {
        value: '620300',
        value1: '金昌市',
        label: '金昌市',
        children: [
          {
            value: '620302',
            value1: '金川区',
            label: '金川区'
          },
          {
            value: '620321',
            value1: '永昌县',
            label: '永昌县'
          }
        ]
      },
      {
        value: '620400',
        value1: '白银市',
        label: '白银市',
        children: [
          {
            value: '620402',
            value1: '白银区',
            label: '白银区'
          },
          {
            value: '620403',
            value1: '平川区',
            label: '平川区'
          },
          {
            value: '620421',
            value1: '靖远县',
            label: '靖远县'
          },
          {
            value: '620422',
            value1: '会宁县',
            label: '会宁县'
          },
          {
            value: '620423',
            value1: '景泰县',
            label: '景泰县'
          }
        ]
      },
      {
        value: '620500',
        value1: '天水市',
        label: '天水市',
        children: [
          {
            value: '620502',
            value1: '秦州区',
            label: '秦州区'
          },
          {
            value: '620503',
            value1: '麦积区',
            label: '麦积区'
          },
          {
            value: '620521',
            value1: '清水县',
            label: '清水县'
          },
          {
            value: '620522',
            value1: '秦安县',
            label: '秦安县'
          },
          {
            value: '620523',
            value1: '甘谷县',
            label: '甘谷县'
          },
          {
            value: '620524',
            value1: '武山县',
            label: '武山县'
          },
          {
            value: '620525',
            value1: '张家川回族自治县',
            label: '张家川回族自治县'
          }
        ]
      },
      {
        value: '620600',
        value1: '武威市',
        label: '武威市',
        children: [
          {
            value: '620602',
            value1: '凉州区',
            label: '凉州区'
          },
          {
            value: '620621',
            value1: '民勤县',
            label: '民勤县'
          },
          {
            value: '620622',
            value1: '古浪县',
            label: '古浪县'
          },
          {
            value: '620623',
            value1: '天祝藏族自治县',
            label: '天祝藏族自治县'
          }
        ]
      },
      {
        value: '620700',
        value1: '张掖市',
        label: '张掖市',
        children: [
          {
            value: '620702',
            value1: '甘州区',
            label: '甘州区'
          },
          {
            value: '620721',
            value1: '肃南裕固族自治县',
            label: '肃南裕固族自治县'
          },
          {
            value: '620722',
            value1: '民乐县',
            label: '民乐县'
          },
          {
            value: '620723',
            value1: '临泽县',
            label: '临泽县'
          },
          {
            value: '620724',
            value1: '高台县',
            label: '高台县'
          },
          {
            value: '620725',
            value1: '山丹县',
            label: '山丹县'
          }
        ]
      },
      {
        value: '620800',
        value1: '平凉市',
        label: '平凉市',
        children: [
          {
            value: '620802',
            value1: '崆峒区',
            label: '崆峒区'
          },
          {
            value: '620821',
            value1: '泾川县',
            label: '泾川县'
          },
          {
            value: '620822',
            value1: '灵台县',
            label: '灵台县'
          },
          {
            value: '620823',
            value1: '崇信县',
            label: '崇信县'
          },
          {
            value: '620825',
            value1: '庄浪县',
            label: '庄浪县'
          },
          {
            value: '620826',
            value1: '静宁县',
            label: '静宁县'
          },
          {
            value: '620881',
            value1: '华亭市',
            label: '华亭市'
          }
        ]
      },
      {
        value: '620900',
        value1: '酒泉市',
        label: '酒泉市',
        children: [
          {
            value: '620902',
            value1: '肃州区',
            label: '肃州区'
          },
          {
            value: '620921',
            value1: '金塔县',
            label: '金塔县'
          },
          {
            value: '620922',
            value1: '瓜州县',
            label: '瓜州县'
          },
          {
            value: '620923',
            value1: '肃北蒙古族自治县',
            label: '肃北蒙古族自治县'
          },
          {
            value: '620924',
            value1: '阿克塞哈萨克族自治县',
            label: '阿克塞哈萨克族自治县'
          },
          {
            value: '620981',
            value1: '玉门市',
            label: '玉门市'
          },
          {
            value: '620982',
            value1: '敦煌市',
            label: '敦煌市'
          }
        ]
      },
      {
        value: '621000',
        value1: '庆阳市',
        label: '庆阳市',
        children: [
          {
            value: '621002',
            value1: '西峰区',
            label: '西峰区'
          },
          {
            value: '621021',
            value1: '庆城县',
            label: '庆城县'
          },
          {
            value: '621022',
            value1: '环县',
            label: '环县'
          },
          {
            value: '621023',
            value1: '华池县',
            label: '华池县'
          },
          {
            value: '621024',
            value1: '合水县',
            label: '合水县'
          },
          {
            value: '621025',
            value1: '正宁县',
            label: '正宁县'
          },
          {
            value: '621026',
            value1: '宁县',
            label: '宁县'
          },
          {
            value: '621027',
            value1: '镇原县',
            label: '镇原县'
          }
        ]
      },
      {
        value: '621100',
        value1: '定西市',
        label: '定西市',
        children: [
          {
            value: '621102',
            value1: '安定区',
            label: '安定区'
          },
          {
            value: '621121',
            value1: '通渭县',
            label: '通渭县'
          },
          {
            value: '621122',
            value1: '陇西县',
            label: '陇西县'
          },
          {
            value: '621123',
            value1: '渭源县',
            label: '渭源县'
          },
          {
            value: '621124',
            value1: '临洮县',
            label: '临洮县'
          },
          {
            value: '621125',
            value1: '漳县',
            label: '漳县'
          },
          {
            value: '621126',
            value1: '岷县',
            label: '岷县'
          }
        ]
      },
      {
        value: '621200',
        value1: '陇南市',
        label: '陇南市',
        children: [
          {
            value: '621202',
            value1: '武都区',
            label: '武都区'
          },
          {
            value: '621221',
            value1: '成县',
            label: '成县'
          },
          {
            value: '621222',
            value1: '文县',
            label: '文县'
          },
          {
            value: '621223',
            value1: '宕昌县',
            label: '宕昌县'
          },
          {
            value: '621224',
            value1: '康县',
            label: '康县'
          },
          {
            value: '621225',
            value1: '西和县',
            label: '西和县'
          },
          {
            value: '621226',
            value1: '礼县',
            label: '礼县'
          },
          {
            value: '621227',
            value1: '徽县',
            label: '徽县'
          },
          {
            value: '621228',
            value1: '两当县',
            label: '两当县'
          }
        ]
      },
      {
        value: '622900',
        value1: '临夏回族自治州',
        label: '临夏回族自治州',
        children: [
          {
            value: '622901',
            value1: '临夏市',
            label: '临夏市'
          },
          {
            value: '622921',
            value1: '临夏县',
            label: '临夏县'
          },
          {
            value: '622922',
            value1: '康乐县',
            label: '康乐县'
          },
          {
            value: '622923',
            value1: '永靖县',
            label: '永靖县'
          },
          {
            value: '622924',
            value1: '广河县',
            label: '广河县'
          },
          {
            value: '622925',
            value1: '和政县',
            label: '和政县'
          },
          {
            value: '622926',
            value1: '东乡族自治县',
            label: '东乡族自治县'
          },
          {
            value: '622927',
            value1: '积石山保安族东乡族撒拉族自治县',
            label: '积石山保安族东乡族撒拉族自治县'
          }
        ]
      },
      {
        value: '623000',
        value1: '甘南藏族自治州',
        label: '甘南藏族自治州',
        children: [
          {
            value: '623001',
            value1: '合作市',
            label: '合作市'
          },
          {
            value: '623021',
            value1: '临潭县',
            label: '临潭县'
          },
          {
            value: '623022',
            value1: '卓尼县',
            label: '卓尼县'
          },
          {
            value: '623023',
            value1: '舟曲县',
            label: '舟曲县'
          },
          {
            value: '623024',
            value1: '迭部县',
            label: '迭部县'
          },
          {
            value: '623025',
            value1: '玛曲县',
            label: '玛曲县'
          },
          {
            value: '623026',
            value1: '碌曲县',
            label: '碌曲县'
          },
          {
            value: '623027',
            value1: '夏河县',
            label: '夏河县'
          }
        ]
      }
    ]
  }
]
