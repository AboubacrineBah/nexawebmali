export const SITE = {
  name: 'NexaWeb Mali',
  email: 'aboubacrinebah@nexawebmali.com',
  phone: '+223 82 89 09 92',
  whatsapp: '22382890992',
  address: 'Bamako, Mali',
};

export const whatsappLink = (message) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;