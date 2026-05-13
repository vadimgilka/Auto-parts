import { ImageSourcePropType } from "react-native";

export type CarPart = {
  slug: string;
  label: string;
  image?: ImageSourcePropType;
  description: string;
};

export const carPartsData: CarPart[] = [
  {
    slug: 'battery',
    label: 'Аккумулятор',
    image: require('../../assets/battery.jpg'),
    description:
      'Поставляет электричество для запуска двигателя и питания бортовой электроники при выключенном моторе; теряет ёмкость со временем и в холоде.',
  },
  {
    slug: 'shock-absorber',
    label: 'Амортизатор',
    image: require('../../assets/shock-absorber.jpg'),
    description:
      'Гасит колебания подвески, удерживает колесо в контакте с дорогой и повышает комфорт и управляемость; изношенные амортизаторы ухудшают устойчивость.',
  },
  {
    slug: 'air-filter',
    label: 'Воздушный фильтр',
    image: require('../../assets/air-filter.jpg'),
    description:
      'Фильтрует воздух, поступающий в двигатель, защищая его от пыли и частиц; загрязнённый фильтр снижает мощность и увеличивает расход топлива.',
  },
  {
    slug: 'muffler',
    label: 'Глушитель',
    image: require('../../assets/muffler.jpg'),
    description:
      'Поглощает звуковые волны выхлопных газов и снижает шум автомобиля; повреждённый глушитель увеличивает шум и может влиять на выбросы.',
  },
  {
    slug: 'oil-filter',
    label: 'Масляный фильтр',
    image: require('../../assets/oil-filter.jpg'),
    description:
      'Удаляет загрязнения из моторного масла, продлевая ресурс двигателя; регулярная замена необходима при каждом масляном обслуживании.',
  },
  {
    slug: 'radiator',
    label: 'Радиатор',
    image: require('../../assets/radiator.jpg'),
    description:
      'Отводит тепло от охлаждающей жидкости, поддерживая рабочую температуру двигателя; утечки или засоры приводят к перегреву.',
  },
  {
    slug: 'timing-belt',
    label: 'Ремень ГРМ',
    image: require('../../assets/timing-belt.jpg'),
    description:
      'Синхронизирует коленчатый и распределительный валы; разрыв или пропуск зуба может вызвать серьёзные повреждения двигателя.',
  },
  {
    slug: 'silent-block',
    label: 'Сайлентблок',
    image: require('../../assets/silent-block.jpg'),
    description:
      'Резинометаллическая опора в подвеске или подрамнике, демпфирует вибрации и обеспечивает подвижность узлов; износ вызывает стуки и ухудшение управляемости.',
  },
  {
    slug: 'spark-plug',
    label: 'Свеча зажигания',
    image: require('../../assets/spark-plug.jpg'),
    description:
      'Создаёт искру для воспламенения топливной смеси в бензиновых двигателях; изношенные свечи вызывают пропуски зажигания и повышенный расход топлива.',
  },
  {
    slug: 'starter',
    label: 'Стартер',
    image: require('../../assets/starter.jpg'),
    description:
      'Электродвигатель, вращающий коленчатый вал для запуска двигателя; при неисправности двигатель не запускается или стартер работает с перебоями.',
  },
  {
    slug: 'brake-pad',
    label: 'Тормозная колодка',
    image: require('../../assets/brake-pad.jpg'),
    description:
      'Фрикционный элемент, прижимающийся к диску для торможения; износ колодок увеличивает тормозной путь и может повредить диск.',
  },
  {
    slug: 'brake-disc',
    label: 'Тормозной диск',
    image: require('../../assets/brake-disc.jpg'),
    description:
      'Рабочая поверхность для тормозных колодок; перегрев, износ или деформация приводят к вибрациям и снижению эффективности торможения.',
  },
];
