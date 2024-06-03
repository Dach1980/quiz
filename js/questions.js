const questions = [
  {
    question: "Вопрос 1. Договором согласно Гражданскому Кодексу РФ признаётся (выберите один правильный вариант продолжения фразы)...",
    answer: 
    ["соглашение двух или нескольких лиц об установлении, изменении или прекращении гражданских прав и обязанностей"],
    options: [
      "соглашение между собой двух или более сторон (субъектов), по какому-либо вопросу", 
      "соглашение, условие, заключаемое между двумя или несколькими лицами, взаимное обязательство", 
      "соглашение двух или нескольких лиц об установлении, изменении или прекращении гражданских прав и обязанностей", 
      "действия граждан и юридических лиц, направленные на установление, изменение или прекращение гражданских прав и обязанностей",
      "правовая цель, к достижению которой стремятся субъекты"
    ]
  },
  {
    question: "Вопрос 2. Какое из нижеперечисленных лиц обеспечивает выполнение работ по договорам о подготовке проектной документации (выберите один вариант правильного ответа)?",
    answer: ["Главный инженер проекта, главный архитектор проекта"],
    options: [
      "Застройщик, технический заказчик, лицо, ответственное за эксплуатацию здания, сооружения, региональный оператор", 
      "Главный инженер проекта, главный архитектор проекта", 
      "Лицо, осуществляющее подготовку проектной документации", 
      "Саморегулируемая организация, основанная на членстве лиц, осуществляющих подготовку проектной документации",
      "Местные органы исполнительной власти"
    ]
  },
  {
    question: 'Вопрос 3. Выберите из списка определение термина "предпроектная подготовка в строительстве":',
    answer: ["комплекс работ, проводимых в целях обоснования градостроительной деятельности на территории и получение права на ее проведение"],
    options: [
      "комплекс работ, проводимых в целях обоснования градостроительной деятельности на территории и получение права на ее проведение", 
      "комплекс взаимосвязанных мероприятий, направленных на подготовку создания объекта (основных фондов), комплекса объектов производственного или непроизводственного назначения, линейных сооружений", 
      "комплекс мероприятий, направленных на привлечение, вложение и управление инвестициями (инвестирование) для целей строительства, реконструкции и капитального ремонта", 
      "комплекс мероприятий, направленных на подготовку ввода в действие объектов производственного и непроизводственного назначения, а также линейных сооружений",
      "комплекс работ, проводимых в целях определения технико-экономических показателей и проектных значений основных параметров планируемого к строительству, реконструкции объекта капитального строительства"
    ]
  },
  {
    question: "Вопрос 4. Какой коэффициент принимается для пересчета стоимости строительства объектов из уровня цен по состоянию на 01.01.2000 в уровень цен по состоянию на 01.01.2001?",
    answer: ["1.25"],
    options: [
      "1.1", 
      "1.15", 
      "1.17", 
      "1.2",
      "1.25"
    ]
  },
  {
    question: "Вопрос 5. Как называется часть цифровой информационной модели, представляющая конструкцию, компонент, систему, сборку в пределах объекта строительства или строительной площадки (выберите один вариант правильного ответа)?",
    answer: ["элемент модели"],
    options: [
      "элемент модели", 
      "группа элементов модели", 
      "строительный элемент идентификатор", 
      "среда общих данных",
      "классификатор"
    ]
  },
  {
    question: "Вопрос 6. За исключением каких случаев согласованные в установленном порядке специальные технические условия (СТУ) могут являться основанием для включения содержащихся в СТУ требований к зданиям и сооружениям, а также к связанным со зданиями и с сооружениями процессам проектирования, строительства, монтажа, наладки в национальные стандарты и своды правил, применение которых обеспечивает соблюдение требований ФЗ Технический регламент о безопасности зданий и сооружений (выберите один вариант правильного ответа)?",
    answer: ["могут во всех случаях без исключений"],
    options: [
      "не могут во всех случаях без исключений", 
      "могут во всех случаях без исключений",
      "могут за исключением случаев, если СТУ разрабатывались для объектов капитального строительства повышенного уровня ответственности", 
      "могут за исключением случаев, если СТУ разрабатывались для объектов капитального строительства, относящихся к категории уникальных",
      "могут за исключением случаев, если СТУ разрабатывались для объектов капитального строительства, относящихся к категории особо опасных и технически сложных"
    ]
  },
  {
    question: "Вопрос 7. На основании какого документа осуществляется подключение объекта капитального строительства к сетям инженерно-технического обеспечения (выберите один вариант правильного ответа)?",
    answer: ["договора о подключении объекта капитального строительства к сетям инженерно-технического обеспечения"],
    options: [
      "договора о подключении объекта капитального строительства к сетям инженерно-технического обеспечения", 
      "уведомления от технического заказчика (застройщика) о необходимости осуществить подключение (технологическое присоединение)", 
      "разрешения на ввод объекта в эксплуатацию", 
      "акта о соответствии параметров построенного объекта",
      "заявления о подключении объекта капитального строительства к сетям инженерно-технического обеспечения"
    ]
  },
  {
    question: "Вопрос 8. При определении стоимости проектных работ по ценам Справочников базовых цен на проектные работы при наличии нескольких усложняющих факторов и применении, в связи с этим, нескольких коэффициентов, больших единицы, общий повышающий коэффициент определяется путем (выберите один правильный вариант продолжения фразы)...",
    answer: ["суммирования их дробных частей и единицы"],
    options: [
      "перемножения", 
      "суммирования их дробных частей и единицы", 
      "применения максимального значения коэффициента", 
      "вычисления среднего арифметического значения"
    ]
  },
  {
    question: "Вопрос 9. Какое из нижеперечисленных действий НЕ является обязанностью подрядчика по договору подряда на выполнение проектных и изыскательских работ (выберите один вариант правильного ответа)?",
    answer: ["определение способов выполнения работ"],
    options: [
      "выполнение работ в соответствии с заданием и иными исходными данными на проектирование и договором.", 
      "согласование готовой технической документации с заказчиком", 
      "согласование готовой технической документации при необходимости вместе с заказчиком - с компетентными государственными органами и органами местного самоуправления", 
      "передача заказчику готовой технической документации",
      "определение способов выполнения работ"
    ]
  },
  {
    question: "Вопрос 10. В каком случае, условия заключенного договора НЕ сохраняют силу, если принят закон, устанавливающий обязательные для сторон правила иные, чем те, которые действовали при заключении договора (выберите один вариант правильного ответа)?",
    answer: ["Когда в принятом законе установлено, что его действие распространяется на отношения, возникшие из ранее заключенных договоров"],
    options: [
      "Когда в принятом законе установлено, что его действие распространяется на отношения, возникшие из ранее заключенных договоров", 
      "Когда в подзаконном акте, принятом на основании такого закона, установлено, что его действие распространяется на отношения, возникшие из ранее заключенных договоров", 
      "Когда вносятся изменения в ранее принятые законы", 
      "Когда обязательные для сторон правила иные, чем те, которые действовали при заключении договора, установлены указом или распоряжением Президента РФ",
      "Такие случаи законодательством не предусмотрены"
    ]
  },
  {
    question: "Вопрос 11. Какие материалы в графической форме должны содержаться в проекте организации работ по сносу объекта (выберите один вариант правильного ответа)?",
    answer: ["чертежи защитных устройств сетей инженерно-технического обеспечения"],
    options: [
      "схема планировочной организации земельного участка", 
      "расчётная схема несущих строительных конструкций применительно к конструктивной системе объекта капитального строительства", 
      "чертежи защитных устройств сетей инженерно-технического обеспечения", 
      "схема расположения ограждающих конструкций и перегородок",
      "план и сечения фундаментов"
    ]
  },
  {
    question: "Вопрос 12. На какой период времени рекомендуется определение значения индекса-дефлятора к стоимости проектных работ, определяемой при определении начальной (максимальной) цены контракта (выберите один вариант правильного ответа)?",
    answer: ["на середину нормативного срока проектирования"],
    options: [
      "на середину нормативного срока проектирования", 
      "на начало нормативного срока проектирования", 
      "на окончание нормативного срока проектирования", 
      "на планируемую дату подачи проектной документации на экспертизу",
      "на дату окончания проведения инженерных изысканий"
    ]
  },
  {
    question: "Вопрос 13. Кем устанавливается размер повышающего коэффициента к стоимости проектных работ для реконструкции действующих предприятий (выберите один вариант правильного ответа)?",
    answer: ["проектной организацией по согласованию с заказчиком"], 
    options: [
      "заказчиком по согласованию с проектной организацией", 
      "проектной организацией по согласованию с заказчиком", 
      "заказчиком", 
      "проектной организацией",
      "Минстроем России"
    ]
  },
  {
    question: "Вопрос 14. Каким нормативным актом определен порядок заключения договора подряда на выполнение проектных и изыскательских работ (выберите один вариант правильного ответа)?",
    answer: ["Гражданским кодексом Российской Федерации"],
    options: [
      "Градостроительным кодексом Российской Федерации", 
      "Гражданским кодексом Российской Федерации", 
      "Земельным кодексом Российской Федерации", 
      "Жилищным кодексом Российской Федерации",
      "Трудовым кодексом Российской Федерации"
    ]
  },
  {
    question: "Вопрос 15. Какие сети НЕ относятся к сетям инженерно-технического обеспечения (выберите один вариант правильного ответа)?",
    answer: ["компьютерные сети"],
    options: [
      "компьютерные сети", 
      "сети электроснабжения", 
      "сети газоснабжения", 
      "сети теплоснабжения",
      "сети водоснабжения", 
      "сети водоотведения",
      "сети связи"
    ]
  },
  {
    question: "Вопрос 16. Как называются данные, определяющие размеры, форму и пространственное расположение элемента цифровой информационной модели (выберите один вариант правильного ответа)?",
    answer: ["геометрические данные"],
    options: [
      "атрибутивные данные", 
      "геометрические данные", 
      "физические данные", 
      "цифровые данные",
      "организационно-технологические данные"
    ]
  },
  {
    question: "Вопрос 17. При каком условии договором подряда на подготовку проектной документации может быть предусмотрена подготовка задания на выполнение инженерных изысканий и обеспечение получения технических условий (выберите один вариант правильного ответа)?",
    answer: ["может при любых условиях"],
    options: [
      "может при любых условиях", 
      "не может при любых условиях", 
      "может, при условии заключения договора на подготовку проектной документации для объекта, строительство которого осуществляется с использованием средств бюджетов бюджетной системы РФ", 
      "может, при условии заключения договора на подготовку проектной документации для объекта, относящегося к категории особо опасных и технически сложных",
      "может, при условии заключения договора на подготовку проектной документации для объекта нормального уровня ответственности"
    ]
  },
  {
    question: "Вопрос 18. Кем могут выполняться работы по договорам о подготовке проектной документации, внесению изменений в проектную документацию, заключенным с застройщиком, техническим заказчиком, лицом, ответственным за эксплуатацию здания, сооружения, региональным оператором (выберите несколько вариантов правильных ответов)?",
    answer: 
    [
      "индивидуальными предпринимателями, являющимися членами саморегулируемых организаций в области архитектурно-строительного проектирования", 
      "юридическими лицами, являющимися членами саморегулируемых организаций в области архитектурно-строительного проектирования"
    ],
    options: [
      "индивидуальными предпринимателями, являющимися членами саморегулируемых организаций в области архитектурно-строительного проектирования", 
      "юридическими лицами, являющимися членами саморегулируемых организаций в области архитектурно-строительного проектирования", 
      "физическим лицом, являющимся членом саморегулируемых организаций в области архитектурно-строительного проектирования", 
      "научными работниками, имеющим профильную ученую степень кандидата или доктора наук",
      "физическими лицами, имеющими квалификационный аттестат на право подготовки заключений экспертизы проектной документации и (или) экспертизы результатов инженерных изысканий"
    ]
  },
  {
    question: "Вопрос 19. В каком разделе проектной документации на объекты капитального строительства производственного и непроизводственного назначения может содержаться декларация безопасности гидротехнических сооружений (выберите один вариант правильного ответа)?",
    answer: ["«Иная документация в случаях, предусмотренных законодательными и иными нормативными правовыми актами Российской Федерации»"],
    options: [
      "«Мероприятия по охране окружающей среды»", 
      "«Мероприятия по обеспечению пожарной безопасности»", 
      "«Смета на строительство, реконструкцию, капитальный ремонт, снос объекта капитального строительства»", 
      "«Иная документация в случаях, предусмотренных законодательными и иными нормативными правовыми актами Российской Федерации»",
      "«Сведения об инженерном оборудовании, о сетях и системах инженерно-технического обеспечения»"
    ]
  },
  {
    question: 'Вопрос 20. Какие схемы содержит графическая часть раздела Раздел 8 "Требования к обеспечению безопасной эксплуатации линейного объекта" (выберите один вариант правильного ответа)?',
    answer: ["раздел не содержит графической части"],
    options: [
      "карту-схему границ зон экологического риска и возможного загрязнения окружающей природной среды вследствие аварии на линейном объекте", 
      "карту-схему с указанием размещения линейного объекта и границ зон с особыми условиями использования территории", 
      "организационно-технологические схемы", 
      "схемы линейного объекта с обозначением мест расположения зданий, строений и сооружений, проектируемых в составе линейного объекта и обеспечивающих его функционирование",
      "раздел не содержит графической части"
    ]
  },
  {
    question: "Вопрос 21. Каким юридическим лицом или индивидуальным предпринимателем может осуществляться подготовка проектной документации по договору с генеральным проектировщиком (выберите один вариант правильного ответа)?",
    answer: ["любым юридическим лицом или индивидуальным предпринимателем"],
    options: [
      "являющимся членом саморегулируемой организации в области архитектурно-строительного проектирования", 
      "имеющим допуск саморегулируемой организации на определённый вид работ по подготовке проектной документации", 
      "имеющим в штате по постоянному месту работы не менее двух сотрудников на должности ГИПа (ГАПа), включённых в Национальный реестр специалистов в области проектирования", 
      "невключённым в Реестр недобросовестных поставщиков (подрядчиков, исполнителей) и (или) Реестр недобросовестных подрядных организаций",
      "любым юридическим лицом или индивидуальным предпринимателем"
    ]
  },
  {
    question: "Вопрос 22. Проектная документация каких объектов может НЕ содержать перечень мероприятий по предупреждению чрезвычайных ситуаций природного и техногенного характера (выберите один вариант правильного ответа)?",
    answer: ["Объектов связи"],
    options: [
      "Особо-опасных и технически сложных объектов", 
      "Объектов связи", 
      "Пунктов хранения радиоактивных отходов", 
      "Опасных производственных объектов",
      "Объектов обороны"
    ]
  },
  {
    question: 'Вопрос 23. Какие трудовые функции входят в профессиональный стандарт "Специалист по организации архитектурно-строительного проектирования" для 7 уровня квалификации (выберите несколько вариантов правильных ответов)?',
    answer: 
    [
      "согласование с заказчиками перечня и состава исходно-разрешительной документации на проектирование объектов капитального строительства и подготовка договоров на проектные работы", 
      "подготовка организационно-распорядительной документации по объектам капитального строительства", 
      "контроль разработки и выпуска проектной документации, в том числе ее разделов и частей, и рабочей документации, в том числе основных комплектов рабочих чертежей, прилагаемых документов, сметной документации, для объектов капитального строительства"
    ],
    options: [
      "согласование с заказчиками перечня и состава исходно-разрешительной документации на проектирование объектов капитального строительства и подготовка договоров на проектные работы", 
      "подготовка организационно-распорядительной документации по объектам капитального строительства", 
      "контроль разработки и выпуска проектной документации, в том числе ее разделов и частей, и рабочей документации, в том числе основных комплектов рабочих чертежей, прилагаемых документов, сметной документации, для объектов капитального строительства", 
      "организация процесса архитектурно-строительного проектирования объектов капитального строительства",
      "техническое руководство процессом архитектурно-строительного проектирования объектов капитального строительства"
    ]
  },
  {
    question: "Вопрос 24. В каком разделе проектной документации на объекты капитального строительства производственного и непроизводственного назначения содержится декларация промышленной безопасности опасных производственных объектов (выберите один вариант правильного ответа)?",
    answer: "Иная документация в случаях, предусмотренных законодательными и иными нормативными правовыми актами Российской Федерации",
    options: [
      "Мероприятия по охране окружающей среды", 
      "Мероприятия по обеспечению пожарной безопасности", 
      "Смета на строительство, реконструкцию, капитальный ремонт, снос объекта капитального строительства", 
      "Иная документация в случаях, предусмотренных законодательными и иными нормативными правовыми актами Российской Федерации",
      "Проект организации строительства"
    ]
  },
  {
    question: "Вопрос 25. Каким образом на документе может проставляться гриф согласования в зависимости от вида документа и особенностей его оформления (выберите несколько вариантов правильных ответов)?",
    answer: [
      "на первом листе документа (если документ имеет титульный лист, - на титульном листе) в левом верхнем углу на уровне грифа утверждения", 
      "на листе согласования"
    ],
    options: [
      "на первом листе документа (если документ имеет титульный лист, - на титульном листе) в левом верхнем углу на уровне грифа утверждения", 
      "на последнем листе документа под текстом", 
      "на листе согласования", 
      'постановкой штампом или надписью "Согласовано" на каждом листе документа',
      "произвольно"
    ]
  },
  {
    question: 'Вопрос 26. В каком разделе проектной документации на линейные объекты капитального строительства содержится описание и обоснование проектных решений при реализации требований, предусмотренных статьей 8 Федерального закона "О транспортной безопасности" (выберите один вариант правильного ответа)?',
    answer: ["Технологические и конструктивные решения линейного объекта. Искусственные сооружения"],
    options: [
      "Пояснительная записка", 
      "Проект полосы отвода", 
      "Технологические и конструктивные решения линейного объекта. Искусственные сооружения", 
      "Здания, строения и сооружения, входящие в инфраструктуру линейного объекта",
      "Мероприятия по обеспечению пожарной безопасности"
    ]
  },
  {
    question: "Вопрос 27. Каким специалистом исполняется должностная обязанность по утверждению подтверждения соответствия вносимых в проектную документацию изменений, не влекущих за собой изменение класса, категории и (или) первоначально установленных показателей функционирования линейных объектов (выберите один вариант правильного ответа)?",
    answer: ["специалистом по организации архитектурно-строительного проектирования в должности главного инженера проекта"],
    options: [
      "специалистом по организации архитектурно-строительного проектирования в должности главного инженера проекта", 
      "специалистом по организации строительства в должности главного инженера проекта", 
      "специалистом по организации инженерных изысканий в должности главного инженера проекта", 
      "специалистом по организации архитектурно-строительного проектирования в должности главного архитектора проекта",
      "специалистом по организации и проведению экспертизы проектной документации в должности главного эксперта"
    ]
  },
  {
    question: "Вопрос 28. Какой раздел проектной документации для линейных объектов содержит в графической части схему линейного объекта с обозначением мест расположения зданий, строений и сооружений, проектируемых в составе линейного объекта и обеспечивающих его функционирование (выберите один вариант правильного ответа)?",
    answer: ["Здания, строения и сооружения, входящие в инфраструктуру линейного объекта"],
    options: [
      "Пояснительная записка", 
      "Проект полосы отвода", 
      "Технологические и конструктивные решения линейного объекта. Искусственные сооружения", 
      "Здания, строения и сооружения, входящие в инфраструктуру линейного объекта",
      "Требования к обеспечению безопасной эксплуатации линейного объекта"
    ]
  },
  {
    question: "Вопрос 29. Какая из нижеперечисленных обязанностей НЕ относится к должностной обязанности специалиста по организации архитектурно-строительного проектирования (выберите один вариант правильного ответа)?",
    answer: ["подписание акта приёмки объекта капитального строительства"],
    options: [
      "утверждение заданий на проектирование объекта капитального строительства", 
      "приемка результатов работ по подготовке проектной документации", 
      "утверждение проектной документации", 
      "утверждение в соответствии с требованиями законодательства подтверждения соответствия вносимых в проектную документацию изменений",
      "подписание акта приёмки объекта капитального строительства"
    ]
  },
  {
    question: "Вопрос 30. В каком разделе проектной документации объектов капитального строительства производственного и непроизводственного назначения в графической части указываются места размещения существующих и проектируемых объектов капитального строительства с указанием существующих и проектируемых подъездов и подходов к ним, границы зон действия публичных сервитутов (при их наличии), зданий и сооружений объекта капитального строительства, подлежащих сносу (при их наличии) и решений по планировке, благоустройству, озеленению и освещению территории (выберите один вариант правильного ответа)?",
    answer: ["Схема планировочной организации земельного участка"],
    options: [
      "Схема планировочной организации земельного участка", 
      "Объемно-планировочные и архитектурные решения", 
      "Мероприятия по обеспечению доступа инвалидов к объекту капитального строительства", 
      "Иная документация в случаях, предусмотренных законодательными и иными нормативными правовыми актами Российской Федерации",
      "Мероприятия по обеспечению пожарной безопасности",
      "Мероприятия по охране окружающей среды"
    ]
  },
  {
    question: "Вопрос 31. Каким образом на документе проставляется гриф утверждения должностным лицом (выберите один вариант правильного ответа)?",
    answer: ["размещается в правом верхнем углу первого листа документа"],
    options: [
      "размещается в правом верхнем углу первого листа документа", 
      "размещается на отдельном листе, приложенному к документу", 
      'постановкой штампом или надписью "Утверждаю" на каждом листе документа', 
      "размещается на обратной стороне последней страницы сшитого документа",
      "произвольно"
    ]
  },
  {
    question: "Вопрос 32. Кем принимается решение об исключении сведений о физическом лице из национального реестра специалистов в области архитектурно-строительного проектирования в случае неисполнении таким физическим лицом должностных обязанностей специалиста по организации архитектурно-строительного проектирования (выберите один вариант правильного ответа)?",
    answer: ["Советом Национального объединения изыскателей и проектировщиков"],
    options: [
      "Работодателем специалиста в области архитектурно-строительного проектирования", 
      "Министерством строительства и жилищно-коммунального хозяйства РФ ", 
      "Советом Национального объединения изыскателей и проектировщиков", 
      "Саморегулируемой организацией",
      "Оператором национального реестра специалистов в области архитектурно-строительного проектирования"
    ]
  },
  {
    question: 'Вопрос 33. Какой подраздел раздела проектной документации "Сведения об инженерном оборудовании, о сетях и системах инженерно-технического обеспечения" содержит в графической части планы размещения оконечного оборудования, иных технических, радиоэлектронных средств и высокочастотных устройств (при наличии) (выберите один вариант правильного ответа)?',
    answer: ["Сети связи"],
    options: [
      "Система электроснабжения", 
      "Система водоснабжения", 
      "Система водоотведения", 
      "Отопление, вентиляция и кондиционирование воздуха, тепловые сети",
      "Сети связи", 
      "Система газоснабжения"
    ]
  },
  {
    question: "Вопрос 34. Кому из нижеперечисленных лиц Градостроительным кодексом предоставлено право выполнять оценку соответствия изменений, внесенных в проектную документацию, получившую положительное заключение экспертизы проектной документации, в форме экспертного сопровождения (выберите один вариант правильного ответа)?",
    answer: ["Органу исполнительной власти"],
    options: [
      "Органу исполнительной власти", 
      "Застройщику или техническому заказчику", 
      "Проектной организации, осуществляющая авторский надзор", 
      "Лицу, осуществлявшему подготовку проектной документации",
      "Органу государственного строительного контроля"
    ]
  },
  {
    question: "Вопрос 35. Место расположения водоприемников для водозаборов хозяйственно-питьевого водоснабжения должно приниматься (выберите один правильный вариант продолжения фразы)...",
    answer: ["выше по течению водотока выпусков сточных вод, населенных пунктов"],
    options: [
      "выше по течению водотока выпусков сточных вод, населенных пунктов", 
      "за границами санитарно-защитных зон выпусков сточных вод, населенных пунктов", 
      "за границами населенных пунктов", 
      "в радиусе не менее 1км от выпусков сточных вод, населенных пунктов",
      "в радиусе не менее 0.5км от выпусков сточных вод, населенных пунктов"
    ]
  },
  {
    question: "Вопрос 36. В каком случае проектная документация подлежит экспертной оценке в полном объеме после проведения первичной государственной экспертизы (выберите один вариант правильного ответа)?",
    answer: ["в случае, если в законодательство РФ внесены изменения, в соответствии с которыми государственная экспертиза должна осуществляться иной организацией по проведению государственной экспертизы"],
    options: [
      "в случае замены лица, осуществляющего подготовку проектной документации и устранения замечаний в процессе проведения государственной экспертизы", 
      "в случае, если в законодательство РФ внесены изменения, в соответствии с которыми государственная экспертиза должна осуществляться иной организацией по проведению государственной экспертизы", 
      "в случае наличия существенного количества замечаний по результатам первичной государственной экспертизы", 
      "в случае, если проводится экспертиза проектной документации объекта капитального строительства, относящегося к категории уникальных",
      "в случае, если проводится экспертиза проектной документации объекта капитального строительства, относящегося к категории особо опасных и технически сложных"
    ]
  },
  {
    question: "Вопрос 37. На каких территориях не допускается размещение производственных объектов (выберите несколько вариантов правильных ответов)?",
    answer: 
    [
      "в зеленых зонах городов", 
      "в опасных зонах отвалов породы угольных и сланцевых шахт", 
      "в зонах возможного катастрофического затопления в результате разрушения плотин или дамб" 
    ],    
    options: [
      "в зеленых зонах городов", 
      "в опасных зонах отвалов породы угольных и сланцевых шахт", 
      "в климатических зонах с наличием вечномерзлых грунтов", 
      "в зонах возможного катастрофического затопления в результате разрушения плотин или дамб",
      "в сейсмических районах с нормативной сейсмичностью 9 баллов"
    ]
  },
  {
    question: "Вопрос 38. Прокладка каких транзитных линий допускается через помещения пристроенных убежищ (выберите один вариант правильного ответа)?",
    answer: "проводных средств связи",
    options: [
      "водопровода", 
      "отопления", 
      "электроснабжения", 
      "газопроводов",
      "проводных средств связи"
    ]
  },
  {
    question: "Вопрос 39. Максимальное расстояние между пожарными гидрантами на противопожарном водопроводе на станциях и грузовых пунктах промышленного транспорта должно быть (выберите один правильный вариант продолжения фразы)...",
    answer: ["не более 150 м"],
    options: [
      "не более 50 м", 
      "не более 100 м", 
      "не более 150 м", 
      "не более 200 м",
      "не более 250 м"
    ]
  },
  {
    question: "Вопрос 40. На какие основные виды подразделяются бетонные и железобетонные плотины по технологическому назначению (выберите несколько вариантов правильных ответов)?",
    answer: 
    [
      "Глухие", 
      "Станционные", 
      "Водосбросные" 
    ],
    options: [
      "Глухие", 
      "Гравитационные", 
      "Станционные", 
      "Контрфорсные",
      "Водосбросные"
    ]
  },
  {
    question: "Вопрос 41. В каких единицах измеряется коэффициент естественной освещённости (выберите один вариант правильного ответа)?",
    answer: "проценты",
    options: [
      "люксы", 
      "люмены", 
      "канделы", 
      "проценты",
      "градусы"
    ]
  },
  {
    question: "Вопрос 42. В каком случае проводится оценка разделов проектной документации, в которые не вносились изменения, на предмет соответствия этих разделов требованиям технических регламентов при проведении экспертизы проектной документации, подготовленной с использованием типовой проектной документации (выберите один вариант правильного ответа)?",
    answer: ["Не проводится в любых случаях"],
    options: [
      "Проводится в любом случае", 
      "Не проводится в любых случаях", 
      "Проводится только в случае, если объект капитального строительства относится к категории объектов непроизводственного назначения", 
      "Проводится только в случае, если объект капитального строительства относится к категории объектов производственного назначения",
      "Проводится только в случае, если объект капитального строительства относится к категории технически сложных"
    ]
  },
  {
    question: "Вопрос 43. Вне территорий промышленных предприятий и АГЗС и при отсутствии многолетнемерзлых грунтов НЕ допускается прокладка наружных газопроводов (выберите один правильный вариант продолжения фразы)",
    answer: ["в тоннелях, коллекторах и каналах"],
    options: [
      "по стенам газифицируемых зданий", 
      "в тоннелях, коллекторах и каналах", 
      "из полиэтиленовых труб с со экструзионными слоями", 
      "из медных труб",
      "стальных труб толщиной стенки 5 мм и менее"
    ]
  },
  {
    question: 'Вопрос 44. Возможность оснащения и применения каких средств защиты должна обеспечивать проектная документация объектов производственного назначения общей площадью более 1500м.кв. классом объекта по значимости 3 (выберите несколько вариантов правильных ответов)?',
    answer:
    [
      "контрольно-пропускной пункт в здании", 
      "система контроля и управления доступом",
      "средства визуального досмотра"
    ],
    options: [
      "ограждение периметра и контрольно-пропускные пункты по периметру", 
      "контрольно-пропускной пункт в здании", 
      "досмотровый радиометрический комплекс", 
      "система контроля и управления доступом",
      "средства визуального досмотра"
    ]
  },
  {
    question: "Вопрос 45. В каких случаях при проектировании новых и реконструкции существующих городских и сельских муниципальных образований следует конкретизировать основные требования к их планировке и застройке с учетом региональных особенностей (выберите один вариант правильного ответа)?",
    answer: ["Следует, если указанные особенности содержатся в региональных и местных нормативах градостроительного проектирования, утвержденных в установленном порядке"],
    options: [
      "Не следует в любых случаях", 
      "Следует, если строительство или реконструкция финансируется с привлечением средств регионального или местного бюджета", 
      "Следует, если указанные особенности содержатся в региональных и местных нормативах градостроительного проектирования, утвержденных в установленном порядке", 
      "Следует для жилых и общественно-деловых зон",
      "Следует для жилых, общественно-деловых зон и зон рекреационного назначения"
    ]
  },
  {
    question: "Вопрос 46. Какой должна быть температура воды для горячего водоснабжения в местах водоразбора независимо от применяемой системы теплоснабжения?",
    answer: ["не ниже 60°С и не выше 75°С"],
    options: [
      "не выше 50°С", 
      "не ниже 50°С и не выше 60°С", 
      "не ниже 60°С и не выше 75°С", 
      "не ниже 75°С и не выше 80°С",
      "не выше 80°С"
    ]
  },
  {
    question: "Вопрос 47. Как называется контроль лица, осуществившего подготовку проектной документации, за соблюдением в процессе строительства требований проектной документации согласно ФЗ Технический регламент о безопасности зданий и сооружений (выберите один вариант правильного ответа)?",
    answer: ["авторский надзор"],
    options: [
      "авторский надзор", 
      "технический надзор", 
      "строительный контроль", 
      "государственный строительный надзор",
      "лабораторный контроль"
    ]
  },
  {
    question: "Вопрос 48. Какие факторы должны учитываться при размещении зданий и сооружений тепловых электростанций (выберите несколько вариантов правильных ответов)?",
    answer: ["расположение подходов автомобильных и железных дорог"],
    options: [
      "направление господствующих ветров", 
      "направление выдачи электрической мощности", 
      "геологические условия", 
      "широта и долгота участка строительства",
      "расположение подходов автомобильных и железных дорог"
    ]
  },
  {
    question: "Вопрос 49. На какие типы по назначению подразделяют котельные (выберите несколько вариантов правильных ответов)?",
    answer: 
    [
      "отопительные", 
      "отопительно-производственные", 
      "производственные"
    ],
    options: [
      "отопительные", 
      "отопительно-производственные", 
      "производственные", 
      "коммунальные",
      "отопительно-коммунальные"
    ]
  },
  {
    question: "Вопрос 50. В холодный период года в производственных помещениях отапливаемых зданий (кроме помещений, для которых параметры воздуха установлены другими нормативными документами), когда они не используются, в нерабочее время и при устранении аварий на системе теплоснабжения, следует поддерживать минимальную температуру воздуха не ниже (выберите один правильный вариант продолжения фразы)...:",
    answer: ["5°С"],
    options: [
      "5°С", 
      "10°С", 
      "12°С", 
      "15°С",
      "18°С"
    ]
  },

]