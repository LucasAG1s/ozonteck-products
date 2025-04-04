import { faker } from '@faker-js/faker';

// Função helper para gerar URLs de imagens consistentes
const generateProductImage = (id: number) => {
  return faker.image.urlLoremFlickr({ 
    category: 'product',
    width: 400,
    height: 600 
  });
};

export const capilarProducts = [
  {
    id: 1,
    name: "Shampoo Ozon Kesen",
    description: "Shampoo especial com ozônio para limpeza profunda",
    price: 159.90,
    inci_name : "TESTE 1234",
    image:  'asset/public/image/products/shampoo-ozon-kesen.png',
    pdf_link: 'https://www.bling.com.br/doc.view.php?id=47f8980c4a0613898ca8d7aa5f17b0bf',
    video_url: 'https://www.youtube.com/shorts/SGJN5zkP8Ro',
    composition: "Óleo de Coco, Ácido Hialurônico, Ácido Cítrico, Ácido Hialurônico, Ácido Cítrico",
    process_number: "21BGH-2356/001", 
    category: "Capilar Ozonizada",
    rating: 5
  },
  {
    id: 2,
    name: "Condicionador Zero",
    description: "Condicionador com tecnologia ozonizada para hidratação intensa",
    price: 149.90,
    inci_name : "Ozon",
    pdf_link: 'https://www.bling.com.br/doc.view.php?id=47f8980c4a0613898ca8d7aa5f17b0bf',
    video_url: 'https://www.youtube.com/shorts/SGJN5zkP8Ro',
    image: generateProductImage(2),
    category: "Capilar Ozonizada",
    stock: 12
  },
  {
    id: 3,
    name: "Máscara Zero Repair",
    description: "Máscara de tratamento profundo para recuperação capilar",
    price: 179.90,
    inci_name : "Ozon",
    pdf_link: 'https://www.bling.com.br/doc.view.php?id=47f8980c4a0613898ca8d7aa5f17b0bf',
    video_url: 'https://www.youtube.com/shorts/SGJN5zkP8Ro',
    image: generateProductImage(3),
    category: "Capilar Ozonizada",
    stock: 10
  },
  {
    id: 4,
    name: "Leave-in Zero",
    description: "Leave-in sem enxágue para proteção e hidratação diária",
    price: 129.90,
    inci_name : "Ozon",
    pdf_link: 'https://www.bling.com.br/doc.view.php?id=47f8980c4a0613898ca8d7aa5f17b0bf',
    video_url: 'https://www.youtube.com/shorts/SGJN5zkP8Ro',
    image: generateProductImage(1),
    composition: "Óleo de Coco, Ácido Hialurônico, Ácido Cítrico, Ácido Hialurônico, Ácido Cítrico",
    process_number: "21BGH-2356/001", 
    category: "Capilar Ozonizada",
    stock: 20
  },
  {
    id: 5,
    name: "Óleo Capilar Zero",
    description: "Óleo finalizador para brilho e maciez dos fios",
    price: 89.90,
    inci_name : "Ozon",
    pdf_link: 'https://www.bling.com.br/doc.view.php?id=47f8980c4a0613898ca8d7aa5f17b0bf',
    video_url: 'https://www.youtube.com/shorts/SGJN5zkP8Ro',
    image: generateProductImage(5),
    category: "Capilar Ozonizada",
    stock: 25
  },
  {
    id: 6,
    name: "Ampola Zero Repair",
    description: "Tratamento intensivo em ampolas para recuperação imediata",
    price: 99.90,
    inci_name : "Ozon",
    pdf_link: 'https://www.bling.com.br/doc.view.php?id=47f8980c4a0613898ca8d7aa5f17b0bf',
    video_url: 'https://www.youtube.com/shorts/SGJN5zkP8Ro',
    image: generateProductImage(6),
    category: "Capilar Ozonizada",
    stock: 30
  },
  {
    id: 7,
    name: "Sérum Zero Growth",
    description: "Sérum estimulante para crescimento capilar",
    price: 139.90,
    inci_name : "Ozon",
    pdf_link: 'https://www.bling.com.br/doc.view.php?id=47f8980c4a0613898ca8d7aa5f17b0bf',
    video_url: 'https://www.youtube.com/shorts/SGJN5zkP8Ro',
    image: generateProductImage(2),
    category: "Capilar Ozonizada",
    stock: 18
  },
  {
    id: 8,
    name: "Tônico Zero Fresh",
    description: "Tônico refrescante para couro cabeludo",
    price: 119.90,
    inci_name : "Ozon",
    pdf_link: 'https://www.bling.com.br/doc.view.php?id=47f8980c4a0613898ca8d7aa5f17b0bf',
    video_url: 'https://www.youtube.com/shorts/SGJN5zkP8Ro',
    image: generateProductImage(2),
    category: "Capilar Ozonizada",
    stock: 22
  },
  {
    id: 9,
    name: "Spray Térmico Zero",
    description: "Protetor térmico com tecnologia ozonizada",
    price: 109.90,
    inci_name : "Ozon",
    pdf_link: 'https://www.bling.com.br/doc.view.php?id=47f8980c4a0613898ca8d7aa5f17b0bf',
    video_url: 'https://www.youtube.com/shorts/SGJN5zkP8Ro',
    image: generateProductImage(2),
    category: "Capilar Ozonizada",
    stock: 28
  },
  {
    id: 10,
    name: "Kit Zero Complete",
    description: "Kit completo para tratamento capilar ozonizado",
    price: 499.90,
    image: "/images/produtos-capilar/kit-zero.jpg",
    category: "Capilar Ozonizada",
    stock: 8
  }
];

