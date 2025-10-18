import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const rabbits = [
  {
    name: "Калифорнийский",
    description: "Крупная мясная порода с характерным белым окрасом и чёрными отметинами. Вес взрослых особей достигает 4-5 кг.",
    traits: ["Быстрый рост", "Неприхотливость", "Высокая плодовитость"]
  },
  {
    name: "Новозеландский белый",
    description: "Мясная порода с густым белоснежным мехом. Отличается спокойным характером и отличным качеством мяса.",
    traits: ["Скороспелость", "Крепкое здоровье", "Адаптивность"]
  },
  {
    name: "Серый великан",
    description: "Одна из крупнейших пород. Вес взрослых кроликов достигает 5-7 кг. Ценится за качество меха и мяса.",
    traits: ["Большие размеры", "Выносливость", "Хороший мех"]
  },
  {
    name: "Фландр (Бельгийский великан)",
    description: "Гигантская порода родом из Бельгии. Вес может превышать 8 кг. Дружелюбный и спокойный характер.",
    traits: ["Гигантские размеры", "Спокойствие", "Долголетие"]
  }
];

const products = [
  { name: "Диетическое мясо кролика", price: "От 600 ₽/кг", icon: "Drumstick" },
  { name: "Племенной молодняк", price: "От 1500 ₽", icon: "Heart" },
  { name: "Органические удобрения", price: "Договорная", icon: "Leaf" }
];

const galleryImages = [
  "https://cdn.poehali.dev/projects/f5cfe4d4-9c93-4731-864c-0e55556afecb/files/fe946e7e-26e4-4ed7-b202-d68a4f7a20b0.jpg",
  "https://cdn.poehali.dev/projects/f5cfe4d4-9c93-4731-864c-0e55556afecb/files/b5663559-42d1-4b74-b34f-e76a814cec30.jpg",
  "https://cdn.poehali.dev/projects/f5cfe4d4-9c93-4731-864c-0e55556afecb/files/0025d360-d7ce-4039-8f9f-60382a70f457.jpg"
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-primary">Кроличья ферма</h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition-colors">О ферме</button>
            <button onClick={() => scrollToSection("rabbits")} className="hover:text-primary transition-colors">Породы</button>
            <button onClick={() => scrollToSection("products")} className="hover:text-primary transition-colors">Продукция</button>
            <button onClick={() => scrollToSection("tours")} className="hover:text-primary transition-colors">Экскурсии</button>
            <button onClick={() => scrollToSection("gallery")} className="hover:text-primary transition-colors">Галерея</button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition-colors">Контакты</button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold leading-tight">Кроличья ферма в сердце Тамбовского леса</h2>
              <p className="text-xl text-muted-foreground">8 гектаров естественной природы, где кролики растут в экологически чистых условиях</p>
              <div className="flex gap-4">
                <Button onClick={() => scrollToSection("contact")} size="lg" className="text-lg">
                  Связаться с нами
                </Button>
                <Button onClick={() => scrollToSection("tours")} variant="outline" size="lg" className="text-lg">
                  Записаться на экскурсию
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img 
                src={galleryImages[0]} 
                alt="Кролик на ферме"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">О нашей ферме</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Trees" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">8 гектаров леса</h3>
                <p className="text-muted-foreground">Наша ферма расположена в экологически чистой зоне Тамбовской области</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Heart" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Натуральное содержание</h3>
                <p className="text-muted-foreground">Кролики выращиваются в естественных условиях без химических добавок</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <Icon name="Award" size={48} className="mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Лучшие породы</h3>
                <p className="text-muted-foreground">Разводим только проверенные высокопродуктивные породы кроликов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rabbits" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Наши породы кроликов</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Мы специализируемся на разведении лучших мясных пород, которые отличаются высокой продуктивностью и адаптацией к местному климату
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {rabbits.map((rabbit, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-2xl font-semibold mb-3">{rabbit.name}</h3>
                  <p className="text-muted-foreground mb-4">{rabbit.description}</p>
                  <div className="space-y-2">
                    {rabbit.traits.map((trait, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        <span className="text-sm">{trait}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Наша продукция</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {products.map((product, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={product.icon as any} size={56} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-4 text-center">Экскурсии по ферме</h2>
          <p className="text-center text-muted-foreground mb-12">
            Приглашаем семьи с детьми, школьные группы и всех желающих познакомиться с жизнью кроличьей фермы
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="pt-6">
                <Icon name="Users" size={40} className="mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Семейная экскурсия</h3>
                <p className="text-muted-foreground mb-3">Продолжительность: 1,5 часа</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Знакомство с породами кроликов</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Кормление животных</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Прогулка по территории фермы</span>
                  </li>
                </ul>
                <p className="text-xl font-bold text-primary mt-4">500 ₽/чел</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Icon name="GraduationCap" size={40} className="mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">Образовательная программа</h3>
                <p className="text-muted-foreground mb-3">Продолжительность: 2 часа</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Лекция о кролиководстве</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Практическое занятие по уходу</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary mt-1" />
                    <span>Мастер-класс по содержанию</span>
                  </li>
                </ul>
                <p className="text-xl font-bold text-primary mt-4">300 ₽/чел (группа от 10 чел)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl text-center">
          <Icon name="Truck" size={56} className="mx-auto mb-6 text-primary" />
          <h2 className="text-4xl font-bold mb-4">Доставка</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Осуществляем доставку продукции по Тамбовской области и соседним регионам
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">По городу Тамбов</h3>
              <p className="text-muted-foreground">Бесплатно при заказе от 3000 ₽</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">По области</h3>
              <p className="text-muted-foreground">От 300 ₽ в зависимости от расстояния</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Самовывоз</h3>
              <p className="text-muted-foreground">Бесплатно с фермы ежедневно 9:00-18:00</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Галерея</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                <img 
                  src={img} 
                  alt={`Фото фермы ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Icon name="MapPin" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Адрес</h3>
                  <p className="text-muted-foreground">Тамбовская область, лесной массив, 8 гектаров</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Phone" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (XXX) XXX-XX-XX</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Mail" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@rabbit-farm.ru</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Icon name="Clock" size={24} className="text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Режим работы</h3>
                  <p className="text-muted-foreground">Ежедневно: 9:00 - 18:00</p>
                </div>
              </div>
            </div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Напишите нам</h3>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <Input 
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <Input 
                      placeholder="Телефон"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Ваше сообщение"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Кроличья ферма. Тамбовская область, 8 гектаров экологически чистой природы</p>
        </div>
      </footer>
    </div>
  );
}
