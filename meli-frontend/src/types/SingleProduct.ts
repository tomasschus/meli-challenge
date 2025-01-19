interface ItemAttribute {
  id: string;
  name: string;
  value_id: string | null;
  value_name: string;
  value_struct: { number: number; unit: string } | null;
  values: {
    id: string | null;
    name: string;
    struct: { number: number; unit: string } | null;
  }[];
  value_type: string;
}

interface ItemPicture {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: string;
}

interface ItemSellerAddress {
  city: { id: string; name: string };
  state: { id: string; name: string };
  country: { id: string; name: string };
  search_location: {
    neighborhood: { id: string; name: string };
    city: { id: string; name: string };
    state: { id: string; name: string };
  };
  id: number;
}

interface ItemShipping {
  mode: string;
  methods: string[];
  tags: string[];
  dimensions: string | null;
  local_pick_up: boolean;
  free_shipping: boolean;
  logistic_type: string;
  store_pick_up: boolean;
}

export interface Item {
  id: string;
  site_id: string;
  title: string;
  seller_id: number;
  category_id: string;
  official_store_id: number | null;
  price: number;
  base_price: number;
  original_price: number | null;
  currency_id: string;
  initial_quantity: number;
  sale_terms: ItemAttribute[];
  buying_mode: string;
  listing_type_id: string;
  condition: string;
  permalink: string;
  thumbnail_id: string;
  thumbnail: string;
  pictures: ItemPicture[];
  video_id: string | null;
  descriptions: string[];
  accepts_mercadopago: boolean;
  non_mercado_pago_payment_methods: string[];
  shipping: ItemShipping;
  international_delivery_mode: string;
  seller_address: ItemSellerAddress;
  seller_contact: string | null;
  location: object;
  coverage_areas: string[];
  attributes: ItemAttribute[];
  listing_source: string;
  variations: string[];
  status: string;
  sub_status: string[];
  tags: string[];
  warranty: string;
  catalog_product_id: string;
  domain_id: string;
  parent_item_id: string | null;
  deal_ids: string[];
  automatic_relist: boolean;
  date_created: string;
  last_updated: string;
  health: number | null;
  catalog_listing: boolean;
}
