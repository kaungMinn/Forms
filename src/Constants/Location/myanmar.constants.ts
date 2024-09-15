export type TownshipType = { id?: number; _id?: number; label: string };
export type CityType = {
  id?: number;
  _id?: number;
  label: string;
  townships: TownshipType[];
};
export const CITIES: CityType[] = [
  {
    id: 1,
    label: "Yangon",
    townships: [
      { id: 101, label: "South Dagon" },
      { id: 102, label: "North Dagon" },
      { id: 103, label: "Dagon" },
      { id: 104, label: "Bahan" },
    ],
  },
  {
    id: 2,
    label: "Mandalay",
    townships: [
      { id: 201, label: "Chan Aye Thar Zan" },
      { id: 202, label: "Chan Mya Thar Zi" },
      { id: 203, label: "Maha Aung Mye" },
    ],
  },
];