export const nutraceuticosProducts = [
  {
    id: 1,
    name: "Ômega 3 Plus",
    description: "Suplemento de ômega 3 com alta concentração",
    price: 89.90,
    image: "/images/produtos-nutraceuticos/omega3.jpg",
    category: "Nutracêuticos",
    stock: 20
  },
  {
    id: 2,
    name: "Vitamina D3",
    description: "Suplemento de vitamina D3 para saúde óssea",
    price: 69.90,
    image: "/images/produtos-nutraceuticos/vitamina-d3.jpg",
    category: "Nutracêuticos",
    stock: 25
  },
  {
    id: 3,
    name: "Colágeno Hidrolisado",
    description: "Colágeno para pele, cabelos e articulações",
    price: 119.90,
    image: "/images/produtos-nutraceuticos/colageno.jpg",
    category: "Nutracêuticos",
    stock: 15
  },
  {
    id: 4,
    name: "Magnésio Quelato",
    description: "Suplemento de magnésio de alta absorção",
    price: 79.90,
    image: "/images/produtos-nutraceuticos/magnesio.jpg",
    category: "Nutracêuticos",
    stock: 30
  },
  {
    id: 5,
    name: "Complexo B",
    description: "Vitaminas do complexo B para energia",
    price: 59.90,
    image: "/images/produtos-nutraceuticos/complexo-b.jpg",
    category: "Nutracêuticos",
    stock: 28
  },
  {
    id: 6,
    name: "Zinco Quelato",
    description: "Suplemento de zinco para imunidade",
    price: 49.90,
    image: "/images/produtos-nutraceuticos/zinco.jpg",
    category: "Nutracêuticos",
    stock: 35
  },
  {
    id: 7,
    name: "Multivitamínico",
    description: "Complexo multivitamínico completo",
    price: 99.90,
    image: "/images/produtos-nutraceuticos/multivitaminico.jpg",
    category: "Nutracêuticos",
    stock: 22
  },
  {
    id: 8,
    name: "Probiótico Plus",
    description: "Suplemento probiótico para saúde intestinal",
    price: 129.90,
    image: "/images/produtos-nutraceuticos/probiotico.jpg",
    category: "Nutracêuticos",
    stock: 18
  },
  {
    id: 9,
    name: "Vitamina C",
    description: "Suplemento de vitamina C com zinco",
    price: 69.90,
    image: "/images/produtos-nutraceuticos/vitamina-c.jpg",
    category: "Nutracêuticos",
    stock: 40
  },
  {
    id: 10,
    name: "Kit Imunidade",
    description: "Kit completo para fortalecimento da imunidade",
    price: 299.90,
    image: "/images/produtos-nutraceuticos/kit-imunidade.jpg",
    category: "Nutracêuticos",
    stock: 10
  }
];

