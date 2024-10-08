export type PriceType = { id: number; label: string; value: string };

export type PlanType = {
  id: number;
  _id?: number;
  label: string;
  value?: string;
  price: PriceType[];
  duration: string;
};

export type PackageType = {
  id: number;
  _id?: number;
  label: string;
  value?: string;
  plans: PlanType[];
};

export type BrandNameType = {
  id: number;
  label: string;
  value: string;
};

export const PACKAGES: PackageType[] = [
  {
    id: 1,
    label: "Basic Internet Plan",
    plans: [
      {
        id: 101,
        label: "Basic 10 Mbps",
        price: [
          { id: 1, label: "MMK", value: "20000" },
          { id: 2, label: "BAHT", value: "148" },
          { id: 3, label: "SGD", value: "5.8" },
        ],
        duration: "1 Months",
      },
      {
        id: 102,
        label: "Basic 25 Mbps",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "4 Days",
      },
      {
        id: 103,
        label: "Basic 50 Mbps",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "1 Months",
      },
    ],
  },
  {
    id: 2,
    label: "Unlimited Streaming Plan",
    plans: [
      {
        id: 201,
        label: "Streaming Standard",
        price: [
          { id: 1, label: "MMK", value: "2000000" },
          { id: 2, label: "BAHT", value: "14800" },
          { id: 3, label: "SGD", value: "58" },
        ],
        duration: "1 Years",
      },
      {
        id: 202,
        label: "Streaming HD",
        price: [
          { id: 1, label: "MMK", value: "30000" },
          { id: 2, label: "BAHT", value: "22.2" },
        ],
        duration: "5 Months",
      },
      {
        id: 203,
        label: "Streaming 4K",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "4 Months",
      },
      {
        id: 204,
        label: "Streaming UHD",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "1 Months",
      },
      {
        id: 205,
        label: "Streaming Max",
        price: [
          { id: 1, label: "MMK", value: "20000" },
          { id: 2, label: "BAHT", value: "148" },
          { id: 3, label: "SGD", value: "5.8" },
        ],
        duration: "5 Months",
      },
    ],
  },
  {
    id: 3,
    label: "Gaming Plan",
    plans: [
      {
        id: 301,
        label: "Gaming 50 Mbps",
        price: [
          { id: 1, label: "MMK", value: "4000000" },
          { id: 2, label: "BAHT", value: "20630" },
          { id: 3, label: "SGD", value: "1160" },
        ],
        duration: "4 Years",
      },
      {
        id: 302,
        label: "Gaming 100 Mbps",
        price: [
          { id: 1, label: "MMK", value: "20000" },
          { id: 2, label: "BAHT", value: "148" },
          { id: 3, label: "SGD", value: "5.8" },
        ],
        duration: "5 Months",
      },
      {
        id: 303,
        label: "Gaming 200 Mbps",
        price: [
          { id: 1, label: "MMK", value: "30000" },
          { id: 2, label: "BAHT", value: "22.2" },
        ],
        duration: "1 Months",
      },
      {
        id: 304,
        label: "Gaming 500 Mbps",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "1 Months",
      },
      {
        id: 305,
        label: "Gaming 1 Gbps",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "5 Months",
      },
    ],
  },
  {
    id: 4,
    label: "Business Plan",
    plans: [
      {
        id: 401,
        label: "Business 100 Mbps",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "1 Months",
      },
      {
        id: 402,
        label: "Business 200 Mbps",
        price: [
          { id: 1, label: "MMK", value: "20000" },
          { id: 2, label: "BAHT", value: "148" },
          { id: 3, label: "SGD", value: "5.8" },
        ],
        duration: "5 Months",
      },
      {
        id: 403,
        label: "Business 500 Mbps",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "4 Days",
      },
      {
        id: 404,
        label: "Business 1 Gbps",
        price: [
          { id: 1, label: "MMK", value: "4000000" },
          { id: 2, label: "BAHT", value: "20630" },
          { id: 3, label: "SGD", value: "1160" },
        ],
        duration: "1 Months",
      },
      {
        id: 405,
        label: "Business 2 Gbps",
        price: [
          { id: 1, label: "MMK", value: "30000000" },
          { id: 2, label: "BAHT", value: "22200" },
        ],
        duration: "5 Months",
      },
    ],
  },
  {
    id: 5,
    label: "Enterprise Plan",
    plans: [
      {
        id: 501,
        label: "Enterprise Basic",
        price: [
          { id: 1, label: "MMK", value: "20000" },
          { id: 2, label: "BAHT", value: "148" },
          { id: 3, label: "SGD", value: "5.8" },
        ],
        duration: "4 Months",
      },
      {
        id: 502,
        label: "Enterprise Pro",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "1 Months",
      },
      {
        id: 503,
        label: "Enterprise Ultra",
        price: [
          { id: 1, label: "MMK", value: "40000" },
          { id: 2, label: "BAHT", value: "206.3" },
          { id: 3, label: "SGD", value: "11.6" },
        ],
        duration: "5 Months",
      },
      {
        id: 504,
        label: "Enterprise Max",
        price: [
          { id: 1, label: "MMK", value: "30000" },
          { id: 2, label: "BAHT", value: "22.2" },
        ],
        duration: "4 Months",
      },
      {
        id: 505,
        label: "Enterprise VIP",
        price: [
          { id: 1, label: "MMK", value: "20000" },
          { id: 2, label: "BAHT", value: "148" },
          { id: 3, label: "SGD", value: "5.8" },
        ],
        duration: "1 Months",
      },
    ],
  },
];

export const BRAND_NAMES: BrandNameType[] = [
  { id: 1, label: "Hi Internet", value: "hiInternet" },
  { id: 2, label: "Hi Wifi", value: "hiWifi" },
  { id: 3, label: "We Link", value: "weLink" },
];
