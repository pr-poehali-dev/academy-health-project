import { useState } from "react";
import Icon from "@/components/ui/icon";

const schools = [
  {
    icon: "Droplets",
    title: "Школа сахарного диабета",
    day: "Понедельник",
    time: "16:00 – 18:00",
    bg: "bg-blue-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    badge: "text-blue-700 bg-blue-100",
  },
  {
    icon: "Heart",
    title: "Школа здорового сердца",
    day: "Среда",
    time: "16:00 – 18:00",
    bg: "bg-rose-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-500",
    badge: "text-rose-700 bg-rose-100",
  },
  {
    icon: "Activity",
    title: "Школа здорового сустава",
    day: "Четверг",
    time: "16:00 – 18:00",
    bg: "bg-teal-50",
    border: "border-teal-200",
    iconBg: "bg-teal-100",
    iconColor: "text-teal-600",
    badge: "text-teal-700 bg-teal-100",
  },
  {
    icon: "Scale",
    title: "Школа коррекции веса",
    day: "Пятница",
    time: "13:00 – 15:00",
    bg: "bg-green-50",
    border: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    badge: "text-green-700 bg-green-100",
  },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("Главная");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string, label: string) => {
    setActiveSection(label);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-slate-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center">
              <Icon name="Heart" size={16} className="text-white" />
            </div>
            <span className="font-bold text-slate-800 text-sm sm:text-base" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Академия здоровья
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1">
            {[
              { label: "Главная", id: "hero" },
              { label: "Расписание", id: "schedule" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id, item.label)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.label
                    ? "bg-cyan-600 text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            className="sm:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="sm:hidden bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-1">
            {[
              { label: "Главная", id: "hero" },
              { label: "Расписание", id: "schedule" },
              { label: "Контакты", id: "contacts" },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.id, item.label)}
                className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center pt-16 overflow-hidden bg-[#0b2a38]"
      >
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-green-400/10 blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-600/5 blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-16">
          <div className="max-w-xl animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/25 rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">
                Онлайн-обучение · Бесплатно
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Академия<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
                здоровья
              </span>
            </h1>

            <p className="text-white/80 text-lg sm:text-xl leading-relaxed mb-8">
              Уникальный проект на базе Махневской районной больницы.
              Пройдите обучение по 4 направлениям и получите именной сертификат.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => scrollTo("schedule", "Расписание")}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold px-7 py-3.5 rounded-xl transition-all hover:scale-105 shadow-lg shadow-cyan-500/30"
              >
                <Icon name="Calendar" size={18} />
                Смотреть расписание
              </button>
              <button
                onClick={() => scrollTo("contacts", "Контакты")}
                className="flex items-center justify-center gap-2 bg-white/15 backdrop-blur hover:bg-white/25 border border-white/30 text-white font-semibold px-7 py-3.5 rounded-xl transition-all"
              >
                <Icon name="Phone" size={18} />
                Записаться
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3 animate-fade-in">
            {[
              { icon: "BookOpen", text: "4 школы здоровья" },
              { icon: "Award", text: "Именной сертификат" },
              { icon: "Wifi", text: "Онлайн формат" },
            ].map((s) => (
              <div
                key={s.text}
                className="flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-xl px-4 py-2"
              >
                <Icon name={s.icon as "BookOpen"} size={16} className="text-cyan-300" />
                <span className="text-white/90 text-sm font-medium">{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRIP */}
      <section className="bg-gradient-to-r from-cyan-600 to-teal-600 py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
            {[
              { icon: "Users", label: "Для всех пациентов", desc: "Бесплатно для желающих" },
              { icon: "Video", label: "Онлайн-занятия", desc: "Участвуйте из любого места" },
              { icon: "Award", label: "Именной сертификат", desc: "По итогам прохождения" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-1">
                  <Icon name={item.icon as "Users"} size={22} className="text-white" />
                </div>
                <div className="font-semibold text-base">{item.label}</div>
                <div className="text-cyan-100 text-sm">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-cyan-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Программа обучения
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Расписание школ
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              Выберите направление, которое вас интересует, и приходите на занятие
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {schools.map((school) => (
              <div
                key={school.title}
                className={`rounded-2xl border-2 ${school.border} ${school.bg} p-6 hover:shadow-lg transition-all hover:-translate-y-1 group`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl ${school.iconBg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    <Icon name={school.icon as "Heart"} size={26} className={school.iconColor} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-lg leading-tight mb-3">
                      {school.title}
                    </h3>
                    <div className="flex flex-col gap-1.5">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Icon name="CalendarDays" size={15} className="text-slate-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{school.day}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Icon name="Clock" size={15} className="text-slate-400 flex-shrink-0" />
                        <span className="text-sm font-medium">{school.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${school.badge}`}>
                  <Icon name="Wifi" size={12} />
                  Онлайн-формат
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl bg-gradient-to-r from-cyan-50 to-green-50 border border-cyan-200 p-6 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center flex-shrink-0">
              <Icon name="Award" size={30} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-slate-800 text-lg mb-1">
                Именной сертификат
              </div>
              <div className="text-slate-600 text-sm">
                По итогам прохождения каждой школы вы получите официальный именной сертификат, подтверждающий ваши знания.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <span className="inline-block text-green-600 font-semibold text-sm uppercase tracking-widest mb-3">
              Запись и адрес
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Контакты
            </h2>
            <p className="text-slate-500 text-lg">
              Для записи обратитесь к нам любым удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-5">
                <Icon name="MapPin" size={24} className="text-cyan-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">Адрес</h3>
              <p className="text-slate-600 leading-relaxed mb-2">
                Махневская районная больница
              </p>
              <p className="text-slate-800 font-semibold text-lg">
                70 лет Октября, 35
              </p>
              <p className="text-slate-500 text-sm mt-2 flex items-center gap-1.5">
                <Icon name="DoorOpen" size={14} />
                Вход в поликлинику
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-8 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center mb-5">
                <Icon name="Phone" size={24} className="text-green-600" />
              </div>
              <h3 className="font-bold text-slate-800 text-xl mb-3">Телефон</h3>
              <p className="text-slate-600 mb-3">Позвоните нам для записи:</p>
              <a
                href="tel:+73534635080"
                className="inline-flex items-center gap-2 text-2xl font-bold text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                <Icon name="Phone" size={22} />
                8-353-463-50-80
              </a>
              <p className="text-slate-400 text-sm mt-3">
                По вопросам записи и расписания
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-600 to-teal-600 p-8 text-white text-center">
            <h3 className="font-black text-2xl sm:text-3xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Готовы начать путь к здоровью?
            </h3>
            <p className="text-cyan-100 text-lg mb-6">
              Запишитесь на обучение в любую из четырёх школ — это бесплатно!
            </p>
            <a
              href="tel:+73534635080"
              className="inline-flex items-center gap-2 bg-white text-cyan-700 font-bold px-8 py-3.5 rounded-xl hover:bg-cyan-50 transition-colors shadow-lg"
            >
              <Icon name="Phone" size={18} />
              Позвонить и записаться
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 flex items-center justify-center">
              <Icon name="Heart" size={13} className="text-white" />
            </div>
            <span className="text-slate-300 font-semibold text-sm">
              Академия здоровья
            </span>
          </div>
          <div className="text-center text-sm">
            Махневская районная больница · 70 лет Октября, 35
          </div>
          <a
            href="tel:+73534635080"
            className="text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
          >
            8-353-463-50-80
          </a>
        </div>
      </footer>
    </div>
  );
}