export const bemEstarProducts = [
  {
    id: 1,
    name: "Óleo Essencial Relaxante",
    description: "Blend de óleos essenciais para relaxamento",
    price: 129.90,
    image: "/images/produtos-bem-estar/oleo-relaxante.jpg",
    category: "Bem Estar",
    stock: 18
  },
  {
    id: 2,
    name: "Difusor de Aromas",
    description: "Difusor ultrassônico para óleos essenciais",
    price: 199.90,
    image: "/images/produtos-bem-estar/difusor.jpg",
    category: "Bem Estar",
    stock: 12
  },
  {
    id: 3,
    name: "Vela Aromática",
    description: "Vela aromática para ambiente relaxante",
    price: 89.90,
    image: "/images/produtos-bem-estar/vela.jpg",
    category: "Bem Estar",
    stock: 25
  },
  {
    id: 4,
    name: "Spray Ambiente",
    description: "Spray aromatizador para ambientes",
    price: 79.90,
    image: "/images/produtos-bem-estar/spray.jpg",
    category: "Bem Estar",
    stock: 30
  },
  {
    id: 5,
    name: "Óleo de Massagem",
    description: "Óleo para massagem relaxante",
    price: 109.90,
    image: "/images/produtos-bem-estar/oleo-massagem.jpg",
    category: "Bem Estar",
    stock: 20
  },
  {
    id: 6,
    name: "Sachê Aromático",
    description: "Sachê perfumado para gavetas e armários",
    price: 49.90,
    image: "/images/produtos-bem-estar/sache.jpg",
    category: "Bem Estar",
    stock: 40
  },
  {
    id: 7,
    name: "Kit Aromaterapia",
    description: "Kit completo para aromaterapia",
    price: 299.90,
    image: "/images/produtos-bem-estar/kit-aromaterapia.jpg",
    category: "Bem Estar",
    stock: 10
  },
  {
    id: 8,
    name: "Almofada Térmica",
    description: "Almofada térmica aromática",
    price: 159.90,
    image: "/images/produtos-bem-estar/almofada.jpg",
    category: "Bem Estar",
    stock: 15
  },
  {
    id: 9,
    name: "Incenso Natural",
    description: "Incenso artesanal de ingredientes naturais",
    price: 39.90,
    image: "/images/produtos-bem-estar/incenso.jpg",
    category: "Bem Estar",
    stock: 50
  },
  {
    id: 10,
    name: "Máscara Relaxante",
    description: "Máscara facial relaxante com aromaterapia",
    price: 69.90,
    image: "/images/produtos-bem-estar/mascara.jpg",
    category: "Bem Estar",
    stock: 22
  }
];

export const acessorios =[
  {
    id: 1,
    name: "Kit de Acessórios",
    description: "Kit completo de acessórios para tratamentos capilares",
  }
  {
    id: 2,
    name: "Kit de Acessórios",
    description: "Kit completo de acessórios para tratamentos capilares",
  }
];

export const fragrancias = [
  {
    id: 1,
    name: "Kit de Acessórios",
    description: "Kit completo de acessórios para tratamentos capilares",
  }
  {
    id: 2,
    name: "Kit de Acessórios",
    description: "Kit completo de acessórios para tratamentos capilares",
  }
];