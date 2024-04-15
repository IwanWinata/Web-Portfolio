interface TinfoDataArray {
  icon?: any;
  text?: string;
  title?: string;
}

interface TqualificationDataArray {
  title: string;
  data:
    | TskillData[]
    | TskillData[]
    | TtoolsData[]
    | TeducationsData[]
    | TexpericesData[];
}

interface TskillData {
  name: string;
}

interface TtoolsData {
  imagePath: string;
}

interface TeducationsData {
  university: string;
  qualification: string;
  years: number;
}

interface TexpericesData {
  company: string;
  role: string;
  years: string;
}
